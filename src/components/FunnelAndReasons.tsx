import React from 'react';
import { AUTONOMOUS_FUNNEL_STAGES, NDR_REASONS_BREAKDOWN } from '../data/d2c_mock_data';
import { GitCommit, AlertCircle, CheckCircle2 } from 'lucide-react';

export const FunnelAndReasons: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* 1. Recovery Funnel (7 Cols) */}
      <div className="lg:col-span-7 glass-panel rounded-xl p-5">
        <div className="mb-5">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <GitCommit className="w-4 h-4 text-cyan-400" />
            Autonomous NDR Interception Funnel
          </h2>
          <p className="text-xs text-slate-400">
            Conversion telemetry from carrier delivery failure webhook to successful doorstep re-attempt
          </p>
        </div>

        <div className="space-y-3">
          {AUTONOMOUS_FUNNEL_STAGES.map((stage, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === AUTONOMOUS_FUNNEL_STAGES.length - 1;

            return (
              <div key={stage.stage} className="relative">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                    {isLast ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    )}
                    {stage.stage}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono font-bold">
                      {stage.count.toLocaleString()}
                    </span>
                    <span className="text-slate-400">({stage.percentage}%)</span>
                    {!isFirst && (
                      <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        {stage.conversionFromPrevious}% step conv.
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-white/5">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isLast
                        ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-sm shadow-emerald-400/50'
                        : 'bg-cyan-500/80'
                    }`}
                    style={{ width: `${stage.percentage}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">{stage.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. NDR Root-Cause Breakdown (5 Cols) */}
      <div className="lg:col-span-5 glass-panel rounded-xl p-5">
        <div className="mb-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            Courier Delivery Friction Breakdown
          </h2>
          <p className="text-xs text-slate-400">
            Primary failure reasons logged by delivery agents & their WhatsApp rescue conversion
          </p>
        </div>

        <div className="space-y-3.5">
          {NDR_REASONS_BREAKDOWN.map((item) => (
            <div key={item.reason} className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-medium text-slate-200">{item.reason}</span>
                </div>
                <span className="text-slate-300 font-mono font-bold">{item.percentage}%</span>
              </div>

              {/* Bar */}
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>

              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>{item.count.toLocaleString()} cases logged</span>
                <span className="text-emerald-400 font-medium">
                  {item.rescueRate}% rescued into delivery
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
