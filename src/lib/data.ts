import { Transaction, SummaryData } from './types';

export function getSummaryData(transactions: Transaction[]): SummaryData {
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const totalBalance = totalIncome - totalExpense;
  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpense) / totalIncome) * 100 : 0;

  return {
    totalBalance,
    totalIncome,
    totalExpense,
    savingsRate
  };
}

export function getRecentTransactions(transactions: Transaction[], limit: number = 5): Transaction[] {
  return [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getExpensesByCategory(transactions: Transaction[]) {
  const expenses = transactions.filter(t => t.type === 'expense');
  const categoryMap = new Map<string, number>();
  
  expenses.forEach(t => {
    const current = categoryMap.get(t.category) || 0;
    categoryMap.set(t.category, current + t.amount);
  });
  
  return Array.from(categoryMap.entries()).map(([name, value]) => ({
    name,
    value
  })).sort((a, b) => b.value - a.value);
}
