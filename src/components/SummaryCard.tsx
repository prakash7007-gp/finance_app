import { ReactNode } from 'react';

interface SummaryCardProps {
  title: string;
  amount: string;
  icon: ReactNode;
  trend?: string;
  trendUp?: boolean;
}

export default function SummaryCard({ title, amount, icon, trend, trendUp }: SummaryCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 font-medium">{title}</h3>
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold text-gray-900">{amount}</h2>
        {trend && (
          <span className={`text-sm font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
            {trendUp ? '+' : '-'}{trend}
          </span>
        )}
      </div>
    </div>
  );
}
