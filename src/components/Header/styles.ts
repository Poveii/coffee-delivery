import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block: 2rem;
  padding-inline: 9.65vw;

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

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
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
