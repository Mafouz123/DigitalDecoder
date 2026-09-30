import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Clock,
  Database,
  ExternalLink,
  FileText,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { usePageMetadata } from "@/lib/use-page-metadata";
import articleHero from "@assets/generated_images/ai_brain_concept_for_article_thumbnail.png";

const projectUrl = "https://github.com/Mafouz123/rag_mongodb_app";
const tutorialPath = "/tutorials/rag-mongodb-guide";
const articleTitle =
  "Un PDF, une question, une réponse : les coulisses d’un assistant RAG avec MongoDB";
const articleDescription =
  "Découvrez comment un assistant documentaire RAG transforme un PDF en réponses contextualisées avec MongoDB Atlas, Voyage AI, Groq et LangChain.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: articleTitle,
  description: articleDescription,
  datePublished: "2026-09-30",
  dateModified: "2026-09-30",
  author: { "@type": "Person", name: "Mafouzou SANNI ALIDOU" },
  publisher: { "@type": "Organization", name: "Décoder le digital" },
  keywords: [
    "RAG",
    "MongoDB Atlas",
    "assistant PDF",
    "Voyage AI",
    "Groq",
    "recherche vectorielle",
  ],
};

const pipeline = [
  {
    number: "01",
    title: "Extraire",
    detail: "PyPDFLoader lit les pages du PDF d’exemple.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Découper",
    detail: "LangChain prépare des passages de 500 caractères avec chevauchement.",
    icon: Search,
  },
  {
    number: "03",
    title: "Vectoriser",
    detail: "Voyage AI représente les passages sous forme de vecteurs.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Rechercher & répondre",
    detail: "MongoDB récupère les passages proches, puis Groq rédige une réponse.",
    icon: Database,
  },
];

