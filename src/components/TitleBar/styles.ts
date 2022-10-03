import styled from 'styled-components'

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export const Title = styled.h2``

export const Actions = styled.div`
  min-width: 9.375rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['text-200']};
  }

  span {
    font-weight: bold;
    color: ${(props) => props.theme['text-400']};
  }
`
