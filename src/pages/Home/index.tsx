import { useContext } from 'react'
import { Summary } from '../../components/Summary'
import { TransactionsList } from '../../components/TransactionsList'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { Container } from './styles'

export function Home() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <Container>
      <Summary />
      <TransactionsList transactions={transactions} />
    </Container>
  )
}
