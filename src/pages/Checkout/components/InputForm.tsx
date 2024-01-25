import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { checkoutFormData } from '..'

import styled from 'styled-components'

const InputContainer = styled.label<{ $optionalText: string }>`
  display: grid;

  input {
    display: flex;
    width: 100%;
    height: 2.625rem;
    padding: 0.75rem;

    background-color: ${(props) => props.theme.base.input};
    border: 1px solid ${(props) => props.theme.base.button};
    border-radius: 0.25rem;

    font-size: 0.875rem;
    line-height: 130%;

    &::placeholder,
    &::-webkit-input-placeholder {
      color: ${(props) => props.theme.base.label};
    }
  }

  ${(props) =>
    props.$optionalText &&
    `&::after {
    content: '${props.$optionalText}';
    position: absolute;
    right: 0.75rem;
    align-self: center;

    color: ${props.theme.base.label};
    font-size: 0.75rem;
    font-style: italic;
    line-height: 130%;
  }`}
`

type inputIds =
  | 'number'
  | 'cep'
  | 'street'
  | 'complement'
  | 'district'
  | 'city'
  | 'fu'

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  optionalText?: string
  id: inputIds
  placeholder: string
  register: UseFormRegister<checkoutFormData>
}

export function InputForm({
  optionalText,
  id,
  placeholder,
  register,
  ...props
}: InputFormProps) {
  return (
    <InputContainer $optionalText={optionalText ?? ''} id={id}>
      <input
        type="text"
        placeholder={placeholder}
        {...register(id)}
        {...props}
      />
    </InputContainer>
  )
}
