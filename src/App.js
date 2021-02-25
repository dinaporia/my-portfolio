import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Theme from './utils/Theme';


import Navigation from './components/Navigation';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  },
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #1a1a1a;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  },
`;

function App() {
  return (
   <Router>
      <Theme> 
        <GlobalStyle />
            <Navigation />
      </Theme>
    </Router>

  );
}

export default App;
