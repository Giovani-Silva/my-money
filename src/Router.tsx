import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Settings } from './pages/Settings'
import { Transactions } from './pages/Transactions'
import { Wallets } from './pages/Wallets'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/wallets" element={<Wallets />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
