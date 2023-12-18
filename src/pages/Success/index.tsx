import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import successIllustration from '../../assets/success_illustration.svg'
import { OrderInfoContainer, SuccessContainer } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <div className="container">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderInfoContainer>
          <div id="local">
            <i>
              <MapPin weight="fill" />
            </i>
            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b>{' '}
              <span>Farrapos - Porto Alegre, RS</span>
            </p>
          </div>

          <div id="time">
            <i>
              <Timer weight="fill" />
            </i>
            <p>
              Previsão de entrega
              <span>
                <b>20 min - 30 min</b>
              </span>
            </p>
          </div>

          <div id="payment">
            <i>
              <CurrencyDollar />
            </i>
            <p>
              Pagamento na entrega
              <span>
                <b>Cartão de Crédito</b>
              </span>
            </p>
          </div>
        </OrderInfoContainer>
      </div>

      <img src={successIllustration} alt="" />
    </SuccessContainer>
  )
}
