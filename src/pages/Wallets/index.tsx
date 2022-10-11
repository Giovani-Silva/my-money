import * as Dialog from '@radix-ui/react-dialog';
import { AsteriskSimple, Plus } from 'phosphor-react';
import { useContext, useEffect } from 'react';
import { BaseModal } from '../../components/BaseModal';
import { NewWalletModal } from '../../components/NewWalletModal';
import { TransactionsList } from '../../components/TransactionsList';
import { TitleContext } from '../../contexts/TitleContext';
import { Wallet, WalletsContext } from '../../contexts/WalletsContext';
import { Card, Info, Transactions, Wrapper, WrapperWallet } from './styles';

export function Wallets() {
  const { setTitle } = useContext(TitleContext);
  const { wallets } = useContext(WalletsContext);
  const sizeAsterisk = 12;

  console.log(wallets);

  useEffect(() => {
    setTitle('My Wallets');
  }, [setTitle]);
  return (
    <>
      {wallets.map((wallet: Wallet) => (
        <Wrapper key={wallet.id}>
          <WrapperWallet>
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
                <span>R$ 5.000</span>
              </div>
              <div>
                <span>Your Balance</span>
                <span>R$ 4.500</span>
              </div>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>
                    <Plus size={16} /> Add New Card
                  </button>
                </Dialog.Trigger>
                <BaseModal>
                  <Dialog.Title>New Wallet</Dialog.Title>
                  <NewWalletModal />
                </BaseModal>
              </Dialog.Root>
            </Info>
          </WrapperWallet>
          <Transactions>
            <h4>My Payments</h4>
            <TransactionsList transactions={wallet.transactions} />
          </Transactions>
        </Wrapper>
      ))}
    </>
  );
}
