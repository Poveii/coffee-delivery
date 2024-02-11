import { ReactNode, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const StyledContent = styled.div`
  background-color: ${(props) => props.theme.purple.default};
  color: ${(props) => props.theme.base.white};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
`

interface MobileTooltipProps {
  children: ReactNode
  content: ReactNode
}

export function MobileTooltip({ children, content }: MobileTooltipProps) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const isMobile = window.innerWidth >= 320 && window.innerWidth <= 480

  function handleMobileClick() {
    setOpen((prevOpen) => !prevOpen)
  }

  if (isMobile) {
    return (
      <TooltipPrimitive.Provider>
        <TooltipPrimitive.Root
          delayDuration={0}
          open={open}
          onOpenChange={setOpen}
        >
          <TooltipPrimitive.Trigger asChild onClick={handleMobileClick}>
            {children}
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Content side="bottom" align="center">
            <StyledContent>{content}</StyledContent>
            <TooltipPrimitive.Arrow fill={theme.purple.default} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    )
  }

  return children
}
