import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from 'react'

import { CartItem, cartReducer } from '../reducers/cart/reducer'
import {
  addItemToCartAction,
  clearCartAction,
  modifyQuantityItemAction,
  removeItemFromCartAction,
} from '../reducers/cart/actions'

interface CartContextType {
  items: CartItem[]
  modifyQuantityItem: (itemId: number, count: number) => void
  addItemToCart: (itemId: number, quantity: number) => void
  removeItemFromCart: (itemId: number) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

// for debug proposes ↓
/*
  const sampleCheckoutCartItems = checkoutCartItems.filter(
    (coffee) => coffee.id === 0 || coffee.id === 5,
  )
*/

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { items: [] },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-1.0.0', stateJSON)
  }, [cartState])

  const { items } = cartState

  const modifyQuantityItem = useCallback((itemId: number, count: number) => {
    dispatch(modifyQuantityItemAction(itemId, count))
  }, [])

  const addItemToCart = (itemId: number, quantity: number) => {
    dispatch(addItemToCartAction(itemId, quantity))
  }

  const removeItemFromCart = (itemId: number) => {
    dispatch(removeItemFromCartAction(itemId))
  }

  const clearCart = () => {
    dispatch(clearCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        items,
        modifyQuantityItem,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
