import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, Lightbulb, Zap, Brain, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import tutorialHero from "@assets/generated_images/agentic_workflow_visualization_diagram.png";
import processImage from "@assets/generated_images/ai_agent_thinking_process_simple_diagram.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TutorialAgenticWorkflows() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main className="pb-20">
        {/* Tutorial Hero */}
        <section className="relative h-[45vh] md:h-[55vh] w-full overflow-hidden bg-background">
          <div className="absolute inset-0 z-0">
            <img 
              src={tutorialHero} 
              alt="Flux de travail agentiques" 
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white border-none px-3 py-1 text-sm">Tutoriel</Badge>
                <Badge variant="outline" className="bg-background/40 backdrop-blur-md border-white/30 text-white">IA Avancée</Badge>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg">
                Flux de Travail Agentiques <br className="hidden md:block" />
                Pour les Nuls
              </h1>
              
              <p className="text-lg text-white/95 mb-4 max-w-xl drop-shadow-md">
                Comprendre comment les agents IA autonomes pensent, agissent et s'améliorent
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-3 text-sm text-white/90">
                <div className="flex items-center gap-2 font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>30 min de lecture</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <User className="w-4 h-4" />
                  <span>Débutant à Intermédiaire</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <article className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Introduction */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <h2 className="text-3xl font-bold mb-6">Qu'est-ce qu'un flux de travail agentique?</h2>
                <p className="text-xl leading-relaxed text-foreground/80 mb-6">
                  Imaginez que vous avez un assistant IA qui ne vous pose pas juste des questions, mais <strong>agit pour vous</strong>. Il prend des décisions, exécute des tâches, apprend de ses erreurs, et s'améliore tout seul. C'est ça, un flux de travail agentique. C'est l'IA qui pense, agit et s'adapte automatiquement.
                </p>
                <p className="text-lg text-foreground/70">
                  Contrairement aux chatbots classiques qui attendent votre prochaine question, les agents IA agentiques travaillent <strong>de manière autonome</strong> et <strong>itérative</strong> pour résoudre des problèmes complexes.
                </p>
              </motion.div>

              {/* Section 1 - Les 4 piliers */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Les 4 piliers d'un flux agentique</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200 dark:border-indigo-700">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">1</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Perception (L'observation)</h3>
                        <p className="text-base leading-relaxed mb-4">
                          L'agent commence par observer son environnement. Il reçoit des données, des informations, des requêtes utilisateur. C'est comme ouvrir les yeux et comprendre ce qui se passe autour de soi.
                        </p>
                        <p className="text-sm text-foreground/70 font-mono bg-background/50 p-3 rounded-lg">
                          Exemple: "L'utilisateur demande: Optimisez ma page web pour le SEO"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-700">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">2</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Réflexion (La pensée)</h3>
                        <p className="text-base leading-relaxed mb-4">
                          Maintenant l'agent réfléchit. Il analyse le problème, décompose la tâche en sous-problèmes, et décide des étapes à suivre. C'est le cerveau qui pense.
                        </p>
                        <p className="text-sm text-foreground/70 font-mono bg-background/50 p-3 rounded-lg">
                          Exemple: "Je dois: 1) Vérifier la structure HTML, 2) Analyser les Core Web Vitals, 3) Recommander des optimisations"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/30 dark:to-red-900/30 border border-pink-200 dark:border-pink-700">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold text-lg">3</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Action (L'exécution)</h3>
                        <p className="text-base leading-relaxed mb-4">
                          L'agent passe à l'action. Il utilise des outils (API, scripts, recherche, etc.) pour accomplir les tâches décidées. C'est les mains qui travaillent.
                        </p>
                        <p className="text-sm text-foreground/70 font-mono bg-background/50 p-3 rounded-lg">
                          Exemple: "Appel l'API PageSpeed, parse les résultats, génère un rapport détaillé"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 border border-red-200 dark:border-red-700">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">4</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Feedback (L'apprentissage)</h3>
                        <p className="text-base leading-relaxed mb-4">
                          L'agent analyse les résultats de ses actions. Ça a marché? Non? Il ajuste sa stratégie. C'est la boucle d'amélioration continue.
                        </p>
                        <p className="text-sm text-foreground/70 font-mono bg-background/50 p-3 rounded-lg">
                          Exemple: "Le rapport n'a pas assez de détails. Je vais effectuer une analyse supplémentaire"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Visual Process */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h2 className="text-3xl font-heading font-bold">Le cycle de travail agentique: Étape par étape</h2>
                
                <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/20">
                  <img 
                    src={processImage} 
                    alt="Cycle de travail agentique" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  Ce diagramme montre comment un agent agentique travaille en boucle. Il <strong>perçoit</strong> le problème, <strong>réfléchit</strong> à la solution, <strong>agit</strong> pour l'implémenter, puis vérifie le <strong>feedback</strong>. Si ce n'est pas parfait, il recommence. C'est un cycle continu d'amélioration.
                </p>
              </motion.section>

              {/* Real World Example */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Exemple concret: Un agent qui optimise un site web</h2>
                </div>

                <div className="space-y-4">
                  <div className="relative pl-8 pb-8 border-l-4 border-indigo-400">
                    <div className="absolute left-[-12px] top-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Perception</h4>
                      <p className="text-foreground/80">Vous dites: "Optimise ma page d'accueil pour le SEO et la vitesse"</p>
                      <p className="text-sm text-foreground/60 mt-2">L'agent reçoit l'URL de votre site et commence son analyse</p>
                    </div>
                  </div>

                  <div className="relative pl-8 pb-8 border-l-4 border-purple-400">
                    <div className="absolute left-[-12px] top-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Réflexion</h4>
                      <p className="text-foreground/80">L'agent se demande: "Que dois-je faire?"</p>
                      <ul className="text-sm text-foreground/60 mt-2 space-y-1">
                        <li>✓ Crawl la page avec Screaming Frog</li>
                        <li>✓ Analyse la structure HTML et les meta tags</li>
                        <li>✓ Teste les Core Web Vitals</li>
                        <li>✓ Génère des recommandations prioritaires</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-8 pb-8 border-l-4 border-pink-400">
                    <div className="absolute left-[-12px] top-0 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center text-white text-xs font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Action</h4>
                      <p className="text-foreground/80">L'agent exécute les étapes:</p>
                      <ul className="text-sm text-foreground/60 mt-2 space-y-1">
                        <li>→ Lance Google PageSpeed Insights</li>
                        <li>→ Fait une analyse complète des balises</li>
                        <li>→ Détecte les problèmes d'images non optimisées</li>
                        <li>→ Identifie les scripts bloquants</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-4 border-red-400">
                    <div className="absolute left-[-12px] top-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Feedback & Amélioration</h4>
                      <p className="text-foreground/80">L'agent vérifie ses résultats:</p>
                      <ul className="text-sm text-foreground/60 mt-2 space-y-1">
                        <li>? "Est-ce que j'ai toutes les informations?"</li>
                        <li>→ "Non, je dois aussi vérifier le structure du site"</li>
                        <li>→ Lance une analyse supplémentaire</li>
                        <li>✓ Génère un rapport final avec priorités</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Key Concepts */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Les concepts clés à retenir</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-background border-2 border-indigo-200 dark:border-indigo-700">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                      Autonomie
                    </h3>
                    <p className="text-sm text-foreground/80">L'agent ne vous demande pas permission à chaque étape. Il agit de manière indépendante pour atteindre l'objectif.</p>
                  </div>

                  <div className="p-6 rounded-xl bg-background border-2 border-purple-200 dark:border-purple-700">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600" />
                      Itération
                    </h3>
                    <p className="text-sm text-foreground/80">L'agent ne fait pas juste une chose et s'arrête. Il boucle, teste, s'améliore jusqu'à obtenir le meilleur résultat.</p>
                  </div>

                  <div className="p-6 rounded-xl bg-background border-2 border-pink-200 dark:border-pink-700">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-pink-600" />
                      Utilisation d'outils
                    </h3>
                    <p className="text-sm text-foreground/80">L'agent a accès à des outils (API, scripts, bases de données) pour exécuter les tâches réelles.</p>
                  </div>

                  <div className="p-6 rounded-xl bg-background border-2 border-red-200 dark:border-red-700">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600" />
                      Apprentissage
                    </h3>
                    <p className="text-sm text-foreground/80">L'agent apprend de chaque action. Il mémorise ce qui marche et améliore sa stratégie pour les prochaines fois.</p>
                  </div>
                </div>
              </motion.section>

              {/* Practical Steps */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h2 className="text-3xl font-heading font-bold mb-6">Comment construire votre propre agent agentique?</h2>

                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-l-4 border-indigo-600">
                    <h4 className="font-bold text-lg mb-3">Étape 1: Définir l'objectif</h4>
                    <p className="text-sm mb-3">Soyez spécifique. Au lieu de "améliore mon site", dites "augmente le score PageSpeed de 50 à 90 et corrige tous les problèmes de crawlabilité"</p>
                    <p className="text-xs text-foreground/60 font-mono bg-background/50 p-3 rounded">Objectif clair = Agent plus efficace</p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-600">
                    <h4 className="font-bold text-lg mb-3">Étape 2: Décomposer en sous-tâches</h4>
                    <p className="text-sm mb-3">Dividez l'objectif en petites étapes logiques que l'agent peut accomplir une par une.</p>
                    <p className="text-xs text-foreground/60 font-mono bg-background/50 p-3 rounded">Task 1 → Task 2 → Task 3 → Résultat final</p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 border-l-4 border-pink-600">
                    <h4 className="font-bold text-lg mb-3">Étape 3: Fournir les bons outils</h4>
                    <p className="text-sm mb-3">Donnez à l'agent accès à tout ce dont il a besoin: API, scripts, données. Plus d'outils = plus de possibilités.</p>
                    <p className="text-xs text-foreground/60 font-mono bg-background/50 p-3 rounded">APIs + Databases + Libraries = Agent puissant</p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-600">
                    <h4 className="font-bold text-lg mb-3">Étape 4: Boucle de feedback</h4>
                    <p className="text-sm mb-3">Permettez à l'agent de vérifier ses résultats et de s'améliorer. Définissez les métriques de succès claires.</p>
                    <p className="text-xs text-foreground/60 font-mono bg-background/50 p-3 rounded">Résultat → Vérification → Amélioration → Répétition</p>
                  </div>
                </div>
              </motion.section>

              {/* CTA Section */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="p-8 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-primary/20"
              >
                <h3 className="text-2xl font-bold mb-4">Vous êtes prêt à créer votre propre agent?</h3>
                <p className="text-lg mb-6 text-foreground/80">
                  Les flux de travail agentiques sont l'avenir de l'automatisation. Commencez simple, testez, améliorez. Chaque itération vous rend plus fort.
                </p>
                <div className="flex gap-4">
                  <Link href="/tutorials/google-ads-ia">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Voir d'autres tutoriels
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="sticky top-24 space-y-8"
              >
                <Card className="border-none shadow-lg bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      Résumé Rapide
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Les 4 Piliers</p>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Perception</li>
                        <li>• Réflexion</li>
                        <li>• Action</li>
                        <li>• Feedback</li>
                      </ul>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Clés du Succès</p>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>✓ Autonomie</li>
                        <li>✓ Itération</li>
                        <li>✓ Bons outils</li>
                        <li>✓ Apprentissage</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-secondary/50">
                  <CardHeader>
                    <CardTitle>Durée & Niveau</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">30 minutes de lecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary" />
                      <span className="text-sm">Débutant à Intermédiaire</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-secondary/50">
                  <CardHeader>
                    <CardTitle>Prochaines étapes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/tutorials/google-ads-ia">
                      <p className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                        Agents IA en Google Ads
                      </p>
                    </Link>
                    <Link href="/articles/deepseek-designers">
                      <p className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                        DeepSeek pour Créatifs
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}