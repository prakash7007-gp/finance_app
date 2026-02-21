import SummaryCard from '@/components/SummaryCard';
import RecentTransactions from '@/components/RecentTransactions';
import ExpenseChart from '@/components/ExpenseChart';
import { getSummaryData, getRecentTransactions, getExpensesByCategory } from '@/lib/data';
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react';
import { getTransactions } from './actions';
import { Transaction } from '@/lib/types';
export const dynamic = "force-dynamic";

export default async function Home() {
  const transactions = await getTransactions() as Transaction[];
  const summary = getSummaryData(transactions);
  const recentTransactions = getRecentTransactions(transactions, 5);
  const expensesByCategory = getExpensesByCategory(transactions);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard 
          title="Total Balance" 
          amount={`$${summary.totalBalance.toFixed(2)}`} 
          icon={<Wallet size={24} />} 
          trend="12.5%" 
          trendUp={true} 
        />
        <SummaryCard 
          title="Total Income" 
          amount={`$${summary.totalIncome.toFixed(2)}`} 
          icon={<TrendingUp size={24} />} 
          trend="8.2%" 
          trendUp={true} 
        />
        <SummaryCard 
          title="Total Expense" 
          amount={`$${summary.totalExpense.toFixed(2)}`} 
          icon={<TrendingDown size={24} />} 
          trend="3.1%" 
          trendUp={false} 
        />
        <SummaryCard 
          title="Savings Rate" 
          amount={`${summary.savingsRate.toFixed(1)}%`} 
          icon={<PiggyBank size={24} />} 
          trend="2.4%" 
          trendUp={true} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentTransactions transactions={recentTransactions} />
        </div>
        <div className="lg:col-span-1">
          <ExpenseChart data={expensesByCategory} />
        </div>
      </div>
    </div>
  );
}
