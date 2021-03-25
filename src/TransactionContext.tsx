import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

export const TransactionContext = createContext<TransactionsProps[]>([]);

interface TransactionsProps {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

interface TransactionsProvierProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProvierProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api.get('http://localhost:3000/api/transactions').then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
}
