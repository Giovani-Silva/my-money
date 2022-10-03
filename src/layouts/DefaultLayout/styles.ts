import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['background-100']};
  height: min(100vh, 100%);
  display: flex;
  gap: 2rem;
`

export const Content = styled.div`
  width: calc(100vw - 20.75rem);
  padding: 2rem;
`
