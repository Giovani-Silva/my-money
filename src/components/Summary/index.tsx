import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { useTheme } from 'styled-components';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { SummaryCard, SummaryContainer } from './styles';

export function Summary() {
  const theme = useTheme();
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-500']} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-500']} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="positive">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
