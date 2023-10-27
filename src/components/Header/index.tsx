import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { AddressButton, CartButton, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <ul>
          <li>
            <AddressButton>
              <MapPin size={22} weight="fill" />
              Porto Alegre, RS
            </AddressButton>
          </li>
          <li>
            <CartButton>
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
