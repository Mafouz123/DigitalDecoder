import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, Zap, TrendingUp, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import articleHero from "@assets/generated_images/pagespeed_performance_metrics_visualization.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ArticlePageSpeed() {
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
              alt="Google PageSpeed Insights" 
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
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none px-3 py-1 text-sm">SEO 2026</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">Performance</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                Au-delà du score 100 : <br className="hidden md:block" />
                L'INP, votre priorité SEO en 2026
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-blue-600/25 backdrop-blur-md rounded-lg p-4 border border-blue-400/30">
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <User className="w-5 h-5" />
                  <span>Équipe Digital</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span>8 min</span>
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
                  En 2026, oubliez le culte du score 100 sur PageSpeed Insights. Google a décidé que <strong>l'Interaction to Next Paint (INP)</strong> est désormais LA métrique qui fait la différence entre un site performant et un site vraiment fluide.
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
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Le règne de l'INP : de la vitesse à la fluidité</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Pendant des années, le Largest Contentful Paint (LCP) dominait les conversations d'optimisation. Mais en 2026, c'est l'INP qui capture l'attention. Pourquoi ? Parce que LCP c'est la théorie, INP c'est la pratique ressentie par vos utilisateurs.
                </p>

                <p className="text-lg leading-relaxed">
                  L'INP mesure le délai de réponse du navigateur quand un utilisateur interagit avec votre page. Un clic, un scroll, une saisie au clavier... L'INP capture le lag. Et avec l'explosion des interfaces JavaScript complexes, ce lag est devenu l'ennemi public n°1.
                </p>

                <Card className="border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-950">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Le défi majeur</p>
                        <p className="text-blue-800 dark:text-blue-200">
                          Vos sites intègrent des chatbots IA, des générateurs de contenu temps réel, des outils de personnalisation. Tous ces scripts consomment du CPU et ralentissent l'INP. Les utilisateurs le ressentent comme du lag.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Green SEO : L'efficacité énergétique devient un atout</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Une tendance émerge fortement en 2026 : les sites légers consomment moins d'énergie. C'est bon pour l'écologie, c'est bon pour le portefeuille utilisateur (moins de décharge batterie sur mobile), et c'est bon pour le SEO.
                </p>

                <p className="text-lg leading-relaxed">
                  Google commence à valoriser les sites "Green" dans les SERP. Un site avec un code optimisé, sans scripts tiers inutiles et avec une architecture minimaliste sort gagnant. C'est l'ère du "léger c'est puissant".
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Code Splitting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Chargez uniquement le JavaScript nécessaire par page</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Lazy Loading</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Retardez le chargement des images et ressources non-critiques</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">CDN Global</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Distribuez vos assets au plus près des utilisateurs</p>
                    </CardContent>
                  </Card>
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
                <h2 className="text-3xl font-heading font-bold">Ce qu'il faut retenir</h2>
                
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>L'INP remplace le FID. Optimisez la réactivité, pas juste la vitesse.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Auditer avec PageSpeed Insights, c'est bien. Tester l'expérience réelle avec des outils RUM, c'est mieux.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Le Green SEO n'est plus optionnel. La légèreté du code devient un argument commercial.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Les interfaces génératives (IA) doivent être architecturées pour ne pas écraser l'INP.</span>
                  </li>
                </ul>
              </motion.section>

              <Separator className="my-12" />

              {/* CTA */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-lg p-8 border border-blue-200 dark:border-blue-800"
              >
                <h3 className="text-2xl font-bold mb-4">Vous avez un projet ? Parlons performance.</h3>
                <p className="text-muted-foreground mb-6">
                  Optimisez votre site pour l'INP et le Green SEO. Consultez notre équipe pour un audit gratuit.
                </p>
                <Link href="/contact">
                  <a className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors" data-testid="link-contact">
                    Contactez-nous →
                  </a>
                </Link>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="sticky top-24 space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Points clés</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1">Métrique prioritaire</h4>
                      <p className="text-sm text-muted-foreground">Interaction to Next Paint (INP)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Objectif SEO</h4>
                      <p className="text-sm text-muted-foreground">Fluidité et réactivité</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Tendance 2026</h4>
                      <p className="text-sm text-muted-foreground">Green SEO et efficacité énergétique</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Articles liés</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/articles/vibe-coding">
                      <a className="block text-sm hover:text-primary transition-colors" data-testid="link-article-vibe">
                        Vibe Coding et IA →
                      </a>
                    </Link>
                    <Link href="/tutorials/pagespeed-corevitalweb">
                      <a className="block text-sm hover:text-primary transition-colors" data-testid="link-tutorial-pagespeed">
                        Tutoriel PageSpeed →
                      </a>
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
