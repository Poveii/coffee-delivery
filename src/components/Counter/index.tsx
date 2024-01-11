import { Minus, Plus } from '@phosphor-icons/react'

import { CounterContainer } from './styles'

export function Counter({ quantity }: { quantity: number }) {
  return (
    <CounterContainer>
      <button className="decrement">
        <Minus weight="bold" size={14} />
      </button>

      <span>{quantity}</span>

      <button className="increment">
        <Plus weight="bold" size={14} />
      </button>
    </CounterContainer>
  )
}
