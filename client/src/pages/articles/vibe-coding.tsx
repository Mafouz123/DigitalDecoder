import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Clock, User, Tag, ArrowRight, Music, Code, Zap, AlertTriangle, Layers } from "lucide-react";
import { Link } from "wouter";
import articleHero from "@assets/generated_images/vibe_coding_concept.png";
import revolutionImage from "@assets/generated_images/vibe_coding_revolution_concept.png";
import challengesImage from "@assets/generated_images/vibe_coding_challenges_concept.png";
import architectImage from "@assets/generated_images/developer_as_architect_of_vibes_concept.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Article3() {
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
              alt="Vibe Coding" 
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
                <Badge className="bg-purple-600 hover:bg-purple-700 text-white border-none px-3 py-1 text-sm">Tendance</Badge>
                <Badge variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white">Innovation</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight shadow-black/50 drop-shadow-lg">
                Vibe Coding : <br className="hidden md:block" />
                Quand l'IA donne le « La » de la Programmation
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-purple-600/25 backdrop-blur-md rounded-lg p-4 border border-purple-400/30">
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <User className="w-5 h-5" />
                  <span>SANNI ALIDOU Mafouzou</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span>4 min</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                  <Tag className="w-5 h-5" />
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
                  Oubliez la tête baissée dans le code, les nuits passées à traquer une virgule manquante. Le <strong>Vibe Coding</strong> (ou Codage par Ambiance) est la nouvelle approche qui bouscule le monde du développement logiciel.
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
                  <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900 text-pink-600">
                    <Music className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Une Révolution du "Ressenti"</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="mb-4">
                      Né de l'essor des grands modèles de langage (LLM) comme Gemini Code Assist, GitHub Copilot ou Cursor, ce terme décrit une méthode où l'on décrit le résultat souhaité en langage naturel pour que l'IA génère le code fonctionnel.
                    </p>
                    <p>
                      Le développeur passe du rôle d'artisan de la syntaxe à celui d'<strong>architecte de l'intention</strong>. On ne se demande plus <em>comment</em> écrire le code, mais plutôt <em>quelle ambiance</em> l'application doit dégager.
                    </p>
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={revolutionImage} 
                      alt="Révolution du Vibe Coding" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.section>

              {/* Section 2: Promesses */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900 text-cyan-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Les Promesses : Vitesse & Créativité</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-secondary/20 border-none shadow-sm">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-primary">Vitesse Accrue</h4>
                      <p className="text-sm text-muted-foreground">
                        Une idée le matin ? Un prototype fonctionnel le soir. L'IA gère le boilerplate en quelques secondes.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/20 border-none shadow-sm">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-primary">Démocratisation</h4>
                      <p className="text-sm text-muted-foreground">
                        Plus besoin d'être un expert chevronné. Les novices peuvent décrire leur vision et voir l'IA la concrétiser.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/20 border-none shadow-sm">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-primary">Fluidité</h4>
                      <p className="text-sm text-muted-foreground">
                        Libéré de la syntaxe, le développeur se concentre sur l'architecture globale et l'innovation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.section>

              {/* Section 3: Zones d'Ombre */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                    <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">Attention au "Trust but Don't Verify"</h3>
                  </div>
                  
                  <div className="space-y-4 text-amber-800 dark:text-amber-200/80">
                    <p>
                      <strong>Qualité et Maintenabilité :</strong> Un code généré fonctionne, mais est-il optimisé et facile à maintenir sur le long terme ?
                    </p>
                    <p>
                      <strong>Sécurité :</strong> L'IA peut introduire des failles. Une expertise humaine reste cruciale pour l'audit.
                    </p>
                    <p>
                      <strong>L'illusion de la Facilité :</strong> Le Vibe Coding ne remplace pas les fondamentaux. Il faut trouver l'équilibre entre créativité et rigueur.
                    </p>
                  </div>
                  
                  <div className="mt-6 h-48 rounded-lg overflow-hidden w-full">
                     <img 
                       src={challengesImage} 
                       alt="Challenges du Vibe Coding" 
                       className="w-full h-full object-cover"
                       loading="lazy"
                     />
                  </div>
                </div>
              </motion.section>

              {/* Section 4: Nouveau Rôle */}
              <motion.section 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold">Architecte des "Vibes"</h2>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Le Vibe Coding ne remplace pas les développeurs, il redéfinit leur rôle. Ils deviennent des "orchestrateurs du code".
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-background border rounded-lg shadow-xs">
                       <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">1</div>
                       <p>Formulation de prompts précis et efficaces</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background border rounded-lg shadow-xs">
                       <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">2</div>
                       <p>Audit critique et validation du code généré</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background border rounded-lg shadow-xs">
                       <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">3</div>
                       <p>Conception d'architectures logicielles robustes</p>
                    </div>
                  </div>
                  <div className="flex-1 h-64 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={architectImage} 
                      alt="Architecte des Vibes" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.section>

              <Separator />

              {/* Conclusion */}
              <div className="bg-secondary/50 rounded-2xl p-8 text-center space-y-4">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold">Un changement de paradigme</h3>
                <p className="text-lg text-muted-foreground">
                  Le Vibe Coding est plus qu'une tendance. C'est une approche hybride : l'IA pour la vélocité, l'humain pour la qualité et la vision. Prêt à coder au feeling ?
                </p>
                <div className="pt-4">
                  <Button size="lg" className="rounded-full font-bold shadow-lg shadow-primary/20">
                    Découvrir nos tutoriels IA
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
                   <a href="https://www.linkedin.com/in/mafouz-sanni-98704b393?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">
                     <Button variant="outline" className="w-full rounded-full">Suivre sur LinkedIn</Button>
                   </a>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Articles Similaires</h4>
                <div className="space-y-4">
                  <Link href="/articles/ia-30-min" className="block group">
                    <div className="flex gap-3 items-start">
                      <div className="w-20 h-20 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                         {/* Placeholder for related article image */}
                         <div className="w-full h-full bg-secondary"></div>
                      </div>
                      <div>
                         <h5 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">L'IA en 30 minutes par jour</h5>
                         <p className="text-xs text-muted-foreground mt-1">30 Nov • 5 min</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="/articles/digitalisation-vs-transformation" className="block group">
                     <div className="flex gap-3 items-start">
                      <div className="w-20 h-20 rounded-lg bg-gray-200 overflow-hidden shrink-0">
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