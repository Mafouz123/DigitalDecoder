import { motion } from "framer-motion";
import { Link } from "wouter";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  Clock,
  Code2,
  Database,
  ExternalLink,
  FileText,
  KeyRound,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  User,
  Workflow,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { usePageMetadata } from "@/lib/use-page-metadata";
import tutorialHero from "@assets/generated_images/ai_brain_concept_for_article_thumbnail.png";

const projectUrl = "https://github.com/Mafouz123/rag_mongodb_app";
const articlePath = "/articles/rag-mongodb-assistant";
const tutorialTitle =
  "Créer un assistant PDF RAG avec MongoDB Atlas, Voyage AI et Groq";
const tutorialDescription =
  "Tutoriel pas à pas pour lancer rag_mongodb_app : environnement Python, clés API, ingestion PDF, index Vector Search Atlas, tests et dépannage débutant.";

const tutorialSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: tutorialTitle,
  description: tutorialDescription,
  datePublished: "2026-09-30",
  totalTime: "PT30M",
  step: [
    { "@type": "HowToStep", name: "Cloner le projet et installer ses dépendances" },
    { "@type": "HowToStep", name: "Configurer les variables d’environnement" },
    { "@type": "HowToStep", name: "Indexer le PDF dans MongoDB Atlas" },
    { "@type": "HowToStep", name: "Créer l’index Vector Search" },
    { "@type": "HowToStep", name: "Tester les questions en ligne de commande et dans Streamlit" },
  ],
};

const difficulties = [
  {
    icon: Terminal,
    title: "« ModuleNotFoundError » dès le lancement",
    cause: "Les dépendances ont été installées hors de l’environnement virtuel, ou celui-ci n’est pas activé.",
    solution:
      "Réactivez .venv dans le terminal courant, puis relancez python -m pip install -r requirements.txt. Vérifiez que python et pip pointent vers le même environnement.",
  },
  {
    icon: KeyRound,
    title: "« No module named key_param » ou variable absente",
    cause:
      "Le dépôt contient key_param.example.py, alors que les scripts importent key_param. Les clés d’environnement ne sont pas non plus créées par magie.",
    solution:
      "Copiez key_param.example.py vers key_param.py, puis définissez MONGODB_URI, VOYAGE_API_KEY et GROQ_API_KEY dans le terminal où vous lancez le projet. Ne commitez jamais le fichier créé s’il contient des valeurs sensibles.",
  },
  {
    icon: Database,
    title: "MongoDB refuse la connexion",
    cause:
      "L’IP de développement n’est pas autorisée dans Atlas, l’utilisateur de base de données est incorrect ou le mot de passe contient des caractères non encodés dans l’URI.",
    solution:
      "Vérifiez Network Access, Database Access et l’URI du driver. Encodez les caractères spéciaux du mot de passe pour une URI. En développement, autorisez seulement votre IP plutôt que 0.0.0.0/0.",
  },
  {
    icon: Search,
    title: "« index not found » ou erreur Vector Search",
    cause:
      "L’index n’existe pas encore, n’est pas actif, ou son nom, son champ et sa dimension ne correspondent pas à l’application.",
    solution:
      "Créez dans la collection chunked_data un index nommé vector_index, sur embedding, avec 1024 dimensions et la similarité cosine. Attendez le statut Active avant de lancer rag.py.",
  },
  {
    icon: FileText,
    title: "Le PDF semble vide ou des passages manquent",
    cause:
      "Le chemin du fichier peut être erroné. Le script ignore aussi les pages de vingt mots ou moins; PyPDFLoader ne réalise pas l’OCR d’un PDF scanné comme une image.",
    solution:
      "Vérifiez le fichier dans fichiers_exemples/documentation_stack_project.pdf et testez d’abord un PDF contenant du texte sélectionnable. Pour un scan, ajoutez une étape OCR avant le découpage.",
  },
  {
    icon: Sparkles,
    title: "La réponse est vague ou hors sujet",
    cause:
      "La question ne correspond pas aux extraits récupérés, le document contient peu de contexte, ou top-k=3 ne ramène pas le bon passage.",
    solution:
      "Testez une question plus précise, confirmez que le PDF a été indexé et comparez les passages renvoyés. Ajustez search_kwargs.k progressivement. Les valeurs chunk_size=500 et chunk_overlap=150 sont des réglages initiaux à évaluer.",
  },
  {
    icon: CircleHelp,
    title: "Impossible de vérifier d’où vient la réponse",
    cause:
      "L’application affiche le texte généré mais ne retourne pas les documents sources à Streamlit; elle ne fournit donc pas encore de citations visibles.",
    solution:
      "Pour apprendre, comparez manuellement la réponse aux pages du PDF. Une amélioration consiste à récupérer et afficher les documents sources avec leurs métadonnées à côté de la réponse.",
  },
  {
    icon: AlertTriangle,
    title: "Les appels API échouent ou coûtent plus que prévu",
    cause:
      "Les fournisseurs peuvent imposer des quotas et facturer l’enrichissement, les embeddings ou la génération. Réindexer en boucle envoie de nouveau des données.",
    solution:
      "Contrôlez les quotas et coûts dans les tableaux de bord Groq et Voyage AI. Ne relancez pas load_data.py sans stratégie de nettoyage : le script ajoute des documents à la collection et ne la vide pas.",
  },
];

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm leading-relaxed text-slate-100">
      <code>{children}</code>
    </pre>
  );
}

