import React from 'react';
import { CARRIER_PERFORMANCE_METRICS } from '../data/d2c_mock_data';
import { Truck, AlertTriangle, Clock } from 'lucide-react';

export const CarrierSlaMatrix: React.FC = () => {
  return (
    <div className="glass-panel rounded-xl p-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
        <div>
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Truck className="w-4 h-4 text-cyan-400" />
            3PL Courier SLA & Fake Delivery Attempt Watchtower
          </h2>
          <p className="text-xs text-slate-400">
            Multi-carrier comparative matrix tracking delivery failure rates, ghost attempts, and autonomous rescue yields
          </p>
        </div>
        <div className="text-[11px] px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Fake Attempt: Marked failed in &lt; 4 mins without buyer call</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-900/80 text-[11px] uppercase tracking-wider text-slate-400 border-b border-white/5">
            <tr>
              <th className="py-3 px-4">Courier Partner</th>
              <th className="py-3 px-3">Shipments Handled</th>
              <th className="py-3 px-3">NDR Failure %</th>
              <th className="py-3 px-3">Fake Attempt Audit</th>
              <th className="py-3 px-3">Rescue Success %</th>
              <th className="py-3 px-3">Avg SLA</th>
              <th className="py-3 px-4 text-right">Capital Rescued</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-sans">
            {CARRIER_PERFORMANCE_METRICS.map((row) => (
              <tr key={row.carrier} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3 px-4 font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  {row.carrier}
                </td>
                <td className="py-3 px-3 font-mono">{row.totalShipments.toLocaleString()}</td>
                <td className="py-3 px-3">
                  <span className={`font-mono font-medium ${row.ndrRate > 28 ? 'text-rose-400' : 'text-slate-200'}`}>
                    {row.ndrRate}%
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span
                    className={`inline-flex items-center gap-1 font-mono font-bold px-2 py-0.5 rounded text-[11px] ${
                      row.fakeAttemptRate > 15
                        ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                        : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                    }`}
                  >
                    {row.fakeAttemptRate > 15 && <AlertTriangle className="w-3 h-3 text-rose-400" />}
                    {row.fakeAttemptRate}%
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span className="font-mono text-emerald-400 font-bold">{row.rescueSuccessRate}%</span>
                </td>
                <td className="py-3 px-3 text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{row.avgSlaDays} days</span>
                </td>
                <td className="py-3 px-4 text-right font-mono font-bold text-emerald-400">
                  ₹{(row.capitalRescuedInr / 100000).toFixed(2)} L
                </td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-block px-2 py-0.5 text-[10px] font-semibold uppercase rounded-full ${
                      row.status === 'optimal'
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                        : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
