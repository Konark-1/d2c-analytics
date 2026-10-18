import React from 'react';
import { Activity, ExternalLink, ShieldCheck, Filter } from 'lucide-react';

interface HeaderProps {
  timeframe: string;
  setTimeframe: (val: string) => void;
  selectedCarrier: string;
  setSelectedCarrier: (val: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  timeframe,
  setTimeframe,
  selectedCarrier,
  setSelectedCarrier,
}) => {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand & Live Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                D2C Ops Intelligence
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium">
                  RTO Rescue Engine
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Live Webhook Stream Active · 90s SLA Interception
            </p>
          </div>
        </div>

        {/* Global Filters & External Links */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Timeframe Filter */}
          <div className="flex items-center gap-1.5 bg-slate-900/80 border border-white/10 rounded-lg p-1 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
            {(['Last 7 Days', 'Last 30 Days', 'Q3 2026'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                  timeframe === t
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Carrier Selector */}
          <select
            value={selectedCarrier}
            onChange={(e) => setSelectedCarrier(e.target.value)}
            className="bg-slate-900/80 border border-white/10 text-slate-200 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-500/50"
          >
            <option value="All">All Carriers</option>
            <option value="Delhivery">Delhivery</option>
            <option value="Blue Dart">Blue Dart</option>
            <option value="Shadowfax">Shadowfax</option>
            <option value="Xpressbees">Xpressbees</option>
            <option value="Ekart Logistics">Ekart Logistics</option>
          </select>

          {/* Direct Credential / Author Badges */}
          <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-white/10">
            <a
              href="https://konarkparihar.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-slate-300 hover:text-cyan-400 flex items-center gap-1 transition-colors px-2.5 py-1 rounded-md border border-white/5 hover:border-cyan-500/30 bg-white/5"
            >
              <span>Konark Parihar</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://rescueship.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors px-2.5 py-1 rounded-md border border-cyan-500/30 bg-cyan-500/10"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>RescueShip SaaS</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
