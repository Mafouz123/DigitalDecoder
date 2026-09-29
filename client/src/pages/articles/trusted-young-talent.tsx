import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, Users, TrendingUp, Lightbulb, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/young_developers_collaborating_on_digital_project.png";
import trendImage from "@assets/generated_images/rising_trend_of_young_tech_talent.png";
import mentoringImage from "@assets/generated_images/senior_mentoring_junior_developer.png";
import transformationImage from "@assets/generated_images/digital_transformation_and_ai_integration.png";
import trainingImage from "@assets/generated_images/professional_development_and_training.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Article4() {
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
              src={heroImage} 
              alt="Faire confiance aux jeunes développeurs" 
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
                <Badge className="bg-primary hover:bg-primary/90 text-white border-none px-3 py-1 text-sm">Ressources Humaines</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">Talent Management</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                La confiance envers les jeunes développeurs : <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">L'atout stratégique du futur</span>
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-purple-600/25 backdrop-blur-md rounded-lg p-4 border border-purple-400/30">
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <User className="w-5 h-5" />
                  <span>SANNI ALIDOU Mafouzou</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span>8 min</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Tag className="w-5 h-5" />
                  <span>01 Déc 2025</span>
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
                    "Les entreprises qui investissent dans les jeunes talents aujourd'hui construisent l'innovation de demain. C'est un choix stratégique, pas un pari."
                  </p>
                </div>

                <p>
                  Dans un marché du travail où l'IA transforme chaque jour nos méthodes de travail, les entreprises et recruteurs font face à une question cruciale : <strong>faut-il privilégier l'expérience ou la potentialité ?</strong>
                </p>
                <p>
                  La réponse, c'est les deux. Mais aujourd'hui, nous parlons de l'une des opportunités les plus sous-estimées du marché : <strong>les jeunes développeurs web et designers débutants à intermédiaires.</strong>
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
                  <h2 className="text-3xl font-heading font-bold">I. Le contexte : Une transformation numérique sans précédent</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-muted-foreground mb-4">
                      En 2025, la transformation digitale n'est plus optionnelle. <strong>Les entreprises françaises et africaines investissent massivement dans le numérique.</strong> 
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>+340% de demandes en développement web et design UX/UI</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>L'IA crée de nouveaux métiers plus vite que jamais</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>La pénurie de talents qualifiés persiste</span>
                      </li>
                    </ul>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900 mt-4">
                      <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2"><Lightbulb className="w-4 h-4"/> Le paradoxe</h4>
                      <p className="text-sm text-blue-800 dark:text-blue-300">
                        Besoin explosif de talents vs. méfiance face aux juniors. C'est ici qu'intervient une décision intelligente.
                      </p>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                    <img 
                      src={trendImage} 
                      alt="Croissance des jeunes talents" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <p className="text-white font-medium">Tendance croissante des jeunes talents en tech</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Section 2: Pourquoi faire confiance aux jeunes talents */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">II. 5 raisons de faire confiance aux jeunes développeurs et designers</h2>
                </div>

                <div className="space-y-6">
                  {/* Raison 1 */}
                  <Card className="bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">1</span>
                        Natives du numérique et de l'IA
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Les jeunes développeurs ont grandi avec ChatGPT, GitHub Copilot et les outils modernes. <strong>Ils n'apprennent pas ces technologies - ils les vivent.</strong> Cet avantage naturel est énorme pour un marché transformé par l'IA.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Raison 2 */}
                  <Card className="bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">2</span>
                        Flexibilité et adaptabilité remarquables
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Sans "habitudes professionnelles figées", ils s'adaptent rapidement aux méthodologies agiles, aux frameworks récents et aux changements de direction. <strong>La plasticité mentale est leur force.</strong>
                      </p>
                    </CardContent>
                  </Card>

                  {/* Raison 3 */}
                  <Card className="bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">3</span>
                        Passion et engagement énergique
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Les jeunes talents arrivent avec une énergie débordante et une volonté de prouver leur valeur. Cet engagement crée une dynamique positive dans les équipes et booste la productivité collective.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Raison 4 */}
                  <Card className="bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">4</span>
                        Perspective nouvelle et créativité
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Ils apportent des idées non filtrées par des années de "c'est comment on l'a toujours fait". <strong>Cette fraîcheur crée de l'innovation.</strong>
                      </p>
                    </CardContent>
                  </Card>

                  {/* Raison 5 */}
                  <Card className="bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">5</span>
                        Retour sur investissement formidable
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Une formation rapide + mentorat = Une ressource ultra-compétente et fidèle. <strong>Le coût initial est récupéré en quelques mois, avec des années de loyauté en retour.</strong>
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
                    <Users className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">III. Comparatif : Expérience vs. Jeunes talents</h2>
                </div>

                <p className="text-muted-foreground">Voici comment se comparent les profils dans le contexte actuel :</p>

                <div className="overflow-x-auto bg-background border border-border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold">Critère</TableHead>
                        <TableHead className="font-bold">Seniors (10+ ans)</TableHead>
                        <TableHead className="font-bold">Jeunes talents (0-3 ans)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Maîtrise des outils IA</TableCell>
                        <TableCell>À apprendre</TableCell>
                        <TableCell className="text-green-600 dark:text-green-400 font-semibold">✓ Natif</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Vitesse d'apprentissage</TableCell>
                        <TableCell>Modérée</TableCell>
                        <TableCell className="text-green-600 dark:text-green-400 font-semibold">✓ Rapide</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Expérience métier</TableCell>
                        <TableCell className="text-green-600 dark:text-green-400 font-semibold">✓ Approfondie</TableCell>
                        <TableCell>Limitée</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Mentorat possible</TableCell>
                        <TableCell>Non prioritaire</TableCell>
                        <TableCell className="text-green-600 dark:text-green-400 font-semibold">✓ Très efficace</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Fidélité (5 ans)</TableCell>
                        <TableCell>Moyenne</TableCell>
                        <TableCell className="text-green-600 dark:text-green-400 font-semibold">✓ Haute</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Coût sur 5 ans</TableCell>
                        <TableCell className="text-red-600 dark:text-red-400">✗ Élevé</TableCell>
                        <TableCell className="text-green-600 dark:text-green-400 font-semibold">✓ Optimisé</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Créativité & Innovation</TableCell>
                        <TableCell>Formatée</TableCell>
                        <TableCell className="text-green-600 dark:text-green-400 font-semibold">✓ Disruptive</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-100 dark:border-amber-900 mt-6">
                  <h4 className="font-bold text-amber-700 dark:text-amber-400 mb-2">📊 Le vrai enjeu</h4>
                  <p className="text-sm text-amber-800 dark:text-amber-300">
                    Ce n'est pas senior OU junior. C'est une <strong>équipe équilibrée</strong> où les seniors dirigent la stratégie et les juniors exécutent avec agilité.
                  </p>
                </div>
              </motion.section>

              {/* Section 4: Mentorat et collaboration */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">IV. Le modèle gagnant : Mentorat et collaboration</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                    <img 
                      src={mentoringImage} 
                      alt="Mentorat et collaboration" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <p className="text-white font-medium">Senior + Junior = Synérgie</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg text-muted-foreground mb-6">
                      <strong>La formule du succès :</strong> Placer un jeune développeur/designer avec un senior crée une dynamique puissante.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-bold text-foreground mb-2">🎯 Le senior apporte :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>✓ Stratégie et vision métier</li>
                          <li>✓ Bonnes pratiques éprouvées</li>
                          <li>✓ Mentorat continu</li>
                          <li>✓ Résolution de problèmes complexes</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-bold text-foreground mb-2">⚡ Le junior apporte :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>✓ Vitesse d'exécution</li>
                          <li>✓ Maîtrise des outils modernes (IA)</li>
                          <li>✓ Idées novatrices</li>
                          <li>✓ Engagement débordant</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Section 5: Défis et solutions */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">V. Adresser les défis réels</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Défi 1 */}
                  <Card className="bg-background border border-red-200/50 dark:border-red-900/50">
                    <CardHeader>
                      <CardTitle className="text-lg">❌ Défi : Manque d'expérience</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground"><strong>Solution :</strong></p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Projets gradués (facile → complexe)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Pair programming avec seniors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Feedback continu et constructif</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Défi 2 */}
                  <Card className="bg-background border border-red-200/50 dark:border-red-900/50">
                    <CardHeader>
                      <CardTitle className="text-lg">❌ Défi : Qualité inégale au départ</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground"><strong>Solution :</strong></p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Code review systématique</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Tests automatisés et documentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Formation continue en internal training</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Défi 3 */}
                  <Card className="bg-background border border-red-200/50 dark:border-red-900/50">
                    <CardHeader>
                      <CardTitle className="text-lg">❌ Défi : Risque de départ (turnover)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground"><strong>Solution :</strong></p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Offrir une croissance claire (carrière)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Formation professionnelle payante</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Environnement inclusif et valorisant</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Défi 4 */}
                  <Card className="bg-background border border-red-200/50 dark:border-red-900/50">
                    <CardHeader>
                      <CardTitle className="text-lg">❌ Défi : Coûts de formation élevés</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground"><strong>Solution :</strong></p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Mentorat interne gratuit (ROI 3-6 mois)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Outils de formation modernes (online)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Financement via OPCO (France) ou aides gouvernementales</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.section>

              {/* Section 6: Recommandations */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">VI. Plan d'action pour recruiter et intégrer les jeunes talents</h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-900">
                    <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-4">Phase 1 : Recrutement (Semaines 1-2)</h3>
                    <ol className="space-y-2 text-sm text-green-800 dark:text-green-300">
                      <li className="flex items-start gap-2"><span className="font-bold">1.</span> <span>Cibler les bootcamps, universités, plateformes (LinkedIn, AngelList)</span></li>
                      <li className="flex items-start gap-2"><span className="font-bold">2.</span> <span>Tester via des projets courts ou stage de 2 semaines</span></li>
                      <li className="flex items-start gap-2"><span className="font-bold">3.</span> <span>Évaluer le potentiel, pas juste les compétences actuelles</span></li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-900">
                    <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-4">Phase 2 : Onboarding (Semaines 3-6)</h3>
                    <ol className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                      <li className="flex items-start gap-2"><span className="font-bold">1.</span> <span>Affecter un mentor senior (4-5h / semaine)</span></li>
                      <li className="flex items-start gap-2"><span className="font-bold">2.</span> <span>Projet d'apprentissage structuré avec livrables clairs</span></li>
                      <li className="flex items-start gap-2"><span className="font-bold">3.</span> <span>Environnement psychologiquement sûr pour poser des questions</span></li>
                    </ol>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-900">
                    <h3 className="text-lg font-bold text-purple-700 dark:text-purple-400 mb-4">Phase 3 : Autonomisation (Mois 2-3)</h3>
                    <ol className="space-y-2 text-sm text-purple-800 dark:text-purple-300">
                      <li className="flex items-start gap-2"><span className="font-bold">1.</span> <span>Confier des tâches réelles avec contexte métier</span></li>
                      <li className="flex items-start gap-2"><span className="font-bold">2.</span> <span>Feedback régulier et ajustements</span></li>
                      <li className="flex items-start gap-2"><span className="font-bold">3.</span> <span>Célébrer les victoires et l'impact créé</span></li>
                    </ol>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-900">
                    <h3 className="text-lg font-bold text-orange-700 dark:text-orange-400 mb-4">Phase 4 : Croissance (Mois 4+)</h3>
                    <ol className="space-y-2 text-sm text-orange-800 dark:text-orange-300">
                      <li className="flex items-start gap-2"><span className="font-bold">1.</span> <span>Spécialisation progressive (frontend, backend, design, SEO...)</span></li>
                      <li className="flex items-start gap-2"><span className="font-bold">2.</span> <span>Certification et formations avancées</span></li>
                      <li className="flex items-start gap-2"><span className="font-bold">3.</span> <span>Leadership progressif (lead junior projects, mentor)</span></li>
                    </ol>
                  </div>
                </div>

                <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group mt-6">
                  <img 
                    src={trainingImage} 
                    alt="Formation et développement" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white font-medium">Un plan structuré = Succès assuré</p>
                  </div>
                </div>
              </motion.section>

              {/* Conclusion */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20"
              >
                <h2 className="text-3xl font-heading font-bold">Conclusion : L'avenir appartient aux visionnaires</h2>
                
                <p className="text-lg text-foreground">
                  Les entreprises qui réussiront dans cette ère de transformation digitale ne seront pas celles qui refusent les jeunes talents par habitude, mais celles qui <strong>reconnaissent le potentiel inexploité des débutants et intermédiaires.</strong>
                </p>

                <p className="text-lg text-foreground">
                  <strong>Faire confiance aux jeunes développeurs web et designers débutants n'est pas un acte de charité. C'est une décision stratégique.</strong> C'est investir dans :
                </p>

                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">→</span>
                    <span><strong>L'innovation</strong> (perspectives neuves)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">→</span>
                    <span><strong>La pérennité</strong> (équipes loyales et motivées)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">→</span>
                    <span><strong>La compétitivité</strong> (maîtrise native de l'IA et technologies modernes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">→</span>
                    <span><strong>La rentabilité</strong> (ROI clair en 3-6 mois)</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 border-l-4 border-primary bg-primary/5 rounded-r">
                  <p className="text-lg font-semibold text-foreground italic">
                    "En 2025, l'entreprise qui recrute le mieux n'est pas celle qui chasse les titans expérimentés. C'est celle qui cultive les graines de talents et les regarde fleurir."
                  </p>
                </div>

                <p className="text-base text-muted-foreground mt-6">
                  <strong>Prêt à transformer votre approche du recrutement ?</strong> Les jeunes talents du digital n'attendent que votre confiance pour révolutionner votre marché.
                </p>
              </motion.section>

              {/* CTA */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 mt-12"
              >
                <Link href="/contact" asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 cursor-pointer">
                    Discutons de votre stratégie RH
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="sticky top-20 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Points clés
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium">Jeunes talents = Natives de l'IA et outils modernes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium">Mentorat + Seniors = Formule gagnante</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium">ROI en 3-6 mois, loyauté long terme</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium">Innovation + Flexibilité + Engagement débordant</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium">Plan 4 phases pour intégration réussie</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Partager cet article</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" data-testid="link-share-linkedin">
                    <Button variant="outline" className="w-full justify-center gap-2 cursor-pointer">
                      🔗 LinkedIn
                    </Button>
                  </a>
                  <a href={`https://wa.me/?text=${encodeURIComponent(`Découvrez cet article sur les jeunes talents en tech : ${window.location.href}`)}`} target="_blank" rel="noopener noreferrer" data-testid="link-share-whatsapp">
                    <Button variant="outline" className="w-full justify-center gap-2 cursor-pointer">
                      💬 WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-background border border-border">
                <CardHeader>
                  <CardTitle className="text-lg">À propos de l'auteur</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    SANNI ALIDOU Mafouzou est UI/UX Designer, SEO & Web Developer avec une expertise en digital transformation et talent management.
                  </p>
                  <div className="space-y-2">
                    <a href="https://www.linkedin.com/in/mafouz-sanni-98704b393" target="_blank" rel="noopener noreferrer" data-testid="link-author-linkedin">
                      <Button variant="outline" className="w-full justify-center gap-2 cursor-pointer text-sm">
                        → LinkedIn
                      </Button>
                    </a>
                    <a href="https://wa.me/+22991177723" target="_blank" rel="noopener noreferrer" data-testid="link-author-whatsapp">
                      <Button variant="outline" className="w-full justify-center gap-2 cursor-pointer text-sm">
                        → WhatsApp
                      </Button>
                    </a>
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
