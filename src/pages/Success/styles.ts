import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  padding-block: 5rem;
  padding-inline: var(--lateral-spacing);

  .container {
    > h1 {
      color: ${(props) => props.theme.yellow.dark};
      font-family: 'Baloo 2', sans-serif;
      font-size: 2em;
      font-weight: 800;
      line-height: 130%;
      margin-bottom: 0.25rem;
    }

    > p {
      color: ${(props) => props.theme.base.subtitle};
      font-size: 1.25em;
      line-height: 130%;
      margin-bottom: 2.5rem;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    row-gap: 1.25rem;
    font-size: 0.875rem;
    padding-block: 2.5rem;

    > img {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1240px) {
    font-size: 0.75rem;

    > img {
      width: 80%;
    }
  }

  @media screen and (min-width: 888px) and (max-width: 1304px) {
    flex-direction: row;
    align-items: flex-end;

    > img {
      width: 44%;
    }
  }
`

export const OrderInfoContainer = styled.div`
  width: 32.875rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  font-size: 1rem;
  border-radius: 0.375rem 2.25rem;
  border: 1px solid transparent;
  background-image: linear-gradient(
      ${(props) => props.theme.base.background},
      ${(props) => props.theme.base.background}
    ),
    linear-gradient(
      to left,
      ${(props) => props.theme.purple.default},
      ${(props) => props.theme.yellow.dark}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    i {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 62.5rem;

      svg {
        color: ${(props) => props.theme.base.white};
      }
    }

    p {
      line-height: 130%;

      span {
        display: block;
      }
    }
  }

  #local i {
    background-color: ${(props) => props.theme.purple.default};
  }

  #time i {
    background-color: ${(props) => props.theme.yellow.default};
  }

  #payment i {
    background-color: ${(props) => props.theme.yellow.dark};
  }

  @media screen and (min-width: 320px) and (max-width: 1240px) {
    width: fit-content;
    font-size: 0.875rem;

    > div {
      align-items: flex-start;

      p {
        line-height: 140%;
      }
    }
  }
`
