import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, CheckCircle2, Zap, Network } from "lucide-react";
import { Link } from "wouter";
import tutorialHero from "@assets/generated_images/seo_spider_crawler_analysis.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TutorialScreamingFrog() {
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
              alt="Screaming Frog" 
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
                <Badge className="bg-teal-600 hover:bg-teal-700 text-white border-none px-3 py-1 text-sm">Tutoriel</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">SEO Technique</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                Screaming Frog SEO Spider <br className="hidden md:block" />
                & Analyse IA avancée
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-teal-600/25 backdrop-blur-md rounded-lg p-4 border border-teal-400/30">
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <User className="w-5 h-5" />
                  <span>Équipe SEO Technique</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span>25 min</span>
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
                  Screaming Frog n'est plus juste un crawler. C'est un <strong>outil stratégique d'IA</strong> pour transformer vos audits techniques en opportunités SEO exploitables.
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
                  <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900 text-teal-600 font-bold text-lg">
                    1
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Installation et configuration avancée</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Téléchargez Screaming Frog (version payante pour crawl illimité). Lancez une analyse avec les bons paramétrages.
                </p>

                <Card className="border-teal-200 dark:border-teal-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Paramétrages essentiels</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <span>Mode <strong>JavaScript</strong> activé (pour sites modernes)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <span>Crawl <strong>Mobile-first</strong> (Google se soucie du mobile)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <span>Fetch <strong>API endpoints</strong> (pour Single Page Apps)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <span>Exporter en <strong>CSV</strong> pour analyse ultérieure</span>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  Une bonne config = audit stratégique plutôt que bruit.
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
                  <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900 text-cyan-600 font-bold text-lg">
                    2
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Exécutez votre crawl (et soyez patient)</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Lancez le crawl. Pour un gros site (10k+ pages), ça prend du temps. Screaming Frog explore tous les liens, télécharge les ressources, exécute le JavaScript.
                </p>

                <Card className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <Network className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Pendant ce temps</p>
                        <p className="text-cyan-800 dark:text-cyan-200">
                          L'outil construit une représentation complète de votre architecture. Erreurs 404, redirections cassées, chaînes de redirection, robots.txt, sitemap.xml...
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold text-lg">
                    3
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Détectez les erreurs critiques</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Screaming Frog montre les problèmes dans des onglets clairement catégorisés.
                </p>

                <div className="space-y-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🔴 Erreurs (priorité absolue)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>• Codes 404 / 410 sur pages importantes</p>
                      <p>• Chaînes de redirections (A → B → C)</p>
                      <p>• Contenus dupliqués (sans canonicals)</p>
                      <p>• Métadonnées manquantes</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🟡 Avertissements (important)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>• Titres dupliqués ou trop courts</p>
                      <p>• Meta descriptions manquantes</p>
                      <p>• Images sans alt text</p>
                      <p>• Pages trop lentes</p>
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
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600 font-bold text-lg">
                    4
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Exportez et alimentez l'IA</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  C'est là que la magie opère. Exportez vos données en CSV.
                </p>

                <div className="bg-slate-900 dark:bg-slate-800 text-slate-50 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <code>{`Données à exporter :
- URL
- Statut HTTP
- Titre (title tag)
- Meta description
- H1
- Temps de chargement
- Taille de page`}</code>
                </div>

                <p className="text-lg leading-relaxed mt-6">
                  Téléchargez ce CSV dans un outil d'IA (ChatGPT, Claude, Gemini) et posez des questions stratégiques.
                </p>

                <Card className="border-purple-200 dark:border-purple-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Exemples de questions IA</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>📊 "Quels clusters de contenu devrais-je créer ?"</p>
                    <p>🎯 "Où sont mes opportunités de mots-clés non-explorées ?"</p>
                    <p>⚡ "Quelles pages améliorer pour le trafic organique ?"</p>
                    <p>🔗 "Quelles pages orphelines reconnecter ?"</p>
                  </CardContent>
                </Card>
              </motion.section>

              {/* Step 5 */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 font-bold text-lg">
                    5
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Priorisez et exécutez</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Le crawler vous donne les données. L'IA vous donne la stratégie. À vous de la mettre en œuvre.
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Semaine 1</strong> : Fixer les 404 critiques et chaînes de redirections</span>
                  </li>
                  <li className="flex gap-3">
                    <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Semaine 2-3</strong> : Améliorer les métadonnées (titres, descriptions)</span>
                  </li>
                  <li className="flex gap-3">
                    <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Semaine 4+</strong> : Créer du contenu sur les opportunités identifiées</span>
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
                className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 rounded-lg p-8 border border-teal-200 dark:border-teal-800"
              >
                <h3 className="text-2xl font-bold mb-4">Audit technique complet avec IA ?</h3>
                <p className="text-muted-foreground mb-6">
                  Nous analysons votre site et créons une roadmap SEO actionnable. Consultation gratuite pour les 10 premiers.
                </p>
                <Link href="/contact">
                  <a className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors" data-testid="link-contact-frog">
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
                    <CardTitle>Workflow d'audit</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-2">
                      <span className="font-bold text-teal-600">1</span>
                      <span className="text-sm">Crawl du site</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-teal-600">2</span>
                      <span className="text-sm">Identification erreurs</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-teal-600">3</span>
                      <span className="text-sm">Export de données</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-teal-600">4</span>
                      <span className="text-sm">Analyse IA</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-teal-600">5</span>
                      <span className="text-sm">Roadmap stratégique</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ressources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/articles/google-pagespeed-insights">
                      <a className="block text-sm hover:text-primary transition-colors" data-testid="link-article-frog-perf">
                        Performance SEO →
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="block text-sm hover:text-primary transition-colors" data-testid="link-contact-consultation">
                        Consultation gratuite →
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
