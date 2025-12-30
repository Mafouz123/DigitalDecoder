import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, Sparkles, Zap, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import articleHero from "@assets/generated_images/deepseek_ai_model_for_designers.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ArticleDeepSeek() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main className="pb-20">
        {/* Article Hero */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
            <img 
              src={articleHero} 
              alt="DeepSeek pour les designers" 
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex flex-col justify-end pb-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-purple-600 hover:bg-purple-700 text-white border-none px-3 py-1 text-sm">IA Design</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">Outils</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                DeepSeek (R1 & V3.2) <br className="hidden md:block" />
                pour les Designers d'aujourd'hui
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-purple-600/25 backdrop-blur-md rounded-lg p-4 border border-purple-400/30">
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <User className="w-5 h-5" />
                  <span>Équipe Design</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span>10 min</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Tag className="w-5 h-5" />
                  <span>Décembre 2025</span>
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
              
              {/* Intro */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/80">
                  2025 marque un tournant pour les designers : <strong>DeepSeek R1 et V3.2</strong> ne sont plus juste des outils IA génériques. Ils comprennent la conception visuelle, l'UX/UI et les tendances design modernes. Pour la première fois, vous avez un co-designer IA vraiment performant, sans latence et accessible.
                </p>
              </motion.div>

              {/* Section 1 */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Pourquoi DeepSeek change la donne pour les designers</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Pendant longtemps, ChatGPT et Midjourney ont dominé. Mais DeepSeek arrive avec quelque chose de différent : une compréhension nuancée de la conception. R1 excelle dans la réflexion créative, V3.2 dans la génération visuelle ultra-rapide.
                </p>

                <ul className="space-y-4 text-lg">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Vitesse inégalée :</strong> Réponses en secondes, pas en minutes. Parfait pour les itérations rapides.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Compréhension contextuelle :</strong> Elle saisit les nuances de votre brief, les tendances actuelles, les contraintes techniques.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Pas de limitation créative :</strong> Génération d'images sans les restrictions éthiques parfois trop strictes d'autres outils.</span>
                  </li>
                </ul>
              </motion.section>

              {/* Section 2 */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">R1 vs V3.2 : Comment les utiliser ?</h2>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-secondary/50 border border-primary/10">
                    <h3 className="text-xl font-bold mb-3">DeepSeek R1</h3>
                    <p className="mb-4">Le penseur créatif. Utilisez-le pour :</p>
                    <ul className="space-y-2 text-base">
                      <li>• Brainstorm de concepts design</li>
                      <li>• Architecture d'expérience utilisateur complexe</li>
                      <li>• Résolution de problèmes de design</li>
                      <li>• Analyse des tendances et inspirations</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-secondary/50 border border-primary/10">
                    <h3 className="text-xl font-bold mb-3">DeepSeek V3.2</h3>
                    <p className="mb-4">Le générateur rapide. Parfait pour :</p>
                    <ul className="space-y-2 text-base">
                      <li>• Génération d'assets visuels</li>
                      <li>• Mockups et prototypes</li>
                      <li>• Illustrations et graphiques</li>
                      <li>• Variations rapides de designs</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Section 3 */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Les cas d'usage concrets pour 2026</h2>
                </div>

                <p className="text-lg leading-relaxed">
                  Voici comment les designers d'aujourd'hui utilisent DeepSeek pour accélérer leur workflow :
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6 py-3">
                    <h4 className="font-bold text-lg mb-2">1. Branding & Identité Visuelle</h4>
                    <p>DeepSeek génère des palettes de couleurs, des typographies et des systèmes visuels en quelques secondes. Parfait pour présenter des options multiples aux clients.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-3">
                    <h4 className="font-bold text-lg mb-2">2. Design Thinking Accéléré</h4>
                    <p>R1 vous aide à définir le brief, identifier les contraintes, et explorer des solutions créatives sans biais cognitifs.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-3">
                    <h4 className="font-bold text-lg mb-2">3. UX/UI Responsive</h4>
                    <p>Génération automatique de wireframes et mockups pour différentes tailles d'écran. À faire itérer ensuite par l'IA pour validation.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-3">
                    <h4 className="font-bold text-lg mb-2">4. Documentation Design System</h4>
                    <p>DeepSeek génère des composants, des variations et de la documentation automatiquement. Économie de temps massive.</p>
                  </div>
                </div>
              </motion.section>

              {/* CTA Section */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="p-8 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-primary/20"
              >
                <h3 className="text-2xl font-bold mb-4">Prêt à transformer votre processus design ?</h3>
                <p className="text-lg mb-6 text-foreground/80">
                  DeepSeek n'est pas un remplacement pour les designers, c'est votre nouveau meilleur outil collaboratif. Commencez à l'utiliser pour les tâches répétitives et concentrez votre créativité sur ce qui compte vraiment.
                </p>
                <Link href="/tutorials/seo-strategy">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Découvrez nos tutoriels IA
                  </motion.button>
                </Link>
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
                      <Sparkles className="w-5 h-5 text-primary" />
                      Points clés
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">DeepSeek R1</p>
                      <p className="text-sm text-muted-foreground">Pour la réflexion créative et l'analyse.</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">DeepSeek V3.2</p>
                      <p className="text-sm text-muted-foreground">Pour la génération ultra-rapide d'assets.</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">ROI Design</p>
                      <p className="text-sm text-muted-foreground">Multipliez votre productivité par 3-5x sans sacrifier la qualité.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-secondary/50">
                  <CardHeader>
                    <CardTitle>À lire aussi</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/articles/ia-30-min">
                      <p className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                        L'IA en 30 minutes par jour
                      </p>
                    </Link>
                    <Link href="/articles/google-ads-ia-2026">
                      <p className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                        L'ère de l'autonomie : Google Ads & IA
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