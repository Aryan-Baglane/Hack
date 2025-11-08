import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import Dashboard from "./Dashboard";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoggedIn) {
    return (
      <>
        <Navigation isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <Dashboard />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <Hero onGetStarted={handleLogin} />
      <Features />
      <UseCases />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Index;
