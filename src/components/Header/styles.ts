import styled from 'styled-components'

export const Wrapper = styled.div`
  width: min(100%, 18.75rem);
  label {
    display: none;
    @media (max-width: 40rem) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      background: cyan;
      border-radius: 6px;
      margin: 2rem;
      background: ${(props) => props.theme['background-300']};
      cursor: pointer;
      margin-left: auto;
    }
  }

  input[type='checkbox'] {
    position: absolute;
    right: 10000%;
  }

  input:checked ~ header {
    @media (max-width: 40rem) {
      left: 0;
    }
  }
`

export const HeaderWrapper = styled.header`
  background: ${(props) => props.theme['background-300']};
  padding: 2rem;
  width: min(100%, 18.75rem);
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 40rem) {
    position: absolute;
    top: 0;
    left: -100%;
    transition: left 250ms ease-in-out;
  }
`
export const Brand = styled.div`
  display: flex;
  gap: 1rem;

  h1 {
    font-size: clamp(1.25rem, -0.875rem + 8.333vw, 1.5rem);
  }
`

export const Nav = styled.nav`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &:not(:last-child) {
      flex: 1;
    }

    a {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 3rem;
      padding: 1rem;
      text-decoration: none;
      color: ${(props) => props.theme['text-300']};
      border-radius: 6px;
      transition: background 200ms ease-in-out, color 200ms ease-in-out;

      &:hover,
      &.active {
        background: ${(props) => props.theme['primary-500']};
        color: ${(props) => props.theme['text-500']};
      }
    }
  }
`
