"use client";

import React, { useState } from "react";
import { initialNews } from "@/data/mockJobs";
import AdBanner from "@/components/AdBanner";
import { Newspaper, Rss, ExternalLink, Sparkles, TrendingUp, Filter } from "lucide-react";

export default function NewsPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const newsFeeds = [
    { name: "TechCrunch AI & Startups", url: "https://techcrunch.com/category/artificial-intelligence/feed/", active: true },
    { name: "Hacker News Top Stories", url: "https://news.ycombinator.com/rss", active: true },
    { name: "Wired Emerging Tech Wire", url: "https://www.wired.com/feed/rss", active: true },
    { name: "Ars Technica Enterprise", url: "https://feeds.arstechnica.com/arstechnica/index", active: true },
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 text-xs font-bold border border-cyan-500/20">
          <Rss className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
          Autonomous Real-Time RSS Aggregation
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Global Tech & AI Pulse
        </h1>
        <p className="text-slate-600 text-sm">
          Live stream of breaking technology announcements, AI research, and high-impact digital trends aggregated from leading global publishers.
        </p>
      </div>

      {/* AdSense Leaderboard */}
      <AdBanner slotId="news-header-leaderboard" format="horizontal" label="Leaderboard Advertisement" />

      {/* Connected Feed Sources Showcase */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 mb-10 shadow-lg border border-slate-800">
        <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> Live Active RSS Feed Ingestion Channels
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          {newsFeeds.map((feed) => (
            <div key={feed.name} className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl flex items-center justify-between">
              <div>
                <div className="font-bold text-white">{feed.name}</div>
                <div className="text-[10px] text-green-400 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></span>
                  Synced Hourly
                </div>
              </div>
              <Rss className="w-4 h-4 text-orange-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* News Feed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-5">
          <h2 className="text-xl font-bold text-slate-900 border-b pb-2 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-blue-600" /> Latest Aggregated Dispatches
          </h2>

          <div className="space-y-4">
            {initialNews.map((item, idx) => (
              <React.Fragment key={item.id}>
                <article className="p-5 bg-white border border-slate-200 rounded-xl hover:shadow-md transition">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{item.source}</span>
                    <span>{item.timestamp}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 hover:text-orange-500 transition mb-2">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2">
                      {item.title}
                      <ExternalLink className="w-4 h-4 shrink-0 text-slate-400" />
                    </a>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.summary}</p>
                </article>

                {idx === 1 && (
                  <AdBanner slotId="news-inline-slot" format="horizontal" label="Sponsored Content" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <AdBanner slotId="news-sidebar-ad" format="rectangle" label="AdSense Sidebar Rectangle" />

          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              How the Automation Works
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every 60 minutes, the Next.js server calls public RSS endpoints, extracts XML data, sanitizes it, and builds lightweight static pages. You never have to manually write or publish articles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
