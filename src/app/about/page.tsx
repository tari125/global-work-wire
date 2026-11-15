import React from "react";
import { Globe, Shield, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
          <Globe className="w-3.5 h-3.5" /> About GlobalWorkWire
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Empowering the Global Remote Workforce
        </h1>
        <p className="text-slate-600 text-sm">
          Bridging the gap between world-class remote tech opportunities and global professionals.
        </p>
      </div>

      <div className="prose prose-slate max-w-none bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
        <h2 className="text-lg font-bold text-slate-900">Our Mission</h2>
        <p>
          GlobalWorkWire was architected to solve a major inefficiency in the modern digital economy: fragmented remote job boards and noise in technology reporting. We aggregate verified, high-paying remote vacancies from leading employers in the United States, United Kingdom, Canada, and Europe.
        </p>

        <h2 className="text-lg font-bold text-slate-900">How Our Technology Works</h2>
        <p>
          Our platform operates on a 100% automated aggregation infrastructure. Through real-time RSS feeds, public syndication protocols, and API connectors, our backend engine continuously fetches, parses, and indexes career opportunities and AI developments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-1">Zero Cost to Job Seekers</h4>
            <p className="text-xs text-slate-500">All aggregated career opportunities and tech intelligence are 100% free for public access.</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-1">AdSense Compliance</h4>
            <p className="text-xs text-slate-500">We adhere to Google Publisher Policies, ensuring non-intrusive, privacy-respecting ad placements.</p>
          </div>
        </div>

        <h2 className="text-lg font-bold text-slate-900">Editorial & Curation Standards</h2>
        <p>
          All technology news and career listings are syndicated from original author sources with direct attribution and links. We do not modify original vacancy requirements or publisher claims.
        </p>
      </div>
    </div>
  );
}
