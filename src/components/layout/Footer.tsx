"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-border bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center font-bold text-lg text-white">
              K
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              KidJig
            </span>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed">
            Building the future of AI Products. Empowering creators and
            developers with powerful AI tools.
          </p>

          <div className="flex flex-col gap-3">
            {/* Microsoft Badge */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-2 max-w-fit">
              <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                <div className="bg-[#f25022]"></div>
                <div className="bg-[#7fba00]"></div>
                <div className="bg-[#00a4ef]"></div>
                <div className="bg-[#ffb900]"></div>
              </div>
              <div className="text-xs">
                <div className="font-semibold text-white">
                  Microsoft Startup
                </div>
                <div className="text-gray-500 text-[10px]">
                  Founders Hub Member
                </div>
              </div>
            </div>

            {/* Product Hunt Badge Mock */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2 max-w-fit">
              <div className="w-6 h-6 rounded-full bg-[#da552f] text-white flex items-center justify-center font-bold text-xs">
                P
              </div>
              <div className="text-xs">
                <div className="text-orange-500 font-bold uppercase text-[10px]">
                  Featured on
                </div>
                <div className="font-bold text-white">Product Hunt</div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
          <div>
            <h4 className="font-semibold text-white mb-6">Developers</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Files
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Models
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  API Keys
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Playground
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  X
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Privacy Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
