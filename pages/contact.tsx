import * as emailjs from '@emailjs/browser'
// import { EmailJSResponseStatus } from "@emailjs/browser"
import { FormEvent, useState } from "react"
import styles from '../styles/contact.module.scss'
export default function Contact() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const handleChange = (e: any) => {
    switch (e.target.name) {
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
  // todo finish this and maybe use emailjs
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const data = {
      email: email,
      subject: subject,
      message: message,
    }
    const postData = async () => {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(data),
      })
        return response.json();
    };
    postData().then(() => {
      alert('Your message has been sent')
      setEmail('')
      setSubject('')
      setMessage('')
    })
    .catch(err => {
      console.log(err)
      alert('Something went wrong.')
    })
  }
  return (
    <>
      <h1>this is the contact page</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.labelEmail}>
          Email: <input name='email' type="email" value={email} onChange={handleChange} className={styles.inputEmail} />
        </label>
        <label className={styles.labelSubject}>
          Subject: <input name='subject' type="text" value={subject} onChange={handleChange} className={styles.inputSubject} />
        </label>
        <label className={styles.labelMessage}>
          Message: <textarea name='message' value={message} onChange={handleChange} className={styles.inputMessage} />
        </label>
        <button className={styles.submit}>submit</button>
      </form>
    </>
  )
}