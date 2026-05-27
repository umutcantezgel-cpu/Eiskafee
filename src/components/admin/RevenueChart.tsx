'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { AnalyticsDaily } from '@/types/firestore';

export default function RevenueChart({ data }: { data: AnalyticsDaily[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eedfcc" />
        <XAxis 
          dataKey="date" 
          tickFormatter={(val) => new Date(val).toLocaleDateString('de-DE', { weekday: 'short' })}
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#9a7060', fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-nunito)' }}
          dy={10}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#9a7060', fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-nunito)' }}
          tickFormatter={(val) => `€${val}`}
          dx={-10}
        />
        <Tooltip 
          cursor={{ stroke: '#CC624C', strokeWidth: 2, strokeDasharray: '4 4' }}
          contentStyle={{ backgroundColor: '#fef8f5', borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(204,98,76,0.15)', fontWeight: 700 }}
          itemStyle={{ color: '#CC624C', fontWeight: 800 }}
        />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#CC624C" 
          strokeWidth={4}
          dot={{ r: 6, fill: '#f5efe8', stroke: '#CC624C', strokeWidth: 3 }}
          activeDot={{ r: 8, fill: '#CC624C', stroke: '#f5efe8', strokeWidth: 3 }}
          animationDuration={1500}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
