"use client";
import { Card } from "@/components/ui/card";
import { Shield, Zap, BarChart, Globe, Lock, Code } from "lucide-react";

const FEATURES = [
  {
    title: "Unified API",
    description:
      "Connect to 50+ LLMs using a single, standardized format. No more juggling different SDKs.",
    icon: Code,
  },
  {
    title: "Real-time Monitoring",
    description:
      "Track latency, cost, and usage across all your models in a single dashboard.",
    icon: BarChart,
  },
  {
    title: "Reliability Layer",
    description:
      "Automatic retries, fallbacks, and smart caching to ensure your app never goes down.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description:
      "SOC-2 compliant data handling and advanced prompt injection protection.",
    icon: Shield,
  },
  {
    title: "Global Edge",
    description:
      "Distributed globally for sub-100ms latency, no matter where your users are.",
    icon: Globe,
  },
  {
    title: "RBAC & Governance",
    description:
      "Fine-grained access control and budget limits for teams of all sizes.",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Everything you need to ship AI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            KidJig provides the infrastructure so you can focus on building
            amazing products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="p-8 border-border bg-card hover:border-purple-500/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
