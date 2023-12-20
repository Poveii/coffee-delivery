import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { CartContextProvider } from './contexts/CartContext'

import { router } from './routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
