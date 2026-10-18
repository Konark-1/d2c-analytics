import React from 'react';
import { Package, IndianRupee, TrendingDown, ShieldAlert, Zap, ArrowDownRight, ArrowUpRight } from 'lucide-react';

export const KpiMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {/* 1. Shipped Volume */}
      <div className="glass-panel rounded-xl p-4 relative overflow-hidden group hover:border-cyan-500/30 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-400 font-medium">Shipped Volume</span>
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
            <Package className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl font-bold text-white tracking-tight">28,450</div>
        <div className="mt-1 flex items-center text-xs text-emerald-400 gap-1 font-medium">
          <ArrowUpRight className="w-3.5 h-3.5" />
          <span>+14.2% MoM</span>
          <span className="text-slate-500 font-normal ml-auto">COD: 68%</span>
        </div>
      </div>

      {/* 2. Gross Merchandise Value (GMV) */}
      <div className="glass-panel rounded-xl p-4 relative overflow-hidden group hover:border-cyan-500/30 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-400 font-medium">GMV In Transit</span>
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
            <IndianRupee className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl font-bold text-white tracking-tight">₹4.12 Cr</div>
        <div className="mt-1 flex items-center text-xs text-slate-400 gap-1">
          <span>AOV: ₹1,448</span>
          <span className="text-cyan-400 ml-auto font-medium">20,400 Pincodes</span>
        </div>
      </div>

      {/* 3. Baseline Courier RTO */}
      <div className="glass-panel rounded-xl p-4 relative overflow-hidden group hover:border-rose-500/30 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-400 font-medium">Baseline Courier RTO</span>
          <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400">
            <ShieldAlert className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl font-bold text-rose-400 tracking-tight">28.6%</div>
        <div className="mt-1 flex items-center text-xs text-slate-400 gap-1">
          <span>8,140 NDR events</span>
          <span className="text-rose-400/80 ml-auto font-medium">No rescue</span>
        </div>
      </div>

      {/* 4. Rescued Doorstep RTO */}
      <div className="glass-panel-glow rounded-xl p-4 relative overflow-hidden group hover:border-cyan-400/50 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-cyan-300 font-medium">Rescued RTO Rate</span>
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
            <TrendingDown className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl font-bold text-emerald-400 tracking-tight">11.4%</div>
        <div className="mt-1 flex items-center text-xs text-emerald-400 gap-1 font-medium">
          <ArrowDownRight className="w-3.5 h-3.5" />
          <span>-17.2% Net Drop</span>
          <span className="text-slate-400 font-normal ml-auto">53.8% saved</span>
        </div>
      </div>

      {/* 5. Net Capital Rescued */}
      <div className="glass-panel rounded-xl p-4 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-400 font-medium">Net Capital Saved</span>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <IndianRupee className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl font-bold text-emerald-400 tracking-tight">₹52.92 L</div>
        <div className="mt-1 flex items-center text-xs text-slate-400 gap-1">
          <span>Freight + Inventory</span>
          <span className="text-emerald-400 ml-auto font-medium">4,379 orders</span>
        </div>
      </div>

      {/* 6. COD-to-Instant-UPI Conversion */}
      <div className="glass-panel rounded-xl p-4 relative overflow-hidden group hover:border-amber-500/30 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-400 font-medium">COD → UPI Converted</span>
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
            <Zap className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl font-bold text-amber-300 tracking-tight">36.8%</div>
        <div className="mt-1 flex items-center text-xs text-amber-400 gap-1">
          <span>Avg Latency: 48.4s</span>
          <span className="text-slate-400 ml-auto font-normal">₹58.4 L cash</span>
        </div>
      </div>
    </div>
  );
};
