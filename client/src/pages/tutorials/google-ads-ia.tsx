import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, CheckCircle2, Zap, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import tutorialHero from "@assets/generated_images/ai-powered_google_ads_campaigns.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TutorialGoogleAds() {
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
              alt="Google Ads IA" 
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
                <Badge className="bg-red-600 hover:bg-red-700 text-white border-none px-3 py-1 text-sm">Tutoriel</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">IA Générative</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                Google Ads & IA générative <br className="hidden md:block" />
                pour campagnes 2026
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-red-600/25 backdrop-blur-md rounded-lg p-4 border border-red-400/30">
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <User className="w-5 h-5" />
                  <span>Équipe Marketing</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span>20 min</span>
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
                  Découvrez comment configurer une campagne Google Ads 2026 avec l'automatisation avancée et la génération IA de créatifs.
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
                  <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 font-bold text-lg">
                    1
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Préparez vos données first-party</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Avant de lancer votre campagne, récoltez vos données clients. C'est l'or noir de Google Ads 2026.
                </p>

                <Card className="border-red-200 dark:border-red-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Données essentielles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>Liste d'emails (CRM)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>IDs utilisateurs anonymes (Customer IDs)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>Historique de conversions (ventes, leads)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>Événements de site (pages visitées, durée de session)</span>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  Plus l'IA a de données, plus elle crée des audiences de qualité et des prédictions justes.
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
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600 font-bold text-lg">
                    2
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Créez votre audience avec Customer Match</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Allez dans Google Ads → Audiences → Customer Match. Importez votre liste d'emails ou IDs clients.
                </p>

                <div className="bg-slate-900 dark:bg-slate-800 text-slate-50 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <code>{`Étapes :
1. Sélectionnez la source (email, IDs clients)
2. Téléchargez votre liste (CSV)
3. Google anonymise et fait matcher
4. Créez votre audience personnalisée`}</code>
                </div>

                <Card className="border-orange-200 dark:border-orange-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Avantages du Customer Match</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>✓ Ciblage hyper-précis sans cookies tiers</p>
                    <p>✓ Retargeting de vos meilleurs clients</p>
                    <p>✓ Look-alike audiences (trouver des clones)</p>
                    <p>✓ Complètement conforme RGPD</p>
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
                  <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900 text-yellow-600 font-bold text-lg">
                    3
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Lancez une campagne Performance Max</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Performance Max est le type de campagne le plus automatisé. Vous donnez une brief créative, l'IA génère des variations et teste à grande échelle.
                </p>

                <div className="space-y-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Paramétrages clés</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>• Objectif : Ventes ou Leads</p>
                      <p>• Budget : Laissez Google optimiser</p>
                      <p>• Audiences : Votre Customer Match</p>
                      <p>• Assets : Fournissez logos, textes, images</p>
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
                  <h2 className="text-3xl font-heading font-bold">Validez les créatifs générés par l'IA</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  L'IA génère du contenu. VOTRE RÔLE : le valider. C'est la Brand Safety.
                </p>

                <Card className="border-purple-200 dark:border-purple-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Votre checklist de validation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-2">
                      <Zap className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span>Le message correspond à votre brand voice ?</span>
                    </div>
                    <div className="flex gap-2">
                      <Zap className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span>Les images et vidéos sont appropriées ?</span>
                    </div>
                    <div className="flex gap-2">
                      <Zap className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span>Pas de contenu controversé ou hors-marque ?</span>
                    </div>
                    <div className="flex gap-2">
                      <Zap className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span>Les CTA sont clairs et irrésistibles ?</span>
                    </div>
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
                  <h2 className="text-3xl font-heading font-bold">Monitore avec les dashboards prédictifs</h2>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Google Ads montre maintenant des projections : "Si vous continuez comme ça, vous allez faire X conversions ce mois."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">ROAS Prédictif</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Estimation du retour sur investissement basée sur les tendances</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Opportunités d'optimisation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Google vous propose d'augmenter le budget si ROI est bon</p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg leading-relaxed mt-6">
                  Basez vos décisions sur ces insights, pas sur la dépense brute.
                </p>
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
                <h3 className="text-2xl font-bold mb-4">Prêt à lancer votre première campagne ?</h3>
                <p className="text-muted-foreground mb-6">
                  Notre équipe peut vous aider à optimiser votre budget et vos audiences. Consultation gratuite.
                </p>
                <Link href="/contact">
                  <a className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors" data-testid="link-contact-ads-tuto">
                    Parlons stratégie →
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
                    <CardTitle>Checklist campagne</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-2">
                      <input type="checkbox" className="w-5 h-5 accent-primary" />
                      <span className="text-sm">Données first-party prêtes</span>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="w-5 h-5 accent-primary" />
                      <span className="text-sm">Audience Customer Match créée</span>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="w-5 h-5 accent-primary" />
                      <span className="text-sm">Créatifs validés</span>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="w-5 h-5 accent-primary" />
                      <span className="text-sm">Conversion tracking en place</span>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="w-5 h-5 accent-primary" />
                      <span className="text-sm">Budget alloué</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ressources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/articles/google-ads-ia-2026">
                      <a className="block text-sm hover:text-primary transition-colors" data-testid="link-article-ads-tuto">
                        Article Google Ads →
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="block text-sm hover:text-primary transition-colors" data-testid="link-contact-resource">
                        Consultation →
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
