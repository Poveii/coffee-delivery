import { useLocation } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import { checkoutFormData } from '../Checkout'

import successIllustration from '../../assets/success_illustration.svg'
import { OrderInfoContainer, SuccessContainer } from './styles'

export function Success() {
  const location = useLocation()
  const formData: checkoutFormData = location.state

  let formattedPaymentType = formData.paymentType
  switch (formattedPaymentType) {
    case 'credit':
      formattedPaymentType = 'Cartão de Crédito'
      break
    case 'debit':
      formattedPaymentType = 'Cartão de Débito'
      break
    case 'money':
      formattedPaymentType = 'Dinheiro'
      break
  }

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
              Entrega em{' '}
              <b>
                {formData.street}, {formData.number}
              </b>{' '}
              <span>
                {formData.district} - {formData.city}, {formData.fu}
              </span>
              {formData.complement ? `perto de ${formData.complement}` : ''}
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
                <b>{formattedPaymentType}</b>
              </span>
            </p>
          </div>
        </OrderInfoContainer>
      </div>

      <img src={successIllustration} alt="" />
    </SuccessContainer>
  )
}
