import { getTransactions } from '@/app/actions';
import { Transaction } from '@/lib/types';
import { format } from 'date-fns';
import { ArrowDownRight, ArrowUpRight, Search, Filter } from 'lucide-react';

export const dynamic = "force-dynamic";

export default async function TransactionsPage() {
  const transactions = await getTransactions() as Transaction[];
  // Sort transactions by date descending
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">All Transactions</h1>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 flex-1 sm:flex-none">
            <Search size={18} className="text-gray-500 shrink-0" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none ml-2 text-sm text-gray-700 w-full sm:w-48"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors shrink-0">
            <Filter size={18} />
            <span className="text-sm font-medium hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-sm">
                <th className="p-4 font-medium">Transaction</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sortedTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {transaction.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                      </div>
                      <span className="font-medium text-gray-900">{transaction.title}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                      {transaction.category}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">
                    {format(new Date(transaction.date), 'MMM dd, yyyy')}
                  </td>
                  <td className="p-4 text-right">
                    <span className={`font-bold ${
                      transaction.type === 'income' ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
          <span>Showing 1 to {sortedTransactions.length} of {sortedTransactions.length} entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
