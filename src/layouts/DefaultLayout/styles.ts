import styled from 'styled-components';

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['background-100']};
  height: min(100vh, 100%);
`;
