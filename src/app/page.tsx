"use client";

import React, { useState } from "react";
import { initialJobs, initialNews, Job } from "@/data/mockJobs";
import JobCard from "@/components/JobCard";
import AdBanner from "@/components/AdBanner";
import {
  Search,
  Sparkles,
  Filter,
  Globe2,
  Radio,
  Newspaper,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Flame,
  ArrowUpRight,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const categories = ["All", "AI & Data", "Engineering", "Design", "DevOps", "Marketing"];
  const popularKeywords = ["Next.js 14", "Python", "Kubernetes", "Generative AI", "Remote US", "Remote EU"];

  const filteredJobs = initialJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesVerified = !verifiedOnly || job.verified;

    return matchesSearch && matchesCategory && matchesVerified;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold">
            <Radio className="w-3.5 h-3.5 text-orange-400 animate-ping" />
            <span>Autonomous Tier-1 Syndication Active</span>
            <span className="text-slate-400">•</span>
            <span className="text-orange-400 font-bold">USA • UK • Canada • Europe</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            High-Paying Global Careers &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
              Live Tech Pulse
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Curated 24/7 by autonomous aggregation pipelines inspired by <strong>LinkedIn Remote</strong>, <strong>Indeed</strong>, and <strong>TechCrunch</strong>.
          </p>

          {/* Search Bar with Indeed-style quick search */}
          <div className="max-w-2xl mx-auto pt-2 space-y-3">
            <div className="relative flex items-center bg-white rounded-2xl shadow-2xl p-2 border border-slate-700">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Job title, skill (e.g. Next.js, AI, DevOps)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 text-sm text-slate-900 focus:outline-none bg-transparent"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-md shrink-0">
                Search
              </button>
            </div>

            {/* Popular search chips */}
            <div className="flex items-center justify-center gap-1.5 flex-wrap text-xs text-slate-400">
              <span className="text-[11px] font-semibold text-slate-400">Popular:</span>
              {popularKeywords.map((kw) => (
                <button
                  key={kw}
                  onClick={() => setSearchTerm(kw)}
                  className="text-[11px] bg-slate-800/80 hover:bg-slate-700 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700 transition"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>

          {/* Live Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto text-left">
            <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl">
              <div className="text-xs text-slate-400 font-medium">Avg. Verified Salary</div>
              <div className="text-base font-bold text-orange-400">$135,000+</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl">
              <div className="text-xs text-slate-400 font-medium">Auto-Sync Pipeline</div>
              <div className="text-base font-bold text-cyan-400">Every 60 Mins</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl">
              <div className="text-xs text-slate-400 font-medium">Audience Origin</div>
              <div className="text-base font-bold text-blue-400">Tier-1 Markets</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl">
              <div className="text-xs text-slate-400 font-medium">AdSense Compatibility</div>
              <div className="text-base font-bold text-green-400">100% Policy-Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Leaderboard AdSense Placement */}
      <AdBanner slotId="top-leaderboard-728x90" format="horizontal" label="Top Leaderboard (High-CTR Placement)" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="jobs">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Columns: Jobs Listings */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Globe2 className="w-6 h-6 text-blue-600" />
                  Remote Opportunities
                </h2>
                <p className="text-xs text-slate-500">
                  Aggregated from LinkedIn Remote, RemoteOK, and Indeed Tier-1
                </p>
              </div>

              {/* LinkedIn Style Toggle: Verified Only */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVerifiedOnly(!verifiedOnly)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition ${
                    verifiedOnly
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Employers Only
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, idx) => (
                  <React.Fragment key={job.id}>
                    <JobCard job={job} />
                    {/* Native In-Feed Sponsored Placement */}
                    {idx === 2 && (
                      <AdBanner slotId="in-feed-native-card" format="horizontal" label="Sponsored Partner Opportunity" />
                    )}
                  </React.Fragment>
                ))
              ) : (
                <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500">
                  No positions match your filter. Try clearing filters or searching another keyword.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: TechCrunch & Hacker News Style Sidebar */}
          <div className="space-y-6" id="news">
            {/* Sidebar Ad Placement */}
            <AdBanner slotId="sidebar-medium-rectangle-300x250" format="rectangle" label="Premium Sidebar Ad (High-CPC)" />

            {/* Real-time Tech & AI News Wire (TechCrunch & Hacker News Inspired) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 flex items-center gap-2 text-base">
                  <Flame className="w-5 h-5 text-orange-500" />
                  TechCrunch & HN Wire
                </h3>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  Live Stream
                </span>
              </div>

              <div className="space-y-4">
                {initialNews.map((news) => (
                  <div key={news.id} className="group space-y-1.5 border-b border-slate-100 last:border-none pb-3.5 last:pb-0">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className={`font-bold px-1.5 py-0.5 rounded border text-[10px] ${news.sourceColor}`}>
                        {news.source}
                      </span>
                      <span>{news.readTime}</span>
                    </div>

                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug"
                    >
                      {news.title}
                    </a>

                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {news.summary}
                    </p>

                    <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 font-semibold text-orange-600">
                        <ThumbsUp className="w-3 h-3" /> {news.upvotes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" /> {news.commentsCount}
                      </span>
                      <span>•</span>
                      <span>{news.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google AdSense Revenue Engine Box */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-5 text-white space-y-3 shadow-md border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                <TrendingUp className="w-4 h-4" /> Monetization Mechanics
              </div>
              <h4 className="font-bold text-sm">Targeting Tier-1 Ad Revenue</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aggregating authentic remote offers and breaking tech developments creates the high-dwell-time audience that yields top Google AdSense CPC bids ($1 to $5+).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Anchor AdSense Banner */}
      <AdBanner slotId="bottom-anchor-banner" format="horizontal" label="Anchor Banner Advertisement" />
    </div>
  );
}
