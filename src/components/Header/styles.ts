import styled from 'styled-components'

import { ButtonBase } from '../../styles/base'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block: 2rem;
  padding-inline: var(--lateral-spacing);

  img {
    width: 5.3125rem;
    height: 2.5rem;
  }

  nav ul {
    display: flex;
    gap: 0.75rem;

    list-style: none;
  }
`

export const AddressButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme.purple.light};
  color: ${(props) => props.theme.purple.dark};

  font-size: 0.875rem;

  svg {
    color: ${(props) => props.theme.purple.default};
  }

  &:hover {
    background-color: ${(props) => props.theme.purple.dark};
    color: ${(props) => props.theme.base.white};
    transition:
      background-color 0.1s,
      color 0.1s;

    svg {
      color: ${(props) => props.theme.base.white};
      transition: color 0.1s;
    }
  }
`

export const CartButton = styled(ButtonBase)<{ $cartCount: number }>`
  background-color: ${(props) => props.theme.yellow.light};
  color: ${(props) => props.theme.yellow.dark};
  position: relative;

  ${(props) =>
    props.$cartCount > 0 &&
    `
    &::after {
      content: '${props.$cartCount}';
      width: 1.1719rem;
      height: 1.1719rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -8px;
      right: -8.32px;
      border-radius: 999px;
      background-color: ${props.theme.yellow.dark};
      color: ${props.theme.base.white};
      border: 0.5px solid ${props.theme.yellow.dark};
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: -0.045rem;
    }

    &:hover::after {
      border-color: ${props.theme.yellow.light};
      transition: border-color 0.1s ease-out;
    }
  `}

  &:hover {
    background-color: ${(props) => props.theme.yellow.dark};
    color: ${(props) => props.theme.base.white};
    transition: background-color 0.1s ease-out;

    svg {
      color: ${(props) => props.theme.base.white};
      transition: color 0.1s ease-out;
    }
  }
`
