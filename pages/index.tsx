import Head from "next/head"
import TypedText from "../components/typedText"
import styles from "../styles/home.module.scss"
export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Michael Kielpinski Portfolio site homepage" />
        <link rel="icon" href="/favicon.ico" /> {/* // todo add custom icon */}
      </Head>
      {/*// todo work on talking points and wording, and make sure to spellcheck */}
      <TypedText tag={"h1"} timeout={500} duration={200} className={styles.greeting}>
        Hello
      </TypedText>
      <article className={styles.article}>
        <section className={`${styles.section} ${styles.sectionOne}`}>
          <TypedText tag={"h2"} timeout={1000} duration={500}>
            I suppose that i should tell you a little about myself.
          </TypedText>
          <TypedText tag={"p"} timeout={2000} duration={2000}>
            I am a self taught web developer,
            though i have gone through some of the freeCodeCamp courses,
            and earned a few of the certifications,
            and have also also worked through a couple of books including
            The Ruby on Rails Tutorial by Michael Hartl - 6th Edition
          </TypedText>
          <TypedText tag={"p"} timeout={4500} duration={2500}>
            With the knowledge that gave me I gave making a rails api a shot,
            and since making APIs were not covered I thought it would be a good learning experience,
            which it was,
            though if I were to do it again I might try to use devise so that I can get up and running faster,
            because setting up users from scratch is a lot of work for a personal project that noone will actually use.
            For the frontend I went with react which I have been working on improving with.
          </TypedText>
        </section>
        <section className={`${styles.section} ${styles.sectionTwo}`}>
          <TypedText tag={"h2"} timeout={8000} duration={500}>
            Been gaining some experience with collaborative coding lately
          </TypedText>
          <TypedText tag={"p"} timeout={9000} duration={2500}>
            I have been working with a coding group weekly collaborating on discord,
            and often using the liveshare extension on vs code
            so that we can all work on things at the same time,
            and see instant feedback by sharing the localhost server which allows rapid
            prototyping of ideas, and we are able to get feedback from the rest of the team,
            as well as assistance building solutions,
            several times we have had one person making a component,
            then another person having seen that gets started on the implementation.
          </TypedText>
          <TypedText tag={"p"} timeout={13000} duration={2000}>
            Working with other developers is great for learning,
            and it took me quite some time to finaly start working with others,
            but things have been going well, and I have been learning quite a bit,
            as well as teach a few others which has helped solidify
            knowledge in some areas.
          </TypedText>
        </section>
        <section className={`${styles.section} ${styles.sectionThree}`}>
          <TypedText tag={"h2"} timeout={15500} duration={500}>
            Motivation and goals
          </TypedText>
          <TypedText tag={"p"} timeout={16500} duration={2000}>
            I was working on the career change anyway, because I am more interested in a career in tech,
            but developments in my personal life have made an on-site job unsustainable,
            so I have been working on being able to work remotely.
          </TypedText>
          <TypedText tag={"p"} timeout={19000} duration={2000}>
            Although I have had an interest in learing programming I didn&apos;t commit until January 2021,
            I have hit some bumps in the road in my journey, but I have persisted,
            and intend to keep improving,
            because I am always looking to get better at the things that I do,
            doing them faster, better, more efficiently.
          </TypedText>
        </section>
        <aside className={`${styles.aside} ${styles.asideOne}`}>
          <TypedText tag={"h2"} timeout={21500} duration={1000}>
            It has been an interesting journey thus far,
            and I am eager to see what comes next
          </TypedText>
          <TypedText tag={"p"} timeout={23000} duration={3000}>
            I have much to learn still, but that will never change there is always so much to learn,
            and you can&apos;t know everything, but with enough determination you can surprize yourself with what
            you can achieve,
            coming from very little understanding of programming to where I am now has been a lot of work,
            though I feel that it is always worth impoving yourself,
            your skills and knowledge, because it always pays dividends
          </TypedText>
        </aside>
      </article>
    </>
  )
}