import React from "react";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
          <Shield className="w-3.5 h-3.5 text-blue-600" /> Legal & Compliance
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
        <p className="text-xs text-slate-500">Effective Date: November 15, 2026</p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5 text-xs text-slate-700 leading-relaxed">
        <h2 className="text-sm font-bold text-slate-900">1. Information We Collect</h2>
        <p>
          GlobalWorkWire does not require user registration. We collect standard browser logs, such as IP addresses, browser types, referring pages, and access timestamps to analyze traffic and improve user experience.
        </p>

        <h2 className="text-sm font-bold text-slate-900">2. Google AdSense & Cookies</h2>
        <p>
          Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
        </p>
        <p>
          Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Ads Settings</a>.
        </p>

        <h2 className="text-sm font-bold text-slate-900">3. External Links & Syndication</h2>
        <p>
          GlobalWorkWire aggregates job postings and technology news from external publishers (such as RemoteOK, WeWorkRemotely, TechCrunch). Clicking on job applications or news links will redirect you to third-party domains governed by their respective privacy terms.
        </p>

        <h2 className="text-sm font-bold text-slate-900">4. Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy, you may contact our editorial and administrative desk at <span className="font-mono text-blue-600">admin@globalworkwire.com</span>.
        </p>
      </div>
    </div>
  );
}
