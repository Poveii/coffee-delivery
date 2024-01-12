import { useState } from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import { ICoffeeList } from '../../../../data/coffeeList'

import { AddToCardButton, BuyContainer, CoffeeCardContainer } from './styles'
import { Counter } from '../../../../components/Counter'

type ICoffeeCardProps = Omit<ICoffeeList, 'id'>

export function CoffeeCard({
  coffee,
  tags,
  title,
  description,
  price,
}: ICoffeeCardProps) {
  const [count, setCount] = useState(1)

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
          R$ <b>{price.replace('.', ',')}</b>
        </p>

        <div className="buy">
          <Counter quantity={count} setQuantity={setCount} />

          <AddToCardButton>
            <ShoppingCart weight="fill" size={22} />
          </AddToCardButton>
        </div>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
