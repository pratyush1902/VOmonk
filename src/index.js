import { ColorModeScript,ChakraProvider,theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher'
 

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>

    <ColorModeSwitcher/>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>

  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
 
