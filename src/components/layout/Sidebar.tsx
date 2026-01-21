"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Code2,
  Cpu,
  Globe,
  Home,
  Layout,
  Layers,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export const MENU_ITEMS = [
  { label: "Overview", icon: Home, href: "/" },
  { label: "Analytics", icon: BarChart3, href: "/" },
  { label: "Gateways", icon: Zap, href: "/" },
  { label: "Models", icon: Cpu, href: "/" },
  { label: "Endpoints", icon: Code2, href: "/" },
  { label: "Regions", icon: Globe, href: "/" },
  { label: "Security", icon: ShieldCheck, href: "/" },
  { label: "Integrations", icon: Layers, href: "/" },
  { label: "System Status", icon: Layout, href: "/" },
];

export default function Sidebar({ className }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.aside
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
      animate={{ width: isHovered ? 260 : 80 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "border-r border-border bg-card flex flex-col h-screen sticky top-0 z-[60] overflow-hidden transition-colors duration-300",
        className,
      )}
    >
      <div className="p-4 flex flex-col h-full">
        {/* Logo Section */}
        <div className="flex items-center gap-4 mb-10 px-2">
          <div className="min-w-[40px] h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/20">
            K
          </div>
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-xl font-bold tracking-tight whitespace-nowrap"
              >
                KidJig
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2 flex-1">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 px-3 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all group relative"
            >
              <div className="min-w-[24px] flex items-center justify-center">
                <item.icon className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
              </div>

              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Tooltip for collapsed state */}
              {!isHovered && (
                <div className="absolute left-full ml-4 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-border shadow-md">
                  {item.label}
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Footer Section (Settings) */}
        <div className="mt-auto pt-4 border-t border-border">
          <Link
            href="/"
            className="flex items-center gap-4 px-3 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all group relative"
          >
            <div className="min-w-[24px] flex items-center justify-center">
              <Settings className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
            </div>

            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="whitespace-nowrap"
                >
                  Settings
                </motion.span>
              )}
            </AnimatePresence>

            {!isHovered && (
              <div className="absolute left-full ml-4 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-border shadow-md">
                Settings
              </div>
            )}
          </Link>
        </div>
      </div>
    </motion.aside>
  );
}
