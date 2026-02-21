import { Transaction } from '@/lib/types';
import { format } from 'date-fns';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export default function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-900">Recent Transactions</h2>
        <a href="/transactions" className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</a>
      </div>
      <div className="divide-y divide-gray-100">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                transaction.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {transaction.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
              </div>
              <div className="min-w-0 flex-1 pr-2">
                <p className="font-medium text-gray-900 truncate">{transaction.title}</p>
                <p className="text-sm text-gray-500 truncate">{transaction.category}</p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className={`font-bold ${
                transaction.type === 'income' ? 'text-green-600' : 'text-gray-900'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">{format(new Date(transaction.date), 'MMM dd, yyyy')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
