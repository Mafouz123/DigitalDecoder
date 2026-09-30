import { useEffect } from "react";

type HeadEntry = {
  selector: string;
  tagName: "meta" | "link";
  keyAttribute: "name" | "property" | "rel";
  keyValue: string;
  attribute: "content" | "href";
  value: string;
};

type PageMetadata = {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "article" | "website";
  structuredData?: Record<string, unknown>;
};

function setHeadEntry({ selector, tagName, keyAttribute, keyValue, attribute, value }: HeadEntry) {
  let element = document.head.querySelector<HTMLElement>(selector);
  const created = !element;

  if (!element) {
    element = document.createElement(tagName);
    element.setAttribute(keyAttribute, keyValue);
    document.head.appendChild(element);
  }

  const previousValue = element.getAttribute(attribute);
  element.setAttribute(attribute, value);

  return () => {
    if (created) element?.remove();
    else if (previousValue === null) element?.removeAttribute(attribute);
    else element?.setAttribute(attribute, previousValue);
  };
}

export function usePageMetadata({
  title,
  description,
  canonicalPath,
  ogType = "article",
  structuredData,
}: PageMetadata) {
  const schemaJson = structuredData ? JSON.stringify(structuredData) : "";

  useEffect(() => {
    const previousTitle = document.title;
    const canonicalUrl = `${window.location.origin}${canonicalPath}`;
    document.title = title;

    const entries: HeadEntry[] = [
      {
        selector: 'meta[name="description"]',
        tagName: "meta",
        keyAttribute: "name",
        keyValue: "description",
        attribute: "content",
        value: description,
      },
      {
        selector: 'meta[property="og:title"]',
        tagName: "meta",
        keyAttribute: "property",
        keyValue: "og:title",
        attribute: "content",
        value: title,
      },
      {
        selector: 'meta[property="og:description"]',
        tagName: "meta",
        keyAttribute: "property",
        keyValue: "og:description",
        attribute: "content",
        value: description,
      },
      {
        selector: 'meta[property="og:type"]',
        tagName: "meta",
        keyAttribute: "property",
        keyValue: "og:type",
        attribute: "content",
        value: ogType,
      },
      {
        selector: 'meta[property="og:url"]',
        tagName: "meta",
        keyAttribute: "property",
        keyValue: "og:url",
        attribute: "content",
        value: canonicalUrl,
      },
      {
        selector: 'meta[name="twitter:title"]',
        tagName: "meta",
        keyAttribute: "name",
        keyValue: "twitter:title",
        attribute: "content",
        value: title,
      },
      {
        selector: 'meta[name="twitter:description"]',
        tagName: "meta",
        keyAttribute: "name",
        keyValue: "twitter:description",
        attribute: "content",
        value: description,
      },
      {
        selector: 'link[rel="canonical"]',
        tagName: "link",
        keyAttribute: "rel",
        keyValue: "canonical",
        attribute: "href",
        value: canonicalUrl,
      },
    ];

    const cleanups = entries.map(setHeadEntry);
    let schemaElement: HTMLScriptElement | undefined;

    if (schemaJson) {
      schemaElement = document.createElement("script");
      schemaElement.type = "application/ld+json";
      schemaElement.dataset.pageMetadata = "structured-data";
      schemaElement.textContent = schemaJson;
      document.head.appendChild(schemaElement);
    }

    return () => {
      document.title = previousTitle;
      cleanups.forEach((cleanup) => cleanup());
      schemaElement?.remove();
    };
  }, [title, description, canonicalPath, ogType, schemaJson]);
}