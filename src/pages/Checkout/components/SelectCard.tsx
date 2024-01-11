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
    width: 100%;
    font-size: 0.75rem;
    text-align: left;
    text-transform: uppercase;
    white-space: nowrap;
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
