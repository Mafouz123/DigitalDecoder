import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, ArrowRight, Bot, FileText, Database, Sparkles, Zap } from "lucide-react";
import { Link } from "wouter";
import articleHero from "@assets/generated_images/ai_colleague_assistant_concept.png";
import collaborationImage from "@assets/generated_images/human_robot_collaboration_concept.png";
import synthesisImage from "@assets/generated_images/ai_summarizing_information_concept.png";
import contentImage from "@assets/generated_images/ai_generating_content_draft_concept.png";
import classificationImage from "@assets/generated_images/ai_data_classification_concept.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Article2() {
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
              alt="L'IA en 30 minutes par jour" 
              className="w-full h-full object-cover"
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
                <Badge className="bg-primary hover:bg-primary/90 text-white border-none px-3 py-1 text-sm">Productivité</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">Intelligence Artificielle</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                L'IA en 30 minutes par jour : <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Gagnez 10 heures par semaine</span>
              </h1>
              
              <div className="flex items-center gap-6 text-white/80 text-sm md:text-base font-medium">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Par SANNI ALIDOU Mafouzou</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min de lecture</span>
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
                <div className="bg-secondary/30 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                  <p className="text-xl font-medium leading-relaxed text-foreground italic m-0">
                    "Imaginez pouvoir vous libérer de 10 heures de travail répétitif chaque semaine. Ce n'est plus de la science-fiction. C'est l'Intelligence Artificielle."
                  </p>
                </div>

                <p>
                  Trop de professionnels pensent que l'IA est réservée aux data scientists ou aux entreprises qui peuvent investir des sommes astronomiques. C'est une erreur. <strong>L'IA est déjà l'assistant le plus puissant et le moins cher que vous n'avez jamais recruté.</strong>
                </p>
                <p>
                  Chez <strong>Décoder le digital</strong>, nous mettons fin au jargon. Dans cet article, nous allons nous concentrer sur l'essentiel : trois applications d'IA concrètes et souvent gratuites que vous pouvez configurer en moins de 30 minutes par jour pour transformer votre productivité.
                </p>
              </motion.div>

              {/* Section 1: Décoder l'IA */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600">
                    <Bot className="w-6 h-6" />
                   </div>
                   <h2 className="text-3xl font-heading font-bold">I. Décoder l'IA : Votre assistant ultra-rapide</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-muted-foreground mb-4">
                      Avant de passer à l'action, une minute de clarté. L'IA, pour le professionnel, n'est pas un robot menaçant. C'est simplement un logiciel capable d'apprendre et d'exécuter des tâches cognitives (écrire, classer, résumer) à une vitesse et une échelle que l'humain ne peut égaler.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-900">
                      <h4 className="font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2"><Sparkles className="w-4 h-4"/> Leçon clé</h4>
                      <p className="text-sm text-green-800 dark:text-green-300">
                        L'IA ne vise pas à remplacer l'humain. Elle est conçue pour l'augmenter. Son rôle est de prendre en charge les tâches de "brouillon" pour que vous puissiez vous concentrer sur la stratégie.
                      </p>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                     <img src={collaborationImage} alt="Collaboration Humain-Robot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
                        <p className="text-white font-medium">Collaboration Humain-IA</p>
                     </div>
                  </div>
                </div>
              </motion.section>

              {/* Section 2: 3 Automatisations */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-12"
              >
                <div className="flex items-center gap-3 mb-8">
                   <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600">
                    <Zap className="w-6 h-6" />
                   </div>
                   <h2 className="text-3xl font-heading font-bold">II. Vos 3 Automatisations Simples</h2>
                </div>

                {/* Auto 1 */}
                <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-xs">
                   <div className="relative h-48 overflow-hidden">
                      <img src={synthesisImage} alt="Synthèse Intelligente" className="w-full h-full object-cover opacity-90" />
                      <div className="absolute top-4 left-4">
                         <Badge className="bg-white text-primary hover:bg-white/90 font-bold">Gain : 3h / semaine</Badge>
                      </div>
                   </div>
                   <div className="p-8">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <FileText className="w-6 h-6 text-primary" /> 
                        Automatisation n°1 : La Synthèse Intelligente
                      </h3>
                      
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium w-1/3 text-muted-foreground">Problème</TableCell>
                            <TableCell>Fatigue informationnelle (longs rapports, emails fleuves, réunions)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium text-muted-foreground">Outils suggérés</TableCell>
                            <TableCell><span className="font-bold text-foreground">ChatGPT</span> ou <span className="font-bold text-foreground">Gemini</span></TableCell>
                          </TableRow>
                          <TableRow className="bg-primary/5">
                            <TableCell className="font-medium text-primary">Action en 5 min</TableCell>
                            <TableCell className="font-medium">Uploadez un texte ou transcription et demandez : "Résume en 3 points majeurs + 2 actions."</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                   </div>
                </div>

                {/* Auto 2 */}
                <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-xs">
                   <div className="relative h-48 overflow-hidden">
                      <img src={contentImage} alt="Génération de Contenu" className="w-full h-full object-cover opacity-90" />
                      <div className="absolute top-4 left-4">
                         <Badge className="bg-white text-primary hover:bg-white/90 font-bold">Gain : 5h / semaine</Badge>
                      </div>
                   </div>
                   <div className="p-8">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-primary" /> 
                        Automatisation n°2 : Le Générateur de Contenu "Draft"
                      </h3>
                      
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium w-1/3 text-muted-foreground">Problème</TableCell>
                            <TableCell>Blocage de la page blanche (emails, descriptions, messages)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium text-muted-foreground">Outils suggérés</TableCell>
                            <TableCell><span className="font-bold text-foreground">ChatGPT</span> ou <span className="font-bold text-foreground">Gemini</span></TableCell>
                          </TableRow>
                          <TableRow className="bg-primary/5">
                            <TableCell className="font-medium text-primary">Action en 5 min</TableCell>
                            <TableCell className="font-medium">PROMPT en 3 phrases : (1) Rôle : expert marketing. (2) Tâche : rédige un email froid. (3) Format : 5 lignes max pour PME.</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                   </div>
                </div>

                {/* Auto 3 */}
                <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-xs">
                   <div className="relative h-48 overflow-hidden">
                      <img src={classificationImage} alt="Classification de données" className="w-full h-full object-cover opacity-90" />
                      <div className="absolute top-4 left-4">
                         <Badge className="bg-white text-primary hover:bg-white/90 font-bold">Gain : 2h / semaine</Badge>
                      </div>
                   </div>
                   <div className="p-8">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Database className="w-6 h-6 text-primary" /> 
                        Automatisation n°3 : Le Nettoyage et la Classification
                      </h3>
                      
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium w-1/3 text-muted-foreground">Problème</TableCell>
                            <TableCell>Organisation et classement (emails, prospects)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium text-muted-foreground">Outils suggérés</TableCell>
                            <TableCell><span className="font-bold text-foreground">Google Sheets</span> ou <span className="font-bold text-foreground">Zapier</span></TableCell>
                          </TableRow>
                          <TableRow className="bg-primary/5">
                            <TableCell className="font-medium text-primary">Action en 5 min</TableCell>
                            <TableCell className="font-medium">Demandez : "Classe cette colonne de 200 prospects en 'Chaud', 'Froid', 'À Relancer'."</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                   </div>
                </div>

              </motion.section>

              {/* Section 3: Plan d'action */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6 pt-8"
              >
                 <h2 className="text-3xl font-heading font-bold">III. Le Décollage : Votre Plan</h2>
                 <div className="bg-secondary/30 p-8 rounded-2xl border border-border/50">
                    <h4 className="font-bold text-xl mb-4">🔑 Notre Conseil pour démarrer</h4>
                    <p className="text-lg text-muted-foreground mb-6">
                      Commencez par la tâche la plus détestée. Ne cherchez pas à automatiser toutes les 3 tâches en même temps. Choisissez celle que vous détestez le plus et engagez-vous à y consacrer 30 minutes aujourd'hui pour mettre en place l'outil.
                    </p>
                    <p className="text-primary font-bold italic">
                      Le simple plaisir de ne plus faire cette tâche sera la motivation pour le reste.
                    </p>
                 </div>
              </motion.section>

              <Separator />

              {/* Conclusion & Call to Action */}
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center space-y-6">
                <Sparkles className="w-12 h-12 mx-auto text-white opacity-80" />
                <h3 className="text-2xl font-heading font-bold">L'IA n'est pas une complexité, c'est une opportunité.</h3>
                <p className="text-lg text-white/80">
                  Quelle est la première tâche (synthèse, rédaction ou classification) que vous allez confier à votre nouvel assistant IA aujourd'hui ?
                </p>
                <div className="pt-4">
                  <Button size="lg" variant="secondary" className="rounded-full font-bold">
                    Partager mon choix sur LinkedIn
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
                     <p className="text-sm text-muted-foreground">Ingénieur Prompt & IA</p>
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
                  <Link href="/articles/digitalisation-vs-transformation" className="block group">
                    <div className="flex gap-3 items-start">
                      <div className="w-20 h-20 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                         {/* Placeholder for related article image */}
                         <div className="w-full h-full bg-secondary"></div>
                      </div>
                      <div>
                         <h5 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">Digitalisation vs Transformation Digitale</h5>
                         <p className="text-xs text-muted-foreground mt-1">28 Nov • 7 min</p>
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