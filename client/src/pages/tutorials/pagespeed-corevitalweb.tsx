import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, CheckCircle2, Code, Zap } from "lucide-react";
import { Link } from "wouter";
import tutorialHero from "@assets/generated_images/core_web_vitals_optimization_guide.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TutorialPageSpeed() {
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
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
            <img 
              src={tutorialHero} 
              alt="Core Web Vitals" 
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
                <Badge className="bg-green-600 hover:bg-green-700 text-white border-none px-3 py-1 text-sm">Tutoriel</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">SEO Performance</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                Google PageSpeed Insights <br className="hidden md:block" />
                & Core Web Vitals 2026
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-green-600/25 backdrop-blur-md rounded-lg p-4 border border-green-400/30">
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <User className="w-5 h-5" />
                  <span>Équipe Tech SEO</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span>15 min</span>
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
                  Dans ce tutoriel, découvrez comment <strong>auditer et optimiser votre site</strong> pour les Core Web Vitals 2026, en mettant l'accent sur l'INP (Interaction to Next Paint).
                </p>
              </motion.div>

              {/* Step 1 */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold text-lg">
                    1
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Audit avec PageSpeed Insights</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Rendez-vous sur <strong>pagespeedinsights.web.dev</strong>. Entrez votre URL et lancez l'audit.
                </p>

                <Card className="border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Ce que vous verrez</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>LCP</strong> : Largest Contentful Paint (chargement du contenu principal)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>INP</strong> : Interaction to Next Paint (réactivité)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>CLS</strong> : Cumulative Layout Shift (stabilité visuelle)</span>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  L'outil donne un score 0-100 et des recommandations d'optimisation. Focalisez-vous d'abord sur les seuils de passage (Green).
                </p>
              </motion.section>

              {/* Step 2 */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 font-bold text-lg">
                    2
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Optimiser le JavaScript</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  L'INP est surtout affecté par le JavaScript. Plus vous avez de scripts tiers, plus l'INP se dégrade.
                </p>

                <div className="bg-slate-900 dark:bg-slate-800 text-slate-50 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <code>{`// ✗ Mauvais : Tous les scripts se chargent à l'ouverture
<script src="analytics.js"></script>
<script src="chatbot.js"></script>
<script src="ads.js"></script>

// ✓ Bon : Chargement différé
<script src="analytics.js" defer></script>
<script src="chatbot.js" async></script>
<script src="ads.js" defer></script>`}</code>
                </div>

                <ul className="space-y-3 mt-6">
                  <li className="flex gap-3">
                    <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Code Splitting</strong> : Chargez uniquement le JS nécessaire par page</span>
                  </li>
                  <li className="flex gap-3">
                    <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Tree Shaking</strong> : Éliminez le code mort avec Webpack ou Vite</span>
                  </li>
                  <li className="flex gap-3">
                    <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Minification</strong> : Compressez vos bundles</span>
                  </li>
                </ul>
              </motion.section>

              {/* Step 3 */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600 font-bold text-lg">
                    3
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Optimiser les images</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Les images c'est 80% du poids des sites. Optimisez-les agressivement.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Lazy Loading</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Chargez les images seulement quand elles deviennent visibles</p>
                      <code className="text-xs bg-muted p-2 rounded mt-2 block">&lt;img loading="lazy" /&gt;</code>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Format WebP</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Plus léger que JPG et PNG avec meilleure qualité</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.section>

              {/* Step 4 */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600 font-bold text-lg">
                    4
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Mettre en place un CDN</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Un CDN distribue vos assets au plus près des utilisateurs. Même un site léger devient rapide avec un CDN.
                </p>

                <Card className="border-orange-200 dark:border-orange-800">
                  <CardHeader>
                    <CardTitle className="text-lg">CDN recommandés</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Cloudflare (gratuit et performant)</p>
                    <p>• Fastly (pour haute performance)</p>
                    <p>• AWS CloudFront (si vous êtes déjà sur AWS)</p>
                  </CardContent>
                </Card>
              </motion.section>

              <Separator className="my-12" />

              {/* Recap */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h2 className="text-3xl font-heading font-bold">Checklist d'optimisation</h2>
                
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <input type="checkbox" id="check1" className="w-5 h-5 accent-primary" defaultChecked disabled />
                    <label htmlFor="check1" className="text-lg">Audité mon site avec PageSpeed Insights</label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" id="check2" className="w-5 h-5 accent-primary" disabled />
                    <label htmlFor="check2" className="text-lg">Implémenté le code splitting</label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" id="check3" className="w-5 h-5 accent-primary" disabled />
                    <label htmlFor="check3" className="text-lg">Compressé et optimisé les images</label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" id="check4" className="w-5 h-5 accent-primary" disabled />
                    <label htmlFor="check4" className="text-lg">Configuré un CDN</label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" id="check5" className="w-5 h-5 accent-primary" disabled />
                    <label htmlFor="check5" className="text-lg">Monitore l'INP avec Web Vitals</label>
                  </div>
                </div>
              </motion.section>

              <Separator className="my-12" />

              {/* CTA */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950 rounded-lg p-8 border border-green-200 dark:border-green-800"
              >
                <h3 className="text-2xl font-bold mb-4">Votre site est trop lent ?</h3>
                <p className="text-muted-foreground mb-6">
                  Nous faisons des audits de performance gratuites. Découvrez où vous perdez des points SEO.
                </p>
                <Link href="/contact">
                  <a className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors" data-testid="link-contact-perf">
                    Audit gratuit →
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
                    <CardTitle>Objectifs d'optimisation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1">LCP</h4>
                      <p className="text-sm text-muted-foreground">&lt; 2.5s</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">INP</h4>
                      <p className="text-sm text-muted-foreground">&lt; 200ms</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">CLS</h4>
                      <p className="text-sm text-muted-foreground">&lt; 0.1</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Outils utiles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/articles/google-pagespeed-insights">
                      <a className="block text-sm hover:text-primary transition-colors" data-testid="link-article-perf">
                        Article PageSpeed →
                      </a>
                    </Link>
                    <a href="https://pagespeedinsights.web.dev" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-primary transition-colors" data-testid="link-psi">
                      PageSpeed Insights →
                    </a>
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
