import { BlockList } from 'net'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import TypedText from "../components/typedText"
// import { useIsVisible } from "../hooks/useIsVisible"
// import { useRef } from 'react'
export default function Home() {
  // const ref = useRef();
  // const isVisible = useIsVisible(ref);
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
          <h3><TypedText timeout={500} duration={500} curserStyle={"blink"}>About this project</TypedText></h3>
          <p>

            <TypedText timeout={1500} duration={2000} curserStyle={"blink"}>
              This was made using react, and started with useState for state management,
              but later converted it to useReducer
            </TypedText>
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
          <h3><TypedText timeout={500} duration={500} curserStyle={"blink"}>About this project</TypedText></h3>
          <p>
            <TypedText timeout={1500} duration={3500} curserStyle={"blink"}>
              This was made using typescript while following a tutorial in plain javascript,
              they used a library that I had trouble using so I ended up needing to make some functions myself
            </TypedText>
          </p>
          <h4><TypedText timeout={5000} duration={500} curserStyle={"blink"}>Here are a few examles</TypedText></h4>
          <ul className={styles.list}>
            <li><TypedText timeout={6000} duration={500} curserStyle={"blink"}>getting the distance between two points</TypedText></li>
            <li><TypedText timeout={7000} duration={500} curserStyle={"blink"}>converting degrees to radians</TypedText></li>
            <li></li>
          </ul>
          <p>
            <TypedText timeout={8000} duration={3000} curserStyle={"blink"}>though it wasn't in the tutorial I also made a function to draw the parts of the wall between the points that hit it,
              instead of the whole wall if any hit,
              though there is the issue that it does not draw the walls between those rays if they don't hit the same wall
            </TypedText>
          </p>
          <p className={styles.link}>
            <i>You can check out the source code on </i>
            <a href="https://github.com/S0UPernova/raycasting" target={'_blank'}>GitHub</a>
          </p>
        </section>


        <section className={styles.section}>
          <p>
            <i>This is a live preview for </i>
            <a href="https://todo-app.me" target={'_blank'}>Todo-App</a>
          </p>
          <div className={styles.box}>
            {/* // todo get cookies working in this */}
            <iframe loading="lazy" title='Todo-App' className={styles.frame} src="https://todo-app.me">
            </iframe>
          </div>
          <h3><TypedText timeout={500} duration={500} curserStyle={"blink"}>About this project</TypedText></h3>
          <p>
            <TypedText timeout={1500} duration={3500} curserStyle={"blink"}>
              FYI: login does not work in the preview, because the cookie does not set.c
              the frontend is in react, and the backend is an api made with Ruby on Rails
            </TypedText>
          </p>
          <h4><TypedText timeout={5000} duration={500} curserStyle={"blink"}>Here are a few highlights</TypedText></h4>
          <ul className={styles.list}>
            <li><TypedText timeout={6000} duration={500} curserStyle={"blink"}>the api is on an aws ec2 instance</TypedText></li>
            <li><TypedText timeout={7000} duration={500} curserStyle={"blink"}>the frontend is on aws amplify with ci/cd</TypedText></li>
            <li></li>
          </ul>
          <p>
            <TypedText timeout={8000} duration={4000} curserStyle={"blink"}>
              This application presented quite a few challenges, which were a good learning experience.
              For instance this was the first time I deployed a rails app without it being on heroku, and the saying rang pretty true,
              that one of the hardest things to do with ruby on rails is installing it.
            </TypedText>
          </p>
          <p className={styles.link}>
            <i>You can check out the source code </i>
            <a href="https://github.com/S0UPernova/todo_app" target={'_blank'}>Frontend</a>
            {" "}
            <a href="https://github.com/S0UPernova/todo_api" target={'_blank'}>Backend</a>
          </p>
        </section>
      </main>
    </div>

  )
}
