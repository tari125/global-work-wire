"use client";

import React, { useState } from "react";
import { initialJobs } from "@/data/mockJobs";
import JobCard from "@/components/JobCard";
import AdBanner from "@/components/AdBanner";
import { Briefcase, Search, Filter, Sparkles } from "lucide-react";

export default function JobsDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI & Data", "Engineering", "Design", "DevOps", "Marketing"];

  const filteredJobs = initialJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 text-xs font-bold border border-blue-500/20">
          <Briefcase className="w-3.5 h-3.5 text-blue-600" />
          Global Remote Career Directory
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          High-Paying Verified Remote Vacancies
        </h1>
        <p className="text-slate-600 text-sm">
          Aggregated directly from Tier-1 employers across North America, the UK, and Europe with full salary transparency.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative flex items-center bg-white rounded-xl shadow-sm border border-slate-300 p-2">
          <Search className="w-5 h-5 text-slate-400 ml-2" />
          <input
            type="text"
            placeholder="Search by job title, skill, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-1.5 text-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="flex justify-center gap-2 overflow-x-auto pb-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-semibold px-4 py-2 rounded-lg transition ${
              selectedCategory === cat
                ? "bg-slate-900 text-white shadow"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AdBanner slotId="jobs-top-ad" format="horizontal" label="Advertisement" />

      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <AdBanner slotId="jobs-bottom-ad" format="horizontal" label="Advertisement" />
    </div>
  );
}
