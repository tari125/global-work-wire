import React from "react";
import Link from "next/link";
import { Globe, Briefcase, Zap, Info, ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-orange-500 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Globe className="w-5 h-5 text-orange-400" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-white to-orange-400 bg-clip-text text-transparent">
                GlobalWorkWire
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                Remote Jobs & Tech Pulse
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition">
              Home
            </Link>
            <Link href="/jobs" className="text-sm font-medium text-slate-300 hover:text-orange-400 transition flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-blue-400" />
              Remote Jobs
            </Link>
            <Link href="/news" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" />
              AI & Tech Pulse
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-white transition flex items-center gap-1.5">
              <Info className="w-4 h-4 text-slate-400" />
              About
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-slate-300 hover:text-white transition flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              Privacy Policy
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-1.5"></span>
              Live Feeds
            </span>
            <Link
              href="/jobs"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-lg shadow-orange-500/20 transition flex items-center gap-1.5"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
