import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import {
  ArrowUpRight,
  Award,
  Bot,
  CheckCircle2,
  Cloud,
  Database,
  Github,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const credlyUrl = "https://www.credly.com/users/sanni-mafouz";
const portfolioUrl = "https://mafouz123.github.io/Portefolio/";

const credentials = [
  {
    title: "Deploying and Evaluating GenAI Apps with MongoDB",
    issuer: "MongoDB",
    date: "26 septembre 2026",
    icon: Bot,
  },
  {
    title: "Building AI Agents with MongoDB",
    issuer: "MongoDB",
    date: "22 septembre 2026",
    icon: Workflow,
  },
  {
    title: "Building AI-Powered Search with MongoDB Vector Search",
    issuer: "MongoDB",
    date: "20 septembre 2026",
    icon: Search,
  },
  {
    title: "Building RAG Apps Using MongoDB",
    issuer: "MongoDB",
    date: "16 septembre 2026",
    icon: Database,
  },
  {
    title: "AWS SimuLearn - AI Architect - Training Badge",
    issuer: "Amazon Web Services Training and Certification",
    date: "29 août 2026",
    icon: Cloud,
  },
];

const focusAreas = [
  {
    icon: Sparkles,
    title: "Applications d’IA générative",
    detail: "Conception, évaluation et déploiement d’applications GenAI.",
  },
  {
    icon: Workflow,
    title: "Agents IA et RAG",
    detail: "Création d’agents et d’applications fondées sur la recherche augmentée.",
  },
  {
    icon: Database,
    title: "MongoDB et recherche vectorielle",
    detail: "Recherche sémantique et applications IA avec MongoDB Vector Search.",
  },
  {
    icon: Cloud,
    title: "Architecture IA sur AWS",
    detail: "Parcours AWS SimuLearn dédié à l’architecture IA.",
  },
];

function updateMeta(selector: string, attribute: string, value: string, tagName: string) {
  let element = document.head.querySelector<HTMLElement>(selector);
  const created = !element;

  if (!element) {
    element = document.createElement(tagName);
    if (tagName === "meta" && selector.includes('property="')) {
      element.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] ?? "");
    } else if (tagName === "meta") {
      element.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] ?? "");
    } else if (tagName === "link") {
      element.setAttribute("rel", "canonical");
    }
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

export default function About() {
  useEffect(() => {
    const previousTitle = document.title;
    const canonicalUrl = `${window.location.origin}/about`;
    document.title = "Mafouzou SANNI ALIDOU — Ingénieur systèmes & IA générative";

    const cleanups = [
      updateMeta(
        'meta[name="description"]',
        "content",
        "Découvrez le profil Credly de Mafouzou SANNI ALIDOU : badges MongoDB en IA générative, agents IA, RAG, recherche vectorielle et formation AWS AI Architect.",
        "meta",
      ),
      updateMeta('meta[property="og:title"]', "content", document.title, "meta"),
      updateMeta(
        'meta[property="og:description"]',
        "content",
        "Ingénieur systèmes orienté IA générative, avec des badges Credly MongoDB et AWS.",
        "meta",
      ),
      updateMeta('meta[property="og:url"]', "content", canonicalUrl, "meta"),
      updateMeta('link[rel="canonical"]', "href", canonicalUrl, "link"),
    ];

    const personSchema = document.createElement("script");
    personSchema.type = "application/ld+json";
    personSchema.dataset.profileSchema = "about";
    personSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mafouzou SANNI ALIDOU",
      jobTitle: "Ingénieur systèmes · IA générative",
      description:
        "Profil spécialisé en applications d’IA générative, agents IA, RAG, MongoDB et architecture IA sur AWS.",
      sameAs: [credlyUrl, portfolioUrl],
    });
    document.head.appendChild(personSchema);

    return () => {
      document.title = previousTitle;
      cleanups.forEach((cleanup) => cleanup());
      personSchema.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-primary/10">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="container relative mx-auto px-4 py-20 md:px-6 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mx-auto max-w-5xl"
            >
              <Badge className="mb-6 rounded-full border-0 bg-primary/10 px-4 py-1.5 text-primary hover:bg-primary/10">
                Profil professionnel · Badges Credly
              </Badge>
              <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Mafouzou SANNI ALIDOU
                  </p>
                  <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                    Ingénieur systèmes
                    <span className="block text-primary">· IA générative</span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    Je développe mes compétences dans la conception d’applications
                    d’IA générative, d’agents IA et de solutions RAG. Mon parcours
                    Credly met en avant des badges MongoDB ainsi qu’une formation
                    AWS en architecture IA.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 font-semibold text-primary-foreground shadow-sm transition hover:brightness-95"
                    >
                      <Award className="h-5 w-5" />
                      Voir mes badges Credly
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 font-semibold transition hover:border-primary/40 hover:text-primary"
                    >
                      <Github className="h-5 w-5" />
                      Voir le portfolio
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2rem] border border-primary/15 bg-background/80 text-primary shadow-xl shadow-primary/5 md:h-48 md:w-48">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 md:h-32 md:w-32">
                    <Bot className="h-12 w-12 md:h-16 md:w-16" strokeWidth={1.35} />
                    <span className="absolute -bottom-1 -right-2 rounded-full border-4 border-background bg-primary p-2 text-primary-foreground">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-2" aria-label="Domaines du profil">
                {["IA générative", "MongoDB", "RAG", "Agents IA", "AWS"].map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-full px-3 py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Compétences documentées
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Des bases IA aux applications concrètes
              </h2>
              <p className="mt-4 text-muted-foreground">
                Les domaines ci-dessous sont représentés par les badges visibles
                sur mon profil Credly.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
              {focusAreas.map(({ icon: Icon, title, detail }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="h-full border-primary/10 transition hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex gap-4 p-6">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-bold">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {detail}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Parcours Credly
                  </p>
                  <h2 className="text-3xl font-bold md:text-4xl">Badges obtenus</h2>
                </div>
                <a
                  href={credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  Vérifier sur Credly <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {credentials.map(({ title, issuer, date, icon: Icon }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full bg-background">
                      <CardContent className="flex gap-4 p-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-semibold leading-snug">{title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{issuer}</p>
                          <p className="mt-1 text-xs font-medium text-primary">
                            Délivré le {date}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Les badges et leurs détails sont consultables sur le profil Credly
                public.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-3xl border border-primary/10 bg-primary/5 p-7 md:flex-row md:items-center md:p-10">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Explorer mes projets
                </h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  Retrouvez mon portfolio et mes travaux dans le dépôt GitHub.
                </p>
              </div>
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-foreground px-5 font-semibold text-background transition hover:opacity-90"
              >
                <Github className="h-5 w-5" />
                Ouvrir le portfolio
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}