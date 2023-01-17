import '../styles/index.scss'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()

  const testPath = (route: string) => {
    const rgx = new RegExp(
      `^\/${route}?(?![a-z])(?![0-9])`, // regex to check the begining of the path
      'i'
    )
    return rgx.test(asPath)
  }

  return (
    <>
      <Head>
        <title>Michael Kielpinski</title>
        <meta name="description" content="Michael Kielpinski Portfolio site" />
        <link rel="icon" href="/favicon.svg" /> {/* // todo add custom icon */}
      </Head>
      <nav>
        <Link href={'/'} className={`${testPath('/') ? 'active' : null}`}>Home</Link>
        <Link href={'/projects'}className={`${testPath('projects') ? 'active' : null}`}>Projects</Link>
        <Link href={'/contact'}className={`${testPath('contact') ? 'active' : null}`}>Contact</Link>
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
