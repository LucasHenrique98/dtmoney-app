import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

interface TransactionsContextData {
  transactions: TransactionsProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

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

type TransactionInput = Omit<TransactionsProps, 'id' | 'createdAt'>;

export function TransactionsProvider({ children }: TransactionsProvierProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api.get('/transactions').then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}
