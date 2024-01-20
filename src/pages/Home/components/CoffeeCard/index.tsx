import { useContext, useState } from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import { ICoffeeList } from '../../../../data/coffeeList'

import { Counter } from '../../../../components/Counter'
import { replaceDotWithComma } from '../../../../utils'
import { CartContext } from '../../../../contexts/CartContext'

import { AddToCardButton, BuyContainer, CoffeeCardContainer } from './styles'

type ICoffeeCardProps = ICoffeeList

export function CoffeeCard({
  id,
  coffee,
  tags,
  title,
  description,
  price,
}: ICoffeeCardProps) {
  const [count, setCount] = useState(1)

  const { addItemToCart } = useContext(CartContext)

  return (
    <CoffeeCardContainer>
      <img src={coffee} alt="" />

      <ul>
        {tags.map((tag, index) => {
          return <li key={index}>{tag}</li>
        })}
      </ul>

      <h3>{title}</h3>
      <p className="description">{description}</p>

      <BuyContainer>
        <p>
          R$ <b>{replaceDotWithComma(price)}</b>
        </p>

        <div className="buy">
          <Counter quantity={count} setQuantity={setCount} />

          <AddToCardButton onClick={() => addItemToCart(id, count)}>
            <ShoppingCart weight="fill" size={22} />
          </AddToCardButton>
        </div>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
