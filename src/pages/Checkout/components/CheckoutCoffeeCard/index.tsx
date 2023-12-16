import { useTheme } from 'styled-components'
import { Trash } from '@phosphor-icons/react'

import { Counter } from '../../../../components/Counter'
import { CheckoutCoffeeCardContainer, RemoveButton } from './styles'

interface ICheckoutCoffeeCard {
  coffeeImage: string
  label: string
  quantity: number
  price: string
}

export function CheckoutCoffeeCard({
  coffeeImage,
  label,
  quantity,
  price,
}: ICheckoutCoffeeCard) {
  const theme = useTheme()

  return (
    <CheckoutCoffeeCardContainer>
      <div className="information">
        <img src={coffeeImage} alt="" />

        <div className="details">
          <p>{label}</p>

          <div className="actions">
            <Counter quantity={quantity} />
            <RemoveButton>
              <Trash color={theme.purple.default} />
              <span>REMOVER</span>
            </RemoveButton>
          </div>
        </div>
      </div>

      <span>{price}</span>
    </CheckoutCoffeeCardContainer>
  )
}
