import styled from 'styled-components'

import { ButtonBase } from '../../../../styles/base'

export const CoffeeCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-inline: 1.25rem;
  padding-bottom: 1.25rem;

  background-color: ${(props) => props.theme.base.card};
  border-radius: 0.375rem 2.25rem;

  img {
    width: max-content;
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    margin-bottom: 1rem;

    li {
      padding: 0.25rem 0.5rem;
      font-size: 0.625rem;
      font-weight: 700;
      line-height: 130%;
      text-transform: uppercase;

      background-color: ${(props) => props.theme.yellow.light};
      color: ${(props) => props.theme.yellow.dark};
      border-radius: 6.25rem;
    }
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme.base.subtitle};
    margin-bottom: 0.5rem;
  }

  .description {
    flex: 1;
    text-align: center;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.base.label};
    margin-bottom: 1.875rem;
  }

  @media screen and (min-width: 1028px) and (max-width: 1180px) {
    h3 {
      width: 80%;
    }
  }
`

export const BuyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme.base.text};
    font-size: 0.875rem;
    line-height: 130%;

    b {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
    }
  }

  .buy {
    height: 2.375rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const AddToCardButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme.purple.dark};

  svg {
    color: ${(props) => props.theme.base.white};
  }
`
