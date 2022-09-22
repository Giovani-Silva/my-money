import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles';

export function TransactionsList() {
  return (
    <TransactionsContainer>
      <TransactionsTable>
        <tbody>
          <tr>
            <td>13/04/2022</td>
            <td width="40%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
          </tr>
          <tr>
            <td>10/04/2022</td>
            <td width="40%">Hambúrguer</td>
            <td>
              <PriceHighlight variant="outcome">-R$ 59,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  );
}
