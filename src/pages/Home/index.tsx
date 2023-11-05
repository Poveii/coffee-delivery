import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import { IconItem } from './components/IconItem'

import coffeeImage from '../../assets/coffee_image.png'
import { HeroContainer } from './styles'

export function Home() {
  return (
    <HeroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <ul className="items">
          <IconItem
            icon={ShoppingCart}
            text="Compra simples e segura"
            indicatorColor={useTheme().yellow.dark}
          />
          <IconItem
            icon={Package}
            text="Embalagem mantém o café intacto"
            indicatorColor={useTheme().base.text}
          />
          <IconItem
            icon={Timer}
            text="Entrega rápida e rastreada"
            indicatorColor={useTheme().yellow.default}
          />
          <IconItem
            icon={Coffee}
            text="O café chega fresquinho até você"
            indicatorColor={useTheme().purple.default}
          />
        </ul>
      </div>

      <img src={coffeeImage} alt="" />
    </HeroContainer>
  )
}
