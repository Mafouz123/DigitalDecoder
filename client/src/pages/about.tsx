import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Palette, Search, Code, Bot, Globe, Sparkles, Target, Zap, TrendingUp, Brain, CheckCircle2 } from "lucide-react";
import aboutImage from "@assets/generated_images/abstract_creative_professional_workspace_concept.png";
import profileImage from "@assets/generated_images/professional_ai_engineer_portrait_illustration.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function About() {
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

  const expertiseAnalyst = [
    {
      icon: TrendingUp,
      title: "Growth Engineering",
      description: "Optimisation de la croissance via des boucles de feedback basées sur la donnée et l'automatisation technique."
    },
    {
      icon: Brain,
      title: "IA & Agentic Workflows",
      description: "Architecture de systèmes autonomes et ingénierie de prompts avancée pour transformer l'efficacité opérationnelle."
    },
    {
      icon: Search,
      title: "SEO Technique & IA",
      description: "Domination des SERPs 2026 grâce à l'alignement sémantique et l'optimisation des Core Web Vitals (INP)."
    },
    {
      icon: Code,
      title: "Full-Stack Performance",
      description: "Développement d'interfaces immersives et scalables avec une approche mobile-first et data-driven."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        {/* Hero Section - Professional Profile */}
        <section className="relative py-20 md:py-28 overflow-hidden border-b border-primary/5">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background z-10"></div>
            <img 
              src={aboutImage} 
              alt="Background" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative shrink-0"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl relative">
                  <img 
                    src={profileImage} 
                    alt="SANNI ALIDOU Mafouzou" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-2xl shadow-xl">
                  <Bot className="w-8 h-8" />
                </div>
              </motion.div>

              <motion.div 
                initial="initial"
                animate="animate"
                variants={stagger}
                className="flex-1 text-center md:text-left space-y-6"
              >
                <motion.div variants={fadeIn}>
                   <Badge variant="secondary" className="px-4 py-1 text-sm rounded-full bg-primary/10 text-primary border-none">
                      Analyse d'Expert en Orientation 2026
                   </Badge>
                </motion.div>
                
                <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
                  SANNI ALIDOU <span className="text-primary italic">Mafouzou</span>
                </motion.h1>
                
                <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl text-foreground font-semibold flex items-center justify-center md:justify-start gap-3">
                  <Zap className="text-primary w-8 h-8" />
                  Ingénieur Growth Web | Expert IA & SEO Tech
                </motion.h2>

                <motion.p variants={fadeIn} className="text-lg text-muted-foreground leading-relaxed">
                  Profil hybride rare combinant l'agilité du <strong>Growth Engineering</strong> et la profondeur technique de l'<strong>Intelligence Artificielle</strong>. Expert en automatisation de processus complexes et en domination organique des moteurs de recherche.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expert Analysis Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-heading font-bold mb-4 italic">Objectifs Stratégiques & Vision Expert</h2>
              <Separator className="w-24 mx-auto bg-primary/30 h-1 mb-8" />
              <p className="text-xl text-foreground/80 font-medium">
                "Mafouzou incarne la nouvelle génération d'ingénieurs capables de fusionner data-marketing et développement agentique pour créer des leviers de croissance exponentiels."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {expertiseAnalyst.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background overflow-hidden group">
                    <CardHeader className="flex flex-row items-center gap-4 pb-4">
                      <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <item.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Methodology Section */}
        <section className="py-24 relative">
           <div className="container mx-auto px-4 md:px-6">
             <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="space-y-6"
               >
                 <h2 className="text-3xl md:text-4xl font-heading font-bold">Méthodologie & Impact</h2>
                 <p className="text-lg text-muted-foreground">
                   Au-delà du code, ma vision repose sur l'<strong>efficience algorithmique</strong>. En 2025-2026, j'ai piloté des transformations digitales majeures :
                 </p>
                 <ul className="space-y-4">
                    {[
                      "Réduction de 20% du temps transactionnel via l'IA",
                      "Top 5 Google en 3 mois sur des niches concurrentielles",
                      "Architecture de systèmes agentiques complexes (OpenAI/Gemini APIs)",
                      "Gamification avancée pour l'engagement communautaire (KURAH)"
                    ].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                        <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                        {text}
                      </li>
                    ))}
                 </ul>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="bg-primary/5 p-8 md:p-12 rounded-[2rem] border border-primary/10 relative"
               >
                 <div className="absolute -top-6 -right-6 h-16 w-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl rotate-12">
                   <Target className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-bold mb-6 italic">La Vision de l'Ingénieur</h3>
                 <p className="text-xl font-serif leading-relaxed italic text-foreground/80">
                   "Relier design, technologie et optimisation digitale pour bâtir des expériences web qui ne sont pas seulement belles, mais aussi utiles, accessibles et durables. Mon objectif est de contribuer à un digital plus humain, où chaque interaction compte."
                 </p>
                 <div className="mt-8 flex gap-2">
                    <Badge className="bg-primary/20 text-primary border-none">Expertise Certifiée</Badge>
                    <Badge className="bg-primary/20 text-primary border-none">Data-Driven</Badge>
                 </div>
               </motion.div>
             </div>
           </div>
        </section>
      </main>
    </div>
  );
}