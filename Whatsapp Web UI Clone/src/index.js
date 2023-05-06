import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './app'
import './util.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)