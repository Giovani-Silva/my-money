import { AsteriskSimple } from 'phosphor-react';
import { useContext, useEffect } from 'react';
import { TitleContext } from '../../contexts/TitleContext';
import { WalletsContext } from '../../contexts/WalletsContext';
import { Card, Wrapper } from './styles';

export function Wallets() {
  const { setTitle } = useContext(TitleContext);
  const { wallets } = useContext(WalletsContext);
  const sizeAsterisk = 12;

  console.log(wallets);

  useEffect(() => {
    setTitle('My Wallets');
  }, [setTitle]);
  return (
    <Wrapper>
      <Card>
        <h3>Card name</h3>
        <ul>
          <li>
            <AsteriskSimple size={sizeAsterisk} />
            <AsteriskSimple size={sizeAsterisk} />
            <AsteriskSimple size={sizeAsterisk} />
            <AsteriskSimple size={sizeAsterisk} />
          </li>
          <li>
            <AsteriskSimple size={sizeAsterisk} />
            <AsteriskSimple size={sizeAsterisk} />
            <AsteriskSimple size={sizeAsterisk} />
            <AsteriskSimple size={sizeAsterisk} />
          </li>
          <li>
            <AsteriskSimple size={sizeAsterisk} />
            <AsteriskSimple size={sizeAsterisk} />
            <AsteriskSimple size={sizeAsterisk} />
            <AsteriskSimple size={sizeAsterisk} />
          </li>
          <li>2321</li>
        </ul>
      </Card>
      <div>Transactions</div>
    </Wrapper>
  );
}