function Step({
  number,
  title,
  icon: Icon,
  children,
}: {
  number: string;
  title: string;
  icon: typeof Code2;
  children: ReactNode;
}) {
  return (
    <section id={`etape-${number}`} className="scroll-mt-24 space-y-5">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground">
          {number}
        </span>
        <div>
          <div className="mb-1 flex items-center gap-2 text-primary">
            <Icon className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Étape {number}</span>
          </div>
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        </div>
      </div>
      <div className="space-y-4 pl-0 text-muted-foreground md:pl-16">{children}</div>
    </section>
  );
}

export default function RagMongoDBTutorial() {
  usePageMetadata({
    title: `${tutorialTitle} | Tutoriel pratique`,
    description: tutorialDescription,
    canonicalPath: "/tutorials/rag-mongodb-guide",
    ogType: "article",
    structuredData: tutorialSchema,
  });

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <main className="pb-20">
        <section className="relative min-h-[410px] overflow-hidden bg-slate-950">
          <img
            src={tutorialHero}
            alt="Illustration d’un système d’intelligence artificielle"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25" />
          <div className="container relative mx-auto flex min-h-[410px] items-end px-4 py-12 md:px-6 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-4xl"
            >
              <div className="mb-5 flex flex-wrap gap-2">
                <Badge className="border-0 bg-primary px-3 py-1 text-white hover:bg-primary">
                  Tutoriel pratique
                </Badge>
                <Badge variant="outline" className="border-white/40 bg-white/10 text-white">
                  Débutant · Python · MongoDB
                </Badge>
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                Construire un assistant PDF RAG
                <span className="mt-2 block text-primary-foreground">
                  avec MongoDB Atlas, Voyage AI et Groq
                </span>
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
                Un parcours guidé à partir du dépôt réel : installer le projet,
                indexer un PDF, configurer la recherche vectorielle et comprendre
                les erreurs les plus fréquentes.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/80">
                <span className="inline-flex items-center gap-2">
                  <User className="h-4 w-4" /> Mafouzou SANNI ALIDOU
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" /> 30 min
                </span>
                <span>30 septembre 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-8">
              <section className="rounded-2xl border border-primary/15 bg-primary/5 p-6">
                <h2 className="text-xl font-bold">À la fin, vous saurez</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Créer un environnement Python isolé",
                    "Configurer sans publier vos clés API",
                    "Charger un PDF et l’indexer",
                    "Créer le bon index vectoriel Atlas",
                    "Poser une question au RAG",
                    "Diagnostiquer les blocages courants",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <p className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Coûts et confidentialité :</strong>{" "}
                  MongoDB Atlas, Groq et Voyage AI peuvent avoir des quotas ou une
                  facturation. L’extraction du PDF envoie du texte à Groq pour les
                  métadonnées et à Voyage AI pour les embeddings. N’utilisez pas de
                  document confidentiel sans vérifier les conditions de vos
                  fournisseurs.
                </p>
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Avant de commencer</h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Python 3.10 ou une version plus récente.</li>
                  <li>Git et un terminal (PowerShell, macOS ou Linux).</li>
                  <li>Un cluster MongoDB Atlas et un utilisateur de base de données.</li>
                  <li>Une clé Groq et une clé Voyage AI.</li>
                  <li>Le PDF d’exemple fourni dans le dépôt.</li>
                </ul>
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  Ouvrir le dépôt rag_mongodb_app <ExternalLink className="h-4 w-4" />
                </a>
              </section>

              <Step number="1" title="Cloner le projet et installer les dépendances" icon={Terminal}>
                <p>
                  Clonez le dépôt, créez un environnement virtuel, activez-le,
                  puis installez les versions déclarées par le projet.
                </p>
                <CodeBlock>{`git clone ${projectUrl}.git
cd rag_mongodb_app
python -m venv .venv
`}</CodeBlock>
                <p className="text-sm font-medium text-foreground">
                  Activez ensuite l’environnement avec la commande adaptée à
                  votre terminal :
                </p>
                <CodeBlock>{`# macOS / Linux
source .venv/bin/activate

# Windows PowerShell
.venv\\Scripts\\Activate.ps1`}</CodeBlock>
                <p>Installez enfin les dépendances avec le Python de l’environnement :</p>
                <CodeBlock>{`python -m pip install --upgrade pip
python -m pip install -r requirements.txt`}</CodeBlock>
                <p className="text-sm">
                  Si PowerShell bloque l’activation, vous pouvez autoriser les
                  scripts signés pour votre compte ou utiliser{" "}
                  <code>.venv\Scripts\python.exe -m pip install -r requirements.txt</code>{" "}
                  puis exécuter les scripts avec ce même interpréteur.
                </p>
              </Step>

              <Step number="2" title="Créer le fichier de configuration local" icon={KeyRound}>
                <p>
                  Le dépôt versionne <code>key_param.example.py</code>, mais les
                  scripts importent <code>key_param</code>. Copiez le modèle sous
                  le nom attendu par Python :
                </p>
                <CodeBlock>{`# Windows PowerShell
Copy-Item key_param.example.py key_param.py

# macOS / Linux
cp key_param.example.py key_param.py`}</CodeBlock>
                <p>
                  Le modèle lit les variables <code>MONGODB_URI</code>,{" "}
                  <code>VOYAGE_API_KEY</code> et <code>GROQ_API_KEY</code> dans
                  l’environnement. Définissez-les dans le même terminal que
                  celui où vous lancerez le programme.
                </p>
                <CodeBlock>{`# Windows PowerShell — remplacez les exemples localement
$env:MONGODB_URI = "mongodb+srv://<utilisateur>:<mot-de-passe-encodé>@<cluster>.mongodb.net/?retryWrites=true&w=majority"
$env:VOYAGE_API_KEY = "<votre-cle-voyage>"
$env:GROQ_API_KEY = "<votre-cle-groq>"

# macOS / Linux
export MONGODB_URI='mongodb+srv://<utilisateur>:<mot-de-passe-encodé>@<cluster>.mongodb.net/?retryWrites=true&w=majority'
export VOYAGE_API_KEY='<votre-cle-voyage>'
export GROQ_API_KEY='<votre-cle-groq>'`}</CodeBlock>
                <p className="rounded-lg bg-secondary/60 p-4 text-sm">
                  Ne collez jamais de vraies clés dans un article, une capture
                  d’écran ou un commit Git. Si une clé est publiée par erreur,
                  révoquez-la auprès du fournisseur.
                </p>
              </Step>

              <Step number="3" title="Préparer l’accès à MongoDB Atlas" icon={Database}>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Créez un cluster et un utilisateur avec des droits limités au projet.</li>
                  <li>Dans Network Access, autorisez votre IP de développement.</li>
                  <li>Récupérez l’URI du driver et placez-la dans MONGODB_URI.</li>
                </ol>
                <p>
                  Si le mot de passe contient des caractères comme <code>@</code>,{" "}
                  <code>/</code> ou <code>:</code>, encodez-le pour l’URI. Évitez
                  une règle d’accès réseau ouverte à tout le monde pour un
                  déploiement durable.
                </p>
              </Step>

              <Step number="4" title="Indexer le PDF d’exemple" icon={FileText}>
                <p>
                  Le dépôt utilise{" "}
                  <code>fichiers_exemples/documentation_stack_project.pdf</code>.
                  Depuis la racine du dépôt, lancez :
                </p>
                <CodeBlock>{`python load_data.py`}</CodeBlock>
                <p>
                  Le script extrait le texte, écarte les pages trop courtes,
                  enrichit les pages avec des métadonnées via Groq, puis découpe
                  le contenu en morceaux de 500 caractères avec 150 caractères
                  de chevauchement. Voyage AI produit les embeddings avec{" "}
                  <code>voyage-3-large</code>, puis les documents sont insérés
                  dans <code>book_mongodb_chunks.chunked_data</code>.
                </p>
                <p>
                  Pour tester un autre PDF, placez-le dans{" "}
                  <code>fichiers_exemples</code> et adaptez <code>pdf_path</code>{" "}
                  dans <code>load_data.py</code>. Un PDF composé d’images
                  nécessite une étape OCR; ce chargeur n’extrait pas le texte
                  d’un scan.
                </p>
                <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                  Ne relancez pas ce chargement à répétition sur la même
                  collection sans plan de nettoyage : le script ne supprime pas
                  les anciens vecteurs.
                </p>
              </Step>

              <Step number="5" title="Créer l’index MongoDB Vector Search" icon={Search}>
                <p>
                  Après l’import, ouvrez MongoDB Atlas, puis la base{" "}
                  <code>book_mongodb_chunks</code> et la collection{" "}
                  <code>chunked_data</code>. Créez un index de type Vector Search
                  nommé <code>vector_index</code> avec cette définition :
                </p>
                <CodeBlock>{`{
  "fields": [
    {
      "type": "vector",
      "path": "embedding",
      "numDimensions": 1024,
      "similarity": "cosine"
    }
  ]
}`}</CodeBlock>
                <p>
                  Le nom et les paramètres doivent correspondre à{" "}
                  <code>rag.py</code>. Attendez le statut <strong>Active</strong>{" "}
                  avant de passer à la suite. Le modèle <code>voyage-3-large</code>{" "}
                  utilisé ici produit des vecteurs de 1024 dimensions.
                </p>
              </Step>

              <Step number="6" title="Poser une première question au RAG" icon={Sparkles}>
                <p>
                  Vérifiez d’abord la question d’exemple fournie à la fin de{" "}
                  <code>rag.py</code> :
                </p>
                <CodeBlock>{`python rag.py`}</CodeBlock>
                <p>Pour tester une autre question sans modifier le script :</p>
                <CodeBlock>{`python -c "from rag import query_data; print(query_data('Que décrit le document ?'))"`}</CodeBlock>
                <p>
                  La recherche utilise actuellement la similarité et récupère
                  trois passages. Le prompt demande à Groq de ne pas répondre si
                  les extraits ne contiennent pas l’information.
                </p>
              </Step>

              <Step number="7" title="Lancer l’interface de chat Streamlit" icon={Workflow}>
                <p>
                  Dans le même terminal où vos variables d’environnement sont
                  définies, démarrez l’interface :
                </p>
                <CodeBlock>{`streamlit run app.py`}</CodeBlock>
                <p>
                  Ouvrez l’adresse locale affichée par Streamlit (habituellement{" "}
                  <code>http://localhost:8501</code>) et posez une question sur
                  le PDF indexé. Les messages sont gardés dans la session
                  Streamlit pendant l’utilisation.
                </p>
              </Step>

              <section id="difficultes" className="scroll-mt-24 space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Dépannage pour débuter
                  </p>
                  <h2 className="mt-2 text-3xl font-bold">
                    Les difficultés fréquentes — et comment les résoudre
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Quand une étape échoue, avancez dans cet ordre : environnement,
                    variables, connexion, index, puis pertinence des extraits.
                    Cela évite de déboguer le modèle alors que la base n’est pas
                    connectée.
                  </p>
                </div>
                <div className="space-y-4">
                  {difficulties.map(({ icon: Icon, title, cause, solution }) => (
                    <Card key={title} className="border-primary/10">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div className="space-y-3">
                            <h3 className="font-bold">{title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              <strong className="text-foreground">Cause probable :</strong>{" "}
                              {cause}
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              <strong className="text-foreground">À faire :</strong>{" "}
                              {solution}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="space-y-5">
                <h2 className="text-2xl font-bold">Mini-exercice pour apprendre</h2>
                <div className="rounded-2xl border bg-secondary/30 p-6">
                  <ol className="list-decimal space-y-3 pl-5 text-muted-foreground">
                    <li>Posez une question dont la réponse figure mot pour mot dans le PDF.</li>
                    <li>Posez une question sémantiquement proche avec d’autres mots.</li>
                    <li>Posez une question dont la réponse n’est pas dans le document.</li>
                    <li>Comparez chaque réponse aux pages originales et notez les passages manquants.</li>
                  </ol>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    L’objectif est de comprendre la limite entre récupération
                    pertinente et génération plausible. La consigne « ne pas
                    inventer » aide, mais ne remplace ni les citations ni une
                    vérification humaine.
                  </p>
                </div>
              </section>

              <section className="rounded-3xl bg-primary/5 p-7 md:p-9">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-sm font-bold uppercase tracking-widest">À retenir</span>
                </div>
                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                  Un RAG fiable se teste autant qu’il se construit.
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Vérifiez l’index, les extraits retrouvés et les réponses. Pour
                  passer à l’étape suivante, ajoutez des citations visibles et
                  évaluez le système sur une liste de questions avec réponses
                  attendues.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground"
                  >
                    Voir le code source <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link href={articlePath}>
                    <span className="inline-flex cursor-pointer items-center gap-2 rounded-lg border px-5 py-3 font-semibold hover:border-primary/40 hover:text-primary">
                      Lire l’article RAG <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sommaire</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    {[
                      ["Étapes 1–2 · Installation et configuration", "#etape-1"],
                      ["Étapes 3–5 · Atlas et indexation", "#etape-3"],
                      ["Étapes 6–7 · Questions et interface", "#etape-6"],
                      ["Difficultés des débutants", "#difficultes"],
                    ].map(([label, href]) => (
                      <a
                        key={href}
                        href={href}
                        className="block text-muted-foreground transition hover:text-primary"
                      >
                        {label}
                      </a>
                    ))}
                    <Separator />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Niveau : débutant Python · 7 étapes · environ 30 minutes,
                      hors création des comptes et indexation du PDF.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-primary/5">
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-2 font-bold">
                      <Code2 className="h-5 w-5 text-primary" />
                      Projet pédagogique
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Les commandes et paramètres de ce guide suivent le dépôt
                      public. Les appels API et les ressources cloud restent à
                      configurer dans vos propres comptes.
                    </p>
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Consulter le dépôt <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}