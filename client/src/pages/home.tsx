import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Lightbulb, Rocket, BookOpen } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_digital_landscape_for_blog_hero.png";
import aiImage from "@assets/generated_images/ai_brain_concept_for_article_thumbnail.png";
import strategyImage from "@assets/generated_images/digital_strategy_concept_for_article_thumbnail.png";
import uxImage from "@assets/generated_images/ux_design_abstract_for_article_thumbnail.png";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-background/50 to-background z-10"></div>
            <img 
              src={heroImage} 
              alt="Digital Landscape" 
              className="w-full h-full object-cover opacity-40"
            />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div variants={fadeIn}>
                <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full border-primary/20 bg-primary/5 text-primary mb-4">
                  Le blog nouvelle génération
                </Badge>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-foreground leading-[1.1]">
                Comprendre le futur <br/>
                <span className="text-gradient">Passer à l'action</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Aider les professionnels et curieux à passer du jargon à l’action, en rendant la transformation digitale simple, concrète et accessible.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="h-12 px-8 rounded-full text-lg font-semibold shadow-lg shadow-primary/20">
                  Commencer la lecture
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-lg bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5">
                  Notre mission
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold mb-4">Nos Missions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quatre piliers pour vous accompagner dans votre transformation numérique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: Cpu, 
                  title: "Démystifier", 
                  desc: "Expliquer clairement les concepts complexes (IA, digitalisation, UX, SEO)." 
                },
                { 
                  icon: BookOpen, 
                  title: "Tutoriels", 
                  desc: "Montrer comment utiliser des outils digitaux et l’IA au quotidien." 
                },
                { 
                  icon: Rocket, 
                  title: "Stratégie", 
                  desc: "Transformer les idées en projets robustes et innovants." 
                },
                { 
                  icon: Lightbulb, 
                  title: "Inspirer", 
                  desc: "Partager des méthodes et bonnes pratiques pour développer des compétences." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-4">À la une</h2>
                <p className="text-muted-foreground text-lg">Les derniers articles pour décoder le digital.</p>
              </div>
              <Button variant="outline" className="rounded-full">Voir tous les articles <ArrowRight className="ml-2 h-4 w-4"/></Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img 
                    src={aiImage} 
                    alt="IA Générative" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                    Intelligence Artificielle
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>30 Nov 2025</span>
                    <span>•</span>
                    <span>5 min de lecture</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    L'IA générative au quotidien : Guide pratique
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Comment intégrer ChatGPT, Midjourney et autres outils dans votre flux de travail sans perdre votre touche humaine.
                  </p>
                  <div className="pt-2 flex items-center text-primary font-medium">
                    Lire l'article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>

              {/* Article 2 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img 
                    src={strategyImage} 
                    alt="Transformation Digitale" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                    Stratégie
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>28 Nov 2025</span>
                    <span>•</span>
                    <span>7 min de lecture</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Transformation Digitale : Par où commencer ?
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Oubliez les grands mots. Voici une feuille de route concrète pour digitaliser votre activité étape par étape.
                  </p>
                  <div className="pt-2 flex items-center text-primary font-medium">
                    Lire l'article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>

              {/* Article 3 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img 
                    src={uxImage} 
                    alt="UX Design" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                    Design
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>25 Nov 2025</span>
                    <span>•</span>
                    <span>4 min de lecture</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    UX Design : Au-delà de l'esthétique
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Pourquoi l'expérience utilisateur est le facteur clé de succès de votre produit numérique, et comment l'améliorer.
                  </p>
                  <div className="pt-2 flex items-center text-primary font-medium">
                    Lire l'article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
                Restez à la pointe du digital
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Recevez chaque semaine nos meilleures astuces, tutoriels et analyses directement dans votre boîte mail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="votre@email.com" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-full px-6 focus-visible:ring-white focus-visible:border-white"
                />
                <Button size="lg" variant="secondary" className="h-12 px-8 rounded-full font-bold text-primary hover:bg-white">
                  S'inscrire
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/60">
                Pas de spam. Désabonnement en un clic.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 font-heading font-bold text-xl tracking-tighter">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white">
                  D
                </div>
                <span>Décoder le digital</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Votre guide pour naviguer dans la complexité du monde numérique moderne.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Explorer</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Articles</a></li>
                <li><a href="#" className="hover:text-primary">Tutoriels</a></li>
                <li><a href="#" className="hover:text-primary">Stratégie</a></li>
                <li><a href="#" className="hover:text-primary">Ressources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Mentions légales</a></li>
                <li><a href="#" className="hover:text-primary">Confidentialité</a></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Décoder le digital. Tous droits réservés.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">LinkedIn</a>
              <a href="#" className="hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}