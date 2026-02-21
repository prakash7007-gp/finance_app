'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { TransactionType, TransactionCategory } from '@/lib/types';

export async function addTransaction(data: {
  title: string;
  amount: number;
  date: string;
  type: TransactionType;
  category: TransactionCategory;
}) {
  await prisma.transaction.create({
    data: {
      title: data.title,
      amount: data.amount,
      date: new Date(data.date),
      type: data.type,
      category: data.category,
    },
  });

  revalidatePath('/');
  revalidatePath('/transactions');
}

export async function getTransactions() {
  const transactions = await prisma.transaction.findMany({
    orderBy: {
      date: 'desc',
    },
  });

  return transactions.map((t: any) => ({
    ...t,
    date: t.date.toISOString().split('T')[0],
  }));
}
