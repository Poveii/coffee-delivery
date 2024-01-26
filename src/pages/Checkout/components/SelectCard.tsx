import { Icon } from '@phosphor-icons/react'
import styled, { useTheme } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

interface SelectCardContainerProps {
  value: 'credit' | 'debit' | 'money'
}

const SelectCardContainer = styled(RadioGroup.Item)<SelectCardContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  flex: 1;

  background-color: ${(props) => props.theme.base.button};
  border-radius: 0.375rem;
  cursor: pointer;

  span {
    width: 100%;
    font-size: 0.75rem;
    text-align: left;
    text-transform: uppercase;
    white-space: nowrap;
    color: ${(props) => props.theme.base.text};
  }

  &[data-state='unchecked'] {
    border: none;
  }

  &[data-state='checked'] {
    border: 1px inset ${(props) => props.theme.purple.default};
  }

  &[data-disabled] {
    filter: brightness(0.95);
    border: none;
    user-select: none;
  }
`

interface ISelectCardProps {
  icon: Icon
  text: string
  value: string
}

export function SelectCard({ icon: Icon, text, value }: ISelectCardProps) {
  const theme = useTheme()

  return (
    <SelectCardContainer value={value}>
      <Icon color={theme.purple.default} />
      <span>{text}</span>
    </SelectCardContainer>
  )
}
