import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { CartContext } from '../../contexts/CartContext'
import { MobileTooltip } from '../MobileTooltip'

import logo from '../../assets/logo.svg'
import { AddressButton, CartButton, HeaderContainer } from './styles'

export function Header() {
  const { items } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link to={'/'} title="Voltar para a página inicial">
        <img src={logo} alt="" />
      </Link>

      <nav>
        <ul>
          <li>
            <MobileTooltip content="Porto Alegre, RS">
              <AddressButton>
                <MapPin size={22} weight="fill" />
                <span>Porto Alegre, RS</span>
              </AddressButton>
            </MobileTooltip>
          </li>
          <li>
            <Link to={'/checkout'} title="Ir para o carrinho">
              <CartButton $cartCount={items.length}>
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
