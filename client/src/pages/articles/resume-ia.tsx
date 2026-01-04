import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, Sparkles, Brain, Target, CheckCircle2, ArrowRight, Zap, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import resumeHero from "@assets/generated_images/ai_resume_optimization_process_visual.png";
import resumeDiagram from "@assets/generated_images/resume_structure_diagram_with_ai_insights.png";

export default function ArticleResumeIA() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main className="pb-20">
        {/* Article Hero Section */}
        <section className="relative w-full overflow-hidden bg-background">
          <img 
            src={resumeHero} 
            alt="Optimisation CV avec l'IA" 
            className="w-full h-auto object-contain max-h-[60vh]"
            fetchPriority="high"
          />
        </section>

        <section className="bg-background border-b border-primary/10">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground border-none px-3 py-1 text-sm">Article</Badge>
                <Badge variant="outline" className="border-primary/20 text-muted-foreground">Emploi & IA</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight">
                Créer et Optimiser son CV avec l'IA : <br className="hidden md:block" />
                Le Guide Complet 2026
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Pourquoi et comment l'intelligence artificielle est devenue votre meilleure alliée pour décrocher le job de vos rêves cette année.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-6 text-base text-muted-foreground">
                <div className="flex items-center gap-2 font-semibold">
                  <User className="w-5 h-5 text-primary" />
                  <span>Jean Marketing</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>10 min de lecture</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <Tag className="w-5 h-5 text-primary" />
                  <span>04 Janvier 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              
              {/* Intro */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <h2 className="text-3xl font-bold mb-6">Pourquoi l'IA est indispensable en 2026 ?</h2>
                <p className="text-xl leading-relaxed text-foreground/80">
                  En 2026, 95% des grandes entreprises utilisent des systèmes de tri automatique (ATS) boostés par l'IA. Si votre CV n'est pas "parlant" pour ces algorithmes, il ne sera jamais lu par un humain. Utiliser l'IA n'est plus une option, c'est une nécessité stratégique pour <strong>égaliser les chances</strong>.
                </p>
              </motion.div>

              {/* Step by Step Guide */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Méthode pas à pas pour les nuls</h2>
                </div>

                <div className="grid gap-6">
                  <Card className="border-none bg-muted/30">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">1</div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Extraction des Mots-Clés</h3>
                          <p className="text-muted-foreground">Demandez à une IA (ChatGPT, Claude) d'analyser l'offre d'emploi. Elle identifiera les compétences techniques et "soft skills" que les recruteurs recherchent réellement.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none bg-muted/30">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">2</div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Rédaction avec "Impact"</h3>
                          <p className="text-muted-foreground">L'IA transforme vos phrases passives en résultats quantifiables. "J'ai géré le marketing" devient "Augmentation de 40% du ROI via l'optimisation des campagnes IA".</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none bg-muted/30">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">3</div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Simulation d'Entretien</h3>
                          <p className="text-muted-foreground">Une fois le CV optimisé, demandez à l'IA d'agir comme un recruteur pour tester si votre profil est cohérent avec l'offre.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.section>

              {/* Visual Schema */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="my-12"
              >
                <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-xl">
                  <div className="bg-primary/5 p-4 border-b border-primary/10 flex items-center gap-2">
                    <Search className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Schéma : Anatomie d'un CV optimisé par l'IA</span>
                  </div>
                  <img src={resumeDiagram} alt="Diagramme structure CV IA" className="w-full h-auto" />
                </div>
              </motion.div>

              {/* Practical Examples */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Exemples concrets : Avant / Après</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
                      <span className="text-red-600 font-bold text-sm uppercase">Avant (CV Classique)</span>
                      <p className="mt-2 text-muted-foreground italic">"En charge de la gestion des réseaux sociaux et de la création de contenu pour la marque."</p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20">
                      <span className="text-green-600 font-bold text-sm uppercase">Après (IA Optimisée)</span>
                      <p className="mt-2 text-foreground font-medium">"Pilotage de la stratégie multicanale générant +25% d'engagement organique en 6 mois via l'IA prédictive."</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Tools list */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Top 3 des outils à utiliser
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <strong>Rezi.ai</strong> : Idéal pour s'assurer que votre format est 100% compatible avec les robots ATS.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <strong>ChatGPT + Custom Prompt</strong> : Pour personnaliser chaque CV en fonction d'une offre précise.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <strong>Teal</strong> : Un gestionnaire de carrière tout-en-un qui utilise l'IA pour suivre et optimiser vos candidatures.
                    </div>
                  </li>
                </ul>
              </motion.div>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    À retenir
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0">1</div>
                    <p className="text-sm">Parlez le langage des robots (mots-clés).</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0">2</div>
                    <p className="text-sm">Quantifiez chaque succès avec des chiffres.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0">3</div>
                    <p className="text-sm">Gardez une touche humaine pour l'entretien.</p>
                  </div>
                  <Separator />
                  <Link href="/tutorials/seo-strategy">
                    <div className="group cursor-pointer pt-2">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Suivant</p>
                      <p className="text-sm font-bold group-hover:underline flex items-center gap-1">
                        Maîtriser le SEO en 2026 <ArrowRight className="w-3 h-3" />
                      </p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}
