"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function PlatformOverview() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-medium text-purple-400 uppercase tracking-widest">
            Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            Everything you need <br /> for your API
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Our platform simplifies the API-building process, allowing you to
            monetize, analyze, and protect endpoints.
          </p>
          <div className="pt-4">
            <Button className="rounded-full h-10 px-6 group">
              Get Started{" "}
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Simple Integration Card */}
          <Card className="p-8 border-border bg-card/50 overflow-hidden relative group">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold mb-2">Simple Integration</h3>
              <p className="text-muted-foreground">
                Simply change the endpoints in your existing setup, and you're
                ready to go.
              </p>
            </div>

            {/* Mock Code Editor */}
            <div className="relative rounded-lg bg-[#0a0a0a] border border-border p-4 font-mono text-sm shadow-2xl">
              <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <div className="space-y-1.5 text-xs md:text-sm overflow-x-auto">
                <div className="flex">
                  <span className="text-purple-400 mr-2">const</span>{" "}
                  <span className="text-blue-400">axios</span>{" "}
                  <span className="text-gray-500 mr-2">=</span>{" "}
                  <span className="text-green-400">require</span>(
                  <span className="text-orange-300">"axios"</span>);
                </div>
                <div className="h-2" />
                <div className="flex">
                  <span className="text-purple-400 mr-2">const</span>{" "}
                  <span className="text-blue-400">url</span>{" "}
                  <span className="text-gray-500 mr-2">=</span>{" "}
                </div>
                <div className="flex pl-4">
                  <span className="text-orange-300">
                    "https://api.kidjig.com/v1/chat/completions"
                  </span>
                  ;
                </div>
                <div className="flex">
                  <span className="text-purple-400 mr-2">const</span>{" "}
                  <span className="text-blue-400">headers</span>{" "}
                  <span className="text-gray-500 mr-2">=</span> {"{"}
                </div>
                <div className="flex pl-4">
                  <span className="text-blue-400">"Authorization"</span>:{" "}
                  <span className="text-orange-300">"Bearer kid_..."</span>
                </div>
                <div className="flex">{"};"}</div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none" />
            </div>
          </Card>

          {/* Advanced Analytics Card */}
          <Card className="p-8 border-border bg-card/50 overflow-hidden relative group">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Access and Orchestrate Multiple AI Providers in a Secure,
                Enterprise-Grade Environment.
              </p>
            </div>

            {/* Mock Dashboard */}
            <div className="relative rounded-lg bg-[#0a0a0a] border border-border p-6 shadow-2xl h-[200px] flex flex-col justify-end">
              <div className="absolute top-4 left-6 right-6 flex justify-between items-start">
                <div>
                  <div className="text-xs text-muted-foreground">
                    Spend by Provider
                  </div>
                  <div className="text-lg font-bold">Total Cost: $0.00390</div>
                </div>
              </div>

              {/* Bars */}
              <div className="flex items-end justify-between gap-2 h-32 mt-4 px-2">
                {[40, 65, 30, 85, 50, 60, 45].map((h, i) => (
                  <div key={i} className="flex-1 group/bar relative">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`w-full rounded-t-sm ${i === 3 ? "bg-purple-500" : "bg-gray-800 group-hover/bar:bg-gray-700"}`}
                    />
                  </div>
                ))}
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-transparent pointer-events-none" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
