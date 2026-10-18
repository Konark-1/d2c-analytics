import { useState } from 'react';
import { Header } from './components/Header';
import { KpiMetrics } from './components/KpiMetrics';
import { TimelineCharts } from './components/TimelineCharts';
import { FunnelAndReasons } from './components/FunnelAndReasons';
import { CarrierSlaMatrix } from './components/CarrierSlaMatrix';
import { PincodeRiskTable } from './components/PincodeRiskTable';
import { LiveEventStream } from './components/LiveEventStream';
import { Cpu, ExternalLink } from 'lucide-react';

export function App() {
  const [timeframe, setTimeframe] = useState<string>('Last 30 Days');
  const [selectedCarrier, setSelectedCarrier] = useState<string>('All');

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Aurora Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          timeframe={timeframe}
          setTimeframe={setTimeframe}
          selectedCarrier={selectedCarrier}
          setSelectedCarrier={setSelectedCarrier}
        />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6 space-y-6">
          {/* Architecture Context Banner */}
          <div className="glass-panel rounded-xl p-4 border-l-4 border-l-cyan-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Real-World D2C Logistics Data Pipeline & RTO Mitigation Architecture
                </h3>
                <p className="text-xs text-slate-400">
                  Telemetry integrated from courier non-delivery webhooks (Shiprocket, Delhivery, Blue Dart) & Meta WhatsApp Cloud API v22.0. Resolves doorstep customer friction in under 90 seconds.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-white/10 font-mono">
                TypeScript + Recharts + React
              </span>
            </div>
          </div>

          {/* 1. Primary KPI Grid */}
          <KpiMetrics />

          {/* 2. Timeline Charts */}
          <TimelineCharts />

          {/* 3. Funnel & Friction Breakdown */}
          <FunnelAndReasons />

          {/* 4. Carrier SLA & Fake Attempt Watchtower */}
          <CarrierSlaMatrix />

          {/* 5. Geographic Risk Table */}
          <PincodeRiskTable />

          {/* 6. Live Real-Time Rescue Stream */}
          <LiveEventStream />
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-6 px-4 lg:px-8 bg-slate-950/60 mt-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">Built by Konark Parihar</span>
              <span>·</span>
              <span>Data Analyst & Automation Builder</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://konarkparihar.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
              >
                <span>Portfolio Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://rescueship.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
              >
                <span>RescueShip SaaS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/Konark-1"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/konarkparihar"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
