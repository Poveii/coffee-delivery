import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { CartContext } from '../../contexts/CartContext'

import logo from '../../assets/logo.svg'
import { AddressButton, CartButton, HeaderContainer } from './styles'

export function Header() {
  const { totalAmount } = useContext(CartContext)

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
              <CartButton $cartCount={totalAmount}>
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
