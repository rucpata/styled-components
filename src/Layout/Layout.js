import React from 'react'
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'
import {Link} from 'gatsby';
import { theme } from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    font-family: 'montserrat';
    color: white;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.dark};
  position: relative;
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: ${({theme}) => theme.colors.white};
//   font-size: 2em;
//   font-weight: 700;
// `;

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle/>
        <StyledWrapper>
          {children}
        </StyledWrapper>
      </>  
    </ThemeProvider>   
  )
}

export default Layout
