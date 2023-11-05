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

export const CartButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme.yellow.light};
  color: ${(props) => props.theme.yellow.dark};

  &:hover {
    background-color: ${(props) => props.theme.yellow.dark};
    color: ${(props) => props.theme.base.white};
    transition: background-color 0.1s;

    svg {
      color: ${(props) => props.theme.base.white};
      transition: color 0.1s;
    }
  }
`
