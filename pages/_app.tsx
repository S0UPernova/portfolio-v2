import '../styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Component {...pageProps} />
      
      <footer className={'footer'}>

        Built with Next.js
      </footer>
    </>
  )
}
