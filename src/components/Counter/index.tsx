import { Minus, Plus } from '@phosphor-icons/react'

import { CounterContainer } from './styles'

export function Counter({
  quantity = 1,
  setQuantity,
}: {
  quantity: number
  setQuantity: (value: number) => void
}) {
  function decrementCounter() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function incrementCounter() {
    setQuantity(quantity + 1)
  }

  return (
    <CounterContainer>
      <button className="decrement" onClick={decrementCounter}>
        {quantity > 1 ? (
          <Minus weight="bold" size={14} />
        ) : (
          <Minus weight="thin" size={14} />
        )}
      </button>

      <span>{quantity}</span>

      <button className="increment" onClick={incrementCounter}>
        <Plus weight="bold" size={14} />
      </button>
    </CounterContainer>
  )
}
