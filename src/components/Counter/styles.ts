import styled from 'styled-components'

export const CounterContainer = styled.div`
  height: 2.375rem;
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
`
