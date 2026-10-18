import React from 'react';
import { LIVE_RESCUE_STREAM } from '../data/d2c_mock_data';
import { Zap, Clock, CheckCircle2, IndianRupee } from 'lucide-react';

export const LiveEventStream: React.FC = () => {
  return (
    <div className="glass-panel rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            Live Autonomous Rescue Event Stream
          </h2>
        </div>
        <span className="text-xs text-slate-400 font-mono">Meta WhatsApp Cloud API v22.0</span>
      </div>

      <div className="space-y-2.5">
        {LIVE_RESCUE_STREAM.map((ev) => (
          <div
            key={ev.id}
            className="p-3 rounded-lg bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-2"
          >
            <div className="flex items-start md:items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5 md:mt-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-white text-xs">{ev.orderId}</span>
                  <span className="text-[11px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                    {ev.carrier}
                  </span>
                  <span className="text-xs text-slate-400">({ev.city})</span>
                </div>
                <div className="text-xs text-emerald-300 font-medium mt-0.5 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>{ev.customerAction}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono ml-11 md:ml-0">
              <div className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{ev.resolutionTimeSec}s latency</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <IndianRupee className="w-3 h-3" />
                <span>₹{ev.savedValueInr.toLocaleString('en-IN')} rescued</span>
              </div>
              <span className="text-slate-500 text-[11px]">{ev.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
