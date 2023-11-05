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
      </div>

      <img src={coffeeImage} alt="" />
    </HeroContainer>
  )
}
