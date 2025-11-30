import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { ArrowLeft, Clock, User, Tag, CheckCircle2, ArrowRight, Zap, RefreshCw, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import articleHero from "@assets/generated_images/digitalisation_vs_transformation_digitale_concept.png";
import engineImage from "@assets/generated_images/digital_engine_optimization_concept.png";
import transformationImage from "@assets/generated_images/digital_transformation_disruptive_innovation_concept.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Article1() {
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
              alt="Digitalisation vs Transformation Digitale" 
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
                <Badge className="bg-primary hover:bg-primary/90 text-white border-none px-3 py-1 text-sm">Stratégie</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">Innovation</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                Digitalisation vs. Transformation Digitale : <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">La Différence Qui Change Tout</span>
              </h1>
              
              <div className="flex items-center gap-6 text-white/80 text-sm md:text-base font-medium">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Par SANNI ALIDOU Mafouzou</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>30 Nov 2025</span>
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
                  Dans le monde effréné d'aujourd'hui, tout le monde parle de "digital". Mais beaucoup d'organisations pensent "se transformer" simplement en adoptant de nouveaux outils...
                </p>
                <p>
                  C'est une erreur coûteuse. Chez <strong>Décoder le Digital</strong>, nous traduisons le jargon technique en savoir-faire concret pour vous éviter ce piège.
                </p>
              </motion.div>

              {/* Section 1: Digitalisation */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-primary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">La Digitalisation : Améliorer le moteur</h2>
                </div>
                
                <div className="bg-secondary/30 rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-bold mb-4">C'est quoi concrètement ?</h3>
                  <p className="mb-6 text-muted-foreground">
                    Imaginez que vous avez une voiture fiable, mais un peu lente. La digitalisation consiste à convertir des informations ou des processus analogiques en format numérique. C'est une mise à jour technique, pas un changement de destination.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Avant</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                          Remplir des rapports de frais sur papier
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                          Archiver des tonnes de documents physiques
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Après (Digitalisation)</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          Utiliser une application mobile automatisée
                        </li>
                        <li className="flex items-start gap-2 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          Scanner et indexer ces documents dans le cloud
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative h-48 rounded-xl overflow-hidden mt-6">
                    <img 
                      src={engineImage} 
                      alt="Optimisation Digitale" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Badge className="text-lg py-1 px-4 bg-white/90 text-black backdrop-blur-md">Tactique d'efficacité</Badge>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Section 2: Transformation Digitale */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">La Transformation Digitale : Changer de véhicule</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  Maintenant, imaginez que vous réalisez que posséder une voiture n'est plus la solution la plus pertinente. La Transformation Digitale est une refonte stratégique et culturelle profonde.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <Card className="border-none shadow-lg bg-linear-to-br from-background to-secondary">
                     <CardContent className="p-6">
                       <h4 className="font-bold mb-2 flex items-center gap-2"><div className="w-2 h-8 bg-red-500 rounded-full"></div> Exemple Netflix</h4>
                       <p className="text-sm text-muted-foreground">
                         Passer de la location de DVD physiques par la poste (Digitalisation du catalogue) à une plateforme de streaming mondiale (Transformation du modèle d'affaires).
                       </p>
                     </CardContent>
                   </Card>
                   <Card className="border-none shadow-lg bg-linear-to-br from-background to-secondary">
                     <CardContent className="p-6">
                       <h4 className="font-bold mb-2 flex items-center gap-2"><div className="w-2 h-8 bg-blue-500 rounded-full"></div> Exemple Michelin</h4>
                       <p className="text-sm text-muted-foreground">
                         Ne plus juste vendre des pneus, mais proposer un service "Pay as you drive" basé sur les kilomètres parcourus et la maintenance prédictive.
                       </p>
                     </CardContent>
                   </Card>
                </div>

                <img 
                  src={transformationImage} 
                  alt="Transformation Digitale" 
                  className="w-full h-64 object-cover rounded-2xl shadow-md my-6" 
                  loading="lazy"
                />
              </motion.section>

              {/* Comparison Table */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h2 className="text-3xl font-heading font-bold mb-6">🔑 Le Test De La Chaise Musicale</h2>
                <p className="mb-6 text-muted-foreground">Pour clarifier cette distinction cruciale, voici le comparatif définitif :</p>
                
                <div className="rounded-xl border border-border overflow-hidden shadow-sm">
                  <Table>
                    <TableHeader className="bg-secondary/50">
                      <TableRow>
                        <TableHead className="w-[200px] font-bold text-primary">Caractéristique</TableHead>
                        <TableHead className="font-bold">Digitalisation</TableHead>
                        <TableHead className="font-bold text-purple-600">Transformation Digitale</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Objectif Principal</TableCell>
                        <TableCell>Optimiser, accélérer l'existant</TableCell>
                        <TableCell className="font-medium bg-purple-50/50 dark:bg-purple-900/10">Créer de la nouvelle valeur</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Portée</TableCell>
                        <TableCell>Tâches ou départements isolés</TableCell>
                        <TableCell className="font-medium bg-purple-50/50 dark:bg-purple-900/10">Toute l'organisation & Culture</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Effet Business</TableCell>
                        <TableCell>Productivité accrue</TableCell>
                        <TableCell className="font-medium bg-purple-50/50 dark:bg-purple-900/10">Nouveaux revenus & Innovation</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Culture Interne</TableCell>
                        <TableCell>Remplacer l'humain (tâches)</TableCell>
                        <TableCell className="font-medium bg-purple-50/50 dark:bg-purple-900/10">Augmenter l'humain (créativité)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Question Clé</TableCell>
                        <TableCell>"Comment faire mieux ?"</TableCell>
                        <TableCell className="font-medium bg-purple-50/50 dark:bg-purple-900/10">"Pourquoi faisons-nous cela ?"</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl italic text-lg">
                  📌 La Digitalisation est une tactique d'efficacité. La Transformation Digitale est une stratégie d'innovation et de survie.
                </div>
              </motion.section>

              {/* Action Plan */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-8 pt-8"
              >
                <h2 className="text-3xl font-heading font-bold">✅ Vos 3 Actions Concrètes</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Action 1 : Le Reset Client (Culture)",
                      desc: "Ne commencez pas par l'outil, commencez par la problématique client. Demandez-vous : 'Si je devais créer mon entreprise aujourd'hui, sans aucun historique, à quoi ressemblerait mon service ?'"
                    },
                    {
                      title: "Action 2 : Mesurez la Valeur, pas juste la Vitesse",
                      desc: "Arrêtez de mesurer uniquement le temps gagné ou les coûts réduits. Commencez à mesurer les nouveaux revenus générés, le taux de fidélisation et la satisfaction client."
                    },
                    {
                      title: "Action 3 : Osez le Nouveau Canal",
                      desc: "Identifiez un seul nouveau canal de vente ou de service que vous n'avez jamais exploré (IA, Vocal, Social Commerce) et lancez un petit pilote test de 4 semaines."
                    }
                  ].map((action, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold border border-accent/20">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                        <p className="text-muted-foreground">{action.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              <Separator />

              {/* Conclusion */}
              <div className="bg-secondary/50 rounded-2xl p-8 text-center space-y-4">
                <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold">Adaptez-vous ou Disparaissez</h3>
                <p className="text-lg text-muted-foreground">
                  La Transformation Digitale n'est pas une course à l'outil le plus cher, c'est une course à l'adaptation. Où en êtes-vous aujourd'hui ?
                </p>
                <div className="pt-4">
                  <Button size="lg" className="rounded-full font-bold shadow-lg shadow-primary/20">
                    Démarrer votre transformation
                  </Button>
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
                     <p className="text-sm text-muted-foreground">Expert en Transformation Digitale</p>
                   </div>
                   <p className="text-sm text-muted-foreground italic">
                     "Je vous aide à naviguer dans la complexité du digital pour en tirer le meilleur."
                   </p>
                   <Button variant="outline" className="w-full rounded-full">Suivre sur LinkedIn</Button>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Articles Similaires</h4>
                <div className="space-y-4">
                  <Link href="#" className="block group">
                    <div className="flex gap-3 items-start">
                      <div className="w-20 h-20 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                         {/* Placeholder for related article image */}
                         <div className="w-full h-full bg-secondary"></div>
                      </div>
                      <div>
                         <h5 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">L'IA générative au quotidien : Guide pratique</h5>
                         <p className="text-xs text-muted-foreground mt-1">30 Nov • 5 min</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="block group">
                     <div className="flex gap-3 items-start">
                      <div className="w-20 h-20 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                         <div className="w-full h-full bg-secondary"></div>
                      </div>
                      <div>
                         <h5 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">UX Design : Au-delà de l'esthétique</h5>
                         <p className="text-xs text-muted-foreground mt-1">25 Nov • 4 min</p>
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