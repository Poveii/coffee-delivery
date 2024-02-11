import styled from 'styled-components'

import heroBackground from '../../assets/hero_background.png'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.75rem;

  padding-block: 5.875rem;
  padding-inline: var(--lateral-spacing);

  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-size: cover;

  div {
    h1 {
      color: ${(props) => props.theme.base.title};
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 3em;
      line-height: 130%;
      margin-bottom: 1rem;
    }

    p {
      color: ${(props) => props.theme.base.subtitle};
      font-size: 1.25em;
      line-height: 130%;
      margin-bottom: 4.125rem;
    }
  }

  .items {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    column-gap: 2.5rem;
    row-gap: 1.25rem;
  }

  img {
    max-width: 46%;
    flex: 1;
  }

  @media screen and (min-width: 320px) and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    padding-block: 3rem;
    font-size: 0.875rem;

    div {
      h1 {
        width: 17rem;
      }

      p {
        margin-bottom: 2.625rem;
      }
    }

    .items {
      grid-template-columns: max-content;
    }

    img {
      max-width: 100%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.9375rem;

    div h1 {
      width: 100%;
    }

    .items {
      grid-template-columns: repeat(2, max-content);
    }
  }
`

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2rem;
  padding-inline: var(--lateral-spacing);
  padding-bottom: 5.875rem;

  h2 {
    align-self: start;

    color: ${(props) => props.theme.base.subtitle};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2em;
    font-weight: 800;
    line-height: 130%;

    margin-bottom: 2.125rem;
  }

  > ul {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    justify-content: center;

    row-gap: 2.5rem;
    column-gap: 2rem;
  }

  @media screen and (min-width: 320px) and (max-width: 1024px) {
    font-size: 0.875rem;
    padding-bottom: 4rem;

    > ul {
      grid-template-columns: minmax(256px, 288px);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    > ul {
      grid-template-columns: repeat(2, minmax(256px, 1fr));
    }
  }

  @media screen and (min-width: 888px) and (max-width: 1280px) {
    > ul {
      grid-template-columns: repeat(3, minmax(256px, 1fr));
    }
  }
`
