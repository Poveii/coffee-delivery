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

    > p {
      line-height: 130%;
      color: ${(props) => props.theme.base.subtitle};
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

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
    line-height: 160%;
    color: ${(props) => props.theme.base.text};
  }
`
