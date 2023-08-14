//TODO --> IMPORTS - REACT + DOM AUTOMATICOS
import React from 'react'
import ReactDOM from 'react-dom/client'

//TODO --> IMPORTS - Styled Components
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme.ts';
import GlobalStyle from './styles/GlobalStyles.ts';

//TODO --> IMPORTS COMPONENTS
import { Header } from './components/Header.tsx';
import Banner from './components/Banner.tsx';
import WhatADo from './components/WhatADo.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header/>
      <Banner />
      <WhatADo />
    </ThemeProvider>
  </React.StrictMode>,
)
