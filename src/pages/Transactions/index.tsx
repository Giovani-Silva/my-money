import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { TransactionsList } from '../../components/TransactionsList';
import { NewTransactionButton, TransactionsWrapper } from './styles';

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}
export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsWrapper>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>
        <NewTransactionModal />
      </Dialog.Root>
      <TransactionsList transactions={transactions}/>
    </TransactionsWrapper>
  );
}
