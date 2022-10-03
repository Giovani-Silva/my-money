import {
  ChartLine,
  DotsThreeVertical,
  Gear,
  HouseSimple,
  SignOut,
  Wallet,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo-my-money.svg'
import { Brand, HeaderWrapper, Nav, Wrapper } from './styles'

export function Header() {
  return (
    <Wrapper>
      <label htmlFor="toogle-menu">
        <DotsThreeVertical size={24} />
      </label>
      <input type="checkbox" id="toogle-menu" />
      <HeaderWrapper>
        <Brand>
          <img src={Logo} alt="Logo" />
          <h1>My money</h1>
        </Brand>

        <Nav>
          <div>
            <NavLink to="/" end>
              <HouseSimple size={24} />
              Dashboard
            </NavLink>
            <NavLink to="/transactions">
              <ChartLine size={24} />
              Transactions
            </NavLink>
            <NavLink to="/wallets">
              <Wallet size={24} />
              My Wallets
            </NavLink>
            <NavLink to="/settings">
              <Gear size={24} />
              Settings
            </NavLink>
          </div>

          <div>
            <NavLink to="/logout">
              <SignOut size={32} />
              Logout
            </NavLink>
          </div>
        </Nav>
      </HeaderWrapper>
    </Wrapper>
  )
}
