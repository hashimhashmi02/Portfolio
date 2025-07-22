import AppBar from "@/components/Layout/Appbar";
import MainSection from "@/components/sections/MainSection";
import BackgroundDots from "@/components/ui/BackgroundDots";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900">
      <BackgroundDots />
      <AppBar />
      <MainSection />
    </div>
  );
}
