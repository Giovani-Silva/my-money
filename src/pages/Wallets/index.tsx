import * as Dialog from '@radix-ui/react-dialog';
import * as SelectPrimitive from '@radix-ui/react-select';
import { AsteriskSimple, CaretDown, CaretUp, Check, Plus, Trash, X } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { BaseModal } from '../../components/BaseModal';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { NewWalletModal } from '../../components/NewWalletModal';
import { TransactionsList } from '../../components/TransactionsList';
import { TitleContext } from '../../contexts/TitleContext';
import { WalletsContext } from '../../contexts/WalletsContext';
import { priceFormatter } from '../../utils/formatter';
import { NewTransactionButton } from '../Transactions/styles';
import {
  Action,
  BaseButton,
  CancelButton,
  Card,
  ConfirmDeleteWalletModal,
  DeleteButton,
  Info,
  InfoBlock,
  SelectButton,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectViewPort,
  Wrapper,
} from './styles';

export function Wallets() {
  const { setTitle } = useContext(TitleContext);
  const { wallets, deleteWallet } = useContext(WalletsContext);
  const sizeAsterisk = 12;
  const [selectedWallet, setSelectedWallet] = useState(null);

  useEffect(() => {
    setTitle('My Wallets');
  }, [setTitle]);

  const wallet = selectedWallet;
  
  useEffect(() => {
    if (wallets.length) {
      handleSelectWallet(wallets[0].name);
    }
  }, [wallets]);

  function handleSelectWallet(value: any) {
    const [selected] = wallets.filter((wallet) => wallet.name === value);
    if (selected?.name !== selectedWallet?.name) {
      setSelectedWallet(selected);
    }
  }

  function handleDeleteWallet(id) {
    const deletedIndex = wallets.findIndex((wallet) => wallet.id === id);
    console.log(deletedIndex);
    console.log(wallets.length);

    if (wallets.length > 1) {
      if (!deletedIndex) {
        handleSelectWallet(wallets[deletedIndex + 1].name);
      } else {
        handleSelectWallet(wallets[deletedIndex - 1].name);
      }
    } else {
      handleSelectWallet(null);
    }

    deleteWallet(id);
    // }
  }

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

  return (
    <>
      {wallet && (
        <Wrapper key={wallet.id}>
          <section>
            <Card color={wallet.color}>
              <h3>{wallet.name}</h3>
              <div>
                <span>{priceFormatter.format(wallet.limit)}</span>
                <span>Your Limit</span>
              </div>
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
              <InfoBlock>
                <span>Your Expenses</span>
                <span>{priceFormatter.format(outcome(wallet.transactions))}</span>
              </InfoBlock>
              <InfoBlock>
                <span>Your Balance</span>
                <span>{priceFormatter.format(balance(wallet.limit, wallet.transactions))}</span>
              </InfoBlock>

              <Action>
                <SelectPrimitive.Root defaultValue={wallet.name} onValueChange={(value) => handleSelectWallet(value)}>
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
                            <SelectItemIndicator>
                              <Check />
                            </SelectItemIndicator>
                            <SelectItemText>{wallet.name}</SelectItemText>
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
                      <Dialog.Close asChild>
                        <DeleteButton onClick={() => handleDeleteWallet(wallet.id)}>
                          Remove <Trash size={16} />
                        </DeleteButton>
                      </Dialog.Close>
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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <NewTransactionButton>Add New Payments</NewTransactionButton>
              </Dialog.Trigger>
              <BaseModal>
                <Dialog.Title>New Payments</Dialog.Title>
                <NewTransactionModal />
              </BaseModal>
            </Dialog.Root>
            {wallet.transactions && <TransactionsList transactions={wallet.transactions} />}
          </section>
        </Wrapper>
      )}
    </>
  );
}
