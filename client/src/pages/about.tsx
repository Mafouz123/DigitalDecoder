import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Palette, Search, Code, Bot, Globe, Sparkles } from "lucide-react";
import aboutImage from "@assets/generated_images/abstract_creative_professional_workspace_concept.png";
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

  const skills = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Je conçois des interfaces modernes, intuitives et centrées sur l’utilisateur, alliant esthétique et ergonomie pour maximiser l’engagement et la conversion."
    },
    {
      icon: Search,
      title: "SEO & Visibilité Digitale",
      description: "Grâce à des stratégies SEO avancées, j’optimise la présence en ligne des projets afin d’atteindre les premières positions sur Google et d’accroître leur visibilité."
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "Je maîtrise les technologies front-end et back-end (Angular, React, Python, Node.js, PostgreSQL) pour créer des plateformes robustes, responsives et scalables."
    },
    {
      icon: Bot,
      title: "Ingénierie Prompt & IA",
      description: "J’intègre l’intelligence artificielle dans mes processus pour automatiser, enrichir et accélérer la création digitale, offrant ainsi des solutions innovantes et durables."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-background/80 to-background z-10"></div>
            <img 
              src={aboutImage} 
              alt="Creative Workspace" 
              className="w-full h-full object-cover opacity-20"
              fetchPriority="high"
            />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <motion.div variants={fadeIn}>
                 <Badge variant="outline" className="px-4 py-1 text-sm rounded-full border-primary/50 text-primary mb-4 bg-primary/5">
                    À Propos de moi
                 </Badge>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
                SANNI ALIDOU <span className="text-gradient">Mafouzou</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground font-medium">
                UI/UX Designer | SEO | Développeur Web | Ingénieur Prompt
              </motion.p>

              <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                J’aide les entreprises, startups et créateurs à transformer leurs idées en solutions digitales performantes et impactantes.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-background">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <skill.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl font-bold">{skill.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 z-0"></div>
           
           <div className="container mx-auto px-4 md:px-6 relative z-10">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="max-w-4xl mx-auto text-center space-y-8 glass-panel p-12 rounded-3xl border-primary/10 shadow-2xl"
             >
               <div className="flex justify-center mb-6">
                 <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg">
                    <Globe className="h-8 w-8" />
                 </div>
               </div>
               
               <h2 className="text-3xl md:text-4xl font-heading font-bold">Ma Vision</h2>
               
               <div className="relative">
                 <Sparkles className="absolute -top-8 -left-4 w-8 h-8 text-accent opacity-50" />
                 <p className="text-xl md:text-2xl text-foreground/80 italic leading-relaxed font-serif">
                   "Relier design, technologie et optimisation digitale pour bâtir des expériences web qui ne sont pas seulement belles, mais aussi utiles, accessibles et durables. Mon objectif est de contribuer à un digital plus humain, où chaque interaction compte."
                 </p>
                 <Sparkles className="absolute -bottom-8 -right-4 w-8 h-8 text-primary opacity-50" />
               </div>
             </motion.div>
           </div>
        </section>
      </main>
    </div>
  );
}