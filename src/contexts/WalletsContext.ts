import { createContext } from 'react';

interface Transactions {
  description: string;
  price: number;
  category: string;
  type: string;
  createdAt: string;
  id: number;
}

interface Wallet {
  id: number;
  name: string;
  limit: number;
  color: string;
  transactions: Transactions[];
}

interface CreateWalletInput {
  name: string;
  limit: number;
  card_digit: string;
}

interface WalletsContextType {
  transactions: Wallet[];
  createWallet: (data: CreateWalletInput) => Promise<void>;
  fetchWallets: (query?: string) => void;
}

export const WalletsContext = createContext({} as WalletsContextType);
