import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, Sparkles, Brain, Target, CheckCircle2, ArrowRight, Zap, Code, BarChart, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import tutorialHero from "@assets/generated_images/agentic_workflow_visualization_diagram.png";

export default function TutorialAgenticSEO() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const steps = [
    {
      title: "Définition de l'Objectif (Vision)",
      desc: "Tout commence par une intention claire. Un agent IA transforme la vision ('Créer un blog SEO ultra-performant') en une structure technique concrète.",
      icon: Target
    },
    {
      title: "Curation de Contenu via Agents",
      desc: "L'IA analyse les tendances 2026. On ne crée pas juste du contenu, on crée des réponses aux intentions de recherche détectées par l'agent.",
      icon: Search
    },
    {
      title: "Optimisation Technique Itérative",
      desc: "C'est ici que l'impact de Google Search se joue. L'agent optimise le code pour un score PageSpeed parfait, garantissant que chaque clic compte.",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main className="pb-20">
        {/* Tutorial Hero Image */}
        <section className="w-full overflow-hidden bg-background border-b border-primary/5">
          <img 
            src={tutorialHero} 
            alt="Flux agentique et intelligence artificielle"
            className="w-full h-auto object-contain max-h-[60vh]"
            fetchPriority="high"
          />
        </section>

        {/* Header Info */}
        <section className="bg-background border-b border-primary/10">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-orange-600 hover:bg-orange-700 text-white border-none px-3 py-1 text-sm">Tutoriel Expert</Badge>
                <Badge variant="outline" className="border-orange-300 text-orange-700 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700 uppercase tracking-wider text-xs font-bold">Case Study</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                Comment utiliser les agents IA et les flux agentiques <br className="hidden md:block" />
                pour dominer Google Search
              </h1>
              
              <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed">
                Découvrez la méthodologie exacte qui a permis à ce blog d'atteindre ses premiers paliers de visibilité en un temps record.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-6 text-base text-foreground/70">
                <div className="flex items-center gap-2 font-semibold">
                  <User className="w-5 h-5 text-orange-600" />
                  <span>Sanni Mafouzou</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span>15 min de lecture</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <BarChart className="w-5 h-5 text-orange-600" />
                  <span>Impact : +10 Clics / 28 Jours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              
              {/* Context */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <h2 className="text-3xl font-bold mb-6">Le Résultat : Preuve par l'Image</h2>
                <p className="text-xl leading-relaxed text-foreground/80">
                  En m'appuyant sur mon expérience de <strong>SEO Strategist & Web Designer</strong> pour le blog "Decoding Digital" en 2025, j'ai mis en place une stratégie de croissance organique qui porte ses fruits. Comme le montrent les rapports récents, le site a franchi la barre des <strong>10 clics organiques</strong> en moins de 28 jours grâce à des audits techniques rigoureux et une optimisation on-page constante.
                </p>
                <div className="bg-muted/30 p-6 rounded-2xl border border-primary/5 my-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                      <p className="text-sm font-bold text-muted-foreground uppercase">Impact Organique</p>
                      <p className="text-4xl font-bold text-orange-600">Top 5</p>
                      <p className="text-sm">Classement Google (3 mois)</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                      <p className="text-sm font-bold text-muted-foreground uppercase">Actuellement</p>
                      <p className="text-4xl font-bold text-primary">10</p>
                      <p className="text-sm">Clics réels atteints</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Steps */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-8"
              >
                <h2 className="text-3xl font-heading font-bold">Ma Méthodologie "Agent-First"</h2>
                <p className="text-lg text-muted-foreground">
                  Cette approche repose sur mon expertise en <strong>audits techniques SEO</strong> et en <strong>architecture web</strong> conçue pour l'engagement utilisateur.
                </p>
                
                <div className="space-y-6">
                  {steps.map((step, i) => (
                    <Card key={i} className="border-none bg-muted/20 hover:bg-muted/30 transition-colors">
                      <CardContent className="p-6 flex gap-6">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center">
                          <step.icon className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold">{i + 1}. {step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.section>

              {/* Tools */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-primary" />
                  Le rôle d'un agent IA
                </h3>
                <p className="mb-6">
                  Un agent IA n'est pas qu'un outil de code, c'est un <strong>partenaire de flux</strong>. Voici comment l'intégrer à une méthode de travail :
                </p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <p><strong>Architecture Rapide :</strong> Génération de composants React optimisés pour le SEO dès la première ligne.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <p><strong>Correction en Temps Réel :</strong> L'agent identifie les goulots d'étranglement de performance avant même le déploiement.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <p><strong>Itération SEO :</strong> Je lui demande d'ajuster les méta-tags et la structure sémantique pour coller aux exigences de Google.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="prose prose-lg dark:prose-invert max-w-none border-l-4 border-orange-600 pl-6 italic"
              >
                <p>
                  "Maillage interne stratégique et architecture web orientée conversion : c'est la clé pour transformer un simple blog en un moteur de croissance organique puissant."
                </p>
                <footer className="text-sm font-bold mt-2">— Sanni Mafouzou, SEO Strategist & Web Designer</footer>
              </motion.div>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <Card className="sticky top-24 border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Brain className="w-5 h-5 text-orange-600" />
                    Concepts Clés
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold text-foreground">Flux Agentique</p>
                    <p className="text-muted-foreground">Séquence de tâches automatisées où l'IA prend des décisions autonomes.</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="font-bold text-foreground">Agent IA</p>
                    <p className="text-muted-foreground">IA capable de comprendre, écrire et déployer des applications complexes.</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="font-bold text-foreground">Impact SEO</p>
                    <p className="text-muted-foreground">Mesure de la performance via les clics et impressions réels sur Google.</p>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}

import { Search } from "lucide-react";
