import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface Transactions {
  description: string;
  price: number;
  category: string;
  type: string;
  createdAt: string;
  id: number;
}

export interface Wallet {
  id: number;
  name: string;
  cardDigit: string;
  color: string;
  limit: number;
  transactions: Transactions[];
}

interface CreateWalletInput {
  name: string;
  limit: number;
  cardDigit: string;
}

interface WalletsContextType {
  wallets: Wallet[];
  createWallet: (data: CreateWalletInput) => Promise<void>;
  fetchWallets: (query?: string) => void;
  deleteWallet: (id: number) => void;
}

interface WalletsProviderProps {
  children: ReactNode;
}

export const WalletsContext = createContext({} as WalletsContextType);

export function WalletsProvider({ children }: WalletsProviderProps) {
  const [wallets, setWallets] = useState<Wallet[]>([]);

  async function fetchWallets(query?: string) {
    const response = await api.get('wallets', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });
    setWallets(response.data);
  }

  async function createWallet(data: CreateWalletInput) {
    const { name, limit, cardDigit, color } = data;
    const response = await api.post('wallets', {
      name,
      limit,
      cardDigit,
      color,
      transaction: [],
      createdAt: new Date(),
    });
    setWallets((state) => [response.data, ...state]);
  }

  async function deleteWallet(id: number) {
    await api.delete(`wallets/${id}`);
    fetchWallets();
  }

  useEffect(() => {
    fetchWallets();
  }, []);

  return <WalletsContext.Provider value={{ wallets, fetchWallets, createWallet, deleteWallet }}>{children}</WalletsContext.Provider>;
}
