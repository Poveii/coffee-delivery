import { ReactNode, createContext, useState } from 'react'

import { coffeeList } from '../data/coffeeList'

interface CartItem {
  id: number
  itemImage: string
  label: string
  quantity: number
  price: string
}

interface CartContextType {
  items: CartItem[]
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const sampleCheckoutCartItems: CartItem[] = coffeeList
  .filter((coffee) => coffee.id === 0 || coffee.id === 5)
  .map((item) => {
    return {
      id: item.id,
      itemImage: item.coffee,
      label: item.title,
      quantity: 1,
      price: item.price,
    }
  })

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items] = useState(sampleCheckoutCartItems)

  return (
    <CartContext.Provider value={{ items }}>{children}</CartContext.Provider>
  )
}
