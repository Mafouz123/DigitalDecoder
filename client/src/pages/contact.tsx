import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Mail, MessageCircle, Send, ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/navbar";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Bonjour, je suis ${name}. ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/22991177723?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Navigation */}
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Info & visual */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
                Discutons de votre <span className="text-gradient">Projet Digital</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Une question, un projet ou simplement envie d'échanger ? Nous sommes là pour vous accompagner.
              </p>
            </div>

            <div className="space-y-4">
               {/* Email Card */}
              <Card className="bg-secondary/50 border-none shadow-sm hover:bg-secondary transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground truncate">sannimafouz553@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Card */}
              <Card className="bg-secondary/50 border-none shadow-sm hover:bg-secondary transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">WhatsApp</h3>
                    <p className="text-muted-foreground">+229 91 17 77 23</p>
                  </div>
                </CardContent>
              </Card>

               {/* Channel Card */}
               <a 
                href="https://whatsapp.com/channel/0029VbCSqtUChq6OXqZ8ot0q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-secondary/50 border-none shadow-sm hover:bg-secondary transition-colors group cursor-pointer">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                      <ExternalLink className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">Rejoindre la chaîne WhatsApp</h3>
                      <p className="text-muted-foreground">Pour les dernières actus et astuces</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://www.linkedin.com/in/mafouz-sanni-98704b393?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-secondary/50 border-none shadow-sm hover:bg-secondary transition-colors group cursor-pointer">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">Me contacter sur LinkedIn</h3>
                      <p className="text-muted-foreground">Pour des discussions professionnelles</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="glass-panel border-white/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
              <CardHeader>
                <CardTitle>Envoyer un message</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire pour nous envoyer un message directement sur WhatsApp.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Votre Nom</Label>
                    <Input 
                      id="name" 
                      placeholder="Jean Dupont" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Votre Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Bonjour, j'aimerais avoir plus d'informations sur..." 
                      className="min-h-[150px] bg-background/50 resize-none"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg font-medium gap-2">
                    Envoyer sur WhatsApp <Send className="h-4 w-4" />
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    En cliquant sur envoyer, WhatsApp s'ouvrira avec votre message pré-rempli.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </main>
    </div>
  );
}