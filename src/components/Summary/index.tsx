import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { useTheme } from 'styled-components';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useSummary } from '../../hooks/useSummary';
import { priceFormatter } from '../../utils/formatter';
import { SummaryCard, SummaryContainer } from './styles';

export function Summary() {
  const theme = useTheme();
  const { transactions } = useContext(TransactionsContext);
  const summary = useSummary();

  const isPositiveOrNegative = summary.total >= 0 ? 'positive' : 'negative';

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-500']} />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-500']} />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant={isPositiveOrNegative}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
