import { Summary } from '../../components/Summary';
import { TransactionsList } from '../../components/TransactionsList';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Summary />
      <TransactionsList />
    </Container>
  );
}
