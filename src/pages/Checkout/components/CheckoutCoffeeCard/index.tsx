import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { Trash } from '@phosphor-icons/react'

import { CartContext } from '../../../../contexts/CartContext'
import { replaceDotWithComma } from '../../../../utils'

import { Counter } from '../../../../components/Counter'
import { CheckoutCoffeeCardContainer, RemoveButton } from './styles'

interface ICheckoutCoffeeCard {
  itemId: number
  coffeeImage: string
  label: string
  quantity: number
  price: number
}

export function CheckoutCoffeeCard({
  itemId,
  coffeeImage,
  label,
  quantity,
  price,
}: ICheckoutCoffeeCard) {
  const theme = useTheme()

  const [count, setCount] = useState(quantity)
  const newPrice = replaceDotWithComma(price * count)

  const { modifyQuantityItem, removeItemFromCart } = useContext(CartContext)
  useEffect(() => {
    modifyQuantityItem(itemId, count)
  }, [count, itemId, modifyQuantityItem])

  return (
    <CheckoutCoffeeCardContainer>
      <div className="information">
        <img src={coffeeImage} alt="" />

        <div className="details">
          <p>{label}</p>

          <div className="actions">
            <Counter quantity={count} setQuantity={setCount} />
            <RemoveButton onClick={() => removeItemFromCart(itemId)}>
              <Trash color={theme.purple.default} />
              <span>REMOVER</span>
            </RemoveButton>
          </div>
        </div>
      </div>

      <span>R$ {newPrice}</span>
    </CheckoutCoffeeCardContainer>
  )
}
