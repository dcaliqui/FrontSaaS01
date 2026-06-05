"use client";

import { useEffect, useState } from "react";
import Header from "../components/layout/header";
import Hero from "../components/layout/hero";
import Fun from "@/components/layout/fetuares";
import Join from "@/components/layout/join";
import Footer from "@/components/layout/footer";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <Header />
      <div className="flex-1 flex flex-col overflow-auto">
        <section
          id="inicio"
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Hero />
        </section>
        <section
          id="funcionalidades"
          className={`transform transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Fun />
        </section>
        <section
          id="sobre"
          className={`transform transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Join />
        </section>
        <section
          id="contato"
          className={`transform transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Footer />
        </section>
      </div>
    </div>
  );
}
