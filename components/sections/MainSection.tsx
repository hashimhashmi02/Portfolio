"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/sections/ProjectCard";
import { Project } from "@/components/types/project";

const projects: Project[] = [
  {
    title: "Project Alpha",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "TypeScript", "Node.js"],
    gradient: "from-emerald-400 to-cyan-400",
    live: "https://alpha-demo.vercel.app",
    github: "https://github.com/you/alpha",
  },
  {
    title: "Web3 DApp",
    desc:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["Solidity", "Web3.js", "Ethereum"],
    gradient: "from-pink-400 to-purple-400",
    live: "https://dapp-demo.xyz",
    github: "https://github.com/you/dapp",
  },
  {
    title: "Enterprise Solution",
    desc:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["Angular", "Docker", "MongoDB"],
    gradient: "from-indigo-400 to-blue-400",
    live: "https://enterprise-saas.app",
    github: "https://github.com/you/enterprise",
  },
  {
    title: "Mobile App",
    desc:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["React Native", "Expo", "Firebase"],
    gradient: "from-cyan-400 to-teal-400",
    live: "https://mobile-demo.link",
    github: "https://github.com/you/mobile",
  },
];

export default function MainSection() {
  // OPTIONAL cursor glow for this section
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="relative z-10 pt-32 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* About */}
        <section className="mb-20">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10 hover:bg-white/10 transition-all duration-500 group">
            <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
              About Me
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6 font-bold tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-white/70 text-base leading-relaxed font-bold tracking-tight">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-5xl font-black mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent tracking-tight text-center">
            Featured Projects
          </h2>

          {/* 2 columns on >=sm screens, stays 2 on md/lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>
      </div>

      {/* Optional cursor follower glow */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out z-0"
        style={{ left: mousePos.x - 192, top: mousePos.y - 192 }}
      />
    </main>
  );
}
