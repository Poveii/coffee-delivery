import { Fragment, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useTheme } from 'styled-components'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  ReceiptX,
} from '@phosphor-icons/react'

import { InputForm } from './components/InputForm'
import { SelectCard } from './components/SelectCard'
import { CheckoutCoffeeCard } from './components/CheckoutCoffeeCard'

import { CartContext } from '../../contexts/CartContext'

import { replaceDotWithComma } from '../../utils'
import {
  BetweenContainer,
  CardContainer,
  CheckoutContainer,
  ConfirmButton,
  Divider,
  FormContainer,
  HeadingContainer,
  IndexContainer,
  SectionContainer,
  SelectedCoffeeContainer,
} from './styles'

const checkoutFormSchema = z.object({
  cep: z.coerce
    .number({ invalid_type_error: 'Somente números' })
    .min(1, { message: 'O campo CEP é obrigatório' }),
  street: z.string().min(1, { message: 'O campo Rua é obrigatório' }),
  number: z.coerce
    .number({ invalid_type_error: 'Somente números' })
    .min(1, { message: 'O campo Número é obrigatório' }),
  complement: z.string().optional(),
  district: z.string().min(1, { message: 'O campo Bairro é obrigatório' }),
  city: z.string().min(1, { message: 'O campo Cidade é obrigatório' }),
  fu: z
    .string()
    .regex(/[A-Za-z]/, { message: 'Somente letras' })
    .min(1, { message: 'O campo UF é obrigatório' })
    .toUpperCase(),
})

export type checkoutFormData = z.infer<typeof checkoutFormSchema>

export function Checkout() {
  const theme = useTheme()

  const { items } = useContext(CartContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    shouldUseNativeValidation: true,
  })

  const handleClickConfirm = (data: checkoutFormData) => console.log(data)

  const isThereItems = items.length > 0

  const totalItemsPrice = items.reduce((acc, { price, quantity }) => {
    if (quantity > 1) return acc + price * quantity
    return acc + price
  }, 0)

  const deliveryFee = 3.5
  const totalPriceSum = totalItemsPrice + deliveryFee

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

          <FormContainer
            id="checkout-form"
            onSubmit={handleSubmit(handleClickConfirm)}
          >
            <InputForm
              id="cep"
              placeholder="CEP"
              maxLength={8}
              register={register}
            />
            <InputForm id="street" placeholder="Rua" register={register} />
            <InputForm
              id="number"
              placeholder="Número"
              maxLength={5}
              register={register}
            />
            <InputForm
              id="complement"
              placeholder="Complemento"
              optionalText="Opcional"
              register={register}
            />
            <InputForm id="district" placeholder="Bairro" register={register} />
            <InputForm id="city" placeholder="Cidade" register={register} />
            <InputForm
              id="fu"
              placeholder="UF"
              maxLength={2}
              style={{ textTransform: 'uppercase' }}
              register={register}
            />
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
          {isThereItems ? (
            <>
              {items.map((coffeeItem, index, array) => {
                return (
                  <Fragment key={coffeeItem.id}>
                    <CheckoutCoffeeCard
                      itemId={coffeeItem.id}
                      coffeeImage={coffeeItem.itemImage}
                      label={coffeeItem.label}
                      quantity={coffeeItem.quantity}
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
                  <span>R$ {replaceDotWithComma(totalItemsPrice)}</span>
                </BetweenContainer>
                <BetweenContainer>
                  <p>Entrega</p>
                  <span>R$ {replaceDotWithComma(deliveryFee)}</span>
                </BetweenContainer>
                <BetweenContainer $bold={true}>
                  <p>Total</p>
                  <span>R$ {replaceDotWithComma(totalPriceSum)}</span>
                </BetweenContainer>
              </div>
            </>
          ) : (
            <IndexContainer>
              <ReceiptX size={56} color={theme.base.text} />
              <p>Você não adicionou nenhum item ao seu carrinho.</p>
            </IndexContainer>
          )}

          <ConfirmButton
            type="submit"
            form="checkout-form"
            title="Finalizar compra"
            disabled={!isThereItems || isSubmitting}
          >
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </SelectedCoffeeContainer>
      </SectionContainer>
    </CheckoutContainer>
  )
}
