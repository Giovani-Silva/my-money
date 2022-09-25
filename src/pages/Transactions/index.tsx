import * as Dialog from '@radix-ui/react-dialog';
import { useContext } from 'react';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { TransactionsList } from '../../components/TransactionsList';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { NewTransactionButton, TransactionsWrapper } from './styles';

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <TransactionsWrapper>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>
        <NewTransactionModal />
      </Dialog.Root>
      <TransactionsList transactions={transactions} />
    </TransactionsWrapper>
  );
}
