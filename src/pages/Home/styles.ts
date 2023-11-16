import styled from 'styled-components'

import heroBackground from '../../assets/hero_background.png'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  padding-block: 5.875rem;
  padding-inline: var(--lateral-spacing);

  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-size: cover;

  div {
    width: min-content;

    h1 {
      color: ${(props) => props.theme.base.title};
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
      margin-bottom: 1rem;
    }

    p {
      color: ${(props) => props.theme.base.subtitle};
      font-size: 1.25rem;
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
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    margin-bottom: 3.375rem;
  }

  > ul {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    justify-content: center;

    row-gap: 2.5rem;
    column-gap: 2rem;
  }
`
