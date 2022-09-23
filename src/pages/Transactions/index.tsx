import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { TransactionsList } from '../../components/TransactionsList';
import { NewTransactionButton, TransactionsWrapper } from './styles';

export function Transactions() {
  return (
    <TransactionsWrapper>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>
        <NewTransactionModal />
      </Dialog.Root>
      <TransactionsList />
    </TransactionsWrapper>
  );
}
