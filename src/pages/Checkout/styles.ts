import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;

  padding-block: 2.5rem;
  padding-inline: var(--lateral-spacing);

  & > :first-child {
    flex: 1;
  }
`

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 130%;
  }
`

export const CardContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.base.card};

  > .container {
    display: flex;
    gap: 0.75rem;
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  .subtitle {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h3 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.base.subtitle};
    }

    p {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme.base.text};
    }
  }
`

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: repeat(4, 42px);
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'district city fu';
  gap: 1rem;

  #cep {
    grid-area: cep;
  }

  #street {
    grid-area: street;
  }

  #number {
    grid-area: number;
  }

  #complement {
    grid-area: complement;
  }

  #district {
    grid-area: district;
  }

  #city {
    grid-area: city;
  }

  #fu {
    grid-area: fu;
  }
`
