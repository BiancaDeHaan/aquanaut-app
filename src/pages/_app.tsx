import '../styles/globals.css'
import Layout from '../components/Layout'
import styled from 'styled-components'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../app/store'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
