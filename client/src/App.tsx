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
import Article4 from "@/pages/articles/trusted-young-talent";
import Article5 from "@/pages/articles/google-pagespeed-insights";
import Article6 from "@/pages/articles/google-ads-ia-2026";
import Article7 from "@/pages/articles/deepseek-designers";
import Article8 from "@/pages/articles/resume-ia";
import Article9 from "@/pages/articles/ai-ecommerce-pme";
import Article10 from "@/pages/articles/nocode-lowcode-guide";
import TutorialSEO from "@/pages/tutorials/seo-strategy";
import TutorialPageSpeed from "@/pages/tutorials/pagespeed-corevitalweb";
import TutorialGoogleAds from "@/pages/tutorials/google-ads-ia";
import TutorialScreamingFrog from "@/pages/tutorials/screaming-frog-seo";
import TutorialAgenticWorkflows from "@/pages/tutorials/agentic-workflows";
import TutorialAgenticSEO from "@/pages/tutorials/agentic-seo-results";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/articles/digitalisation-vs-transformation" component={Article1} />
      <Route path="/articles/ia-30-min" component={Article2} />
      <Route path="/articles/vibe-coding" component={Article3} />
      <Route path="/articles/trusted-young-talent" component={Article4} />
      <Route path="/articles/google-pagespeed-insights" component={Article5} />
      <Route path="/articles/google-ads-ia-2026" component={Article6} />
      <Route path="/articles/deepseek-designers" component={Article7} />
      <Route path="/articles/resume-ia" component={Article8} />
      <Route path="/articles/ai-ecommerce-pme" component={Article9} />
      <Route path="/articles/nocode-lowcode-guide" component={Article10} />
      <Route path="/tutorials/seo-strategy" component={TutorialSEO} />
      <Route path="/tutorials/pagespeed-corevitalweb" component={TutorialPageSpeed} />
      <Route path="/tutorials/google-ads-ia" component={TutorialGoogleAds} />
      <Route path="/tutorials/screaming-frog-seo" component={TutorialScreamingFrog} />
      <Route path="/tutorials/agentic-workflows" component={TutorialAgenticWorkflows} />
      <Route path="/tutorials/agentic-seo-results" component={TutorialAgenticSEO} />
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