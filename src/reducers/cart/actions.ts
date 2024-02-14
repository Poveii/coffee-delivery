/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  MODIFY_ITEM_QUANTITY = 'MODIFY_ITEM_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
}

export function addItemToCartAction(itemId: number, quantity: number) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART as const,
    payload: {
      itemId,
      quantity,
    },
  }
}

export function removeItemFromCartAction(itemId: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART as const,
    payload: {
      itemId,
    },
  }
}

export function modifyQuantityItemAction(itemId: number, count: number) {
  return {
    type: ActionTypes.MODIFY_ITEM_QUANTITY as const,
    payload: {
      itemId,
      count,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART as const,
  }
}
