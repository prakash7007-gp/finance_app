export type TransactionType = 'income' | 'expense';
export type TransactionCategory = 
  | 'Housing' 
  | 'Food' 
  | 'Transportation' 
  | 'Utilities' 
  | 'Entertainment' 
  | 'Healthcare' 
  | 'Salary' 
  | 'Investment' 
  | 'Other';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  type: TransactionType;
  category: TransactionCategory;
}

export interface SummaryData {
  totalBalance: number;
  totalIncome: number;
  totalExpense: number;
  savingsRate: number;
}
