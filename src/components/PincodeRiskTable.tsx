import React, { useState } from 'react';
import { TOP_RISK_PINCODES } from '../data/d2c_mock_data';
import { MapPin, Search } from 'lucide-react';

export const PincodeRiskTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('All');

  const filteredPincodes = TOP_RISK_PINCODES.filter((item) => {
    const matchesSearch =
      item.pincode.includes(searchTerm) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = selectedTier === 'All' || item.riskTier === selectedTier;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="glass-panel rounded-xl p-5">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            Geographic RTO Vulnerability Index
          </h2>
          <p className="text-xs text-slate-400">
            Pincode-level COD loss density & proactive automated rules (UPI conversion vs manual verification)
          </p>
        </div>

        {/* Search & Tier Filters */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-48">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search pincode or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/80 border border-white/10 text-slate-200 text-xs rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:border-cyan-500/50"
            />
          </div>

          <div className="flex items-center gap-1 bg-slate-900/80 border border-white/10 rounded-lg p-1 text-xs">
            {['All', 'Critical', 'High', 'Low'].map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  selectedTier === tier
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-900/80 text-[11px] uppercase tracking-wider text-slate-400 border-b border-white/5">
            <tr>
              <th className="py-2.5 px-3">Pincode</th>
              <th className="py-2.5 px-3">City & State</th>
              <th className="py-2.5 px-3">Orders Shipped</th>
              <th className="py-2.5 px-3">Historical RTO %</th>
              <th className="py-2.5 px-3">COD Share %</th>
              <th className="py-2.5 px-3">Risk Tier</th>
              <th className="py-2.5 px-3">Automated Interception Rule</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredPincodes.map((item) => (
              <tr key={item.pincode} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-2.5 px-3 font-mono font-bold text-white">{item.pincode}</td>
                <td className="py-2.5 px-3">
                  <span className="font-semibold text-slate-200">{item.city}</span>,{' '}
                  <span className="text-slate-400 text-[11px]">{item.state}</span>
                </td>
                <td className="py-2.5 px-3 font-mono">{item.volume}</td>
                <td className="py-2.5 px-3">
                  <span
                    className={`font-mono font-bold ${
                      item.rtoRate > 35
                        ? 'text-rose-400'
                        : item.rtoRate > 25
                        ? 'text-amber-400'
                        : 'text-emerald-400'
                    }`}
                  >
                    {item.rtoRate}%
                  </span>
                </td>
                <td className="py-2.5 px-3 font-mono text-slate-300">{item.codShare}%</td>
                <td className="py-2.5 px-3">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      item.riskTier === 'Critical'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : item.riskTier === 'High'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : item.riskTier === 'Medium'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {item.riskTier}
                  </span>
                </td>
                <td className="py-2.5 px-3">
                  <span className="text-[11px] font-medium text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    {item.actionRecommended}
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
