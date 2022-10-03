import { BellSimple, CaretDown, MagnifyingGlass, UserCircle } from 'phosphor-react';
import { useContext } from 'react';
import { TitleContext } from '../../contexts/TitleContext';
import { Actions, Bar, Title } from './styles';

export function TitleBar() {
  const { title } = useContext(TitleContext);
  return (
    <Bar>
      <Title>{title}</Title>

      <Actions>
        <MagnifyingGlass size={24} />
        <BellSimple size={24} />
        <UserCircle size={24} />
        <span>Giovani Silva</span>
        <CaretDown size={24} />
      </Actions>
    </Bar>
  );
}
