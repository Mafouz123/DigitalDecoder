import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import About from "@/pages/about";
import Article1 from "@/pages/articles/digitalisation-vs-transformation";
import Article2 from "@/pages/articles/ia-30-min";
import Article3 from "@/pages/articles/vibe-coding";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/articles/digitalisation-vs-transformation" component={Article1} />
      <Route path="/articles/ia-30-min" component={Article2} />
      <Route path="/articles/vibe-coding" component={Article3} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;