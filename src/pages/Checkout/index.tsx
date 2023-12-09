import { useTheme } from 'styled-components'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import { InputForm } from './components/InputForm'
import { SelectCard } from './components/SelectCard'

import {
  CardContainer,
  CheckoutContainer,
  FormContainer,
  HeadingContainer,
  SectionContainer,
} from './styles'

export function Checkout() {
  const theme = useTheme()

  return (
    <CheckoutContainer>
      <SectionContainer>
        <h2>Complete seu pedido</h2>

        <CardContainer>
          <HeadingContainer>
            <MapPinLine size={22} color={theme.yellow.dark} />

            <div className="subtitle">
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </HeadingContainer>

          <FormContainer>
            <InputForm id="cep" placeholder="CEP" />
            <InputForm id="street" placeholder="Rua" />
            <InputForm id="number" placeholder="Número" />
            <InputForm
              id="complement"
              placeholder="Complemento"
              optionalText="Opcional"
            />
            <InputForm id="district" placeholder="Bairro" />
            <InputForm id="city" placeholder="Cidade" />
            <InputForm id="fu" placeholder="UF" />
          </FormContainer>
        </CardContainer>

        <CardContainer>
          <HeadingContainer>
            <CurrencyDollar size={22} color={theme.purple.default} />

            <div className="subtitle">
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </HeadingContainer>

          <div className="container">
            <SelectCard icon={CreditCard} text={'cartão de crédito'} />
            <SelectCard icon={Bank} text={'cartão de débito'} />
            <SelectCard icon={Money} text={'dinheiro'} />
          </div>
        </CardContainer>
      </SectionContainer>

      <SectionContainer>
        <h2>Cafés selecionados</h2>
      </SectionContainer>
    </CheckoutContainer>
  )
}
