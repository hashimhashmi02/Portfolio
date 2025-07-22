"use client";

import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Code, Briefcase, Sparkles } from "lucide-react";

const GITHUB_URL = "https://github.com/hashimhashmi02";
const LINKEDIN_URL = "https://www.linkedin.com/in/hashim-hashmi-b0b01220b";
const RESUME_URL = "/resume.pdf";

export default function AppBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDownloadResume = () => window.open(RESUME_URL, "_blank");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-2xl shadow-2xl shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="space-y-0.5">
            <h1 className="text-xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent tracking-tight">
              HMH
            </h1>
            <div className="flex items-center space-x-1">
              <Code className="w-3 h-3 text-blue-400" />
              <Briefcase className="w-3 h-3 text-purple-400" />
              <span className="text-purple-200 font-medium text-xs">
                Full Stack • Web3
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group relative p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
              >
                <Github className="w-4 h-4 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group relative p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
              >
                <Linkedin className="w-4 h-4 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            <button
              onClick={handleDownloadResume}
              className="group relative px-5 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
              <div className="relative flex items-center space-x-2">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm">Download Resume</span>
                <Sparkles className="w-3 h-3 group-hover:animate-spin" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
