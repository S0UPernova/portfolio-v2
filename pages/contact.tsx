// import { EmailJSResponseStatus } from "@emailjs/browser"
import { FormEvent, useState } from "react"
import emailjs from '@emailjs/browser'
import styles from '../styles/contact.module.scss'
import Head from "next/head"
interface contactProps {
  EMAILJS_SERVICE: string,
  EMAILJS_TEMPLATE: string,
  EMAILJS_PUBLIC_KEY: string
}
export default function Contact(props: contactProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const handleChange = (e: any) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'subject':
        setSubject(e.target.value)
        break
      case 'message':
        setMessage(e.target.value)
        break
    }
  }
  const handleSubmit = (e: any): void => {
    e.preventDefault()
    emailjs.sendForm(props.EMAILJS_SERVICE, props.EMAILJS_TEMPLATE, e.target, props.EMAILJS_PUBLIC_KEY)
      .then((result: any) => {
        alert("Your message has been sent")
      }, (error: any) => {
        console.log(error.text)
      })
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }
  return (
    <>
    <Head>
        <title>Michael Kielpinski - Contact</title>
    </Head>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name:
          <input
            name='name'
            type="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            name='email'
            type="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Subject:
          <input
            name='subject'
            type="text"
            value={subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name='message'
            value={message}
            onChange={handleChange}
            className={styles.inputMessage}
            required
          />
        </label>
        <button className={styles.submit}>Submit</button>
      </form>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      EMAILJS_SERVICE: process.env.EMAILJS_SERVICE,
      EMAILJS_TEMPLATE: process.env.EMAILJS_TEMPLATE,
      EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY
    }
  }
}