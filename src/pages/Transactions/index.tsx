import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useEffect } from 'react';
import { BaseModal } from '../../components/BaseModal';
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
          <NewTransactionButton>Add New Transaction</NewTransactionButton>
        </Dialog.Trigger>
        <BaseModal>
          <Dialog.Title>New Transaction</Dialog.Title>
          <NewTransactionModal />
        </BaseModal>
      </Dialog.Root>
      <TransactionsList transactions={transactions} />
    </TransactionsWrapper>
  );
}
