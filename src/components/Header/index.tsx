import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { AddressButton, CartButton, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>

      <nav>
        <ul>
          <li>
            <AddressButton>
              <MapPin size={22} weight="fill" />
              Porto Alegre, RS
            </AddressButton>
          </li>
          <li>
            <Link to={'/checkout'}>
              <CartButton>
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
