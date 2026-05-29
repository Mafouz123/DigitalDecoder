import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { ArrowLeft, Clock, User, Tag, CheckCircle2, ArrowRight, Zap, Code, Layers, Smartphone, Rocket, Puzzle, Brain, PenTool } from "lucide-react";
import { Link } from "wouter";
import articleHero from "@assets/generated_images/nocode_lowcode_guide_2026.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ArticleNoCodeLowCode() {
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
              alt="No-Code et Low-Code Guide 2026" 
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
                <Badge className="bg-teal-600 hover:bg-teal-700 text-white border-none px-3 py-1 text-sm">No-Code</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">Développement</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                No-Code & Low-Code : <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Créer des Apps sans Coder — Le Guide 2026</span>
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-teal-600/25 backdrop-blur-md rounded-lg p-4 border border-teal-400/30">
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
                <div className="bg-secondary/30 border-l-4 border-teal-500 p-6 rounded-r-xl mb-8">
                  <p className="text-xl font-medium leading-relaxed text-foreground italic m-0">
                    "En 2026, créer une application web, un SaaS ou un marketplace ne prend plus 6 mois et 50 000€. Avec No-Code et Low-Code, vous le faites en 6 semaines et 500€. La démocratisation du développement est en marche."
                  </p>
                </div>

                <p>
                  L'idée que seuls les développeurs peuvent créer des applications est révolue. Aujourd'hui, les entrepreneurs, les marketeurs, les designers et même les RH construisent des outils digitaux puissants sans écrire une ligne de code. C'est la révolution du <strong>No-Code</strong> et du <strong>Low-Code</strong>.
                </p>
                <p>
                  Mais attention : <em>No-Code ne veut pas dire No-Brain.</em> Il faut comprendre la logique, l'architecture et les limites. Chez <strong>Décoder le digital</strong>, on vous explique tout — sans jargon.
                </p>
              </motion.div>

              {/* Section 1: C'est quoi ? */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900 text-teal-600">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">I. No-Code vs Low-Code : La différence claire</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-teal-50/50 dark:bg-teal-900/10 border border-teal-200/50 dark:border-teal-900/50">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Puzzle className="w-5 h-5 text-teal-600" />
                        No-Code
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">
                        <strong>Zero ligne de code.</strong> Vous assemblez des blocs visuels, des workflows et des connecteurs. Idéal pour les entrepreneurs, les PME et les équipes non-techniques.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="font-semibold text-teal-700 dark:text-teal-400">Exemples :</p>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• <strong>Webflow</strong> — Sites web et landing pages</li>
                          <li>• <strong>Bubble</strong> — Applications web complexes</li>
                          <li>• <strong>Notion + Super</strong> — Sites de documentation</li>
                          <li>• <strong>Make (ex Integromat)</strong> — Automatisations</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-cyan-50/50 dark:bg-cyan-900/10 border border-cyan-200/50 dark:border-cyan-900/50">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Code className="w-5 h-5 text-cyan-600" />
                        Low-Code
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">
                        <strong>Peu de code, beaucoup de vitesse.</strong> Vous utilisez des interfaces visuelles pour 80% du travail, mais vous pouvez injecter du code pour les cas complexes. Idéal pour les développeurs et les équipes tech.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="font-semibold text-cyan-700 dark:text-cyan-400">Exemples :</p>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• <strong>FlutterFlow</strong> — Apps mobiles (iOS/Android)</li>
                          <li>• <strong>Retool</strong> — Outils internes d'entreprise</li>
                          <li>• <strong>OutSystems</strong> — Apps enterprise</li>
                          <li>• <strong>Replit Agent</strong> — Prototypage rapide</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Vibe Coding : Le cousin proche
                  </h3>
                  <p className="text-amber-800 dark:text-amber-200">
                    Le <strong>Vibe Coding</strong> (que nous avons déjà couvert dans un article précédent) est une forme de Low-Code où vous décrivez ce que vous voulez en langage naturel, et l'IA (comme Replit Agent, Cursor, ou GitHub Copilot) génère le code. C'est le futur du développement assisté.
                  </p>
                </div>
              </motion.section>

              {/* Section 2: Comparatif */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">II. Quel outil pour quel projet ?</h2>
                </div>

                <div className="rounded-xl border border-border overflow-hidden shadow-sm">
                  <Table>
                    <TableHeader className="bg-secondary/50">
                      <TableRow>
                        <TableHead className="font-bold text-primary">Type de Projet</TableHead>
                        <TableHead className="font-bold">Outil Recommandé</TableHead>
                        <TableHead className="font-bold">Complexité</TableHead>
                        <TableHead className="font-bold">Coût Estimé</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Site vitrine / Portfolio</TableCell>
                        <TableCell>Webflow, Framer</TableCell>
                        <TableCell>Facile</TableCell>
                        <TableCell>14-50€/mois</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Landing page</TableCell>
                        <TableCell>Webflow, Carrd</TableCell>
                        <TableCell>Très facile</TableCell>
                        <TableCell>0-19€/mois</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">App SaaS / Marketplace</TableCell>
                        <TableCell>Bubble, FlutterFlow</TableCell>
                        <TableCell>Moyenne</TableCell>
                        <TableCell>29-155€/mois</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">App Mobile (iOS/Android)</TableCell>
                        <TableCell>FlutterFlow, Adalo</TableCell>
                        <TableCell>Moyenne</TableCell>
                        <TableCell>50-150€/mois</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Outil interne (CRM, Dashboard)</TableCell>
                        <TableCell>Retool, Softr</TableCell>
                        <TableCell>Facile</TableCell>
                        <TableCell>0-50€/mois</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Automatisations workflows</TableCell>
                        <TableCell>Make, Zapier</TableCell>
                        <TableCell>Facile</TableCell>
                        <TableCell>9-50€/mois</TableCell>
                      </TableRow>
                      <TableRow>
                      <TableCell className="font-medium">Blog / Newsletter</TableCell>
                        <TableCell>Notion + Super, Ghost</TableCell>
                        <TableCell>Très facile</TableCell>
                        <TableCell>0-25€/mois</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </motion.section>

              {/* Section 3: Avantages */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">III. Pourquoi le No-Code explose en 2026</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-background border border-border hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Vitesse de Déploiement
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Un MVP qui prenait 6 mois se construit en 6 semaines. Les feedbacks utilisateurs arrivent plus tôt, les itérations sont plus rapides, et le time-to-market est divisé par 5.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background border border-border hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">
                        <PenTool className="w-5 h-5" />
                        Démocratisation
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Les designers, marketeurs et chefs de projet peuvent prototyper et lancer sans dépendre des équipes de dev. L'autonomie crée l'agilité.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background border border-border hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Coût Réduit
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Un développeur senior coûte 400-800€/jour. Un abonnement No-Code coûte 50-150€/mois. Le ROI est évident, surtout pour les startups et PME.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background border border-border hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">
                        <Layers className="w-5 h-5" />
                        Scalabilité Contrôlée
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Commencez petit, validez votre idée, puis passez au Low-Code ou au code natif quand la traction est prouvée. Pas de sur-ingénierie dès le départ.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.section>

              {/* Section 4: Limites */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600">
                    <Code className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">IV. Les limites à connaître</h2>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-2xl p-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    Le No-Code n'est pas une baguette magique. Voici quand il ne suffit pas :
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-bold">Scalabilité massive (&gt;100k utilisateurs)</h4>
                        <p className="text-sm text-muted-foreground">Quand la charge devient énorme, le code natif reste plus performant et moins cher à l'échelle.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-bold">Customisation très spécifique</h4>
                        <p className="text-sm text-muted-foreground">Si votre besoin sort des "templates" classiques, vous serez bloqué par les limites de la plateforme.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-bold">Dépendance à la plateforme</h4>
                        <p className="text-sm text-muted-foreground">Vous êtes lié à l'éditeur. Si l'outil ferme ou augmente ses prix, la migration peut être coûteuse.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-bold">Sécurité avancée</h4>
                        <p className="text-sm text-muted-foreground">Pour des données sensibles (santé, finance), le code natif avec audit de sécurité est souvent requis.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-lg text-foreground">
                    <strong>La règle d'or :</strong> No-Code pour valider et lancer rapidement. Low-Code pour scaler. Code natif pour dominer à l'échelle mondiale.
                  </p>
                </div>
              </motion.section>

              {/* Section 5: Roadmap */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-8 pt-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">V. Votre Roadmap de lancement (30 jours)</h2>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Semaine 1 : Idée et Validation",
                      desc: "Définissez votre problème, votre cible et votre solution. Créez un wireframe sur papier ou Figma. Ne touchez pas encore d'outil No-Code. Validez avec 5 potentiels utilisateurs."
                    },
                    {
                      title: "Semaine 2 : Choix de l'Outil & Prototype",
                      desc: "Sélectionnez votre plateforme selon notre tableau comparatif. Construisez le MVP (Minimum Viable Product) avec les fonctionnalités essentielles uniquement. Pas de fioritures."
                    },
                    {
                      title: "Semaine 3 : Tests et Itérations",
                      desc: "Faites tester par 10 utilisateurs. Notez les blocages. Corrigez. Ajoutez les 2-3 fonctionnalités les plus demandées. Pas plus."
                    },
                    {
                      title: "Semaine 4 : Lancement et Growth",
                      desc: "Lancez sur votre audience. Activez les analytics. Mesurez les KPIs (inscriptions, retention, conversion). Préparez la roadmap V2."
                    }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 font-bold border border-teal-500/20">
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
              <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl p-8 text-center space-y-4 border border-teal-500/10">
                <Rocket className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold">Le pouvoir est entre vos mains</h3>
                <p className="text-lg text-muted-foreground">
                  Le No-Code et le Low-Code ont démocratisé le développement. En 2026, ne vous dites plus "je ne sais pas coder". Dites "je sais quel outil utiliser pour mon projet". Et lancez-vous.
                </p>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full font-bold shadow-lg shadow-teal-500/20">
                      Lancer votre projet avec nous
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
                   <div className="w-24 h-24 mx-auto bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-inner">
                     SA
                   </div>
                   <div>
                     <h3 className="font-bold text-lg">SANNI ALIDOU Mafouzou</h3>
                     <p className="text-sm text-muted-foreground">Ingénieur Full-Stack & No-Code</p>
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
                  <Link href="/articles/vibe-coding" className="block group">
                    <div className="flex gap-3 items-start">
                      <div className="w-20 h-20 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                         <div className="w-full h-full bg-secondary"></div>
                      </div>
                      <div>
                         <h5 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">Vibe Coding : Quand l'IA donne le La</h5>
                         <p className="text-xs text-muted-foreground mt-1">25 Nov • 4 min</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="/articles/deepseek-designers" className="block group">
                     <div className="flex gap-3 items-start">
                      <div className="w-20 h-20 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                         <div className="w-full h-full bg-secondary"></div>
                      </div>
                      <div>
                         <h5 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">DeepSeek pour les Designers</h5>
                         <p className="text-xs text-muted-foreground mt-1">Déc 2025 • 10 min</p>
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
