import styled from 'styled-components'

export const CounterContainer = styled.div`
  height: inherit;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme.base.button};
  border-radius: 0.375rem;

  button {
    background-color: transparent;
    color: ${(props) => props.theme.purple.default};
    border: none;
    cursor: pointer;
  }

  span {
    width: 1.25rem;
    color: ${(props) => props.theme.base.title};
    text-align: center;
    line-height: 130%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 0.875rem;
  }
`
