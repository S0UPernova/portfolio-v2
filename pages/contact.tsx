import { FormEvent } from "react"
import styles from '../styles/contact.module.scss'
export default function Contact() {
  // todo finish this and maybe use emailjs
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    console.log('formJson', formJson)
  }
  return (
    <>
      <h1>this is the contact page</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label  className={styles.labelEmail}>
          Email: <input name='email' type="email" className={styles.inputEmail}/>
        </label>
        <label className={styles.labelSubject}>
          Subject: <input name='subject' type="text" className={styles.inputSubject}/>
        </label>
        <label className={styles.labelMessage}>
          Message: <textarea name='message' className={styles.inputMessage}/>
        </label>
        <button className={styles.submit}>submit</button>
      </form>
    </>
  )
}