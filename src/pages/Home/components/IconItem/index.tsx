import { Icon } from '@phosphor-icons/react'
import { IconItemContainer } from './styles'

interface IconItemProps {
  text: string
  icon: Icon
  indicatorColor: string
}

export function IconItem({ text, icon: Icon, indicatorColor }: IconItemProps) {
  return (
    <IconItemContainer $indicatorColor={indicatorColor}>
      <div>
        <Icon weight="fill" size={16} />
      </div>
      <span>{text}</span>
    </IconItemContainer>
  )
}
