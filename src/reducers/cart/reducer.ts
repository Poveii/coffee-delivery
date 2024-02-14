import { produce } from 'immer'

import { ActionTypes } from './actions'
import { coffeeList } from '../../data/coffeeList'

export interface CartItem {
  id: number
  itemImage: string
  label: string
  quantity: number
  price: number
}

type Actions =
  | {
      type: ActionTypes.ADD_ITEM_TO_CART
      payload: {
        itemId: number
        quantity: number
      }
    }
  | {
      type: ActionTypes.REMOVE_ITEM_FROM_CART
      payload: {
        itemId: number
      }
    }
  | {
      type: ActionTypes.MODIFY_ITEM_QUANTITY
      payload: {
        itemId: number
        count: number
      }
    }
  | {
      type: ActionTypes.CLEAR_CART
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

export function cartReducer(state: { items: CartItem[] }, action: Actions) {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.itemId,
      )

      if (itemExists) {
        return produce(state, (draft) => {
          draft.items.map((item) => {
            if (item.id === action.payload.itemId)
              item.quantity += action.payload.quantity
            return item
          })
        })
      }

      const item = checkoutCartItems[action.payload.itemId]
      return produce(state, (draft) => {
        draft.items.push({
          ...item,
          quantity: action.payload.quantity,
        })
      })
    }
    case 'REMOVE_ITEM_FROM_CART': {
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex(
          (item) => item.id === action.payload.itemId,
        )
        if (itemIndex !== -1) draft.items.splice(itemIndex, 1)
      })
    }
    case 'MODIFY_ITEM_QUANTITY': {
      return produce(state, (draft) => {
        draft.items.map((item) => {
          if (item.id === action.payload.itemId) {
            item.quantity = action.payload.count
          }
          return item
        })
      })
    }
    case 'CLEAR_CART': {
      return produce(state, (draft) => {
        draft.items = []
      })
    }
    default:
      return state
  }
}
