import { ReactNode, createContext, useState } from 'react'

interface CartContextType {
  totalAmount: number
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [totalAmount] = useState(0)

  return (
    <CartContext.Provider value={{ totalAmount }}>
      {children}
    </CartContext.Provider>
  )
}
