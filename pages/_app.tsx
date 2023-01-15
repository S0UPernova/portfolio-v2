import '../styles/index.scss'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Michael Kielpinski - Portfolio</title>
        <meta name="description" content="Michael Kielpinski Portfolio site homepage" />
        <link rel="icon" href="/favicon.ico" /> {/* // todo add custom icon */}
      </Head>
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/contact'}>Contact</Link>
      </nav>
      <div className={"container"}>
        <Component {...pageProps} />
      </div>
      <footer>
        Built with Next.js
      </footer>
    </>
  )
}
