import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

export const Hero = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      appState: { returnTo: "/Querypage" },
    });
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-32 bg-white text-center">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/60 px-4 py-2 text-sm font-medium text-blue-700 mb-6 ring-1 ring-blue-300 backdrop-blur-sm animate-in fade-in slide-in-from-top duration-700">
          <Sparkles className="h-4 w-4" />
          <span>Powered by Gemini API</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          Your Data,{" "}
          <span className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            In Your Words.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 md:text-xl animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          Stop querying. Start asking. DataQuery AI unlocks your company's MongoDB data with plain English.
          No code, no queries, just answers.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <Button
            onClick={handleLogin}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 w-full sm:w-auto text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto text-lg font-medium border-2 border-blue-400 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
          >
            <a href="#features">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
