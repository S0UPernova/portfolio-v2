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
export default memo(TypedText)
