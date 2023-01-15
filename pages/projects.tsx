import Head from 'next/head'
import TypedText from "../components/typedText"
import styles from '../styles/projects.module.scss'
export default function Projects() {
  return (
    <>
      <Head>
        <title>Michael Kielpinski - Projects</title>
        <meta name="description" content="Projects by Michael Kielpinski" />
        <link rel="icon" href="/favicon.ico" /> {/* // todo add custom icon */}
      </Head>
      <main className={styles.main}>

        {/* //* Tic-Tac-Toe */}
        <article className={styles.article}>
          <p className={styles.preview}>
            <i>This is a live preview for </i>
            <a href="https://s0upernova.github.io/tic-tac-toe" target={'_blank'}>Tic-Tac-Toe: Jaggy Edition</a>
          </p>
          <figure className={`${styles.box} ${styles.figure}`}>
            <iframe
              loading="lazy"
              title='Tic-Tac-Toe'
              className={styles.frame}
              src="https://s0upernova.github.io/tic-tac-toe">
            </iframe>
          </figure>
          <section className={styles.section}>
            <TypedText timeout={500} duration={500} curserStyle={"blink"} tag="h2">
              About this project
            </TypedText>
            <TypedText timeout={1500} duration={2000} curserStyle={"blink"} tag="p">
              This was made using react, and started with useState for state management,
              but later converted it to useReducer.
            </TypedText>
          </section>
          <aside className={styles.aside}>
            <TypedText timeout={4000} duration={800} curserStyle={"blink"} tag="h2">
              A few superfluous details.
            </TypedText>
            <TypedText timeout={5000} duration={2000} curserStyle={"blink"} tag="p">
              This started as an off the cuff hey id be interesting if such and such, and turned out
              pretty well I think.
            </TypedText>
          </aside>
          <p className={styles.link}>
            <i>You can check out the source code on </i>
            <a href="https://github.com/S0UPernova/tic-tac-toe" target={'_blank'}>GitHub</a>
          </p>
        </article>

        {/*//* Raycasting */}
        <article className={styles.article}>
          <p className={styles.preview}>
            <i>This is a live preview for </i>
            <a href="https://s0upernova.github.io/raycasting" target={'_blank'}>Raycasting</a>
          </p>
          <figure className={`${styles.box} ${styles.figure}`}>
            <iframe
              loading="lazy"
              title='Raycasting'
              className={styles.frame}
              src="https://s0upernova.github.io/raycasting">
            </iframe>
          </figure>
          <section className={styles.section}>
            <TypedText timeout={500} duration={500} curserStyle={"blink"} tag="h2">
              About this project
            </TypedText>
            <TypedText timeout={1500} duration={3500} curserStyle={"blink"} tag="p">
              This was made using typescript while following a tutorial in plain javascript,
              they used a library that I had trouble using,
              so I ended up needing to make some functions myself.
            </TypedText>
            <TypedText timeout={5000} duration={500} curserStyle={"blink"} tag="h3">
              Here are a couple examles.
            </TypedText>
            <ul className={styles.list}>
              <TypedText timeout={6000} duration={500} curserStyle={"blink"} tag="li">
                getting the distance between two points
              </TypedText>
              <TypedText timeout={7000} duration={500} curserStyle={"blink"} tag="li">
                converting degrees to radians
              </TypedText>
            </ul>
          </section>
          <aside className={styles.aside}>
            <TypedText timeout={8000} duration={800} curserStyle={"blink"} tag="h2">
              A few superfluous details
            </TypedText>
            <TypedText timeout={9000} duration={4000} curserStyle={"blink"} tag="p">
              though it wasn't in the tutorial I also made a function to draw the
              parts of the wall between the points that hit it,
              instead of the whole wall if any hit,
              though there is the issue that it does not draw the walls between
              those rays if they don't hit the same wall.
            </TypedText>
          </aside>
          <p className={styles.link}>
            <i>You can check out the source code on </i>
            <a href="https://github.com/S0UPernova/raycasting" target={'_blank'}>GitHub</a>
          </p>
        </article>

        {/* //* Todo-App && Todo-Api */}
        <article className={styles.article}>
          <p className={styles.preview}>
            <i>This is a live preview for </i>
            <a href="https://todo-app.me" target={'_blank'}>Todo-App</a>
          </p>
          <figure className={`${styles.box} ${styles.figure}`}>
            {/* // todo get cookies working in this */}
            <iframe
              loading="lazy"
              title='Todo-App'
              className={styles.frame}
              src="https://todo-app.me">
            </iframe>
          </figure>
          <section className={styles.section}>
            <TypedText timeout={500} duration={500} curserStyle={"blink"} tag="h3">
              About this project
            </TypedText>
            <TypedText timeout={1500} duration={3500} curserStyle={"blink"} tag="p">
              FYI: login does not work in the preview, because the cookie does not get set.
              the frontend is in react, and the backend is an api made with Ruby on Rails.
            </TypedText>
            <TypedText timeout={5000} duration={500} curserStyle={"blink"} tag="h3">
              Here are a some of the highlights.
            </TypedText>
            <ul className={styles.list}>
              <TypedText timeout={6000} duration={500} curserStyle={"blink"} tag="li">
                the api is on an aws ec2 instance
              </TypedText>
              <TypedText timeout={7000} duration={500} curserStyle={"blink"} tag="li">
                the frontend is on aws amplify with ci/cd
              </TypedText>
            </ul>
          </section>
          <aside className={styles.aside}>
            <TypedText timeout={8000} duration={800} curserStyle={"blink"} tag="h2">
              A few superfluous details.
            </TypedText>
            <TypedText timeout={9000} duration={4000} curserStyle={"blink"} tag="p">
              This application presented quite a few challenges,
              which were a good learning experience.
              For instance this was the first time I deployed a rails app without it being on heroku,
              and the saying rang pretty true,
              that one of the hardest things to do with ruby on rails is installing it.
            </TypedText>
          </aside>
          <p className={styles.link}>
            <i>You can check out the source code </i>
            <a href="https://github.com/S0UPernova/todo_app" target={'_blank'}>Frontend</a>,
            {" "}
            <a href="https://github.com/S0UPernova/todo_api" target={'_blank'}>Backend</a>
          </p>
        </article>
      </main>
    </>

  )
}
