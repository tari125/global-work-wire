import React, { useState } from "react";
import { Job } from "@/data/mockJobs";
import {
  MapPin,
  DollarSign,
  Clock,
  ExternalLink,
  Sparkles,
  Building2,
  CheckCircle2,
  Bookmark,
  Users,
  Share2,
} from "lucide-react";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.origin + "/jobs#" + job.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={job.id}
      className={`p-5 rounded-2xl border transition-all duration-200 bg-white hover:shadow-xl hover:border-blue-500/80 group relative ${
        job.featured
          ? "border-orange-300 ring-2 ring-orange-400/20 shadow-sm"
          : "border-slate-200"
      }`}
    >
      {/* Top Badges (Indeed & LinkedIn inspired) */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          {job.featured && (
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Featured Urgently Hiring
            </span>
          )}
          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            {job.source}
          </span>
          {job.applicantsCount && (
            <span className="text-[11px] text-slate-500 flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-md">
              <Users className="w-3 h-3 text-slate-400" />
              {job.applicantsCount} applicants
            </span>
          )}
        </div>

        {/* Action icons (Bookmark & Share) */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setSaved(!saved)}
            title={saved ? "Saved" : "Save Job"}
            className={`p-1.5 rounded-lg border transition ${
              saved
                ? "bg-orange-50 border-orange-300 text-orange-600"
                : "border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Bookmark className="w-4 h-4 fill-current" />
          </button>
          <button
            onClick={handleShare}
            title={copied ? "Link Copied!" : "Share Job"}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Company Avatar & Title Details */}
        <div className="flex items-start gap-3.5">
          <div
            className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-white font-black text-lg shadow-sm ${
              job.companyLogoBg || "bg-slate-900"
            }`}
          >
            {job.company.substring(0, 2).toUpperCase()}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {job.company}
              </span>
              {job.verified && (
                <span title="Verified Tier-1 Employer" className="text-blue-500">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-blue-500 text-white" />
                </span>
              )}
            </div>

            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug">
              {job.title}
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-0.5">
              <span className="flex items-center gap-1 font-medium text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {job.location}
              </span>
              <span className="flex items-center gap-1 font-extrabold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200/60">
                <DollarSign className="w-3.5 h-3.5 text-green-600" />
                {job.salary}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {job.postedTime}
              </span>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex flex-col sm:items-end justify-between shrink-0">
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-slate-900 hover:bg-orange-500 text-white text-xs font-bold rounded-xl shadow-md transition group-hover:scale-[1.02]"
          >
            Apply Directly
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Skills / Tech Tags */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-semibold bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/80 px-2.5 py-1 rounded-lg transition"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
