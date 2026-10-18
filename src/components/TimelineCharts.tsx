import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { DAILY_LOGISTICS_TREND } from '../data/d2c_mock_data';
import { TrendingUp, IndianRupee } from 'lucide-react';

export const TimelineCharts: React.FC = () => {
  const [viewMode, setViewMode] = useState<'volume' | 'capital'>('volume');

  return (
    <div className="glass-panel rounded-xl p-5">
      {/* Header with Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            30-Day Operational Velocity & RTO Arrest Timeline
          </h2>
          <p className="text-xs text-slate-400">
            Daily telemetry showing shipped volume, delivery failure points, and autonomous doorstep rescue
          </p>
        </div>

        {/* Chart View Toggle */}
        <div className="flex items-center gap-1 bg-slate-900/80 border border-white/10 rounded-lg p-1 text-xs">
          <button
            onClick={() => setViewMode('volume')}
            className={`px-3 py-1 rounded-md transition-all font-medium ${
              viewMode === 'volume'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Order Volume & Rescue
          </button>
          <button
            onClick={() => setViewMode('capital')}
            className={`px-3 py-1 rounded-md transition-all font-medium flex items-center gap-1 ${
              viewMode === 'capital'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <IndianRupee className="w-3 h-3" />
            Capital Rescued (₹)
          </button>
        </div>
      </div>

      {/* Charts */}
      <div className="h-72 w-full">
        {viewMode === 'volume' ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={DAILY_LOGISTICS_TREND} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorRescued" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorRto" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0d111c',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                iconType="circle"
              />
              <Area
                type="monotone"
                dataKey="totalOrders"
                name="Total Shipped"
                stroke="#38bdf8"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorTotal)"
              />
              <Area
                type="monotone"
                dataKey="rescuedOrders"
                name="Rescued by WhatsApp"
                stroke="#10b981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRescued)"
              />
              <Area
                type="monotone"
                dataKey="finalRto"
                name="Unavoidable RTO"
                stroke="#f43f5e"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                fillOpacity={1}
                fill="url(#colorRto)"
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={DAILY_LOGISTICS_TREND} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis
                stroke="#64748b"
                fontSize={11}
                tickLine={false}
                tickFormatter={(val) => `₹${(val / 1000).toFixed(0)}k`}
              />
              <Tooltip
                formatter={(value: any) => [`₹${Number(value).toLocaleString('en-IN')}`, 'Capital Saved']}
                contentStyle={{
                  backgroundColor: '#0d111c',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} iconType="circle" />
              <Bar
                dataKey="capitalSavedInr"
                name="Net Capital Rescued (₹)"
                fill="#10b981"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};
