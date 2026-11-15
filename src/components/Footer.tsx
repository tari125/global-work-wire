import React from "react";
import Link from "next/link";
import { Globe, Heart, Shield, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Globe className="w-5 h-5 text-orange-500" />
              GlobalWorkWire
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Your real-time automated gateway to global remote jobs, cutting-edge technology trends, and high-growth opportunities across USA, UK, Canada, and Europe.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Job Categories</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="#jobs" className="hover:text-orange-400">Software Engineering</Link></li>
              <li><Link href="#jobs" className="hover:text-orange-400">AI & Machine Learning</Link></li>
              <li><Link href="#jobs" className="hover:text-orange-400">Product & UI/UX Design</Link></li>
              <li><Link href="#jobs" className="hover:text-orange-400">DevOps & Cloud</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Automation & Tech</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-400">Real-time RSS Aggregation</span></li>
              <li><span className="text-slate-400">Verified Remote APIs</span></li>
              <li><span className="text-slate-400">Automated SEO Indexing</span></li>
              <li><span className="text-slate-400">AdSense Optimized Layout</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Monetization & Trust</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Built for high-engagement global traffic. Integrated with Google AdSense compliance guidelines.
            </p>
            <div className="flex items-center gap-2 text-xs text-green-400">
              <Shield className="w-4 h-4" /> 100% GDPR & AdSense Friendly
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} GlobalWorkWire. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Architected by Muhammad Tariq with Flora (Antigravity AI)
          </p>
        </div>
      </div>
    </footer>
  );
}
