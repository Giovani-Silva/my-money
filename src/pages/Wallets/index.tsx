import * as Dialog from '@radix-ui/react-dialog';
import * as SelectPrimitive from '@radix-ui/react-select';
import { AsteriskSimple, CaretDown, CaretUp, Plus, Trash, X } from 'phosphor-react';
import { useContext, useEffect } from 'react';
import { BaseModal } from '../../components/BaseModal';
import { NewWalletModal } from '../../components/NewWalletModal';
import { TransactionsList } from '../../components/TransactionsList';
import { TitleContext } from '../../contexts/TitleContext';
import { Wallet, WalletsContext } from '../../contexts/WalletsContext';
import { priceFormatter } from '../../utils/formatter';
import {
  Action,
  BaseButton,
  CancelButton,
  Card,
  ConfirmDeleteWalletModal,
  DeleteButton,
  Info,
  SelectButton,
  SelectItem,
  SelectViewPort,
  Wrapper,
} from './styles';

export function Wallets() {
  const { setTitle } = useContext(TitleContext);
  const { wallets, deleteWallet } = useContext(WalletsContext);
  const sizeAsterisk = 12;

  const outcome = (transactions: any[]) => {
    if (transactions?.length) {
      return transactions.reduce((acc, transaction) => {
        acc += transaction?.price || 0;

        return acc;
      }, 0);
    }
    return 0;
  };

  const balance = (limit: number, transactions) => {
    if (limit && transactions?.length) {
      return limit - outcome(transactions);
    }

    return limit;
  };

  useEffect(() => {
    setTitle('My Wallets');
  }, [setTitle]);
  return (
    <>
      {wallets.map((wallet: Wallet) => (
        <Wrapper key={wallet.id}>
          <section>
            <Card color={wallet.color}>
              <h3>{wallet.name}</h3>
              <ul>
                {['*1', '*2', '*3'].map((i) => (
                  <li key={i}>
                    <AsteriskSimple size={sizeAsterisk} />
                    <AsteriskSimple size={sizeAsterisk} />
                    <AsteriskSimple size={sizeAsterisk} />
                    <AsteriskSimple size={sizeAsterisk} />
                  </li>
                ))}

                <li>{wallet.cardDigit}</li>
              </ul>
            </Card>
            <Info>
              <div>
                <span>Your Limit</span>
                <span>{priceFormatter.format(wallet.limit)}</span>
              </div>
              <div>
                <span>Your Expenses</span>
                <span>{priceFormatter.format(outcome(wallet.transactions))}</span>
              </div>
              <div>
                <span>Your Balance</span>
                <span>{priceFormatter.format(balance(wallet.limit, wallet.transactions))}</span>
              </div>

              <Action>
                <SelectPrimitive.Root defaultValue={wallets[0].name}>
                  <SelectPrimitive.Trigger asChild aria-label="Wallet">
                    <SelectButton>
                      <SelectPrimitive.Value />
                      <SelectPrimitive.Icon>
                        <CaretDown size={16} />
                      </SelectPrimitive.Icon>
                    </SelectButton>
                  </SelectPrimitive.Trigger>
                  <SelectPrimitive.Content data-state="open">
                    <SelectPrimitive.ScrollUpButton>
                      <CaretUp size={16} />
                    </SelectPrimitive.ScrollUpButton>
                    <SelectViewPort>
                      <SelectPrimitive.Group>
                        {wallets.map((wallet, i) => (
                          <SelectItem key={`${wallet.name.toLowerCase()}-${i}`} value={wallet.name}>
                            <SelectPrimitive.ItemText>{wallet.name}</SelectPrimitive.ItemText>
                          </SelectItem>
                        ))}
                      </SelectPrimitive.Group>
                    </SelectViewPort>
                  </SelectPrimitive.Content>
                </SelectPrimitive.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <DeleteButton>
                      Remove This Wallet <Trash size={16} />
                    </DeleteButton>
                  </Dialog.Trigger>
                  <BaseModal>
                    <Dialog.Title>Delete this wallet</Dialog.Title>
                    <ConfirmDeleteWalletModal>
                      <CancelButton>
                        Cancel <X size={16} />
                      </CancelButton>
                      <DeleteButton onClick={() => deleteWallet(wallet.id)}>
                        Remove <Trash size={16} />
                      </DeleteButton>
                    </ConfirmDeleteWalletModal>
                  </BaseModal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <BaseButton>
                      Add New Card <Plus size={16} />
                    </BaseButton>
                  </Dialog.Trigger>
                  <BaseModal>
                    <Dialog.Title>New Wallet</Dialog.Title>
                    <NewWalletModal />
                  </BaseModal>
                </Dialog.Root>
              </Action>
            </Info>
          </section>
          <section>
            <h4>My Payments</h4>
            {wallet.transactions && <TransactionsList transactions={wallet.transactions} />}
          </section>
        </Wrapper>
      ))}
    </>
  );
}
