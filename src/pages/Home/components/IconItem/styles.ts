import styled from 'styled-components'

export const IconItemContainer = styled.li<{ $indicatorColor?: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;

    background-color: ${(props) => props.$indicatorColor ?? '#000000'};
    border-radius: 999px;

    svg {
      color: ${(props) => props.theme.base.white};
    }
  }

  span {
    line-height: 130%;
  }
`
