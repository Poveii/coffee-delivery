import { Icon } from '@phosphor-icons/react'
import styled, { useTheme } from 'styled-components'

const SelectCardContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  flex: 1;

  background-color: ${(props) => props.theme.base.button};
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;

  span {
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.base.text};
  }
`

interface ISelectCardProps {
  icon: Icon
  text: string
}

export function SelectCard({ icon: Icon, text }: ISelectCardProps) {
  const theme = useTheme()

  return (
    <SelectCardContainer>
      <Icon color={theme.purple.default} />
      <span>{text}</span>
    </SelectCardContainer>
  )
}
