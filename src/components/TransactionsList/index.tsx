import { dateFormatter, priceFormatter } from '../../utils/formatter';
import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles';

export function TransactionsList(props) {
  return (
    <TransactionsContainer>
      <TransactionsTable>
        <tbody>
          {props.transactions.map((transaction: any) => {
            return (
              <tr key={transaction.id}>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {' '}
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
              </tr>
            );
          })}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  );
}
