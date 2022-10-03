import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { TitleBar } from '../../components/TitleBar';
import { Content, LayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <TitleBar />
        <Outlet />
      </Content>
    </LayoutContainer>
  );
}
