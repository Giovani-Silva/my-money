import { useContext, useEffect } from 'react';
import { Summary } from '../../components/Summary';
import { TransactionsList } from '../../components/TransactionsList';
import { TitleContext } from '../../contexts/TitleContext';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { Container } from './styles';

export function Home() {
  const { transactions } = useContext(TransactionsContext);
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('Dashboard');
  }, [setTitle]);

  return (
    <Container>
      <Summary />
      <TransactionsList transactions={transactions} />
    </Container>
  );
}