export default function RagMongoDBArticle() {
  usePageMetadata({
    title: `${articleTitle} | Décoder le digital`,
    description: articleDescription,
    canonicalPath: "/articles/rag-mongodb-assistant",
    ogType: "article",
    structuredData: articleSchema,
  });

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <main className="pb-20">
        <section className="relative min-h-[470px] overflow-hidden bg-slate-950">
          <img
            src={articleHero}
            alt="Illustration d’un assistant d’intelligence artificielle"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25" />
          <div className="container relative mx-auto flex min-h-[470px] items-end px-4 py-12 md:px-6 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="mb-5 flex flex-wrap gap-2">
                <Badge className="border-0 bg-primary px-3 py-1 text-white hover:bg-primary">
                  IA générative
                </Badge>
                <Badge variant="outline" className="border-white/40 bg-white/10 text-white">
                  RAG · MongoDB
                </Badge>
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                Un PDF, une question, une réponse :
                <span className="mt-2 block text-primary-foreground">
                  les coulisses d’un assistant RAG avec MongoDB
                </span>
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
                Un assistant utile ne demande pas à un modèle de « tout savoir ».
                Il retrouve d’abord les bons passages, puis construit sa réponse
                autour d’eux.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/80">
                <span className="inline-flex items-center gap-2">
                  <User className="h-4 w-4" /> Mafouzou SANNI ALIDOU
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" /> 8 min de lecture
                </span>
                <span>30 septembre 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-8">
              <section className="prose prose-lg max-w-none dark:prose-invert">
                <div className="rounded-r-2xl border-l-4 border-primary bg-primary/5 p-6">
                  <p className="m-0 text-xl font-semibold leading-relaxed">
                    La différence entre un chatbot généraliste et un assistant
                    documentaire tient souvent à une étape invisible : retrouver,
                    au bon moment, le bon extrait du document.
                  </p>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Le dépôt{" "}
                  <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                    rag_mongodb_app
                  </a>{" "}
                  met cette idée en pratique : on charge un PDF, on indexe son
                  contenu dans MongoDB Atlas, puis on pose des questions en langage
                  naturel. C’est un exemple concret de{" "}
                  <strong>RAG</strong> — <em>Retrieval-Augmented Generation</em>, ou
                  génération augmentée par récupération.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Ce n’est pas un entraînement du modèle sur le PDF. Le système
                  recherche plutôt des passages pertinents et les transmet au
                  modèle au moment de la question. Le modèle répond donc avec un
                  contexte ciblé, au lieu de s’appuyer uniquement sur ses
                  connaissances générales.
                </p>
              </section>

              <section className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    La chaîne de traitement
                  </p>
                  <h2 className="mt-2 text-3xl font-bold">
                    Du document à la réponse, étape par étape
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {pipeline.map(({ number, title, detail, icon: Icon }) => (
                    <Card key={number} className="h-full border-primary/10">
                      <CardContent className="flex gap-4 p-5">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <p className="text-xs font-bold tracking-widest text-primary">
                            ÉTAPE {number}
                          </p>
                          <h3 className="mt-1 font-bold">{title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {detail}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="space-y-5">
                <h2 className="text-3xl font-bold">
                  Ce qui se passe dans le dépôt
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Dans <code>load_data.py</code>, le PDF est lu avec
                  PyPDFLoader. Les pages très courtes — vingt mots ou moins —
                  sont écartées, puis un modèle Groq ajoute aux pages des
                  métadonnées définies par le projet : un titre, des mots-clés et
                  un indicateur de code.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Le texte est ensuite segmenté en morceaux de{" "}
                  <strong>500 caractères</strong>, avec{" "}
                  <strong>150 caractères de chevauchement</strong>. Le
                  chevauchement aide à conserver le fil quand une idée commence
                  dans un morceau et se termine dans le suivant. Chaque morceau
                  est encodé avec <code>voyage-3-large</code> et stocké dans la
                  collection MongoDB Atlas{" "}
                  <code>book_mongodb_chunks.chunked_data</code>.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  À la question, <code>rag.py</code> demande les{" "}
                  <strong>trois passages les plus proches</strong> à l’index
                  vectoriel <code>vector_index</code>. Ces extraits et la question
                  sont transmis à Groq avec une consigne de ne pas inventer une
                  réponse quand le contexte ne suffit pas.
                </p>
                <div className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm text-slate-100">
                  <pre>
                    <code>{`Question
  → embedding de la question
  → recherche vectorielle MongoDB (top 3)
  → contexte + question envoyés à Groq
  → réponse générée à partir des extraits`}</code>
                  </pre>
                </div>
              </section>

              <section className="space-y-5">
                <h2 className="text-3xl font-bold">
                  Pourquoi ce montage intéresse les passionnés
                </h2>
                <div className="space-y-4">
                  <div className="rounded-2xl border bg-card p-5">
                    <h3 className="font-bold">La connaissance reste actualisable</h3>
                    <p className="mt-2 text-muted-foreground">
                      Pour changer la documentation, on réindexe les passages au
                      lieu de réentraîner un modèle. Le modèle et la base de
                      connaissances gardent des rôles distincts.
                    </p>
                  </div>
                  <div className="rounded-2xl border bg-card p-5">
                    <h3 className="font-bold">Les embeddings relient les idées</h3>
                    <p className="mt-2 text-muted-foreground">
                      Une recherche vectorielle rapproche des passages par
                      similarité sémantique, pas seulement parce qu’ils
                      contiennent exactement les mêmes mots que la question.
                    </p>
                  </div>
                  <div className="rounded-2xl border bg-card p-5">
                    <h3 className="font-bold">Le découpage est un vrai choix produit</h3>
                    <p className="mt-2 text-muted-foreground">
                      Des morceaux trop courts perdent le contexte; des morceaux
                      trop longs ramènent du bruit et consomment davantage de
                      contexte. Les valeurs 500/150 du dépôt sont un point de
                      départ à mesurer, pas une règle universelle.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-5">
                <div className="flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <h2 className="text-xl font-bold">Ce que la démo ne promet pas</h2>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                      <li>
                        Le RAG réduit le risque d’une réponse hors sujet; il ne
                        garantit pas une réponse exacte.
                      </li>
                      <li>
                        Cette interface ne présente pas les références des
                        passages utilisés : il faut vérifier la réponse dans le
                        PDF.
                      </li>
                      <li>
                        Le texte extrait transite par Groq pour les métadonnées
                        et par Voyage AI pour les embeddings. Évitez les
                        documents sensibles sans validation des règles de
                        confidentialité applicables.
                      </li>
                      <li>
                        Les appels API peuvent être facturés. Relancer
                        l’indexation sur la même collection sans la nettoyer
                        peut également créer des doublons.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl bg-primary/5 p-7 md:p-9">
                <Badge className="mb-4 border-0 bg-primary/10 text-primary hover:bg-primary/10">
                  Pour passer à la pratique
                </Badge>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Montez votre assistant PDF, de l’environnement virtuel à la première question.
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Le tutoriel associé détaille les commandes, les clés d’environnement,
                  l’index vectoriel Atlas et les vérifications courantes.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={tutorialPath}>
                    <span className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground">
                      Lire le tutoriel <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold hover:border-primary/40 hover:text-primary"
                  >
                    Ouvrir le dépôt <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      La stack du projet
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    {[
                      ["Interface", "Streamlit"],
                      ["Orchestration", "LangChain"],
                      ["Base vectorielle", "MongoDB Atlas"],
                      ["Embeddings", "Voyage AI · voyage-3-large"],
                      ["Métadonnées & réponses", "Groq"],
                      ["Source", "PDF"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-3">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="text-right font-medium">{value}</span>
                      </div>
                    ))}
                    <Separator />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Un projet pédagogique public. Vérifiez les versions et
                      paramètres dans le dépôt avant de lancer vos propres
                      appels API.
                    </p>
                  </CardContent>
                </Card>
                <Link href={tutorialPath}>
                  <span className="flex cursor-pointer items-center justify-between rounded-2xl border bg-background p-5 font-semibold transition hover:border-primary/40 hover:text-primary">
                    Apprendre à le construire
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link href="/articles/deepseek-designers">
                  <span className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
                    <ArrowLeft className="h-4 w-4" />
                    Lire aussi : IA et outils créatifs
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}