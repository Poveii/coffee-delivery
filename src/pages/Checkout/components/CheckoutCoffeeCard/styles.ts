import styled from 'styled-components'

export const CheckoutCoffeeCardContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  background-color: transparent;

  .information {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    > img {
      width: 4rem;
      height: 4rem;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > p {
        line-height: 130%;
        color: ${(props) => props.theme.base.subtitle};
      }

      .actions {
        height: 2rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }

  > span {
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme.base.text};
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    position: relative;

    .information {
      width: 80%;
      gap: 0.875rem;

      > img {
        width: 3rem;
        height: 3rem;
      }

      .details p {
        width: 80%;
      }
    }

    > span {
      position: absolute;
      right: 0;
    }
  }
`

export const RemoveButton = styled.button`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding-inline: 0.5rem;

  background-color: ${(props) => props.theme.base.button};
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.base.text};
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    span {
      display: none;
    }
  }
`
