import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Lightbulb, Rocket, BookOpen } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_digital_landscape_for_blog_hero.png";
import aiImage from "@assets/generated_images/ai_brain_concept_for_article_thumbnail.png";
import strategyImage from "@assets/generated_images/digital_strategy_concept_for_article_thumbnail.png";
import uxImage from "@assets/generated_images/ux_design_abstract_for_article_thumbnail.png";
import talentImage from "@assets/generated_images/young_developers_collaborating_on_digital_project.png";
import pagespeedImage from "@assets/generated_images/pagespeed_performance_metrics_visualization.png";
import googleadsImage from "@assets/generated_images/ai_automation_for_digital_marketing.png";
import corevitalsImage from "@assets/generated_images/core_web_vitals_optimization_guide.png";
import googleadsAdsImage from "@assets/generated_images/ai-powered_google_ads_campaigns.png";
import screamingfrogImage from "@assets/generated_images/seo_spider_crawler_analysis.png";
import seoStrategyImage from "@assets/generated_images/seo_strategy_guide_concept.png";
import deepseekImage from "@assets/generated_images/deepseek_ai_model_for_designers.png";
import agenticImage from "@assets/generated_images/agentic_workflow_visualization_diagram.png";
import resumeImage from "@assets/generated_images/ai_resume_optimization_process_visual.png";
import agenticSEOImage from "@assets/generated_images/replit_agent_and_agentic_workflow_illustration.png";

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
              fetchPriority="high"
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

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
              {/* Featured - Resume IA (Newest) */}
              <Link href="/articles/resume-ia">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer lg:col-span-2 lg:row-span-2"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                      src={resumeImage} 
                      alt="Optimisation CV IA" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="600"
                      height="375"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                      Carrière & IA
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>04 Jan 2026</span>
                      <span>•</span>
                      <span>10 min de lecture</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors">
                      Créer et Optimiser son CV avec l'IA : Le Guide 2026
                    </h3>
                    <p className="text-muted-foreground line-clamp-4">
                      Pourquoi et comment l'intelligence artificielle est devenue votre meilleure alliée pour décrocher le job de vos rêves. Méthodes pas à pas pour un CV qui passe les robots ATS.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium">
                      Lire l'article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Featured - DeepSeek */}
              <Link href="/articles/google-ads-ia-2026">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer lg:col-span-2 lg:row-span-2"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                      src={googleadsImage} 
                      alt="Google Ads et IA" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="600"
                      height="375"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                      Marketing IA
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>23 Déc 2025</span>
                      <span>•</span>
                      <span>10 min de lecture</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors">
                      L'ère de l'autonomie : Maîtriser l'IA de Google Ads en 2026
                    </h3>
                    <p className="text-muted-foreground line-clamp-4">
                      Comment piloter l'IA Google Ads avec first-party data et Performance Max, tout en garantissant votre Brand Safety.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium">
                      Lire l'article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Google PageSpeed - 23 Déc */}
              <Link href="/articles/google-pagespeed-insights">
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
                      src={pagespeedImage} 
                      alt="Google PageSpeed Insights" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                      SEO 2026
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>23 Déc 2025</span>
                      <span>•</span>
                      <span>8 min de lecture</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      Au-delà du score 100 : L'INP, votre priorité SEO en 2026
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      Comment optimiser votre site avec l'Interaction to Next Paint et le Green SEO.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium">
                      Lire l'article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Young Talents - 01 Déc */}
              <Link href="/articles/trusted-young-talent">
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
                      src={talentImage} 
                      alt="Young Talents" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                      RH
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>01 Déc 2025</span>
                      <span>•</span>
                      <span>8 min de lecture</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      La confiance envers les jeunes développeurs : L'atout stratégique
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      Pourquoi investir dans les jeunes talents en développement web et design.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium">
                      Lire l'article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* IA 30 Min - 30 Nov */}
              <Link href="/articles/ia-30-min">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                      src={aiImage} 
                      alt="IA Générative" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                      Productivité
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>30 Nov 2025</span>
                      <span>•</span>
                      <span>5 min de lecture</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      L'IA en 30 minutes par jour : Gagnez 10 heures par semaine
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      Les 3 automatisations simples qui vont transformer votre productivité.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium">
                      Lire l'article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Transformation Digitale - 28 Nov */}
              <Link href="/articles/digitalisation-vs-transformation">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                      src={strategyImage} 
                      alt="Transformation Digitale" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height="300"
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
                      Une feuille de route concrète pour digitaliser votre activité étape par étape.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium">
                      Lire l'article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Vibe Coding - 25 Nov (oldest) */}
              <Link href="/articles/vibe-coding">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                      src={uxImage} 
                      alt="Vibe Coding" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                      Tendance
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>25 Nov 2025</span>
                      <span>•</span>
                      <span>4 min de lecture</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      Vibe Coding : Quand l'IA donne le « La » de la Programmation
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      La nouvelle approche où l'intuition guide la création logicielle assistée par IA.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium">
                      Lire l'article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-4">Tutoriels Pratiques</h2>
                <p className="text-muted-foreground text-lg">Apprenez en faisait avec nos guides pratiques étape par étape.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Tutorial - Agentic SEO (Newest) */}
              <Link href="/tutorials/agentic-seo-results">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer h-full"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md border-2 border-orange-500/20">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                      src={agenticSEOImage} 
                      alt="Agentic SEO" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-orange-600 text-white hover:bg-orange-700 backdrop-blur-md border-none">
                      Case Study
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>14 Jan 2026</span>
                      <span>•</span>
                      <span>15 min</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Replit Agent & SEO : Dominer Google Search
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      Comment j'utilise les agents IA pour atteindre mes objectifs de croissance organique.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium text-sm">
                      Voir le case study <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Tutorial 1 - SEO Strategy */}

              {/* Tutorial 2 - PageSpeed */}
              <Link href="/tutorials/pagespeed-corevitalweb">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                      src={corevitalsImage} 
                      alt="Core Web Vitals" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                      SEO
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>23 Déc 2025</span>
                      <span>•</span>
                      <span>15 min</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      PageSpeed Insights & Core Web Vitals 2026
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      Optimisez votre site pour l'INP et les Core Web Vitals.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium text-sm">
                      Voir le tutoriel <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Tutorial 3 - Google Ads */}
              <Link href="/tutorials/google-ads-ia">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                      src={googleadsAdsImage} 
                      alt="Google Ads IA" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                      Marketing
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>23 Déc 2025</span>
                      <span>•</span>
                      <span>20 min</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Google Ads & IA générative 2026
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      Maîtrisez Performance Max avec l'IA et first-party data.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium text-sm">
                      Voir le tutoriel <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Tutorial 4 - Screaming Frog */}
              <Link href="/tutorials/screaming-frog-seo">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                      src={screamingfrogImage} 
                      alt="Screaming Frog" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                      SEO Technique
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>23 Déc 2025</span>
                      <span>•</span>
                      <span>25 min</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Screaming Frog & Analyse IA
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      Crawl avancé et insights stratégiques avec l'IA.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium text-sm">
                      Voir le tutoriel <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Tutorial 5 - Agentic Workflows (Newest) */}
              <Link href="/tutorials/agentic-workflows">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                      src={agenticImage} 
                      alt="Flux Agentiques" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-black hover:bg-white backdrop-blur-md border-none">
                      IA Avancée
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>30 Déc 2025</span>
                      <span>•</span>
                      <span>30 min</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Flux de Travail Agentiques Pour les Nuls
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      Comprendre et maîtriser les agents IA autonomes en pratique.
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium text-sm">
                      Voir le tutoriel <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
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
            
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Décoder le digital. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="https://wa.me/22991177723" target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp</a>
              <a href="https://www.linkedin.com/in/mafouz-sanni-98704b393?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
              <a href="#" className="hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}