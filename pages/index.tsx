import { BlockList } from 'net'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Kielpinski - Portfolio</title>
        <meta name="description" content="Portfolio site for Michael Kielpinski" />
        <link rel="icon" href="/favicon.ico" /> {/* // todo add custom icon */}
      </Head>
      <main className={styles.main}>

        <section className={styles.section}>
          <p>
            <i>This is a live preview for </i>
            <a href="https://s0upernova.github.io/tic-tac-toe" target={'_blank'}>Tic-Tac-Toe: Jaggy Edition</a>
          </p>
          <div className={styles.box}>
            <iframe loading="lazy" title='Tic-Tac-Toe' className={styles.frame} src="https://s0upernova.github.io/tic-tac-toe">
            </iframe>
          </div>
          <h3>About this project</h3>
          <p>
            This was made using react, and started with useState for state management,
            but later converted it to useReducer
          </p>
          <p>
            <i>You can check out the source code on </i>
            <a href="https://github.com/S0UPernova/tic-tac-toe" target={'_blank'}>GitHub</a>
          </p>
        </section>

        <section className={styles.section}>
          <p>
            <i>This is a live preview for </i>
            <a href="https://s0upernova.github.io/raycasting" target={'_blank'}>Raycasting</a>
          </p>
          <div className={styles.box}>
            <iframe loading="lazy" title='Raycasting' className={styles.frame} src="https://s0upernova.github.io/raycasting">
            </iframe>
          </div>
          <h3>About this project</h3>
          <p>
            This was made using typescript while following a tutorial in plain javascript,
            they used a library that I had trouble using so I ended up needing to make some functions myself
          </p>
          <h4>Here are a few examles</h4>
          <ul className={styles.list}>
            <li>getting the distance between two points</li>
            <li>converting degrees to radians</li>
          </ul>
          <p>
            though it wasn't in the tutorial I also made a function to draw the parts of the wall between the points that hit it,
            instead of the whole wall if any hit,
            though there is the issue that it does not draw the walls between those rays if they don't hit the same wall
          </p>
          <p className={styles.link}>
            <i>You can check out the source code on </i>
            <a href="https://github.com/S0UPernova/raycasting" target={'_blank'}>GitHub</a>
          </p>
        </section>

      </main>
    </div>
  )
}
