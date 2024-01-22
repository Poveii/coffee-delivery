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
  addItemToCart: (itemId: number, quantity: number) => void
  removeItemFromCart: (itemId: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const checkoutCartItems: CartItem[] = coffeeList.map((item) => {
  return {
    id: item.id,
    itemImage: item.coffee,
    label: item.title,
    quantity: 1,
    price: item.price,
  }
})

// for debug proposes ↓
/*
  const sampleCheckoutCartItems = checkoutCartItems.filter(
    (coffee) => coffee.id === 0 || coffee.id === 5,
  )
*/

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<CartItem[]>([])

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

  const addItemToCart = (itemId: number, quantity: number) => {
    const item = checkoutCartItems.find((item) => item.id === itemId)
    if (!item) return

    setItems((state) => {
      const itemAlreadyExists = state.find(
        (stateItem) => stateItem.id === itemId,
      )
      if (itemAlreadyExists) {
        state[itemId].quantity += quantity
      } else {
        item.quantity = quantity
        state.push(item)
      }
      return state
    })
  }

  const removeItemFromCart = (itemId: number) => {
    const item = items.find((item) => item.id === itemId)

    setItems((state) =>
      state.filter((stateItem) => {
        return stateItem !== item
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{ items, modifyQuantityItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
