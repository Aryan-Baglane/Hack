import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 hero-glow">
      <div className="container mx-auto max-w-7xl px-4 text-center lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 ring-1 ring-primary/20 backdrop-blur-sm animate-in fade-in slide-in-from-top duration-700">
          <Sparkles className="h-4 w-4" />
          <span>Powered by Gemini API</span>
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          Your Data,{" "}
          <span className="gradient-primary bg-clip-text text-transparent">
            In Your Words.
          </span>
        </h1>
        
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          Stop querying. Start asking. DataQuery AI unlocks your company's MongoDB data with plain English.
          No code, no queries, just answers.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <Button
            onClick={onGetStarted}
            size="lg"
            className="gradient-primary-hover w-full sm:w-auto text-lg font-medium shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto text-lg font-medium border-2 hover:bg-accent/50 transition-all duration-300 hover:scale-105"
          >
            <a href="#features">Learn More</a>
          </Button>
        </div>
      </div>

      {/* Demo Flow Mockup */}
      <div className="container mx-auto max-w-4xl px-4 lg:px-8 mt-20 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
        <div className="w-full p-6 bg-card rounded-2xl shadow-2xl ring-1 ring-border backdrop-blur-sm">
          <div className="flex items-center justify-between space-x-4 p-4 bg-muted rounded-t-xl">
            <span className="font-mono text-sm text-muted-foreground">User Prompt</span>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="p-6 bg-card">
            <p className="font-mono text-foreground">&gt; "Show me the top 5 sales reps by Q3 revenue who are in the east region."</p>
          </div>
          <div className="flex justify-center py-6">
            <div className="gradient-primary h-12 w-12 rounded-full flex items-center justify-center animate-pulse-slow shadow-glow">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-6 font-mono text-sm bg-muted rounded-b-xl">
            <span className="flex items-center gap-2 text-success font-medium">
              <Sparkles className="w-5 h-5" />
              Gemini API
            </span>
            <span className="text-xl text-muted-foreground">→</span>
            <span className="flex items-center gap-2 text-info font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
              </svg>
              MongoDB Query
            </span>
            <span className="text-xl text-muted-foreground">→</span>
            <span className="flex items-center gap-2 text-primary font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3V10.5Z" />
              </svg>
              Data & Insight
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
