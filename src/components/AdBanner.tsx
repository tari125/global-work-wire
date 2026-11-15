import React from "react";

interface AdBannerProps {
  slotId?: string;
  format?: "horizontal" | "rectangle" | "vertical";
  label?: string;
}

export default function AdBanner({
  slotId = "default-slot",
  format = "horizontal",
  label = "Sponsored Advertisement (AdSense)",
}: AdBannerProps) {
  const formatClasses = {
    horizontal: "h-24 sm:h-28 w-full max-w-4xl mx-auto",
    rectangle: "h-64 w-full max-w-sm mx-auto",
    vertical: "h-96 w-full max-w-xs mx-auto",
  };

  return (
    <div className="my-8 px-4">
      <div className="text-[10px] text-center uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
        {label}
      </div>
      <div
        className={`${formatClasses[format]} bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center p-4 text-center transition hover:border-blue-400/50 shadow-sm`}
      >
        <div className="text-xs font-bold text-slate-600 mb-1">
          Google AdSense Placement Area
        </div>
        <div className="text-[11px] text-slate-400 max-w-xs">
          High-CPC display unit optimized for Tier-1 audience (USA, UK, CA, EU).
        </div>
        <div className="mt-2 text-[10px] bg-white border border-slate-200 px-2.5 py-0.5 rounded text-slate-500 font-mono">
          Slot ID: {slotId}
        </div>
      </div>
    </div>
  );
}
