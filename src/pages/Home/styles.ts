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
    width: 36.75rem;

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

  img {
    max-width: 46%;
    flex: 1;
  }
`
