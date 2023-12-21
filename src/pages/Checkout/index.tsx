import { Fragment, useContext } from 'react'
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
import { CheckoutCoffeeCard } from './components/CheckoutCoffeeCard/index'

import { CartContext } from '../../contexts/CartContext'

import {
  BetweenContainer,
  CardContainer,
  CheckoutContainer,
  ConfirmButton,
  Divider,
  FormContainer,
  HeadingContainer,
  SectionContainer,
  SelectedCoffeeContainer,
} from './styles'

export function Checkout() {
  const theme = useTheme()

  const { items } = useContext(CartContext)

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

        <SelectedCoffeeContainer>
          {items.map((coffeeItem, index, array) => {
            return (
              <Fragment key={coffeeItem.id}>
                <CheckoutCoffeeCard
                  coffeeImage={coffeeItem.itemImage}
                  label={coffeeItem.label}
                  quantity={1}
                  price={coffeeItem.price}
                />
                {index === array.length - 1 ? (
                  <></>
                ) : (
                  <Divider key={++index + array.length} />
                )}
              </Fragment>
            )
          })}

          <Divider />

          <div className="summary">
            <BetweenContainer>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </BetweenContainer>
            <BetweenContainer>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </BetweenContainer>
            <BetweenContainer $bold={true}>
              <p>Total</p>
              <span>R$ 33,20</span>
            </BetweenContainer>
          </div>

          <ConfirmButton to={'/checkout/success'}>
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </SelectedCoffeeContainer>
      </SectionContainer>
    </CheckoutContainer>
  )
}
