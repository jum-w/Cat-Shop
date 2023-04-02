import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ShopContext, ShopContextProvider } from '@/context/ShopContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopContextProvider>
      <Component {...pageProps} />
    </ShopContextProvider>
  )
}
