import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useEffect } from 'react';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { TransactionsList } from '../../components/TransactionsList';
import { TitleContext } from '../../contexts/TitleContext';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { NewTransactionButton, TransactionsWrapper } from './styles';

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('My Transactions');
  }, [setTitle]);

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
