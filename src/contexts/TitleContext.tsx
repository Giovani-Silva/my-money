import React, { createContext, ReactNode, useState } from 'react'

interface TitleProviderProps {
  children: ReactNode
}

interface TitleContextType {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
}

export const TitleContext = createContext({} as TitleContextType)

export function TitleProvider({ children }: TitleProviderProps) {
  const [title, setTitle] = useState<string>('Dashboard')

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  )
}
