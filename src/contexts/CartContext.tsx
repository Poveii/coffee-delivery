import { ReactNode, createContext, useCallback, useState } from 'react'

import { coffeeList } from '../data/coffeeList'

interface CartItem {
  id: number
  itemImage: string
  label: string
  quantity: number
  price: number
}

interface CartContextType {
  items: CartItem[]
  modifyQuantityItems: (itemId: number, count: number) => void
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
  const [items, setItems] = useState(sampleCheckoutCartItems)

  const modifyQuantityItems = useCallback((itemId: number, count: number) => {
    setItems((state) =>
      state.map((item) => {
        if (item.id === itemId) {
          item.quantity = count
        }
        return item
      }),
    )
  }, [])

  return (
    <CartContext.Provider value={{ items, modifyQuantityItems }}>
      {children}
    </CartContext.Provider>
  )
}
