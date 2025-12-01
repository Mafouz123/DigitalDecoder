import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, CheckCircle2, ArrowRight, Target, TrendingUp, Zap, BookOpen, Download } from "lucide-react";
import { Link } from "wouter";
import tutorialHero from "@assets/generated_images/seo_strategy_guide_concept.png";
import funnelImage from "@assets/generated_images/seo_optimization_funnel.png";
import keywordImage from "@assets/generated_images/keyword_research_visualization.png";
import calendarImage from "@assets/generated_images/content_planning_calendar_concept.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TutorialSEO() {
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
              alt="SEO Strategy Guide" 
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
                <Badge className="bg-primary hover:bg-primary/90 text-white border-none px-3 py-1 text-sm">Tutoriel</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">SEO</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                Créer votre première <br className="hidden md:block" />
                Stratégie SEO en 7 jours
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-purple-600/25 backdrop-blur-md rounded-lg p-4 border border-purple-400/30">
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <User className="w-5 h-5" />
                  <span>SANNI ALIDOU Mafouzou</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span>12 min de lecture</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Tag className="w-5 h-5" />
                  <span>01 Dec 2025</span>
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
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Le SEO n'est pas une magie. C'est une <strong>stratégie progressive</strong> fondée sur des données et du travail structuré. Dans ce tutoriel, vous apprendrez à mettre en place une stratégie SEO efficace en 7 jours, même si vous débutez complètement.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous allons couvrir les fondamentaux, les outils gratuits, et un plan d'action pratique que vous pouvez appliquer immédiatement à votre site web.
                </p>
              </motion.div>

              {/* Overview */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Plan de ce tutoriel</h2>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 bg-secondary/40 rounded-lg border border-border">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-bold mb-1">Jour 1-2 : Audit SEO & Analyse</h4>
                      <p className="text-sm text-muted-foreground">Analyser votre site actuel, vérifier les erreurs techniques et comprendre votre position.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary/40 rounded-lg border border-border">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-bold mb-1">Jour 3-4 : Recherche de Mots-clés</h4>
                      <p className="text-sm text-muted-foreground">Identifier les mots-clés pertinents avec potentiel de trafic et faible compétition.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary/40 rounded-lg border border-border">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-bold mb-1">Jour 5-6 : Optimisation On-Page</h4>
                      <p className="text-sm text-muted-foreground">Optimiser vos pages pour les moteurs de recherche (titres, méta descriptions, contenu).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary/40 rounded-lg border border-border">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold shrink-0">4</div>
                    <div>
                      <h4 className="font-bold mb-1">Jour 7 : Plan d'Action Long-terme</h4>
                      <p className="text-sm text-muted-foreground">Créer un calendrier éditorial et un système de suivi pour le long terme.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Section 1 */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900 text-cyan-600">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Jour 1-2 : L'Audit SEO</h2>
                </div>

                <p className="text-lg text-muted-foreground">
                  Avant de commencer, vous devez comprendre où vous en êtes. Un audit SEO identifie les problèmes techniques qui empêchent Google de voir votre site correctement.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    Outils gratuits pour auditer votre site
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Google PageSpeed Insights</strong> - Analyse la vitesse et la performance mobile</li>
                    <li><strong>Google Search Console</strong> - Vérifie l'indexation et les erreurs</li>
                    <li><strong>Screaming Frog SEO Spider</strong> - Crawle votre site pour trouver les problèmes techniques</li>
                    <li><strong>Ubersuggest (version gratuite)</strong> - Analyse la concurrence et les backlinks</li>
                  </ul>
                </div>

                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={funnelImage} 
                    alt="SEO Funnel" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <Card className="bg-secondary/20 border-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Checklist d'Audit - Jour 1
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Vérifier la vitesse du site (PageSpeed Insights)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Analyser les erreurs dans Google Search Console</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Vérifier si le site est bien indexé</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Identifier les pages avec erreurs (404, redirections)</span>
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Jour 3-4 : Recherche de Mots-clés</h2>
                </div>

                <p className="text-lg text-muted-foreground">
                  Les mots-clés sont la fondation de toute stratégie SEO. L'objectif : trouver des mots-clés avec du potentiel de trafic mais peu de compétition.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-secondary/20 border-none">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3 text-primary">Mots-clés courts (3-4 mots)</h4>
                      <p className="text-sm text-muted-foreground mb-3">Volume élevé, très compétitifs</p>
                      <p className="text-sm font-mono bg-background/50 p-2 rounded">"SEO pour débutants"</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/20 border-none">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3 text-primary">Mots-clés longs (5+ mots)</h4>
                      <p className="text-sm text-muted-foreground mb-3">Volume faible, moins compétitifs</p>
                      <p className="text-sm font-mono bg-background/50 p-2 rounded">"Comment optimiser le SEO d'un blog"</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={keywordImage} 
                    alt="Keyword Research" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Matrice d'évaluation des mots-clés</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-border">
                          <TableHead>Mot-clé</TableHead>
                          <TableHead>Volume (par mois)</TableHead>
                          <TableHead>Difficulté</TableHead>
                          <TableHead>Potentiel</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-mono">SEO basique</TableCell>
                          <TableCell>8 200</TableCell>
                          <TableCell><span className="text-red-600 font-bold">Élevée</span></TableCell>
                          <TableCell>⭐⭐</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">Comment faire du SEO en 2025</TableCell>
                          <TableCell>320</TableCell>
                          <TableCell><span className="text-yellow-600 font-bold">Moyenne</span></TableCell>
                          <TableCell>⭐⭐⭐⭐</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">Guide complet SEO pour PME</TableCell>
                          <TableCell>45</TableCell>
                          <TableCell><span className="text-green-600 font-bold">Faible</span></TableCell>
                          <TableCell>⭐⭐⭐⭐⭐</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Jour 5-6 : Optimisation On-Page</h2>
                </div>

                <p className="text-lg text-muted-foreground">
                  L'optimisation on-page consiste à rendre votre contenu et votre HTML attrayants pour Google.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Éléments clés à optimiser</h3>
                  
                  <div className="space-y-3">
                    <div className="p-4 bg-secondary/40 rounded-lg border border-border">
                      <h4 className="font-bold mb-2">1️⃣ Balise Title (60 caractères max)</h4>
                      <p className="text-sm text-muted-foreground mb-2">❌ Mauvais: "Page d'accueil"</p>
                      <p className="text-sm text-green-600 font-semibold">✅ Bon: "SEO pour PME : Guide complet 2025 | Décoder le Digital"</p>
                    </div>

                    <div className="p-4 bg-secondary/40 rounded-lg border border-border">
                      <h4 className="font-bold mb-2">2️⃣ Meta Description (160 caractères max)</h4>
                      <p className="text-sm text-muted-foreground mb-2">❌ Mauvais: "À propos"</p>
                      <p className="text-sm text-green-600 font-semibold">✅ Bon: "Apprenez à optimiser le SEO de votre site en 7 jours. Guide complet avec outils gratuits et stratégies éprouvées."</p>
                    </div>

                    <div className="p-4 bg-secondary/40 rounded-lg border border-border">
                      <h4 className="font-bold mb-2">3️⃣ Contenu de qualité</h4>
                      <p className="text-sm text-muted-foreground">• Minimum 300 mots par page</p>
                      <p className="text-sm text-muted-foreground">• Utilisez votre mot-clé principal dans les 100 premiers mots</p>
                      <p className="text-sm text-muted-foreground">• Structurez avec H2, H3 (pas de saut entre les niveaux)</p>
                      <p className="text-sm text-muted-foreground">• Ajoutez des images avec attribut ALT descriptif</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Section 4 */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600">
                    <Download className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Jour 7 : Plan d'Action Long-terme</h2>
                </div>

                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={calendarImage} 
                    alt="Content Calendar" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Créez un calendrier éditorial</h3>
                  <p className="text-muted-foreground">
                    La constance est clé en SEO. Créez un plan pour publier régulièrement du contenu optimisé.
                  </p>

                  <Card className="bg-primary/5 border border-primary/20">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex gap-3">
                        <div className="text-2xl">📅</div>
                        <div>
                          <h4 className="font-bold">Modèle de calendrier</h4>
                          <p className="text-sm text-muted-foreground mt-1">• 1 article par semaine (4 par mois minimum)</p>
                          <p className="text-sm text-muted-foreground">• Planifiez 3 mois à l'avance</p>
                          <p className="text-sm text-muted-foreground">• Incluez des mots-clés dans votre planification</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.section>

              <Separator />

              {/* Conclusion */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-secondary/50 rounded-2xl p-8 text-center space-y-4"
              >
                <Target className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-heading font-bold">Prêt à commencer ?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Le SEO n'est pas compliqué - c'est du travail régulier et structuré. Suivez ce plan de 7 jours et vous verrez des résultats en 6-12 mois.
                </p>
                <div className="pt-4 space-y-2">
                  <p className="font-semibold">Avez des questions sur l'implémentation ?</p>
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full font-bold shadow-lg shadow-primary/20">
                      Me contacter pour une consultation
                    </Button>
                  </Link>
                </div>
              </motion.section>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Author Card */}
              <Card className="sticky top-24 border-none shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                   <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-inner">
                     SA
                   </div>
                   <div>
                     <h3 className="font-bold text-lg">SANNI ALIDOU Mafouzou</h3>
                     <p className="text-sm text-muted-foreground">Spécialiste SEO & Digital</p>
                   </div>
                   <p className="text-sm text-muted-foreground italic">
                     "Démystifier le digital pour le rendre accessible à tous."
                   </p>
                   <a href="https://www.linkedin.com/in/mafouz-sanni-98704b393?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">
                     <Button variant="outline" className="w-full rounded-full">Suivre sur LinkedIn</Button>
                   </a>
                </CardContent>
              </Card>

              {/* Quick Summary */}
              <Card className="bg-primary/5 border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">📌 Résumé rapide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-bold mb-1">Durée totale</h4>
                    <p className="text-muted-foreground">7 jours (2-3h par jour)</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Coût</h4>
                    <p className="text-muted-foreground">Gratuit (outils gratuits)</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Résultats attendus</h4>
                    <p className="text-muted-foreground">6-12 mois pour voir des résultats visibles</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Compétences requises</h4>
                    <p className="text-muted-foreground">Aucune - guide complet pour débutants</p>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </article>
      </main>
    </div>
  );
}