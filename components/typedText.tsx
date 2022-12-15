import React, { useState, useEffect, memo, createRef, useRef } from "react"
import { useIsVisible } from "../hooks/useIsVisible"
import styles from './typedText.module.scss'

interface IInputParams {
  children: string,
  delay?: number,
  duration?: number,
  timeout?: number,
  placeholder?: string | false,
  curserStyle?: "none" | "static" | "blink"
  curser?: string,
  tag?: keyof HTMLElementTagNameMap
  ref?: any
}
// todo add option to allow placeholder to be replaced like using insert replacing one char at a time,
// todo instead of having it vanish all at once. 
function TypedText({ children, delay = 110, timeout = 1000, placeholder = "\u200B", curser = "|", curserStyle = "static", duration }: IInputParams) {
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useIsVisible(ref)
  const [revealedLetters, setRevealedLetters] = useState(0)
  const [showCurser, setShowCurser] = useState(false)
  const [hasBeenSeen, setHasBeenSeen] = useState(false)
  const dur = duration ? duration / children.length : null
  useEffect(() => {
    let interval: NodeJS.Timer

    if (hasBeenSeen) {
      setTimeout(() => {
        if (curserStyle !== "none") {
          setShowCurser(true)
        }
        interval = setInterval(() => setRevealedLetters(l => l + 1), dur ? dur : delay)
        if (revealedLetters === children.length) clearInterval(interval)
      }, timeout)
    }

    return () => clearInterval(interval)
  }, [hasBeenSeen])
  return <>
    <span className={styles.element} ref={ref}>
      {`${isVisible && !hasBeenSeen ? setHasBeenSeen(true) : ""}`}
      {`${revealedLetters === 0 && placeholder != false ? `${placeholder}` : ""}`}
      {`${children.substring(0, revealedLetters)}`}
      {curserStyle !== "none" && (curserStyle === "static" || curserStyle === "blink")
        && revealedLetters < children.length
        && showCurser
        && <span className={`${curserStyle === "blink" && styles.blink}`}>{curser}</span>
      }
    </span>
  </>
}
/**
 * @param {string} children - string
 * - plain text as children
 * @param {number} delay - number | undefined
 * - In miliseconds the time for each letter
 * - Default is 110
 * @param {number} duration - number | undefined
 * - In miliseconds the time for the all the letters supplied
 * - Default is undefined, so it falls back to delay for each letter
 * @param {number} timeout - number | undefined
 * - In miliseconds the time before function starts typing out letters
 * - Default is 1000
 * @param {string | false} placeholder string | false | undefined
 * - Text to be in position before the typing starts
 * - Default is a zero width space 
 * @param {"none" | "static" | "blink"} curserStyle "none" | "static" | "blink" | undefined
 * - if left undefined curser will be static
 * @param {string} curser - string
 * @param {keyof HTMLElementTagNameMap} tag - keyof HTMLElementTagNameMap
 * @param {useRef<HTMLSpanElement>} ref - useRef<HTMLSpanElement>(null)
 */
export default memo(TypedText)
