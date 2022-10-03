import {
  BellSimple,
  CaretDown,
  MagnifyingGlass,
  UserCircle,
} from 'phosphor-react'
import { Actions, Bar, Title } from './styles'

export function TitleBar() {
  return (
    <Bar>
      <Title>Dashboard</Title>

      <Actions>
        <MagnifyingGlass size={24} />
        <BellSimple size={24} />
        <UserCircle size={24} />
        <span>Giovani Silva</span>
        <CaretDown size={24} />
      </Actions>
    </Bar>
  )
}
