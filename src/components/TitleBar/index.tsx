import { BellSimple, CaretDown, MagnifyingGlass, UserCircle } from 'phosphor-react';
import { Actions, Bar, Title } from './styles';

export function TitleBar() {
  return (
    <Bar>
      <Title>Dashboard</Title>

      <Actions>
        <MagnifyingGlass />
        <BellSimple />
        <UserCircle />
        <span>Giovani Silva</span>
        <CaretDown />
      </Actions>
    </Bar>
  );
}
