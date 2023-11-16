import { ShoppingCart } from '@phosphor-icons/react'
import { ICoffeeList } from '../../data/coffeeList'

import { AddToCardButton, BuyContainer, CoffeeCardContainer } from './styles'
import { Counter } from '../../../../components/Counter'

type ICoffeeCardProps = Omit<ICoffeeList, 'id'>

export function CoffeeCard({
  coffee,
  tags,
  title,
  description,
}: ICoffeeCardProps) {
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
          R$ <b>9,90</b>
        </p>

        <div className="buy">
          <Counter />

          <AddToCardButton>
            <ShoppingCart weight="fill" size={22} />
          </AddToCardButton>
        </div>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
