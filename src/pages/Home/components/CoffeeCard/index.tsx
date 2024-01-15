import { useState } from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import { ICoffeeList } from '../../../../data/coffeeList'

import { Counter } from '../../../../components/Counter'
import { replaceDotWithComma } from '../../../../utils'

import { AddToCardButton, BuyContainer, CoffeeCardContainer } from './styles'

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
          R$ <b>{replaceDotWithComma(price)}</b>
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
