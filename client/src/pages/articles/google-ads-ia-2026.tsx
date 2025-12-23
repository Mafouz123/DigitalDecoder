import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, Zap, TrendingUp, Shield } from "lucide-react";
import { Link } from "wouter";
import articleHero from "@assets/generated_images/ai_automation_for_digital_marketing.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ArticleGoogleAds() {
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
              alt="Google Ads IA 2026" 
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
                <Badge className="bg-red-600 hover:bg-red-700 text-white border-none px-3 py-1 text-sm">Marketing 2026</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">Automatisation IA</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                L'ère de l'autonomie : <br className="hidden md:block" />
                Maîtriser l'IA de Google Ads en 2026
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-red-600/25 backdrop-blur-md rounded-lg p-4 border border-red-400/30">
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <User className="w-5 h-5" />
                  <span>Équipe Marketing</span>
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
                  En 2026, Google Ads n'est plus l'outil des gestionnaires d'enchères. C'est la plateforme des <strong>stratèges de données</strong> qui savent diriger l'IA sans la laisser dériver.
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
                  <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">La fin des mots-clés exacts (presque)</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Les mots-clés? Oui, ils existent toujours. Mais leur importance a fondu. Google Ads 2026 fonctionne sur la <strong>compréhension sémantique</strong>. Vous dites "j'ai un logiciel de gestion de projet", Google comprend que vous ciblez les PM, les équipes agiles, les startups tech.
                </p>

                <p className="text-lg leading-relaxed">
                  La Search Generative Experience (SGE) pousse cette logique loin. L'IA ne cherche plus vos mots-clés exacts, elle comprend l'intention de la requête. Elle sait que quelqu'un qui tape "comment booster ma productivité" cherche exactement votre solution.
                </p>

                <Card className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-red-900 dark:text-red-100 mb-2">L'avantage stratégique</p>
                        <p className="text-red-800 dark:text-red-200">
                          Au lieu de spammer des variantes de mots-clés, focalisez-vous sur votre proposition de valeur. C'est VOTRE message qui prime, pas les termes magiques.
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
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">La bataille de la "First-Party Data"</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Les cookies tiers ? Ils sont morts. Officiellement. Les régie publicitaires dorment debout, mais Google Ads 2026 résout le problème différemment : avec vos propres données.
                </p>

                <p className="text-lg leading-relaxed">
                  Votre CRM, votre liste d'emails, vos données de navigation... C'est de l'or. Google Ads prend vos audiences (Customer Match) et les nourrit à son IA. Résultat : un ciblage hyper-précis sans cookies tiers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Customer Match</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Importer vos listes CRM pour des audiences de haute qualité</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Conversion API</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Tracker les conversions côté serveur pour plus de fiabilité</p>
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">L'IA génère, l'humain arbitre</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Google Ads génère désormais des vidéos, des visuels, des textes d'annonce à la volée. Vous donnez une brief, l'IA crée 30 variations. Mais là, le rôle de l'humain devient crucial.
                </p>

                <p className="text-lg leading-relaxed">
                  La <strong>Brand Safety</strong> n'a jamais été aussi importante. L'IA peut générer du contenu hors-marque ou dangereux. Le marketeur 2026 est un validateur de contenu, pas un créateur. C'est un changement profond.
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Validez le tone of voice généré par l'IA</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Rejetez les variantes qui ne correspond pas à votre marque</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Supervisez les campagnes Performance Max</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Ajustez les budgets et priorités stratégiques</span>
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
                className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 rounded-lg p-8 border border-red-200 dark:border-red-800"
              >
                <h3 className="text-2xl font-bold mb-4">Maximisez votre ROI avec l'IA</h3>
                <p className="text-muted-foreground mb-6">
                  Découvrez notre tutoriel complet pour configurer les campagnes Google Ads 2026.
                </p>
                <Link href="/tutorials/google-ads-ia">
                  <a className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors" data-testid="link-tutorial">
                    Voir le tutoriel →
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
                      <h4 className="font-semibold mb-1">Paradigme</h4>
                      <p className="text-sm text-muted-foreground">De gestionnaire à stratège</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Priorité #1</h4>
                      <p className="text-sm text-muted-foreground">First-Party Data</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Compétence clé</h4>
                      <p className="text-sm text-muted-foreground">Brand Safety & Validation</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ressources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/tutorials/google-ads-ia">
                      <a className="block text-sm hover:text-primary transition-colors" data-testid="link-tutorial-ads">
                        Tutoriel Google Ads →
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="block text-sm hover:text-primary transition-colors" data-testid="link-contact-ads">
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
