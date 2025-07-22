import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/components/types/project";

export default function ProjectCard({ title, desc, tags, gradient, live, github }: Project) {
  return (
    <div className="group bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
      <h3 className={`text-2xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4 tracking-tight`}>
        {title}
      </h3>

      <p className="text-white/70 text-sm mb-4 leading-relaxed font-bold tracking-tight">
        {desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((t) => (
          <span key={t} className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full border border-white/20 font-bold tracking-tight">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group relative px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 font-bold rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:bg-emerald-500/30 hover:scale-105 text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <ExternalLink className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-sm">Live</span>
            </div>
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group relative px-4 py-2 bg-white/10 text-white/80 font-bold rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 hover:scale-105 text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <Github className="w-4 h-4 group-hover:scale-110 transition" />
              <span className="text-sm">Code</span>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
