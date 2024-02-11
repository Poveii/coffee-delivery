import styled from 'styled-components'

import { ButtonBase } from '../../styles/base'

export const HeaderContainer = styled.header`
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

  @media screen and (min-width: 320px) and (max-width: 480px) {
    img {
      width: 4.75rem;
      height: 2rem;
    }

    nav ul {
      gap: 0.5rem;
    }
  }
`

export const AddressButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
  background-color: ${(props) => props.theme.purple.light};
  color: ${(props) => props.theme.purple.dark};
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;

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

  @media screen and (min-width: 320px) and (max-width: 480px) {
    gap: 0.25rem;
    font-size: 0.75rem;

    span {
      display: none;
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
