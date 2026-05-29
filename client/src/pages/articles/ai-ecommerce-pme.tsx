import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { ArrowLeft, Clock, User, Tag, CheckCircle2, ArrowRight, Zap, ShoppingCart, TrendingUp, Bot, CreditCard, BarChart3, Globe, Shield } from "lucide-react";
import { Link } from "wouter";
import articleHero from "@assets/generated_images/ai_ecommerce_pme_2026.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ArticleEcommerceAI() {
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
              alt="IA et E-commerce pour les PME" 
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
                <Badge className="bg-primary hover:bg-primary/90 text-white border-none px-3 py-1 text-sm">E-commerce</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">Intelligence Artificielle</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                L'IA dans l'E-commerce : <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Comment les PME doublent leurs ventes en 2026</span>
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-purple-600/25 backdrop-blur-md rounded-lg p-4 border border-purple-400/30">
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <User className="w-5 h-5" />
                  <span>SANNI ALIDOU Mafouzou</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span>10 min</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Tag className="w-5 h-5" />
                  <span>29 Mai 2026</span>
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
                <div className="bg-secondary/30 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                  <p className="text-xl font-medium leading-relaxed text-foreground italic m-0">
                    "En 2026, les PME qui intègrent l'IA dans leur e-commerce ne font pas juste +20% — elles doublent leurs ventes. La différence ? Elles ne vendent plus à des inconnus, mais à des clients que l'IA connaît mieux qu'eux-mêmes."
                  </p>
                </div>

                <p>
                  Le e-commerce en 2026 n'est plus un site web avec un panier. C'est un écosystème intelligent où chaque interaction est personnalisée en temps réel. Les PME qui pensent encore que l'IA est réservée aux géants comme Amazon se trompent lourdement. Aujourd'hui, les outils sont accessibles, abordables et surtout <strong>déployables en quelques jours</strong>.
                </p>
                <p>
                  Chez <strong>Décoder le digital</strong>, nous avons analysé les stratégies des PME qui explosent leurs chiffres en 2026. Voici ce qu'elles font différemment.
                </p>
              </motion.div>

              {/* Section 1: Le contexte */}
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
                  <h2 className="text-3xl font-heading font-bold">I. L'e-commerce 2026 : Ce qui a changé</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  Trois tendances majeures redéfinissent le commerce en ligne cette année :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-secondary/20 border-none shadow-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <Bot className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Chatbots IA Générative</h4>
                      <p className="text-sm text-muted-foreground">
                        Les chatbots ne répondent plus juste aux FAQ. Ils conseillent, upsellent et résolvent des problèmes complexes en temps réel. Taux de conversion multiplié par 2-3.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/20 border-none shadow-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Social Commerce Explosif</h4>
                      <p className="text-sm text-muted-foreground">
                        Instagram, TikTok et WhatsApp sont devenus des supermarchés. L'achat se fait sans quitter l'app. Les PME africaines et françaises y voient un canal de croissance majeur.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/20 border-none shadow-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <BarChart3 className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Prédiction du Comportement</h4>
                      <p className="text-sm text-muted-foreground">
                        L'IA anticipe ce que le client va acheter avant qu'il ne le sache. Ruptures de stock évitées, offres ciblées envoyées au moment exact.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.section>

              {/* Section 2: Les 5 leviers IA */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">II. Les 5 leviers IA qui doublent les ventes</h2>
                </div>

                <div className="space-y-6">
                  {/* Levier 1 */}
                  <Card className="border border-border hover:shadow-lg transition-all">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg">1</span>
                        Recommandation Personnalisée Intelligente
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">
                        Amazon a fait 35% de ses ventes via ses recommandations. En 2026, des outils comme <strong>Algolia</strong>, <strong>Nosto</strong> ou des solutions open-source rendent cette capacité accessible aux PME pour moins de 50€/mois.
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-900">
                        <p className="text-sm text-green-800 dark:text-green-300">
                          <strong>Impact constaté :</strong> +40% de panier moyen chez les PME utilisant la recommandation IA.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Levier 2 */}
                  <Card className="border border-border hover:shadow-lg transition-all">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg">2</span>
                        Chatbots et Vendeurs IA Virtuels
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">
                        Un chatbot IA générative (comme ceux basés sur GPT-4o ou Gemini) peut gérer 80% des conversations clients. Il ne remplace pas l'humain, mais libère votre équipe pour les cas complexes.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                          <span>Réponses instantanées 24/7</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                          <span>Conseils de produits personnalisés</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                          <span>Résolution des objections d'achat en temps réel</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Levier 3 */}
                  <Card className="border border-border hover:shadow-lg transition-all">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg">3</span>
                        Tarification Dynamique
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">
                        L'IA analyse la demande, la concurrence, les saisons et ajuste les prix automatiquement. Pas de surprix — juste une optimisation des marges. Les hôtels et compagnies aériennes le font depuis des années. En 2026, les PME l'adoptent.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Levier 4 */}
                  <Card className="border border-border hover:shadow-lg transition-all">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg">4</span>
                        Marketing Prédictif et Email IA
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">
                        L'IA envoie des emails au moment précis où chaque client est le plus susceptible d'ouvrir. Elle génère les sujets, le contenu et le timing. Des outils comme <strong>Mailchimp</strong> (Customer Journey Builder) et <strong>Brevo</strong> intèrent déjà ces fonctionnalités.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Levier 5 */}
                  <Card className="border border-border hover:shadow-lg transition-all">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg">5</span>
                        Génération Automatique de Contenu Produit
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">
                        Des descriptions de produits uniques, SEO-friendly et persuasives générées en secondes. L'IA adapte le ton (premium, accessible, technique) à votre audience. Gain de temps : 90% sur la rédaction de fiches produit.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.section>

              {/* Section 3: Tableau comparatif */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">III. Avant / Après : L'impact de l'IA sur le e-commerce</h2>
                </div>

                <div className="rounded-xl border border-border overflow-hidden shadow-sm">
                  <Table>
                    <TableHeader className="bg-secondary/50">
                      <TableRow>
                        <TableHead className="font-bold text-primary">Métrique</TableHead>
                        <TableHead className="font-bold">Sans IA</TableHead>
                        <TableHead className="font-bold text-primary">Avec IA</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Taux de conversion</TableCell>
                        <TableCell>1.5 - 2.5%</TableCell>
                        <TableCell className="font-medium text-green-600">3.5 - 5.0%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Panier moyen</TableCell>
                        <TableCell>Baseline</TableCell>
                        <TableCell className="font-medium text-green-600">+40% (recommandation IA)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Temps de réponse client</TableCell>
                        <TableCell>4 - 24h</TableCell>
                        <TableCell className="font-medium text-green-600">Instantané</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Taux d'abandon panier</TableCell>
                        <TableCell>70 - 75%</TableCell>
                        <TableCell className="font-medium text-green-600">50 - 60%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Coût d'acquisition client</TableCell>
                        <TableCell>Élevé</TableCell>
                        <TableCell className="font-medium text-green-600">-30% (ciblage IA)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Fidélisation (LTV)</TableCell>
                        <TableCell>Moyenne</TableCell>
                        <TableCell className="font-medium text-green-600">+60% (personnalisation)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </motion.section>

              {/* Section 4: Roadmap */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-8 pt-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">IV. Votre Roadmap de 30 jours</h2>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Semaine 1 : Audit et Base",
                      desc: "Analysez vos données actuelles (Google Analytics, ventes). Identifiez le point de friction #1 : est-ce l'abandon panier, le manque de trafic, ou le service client ? Installez un chatbot IA basique (Tidio, Crisp, ou Chatbase)."
                    },
                    {
                      title: "Semaine 2 : Recommandation",
                      desc: "Intégrez un moteur de recommandation produit. Même simple : 'Les clients ont aussi acheté...'. Testez sur vos 10 produits phares."
                    },
                    {
                      title: "Semaine 3 : Email Marketing IA",
                      desc: "Utilisez l'IA pour rédiger vos campagnes email. Testez 3 sujets différents générés par IA. Mesurez le taux d'ouverture."
                    },
                    {
                      title: "Semaine 4 : Contenu et SEO",
                      desc: "Générez des descriptions de produits optimisées SEO avec l'IA. Mettez à jour vos 20 produits les plus vus."
                    }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold border border-accent/20">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              <Separator />

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-8 text-center space-y-4 border border-primary/10">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold">Le moment de passer à l'action</h3>
                <p className="text-lg text-muted-foreground">
                  L'IA dans le e-commerce n'est plus un avantage compétitif — c'est une nécessité de survie. Les PME qui attendent 2027 seront déjà distancées. Commencez par un seul levier cette semaine.
                </p>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full font-bold shadow-lg shadow-primary/20">
                      Discuter de votre projet e-commerce
                    </Button>
                  </Link>
                </div>
              </div>

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
                     <p className="text-sm text-muted-foreground">Ingénieur Growth & E-commerce</p>
                   </div>
                   <p className="text-sm text-muted-foreground italic">
                     "Je vous aide à naviguer dans la complexité du digital pour en tirer le meilleur."
                   </p>
                   <a href="https://www.linkedin.com/in/mafouz-sanni-98704b393?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">
                     <Button variant="outline" className="w-full rounded-full">Suivre sur LinkedIn</Button>
                   </a>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Articles Similaires</h4>
                <div className="space-y-4">
                  <Link href="/articles/google-ads-ia-2026" className="block group">
                    <div className="flex gap-3 items-start">
                      <div className="w-20 h-20 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                         <div className="w-full h-full bg-secondary"></div>
                      </div>
                      <div>
                         <h5 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">L'ère de l'autonomie : Google Ads & IA 2026</h5>
                         <p className="text-xs text-muted-foreground mt-1">23 Déc • 10 min</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="/articles/ia-30-min" className="block group">
                     <div className="flex gap-3 items-start">
                      <div className="w-20 h-20 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                         <div className="w-full h-full bg-secondary"></div>
                      </div>
                      <div>
                         <h5 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">L'IA en 30 minutes par jour</h5>
                         <p className="text-xs text-muted-foreground mt-1">30 Nov • 5 min</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </article>
      </main>
    </div>
  );
}
