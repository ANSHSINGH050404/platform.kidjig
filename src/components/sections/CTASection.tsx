"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-background border-t border-border relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Begin Your AI Journey <br />
          <span className="text-muted-foreground">Start today.</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            Chat With Us <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
          <Button className="rounded-full h-12 px-8 text-base">
            Get Started <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
