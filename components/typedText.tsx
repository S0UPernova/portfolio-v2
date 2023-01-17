import { time } from "console"
import React, { useState, useEffect, memo, useRef, ElementType, HTMLAttributes } from "react"
import { useIsVisible } from "../hooks/useIsVisible"
import styles from './typedText.module.scss'

interface IInputParams extends HTMLAttributes<HTMLOrSVGElement> {
  children: string,
  delay?: number,
  duration?: number,
  timeout?: number,
  placeHolder?: string | false,
  curserStyle?: "none" | "static" | "blink"
  curser?: string,
  tag?: ElementType,
  className?: string
}

//todo add option to allow placeholder to be replaced like using insert replacing one char at a time,
//todo instead of having it vanish all at once.
//? maybe add an option for it to start without needing to be visible?
function TypedText({
  children,
  delay = 110,
  timeout = 1000,
  placeHolder = "\u200B",
  curser = "|",
  curserStyle = "static",
  duration,
  tag: Tag = "span",
  className = ""
}: IInputParams): JSX.Element {
  // todo maybe figure out how make this to not be any
  const ref = useRef<any>(null);
  const isVisible = useIsVisible(ref)
  const [revealedLetters, setRevealedLetters] = useState(0)
  const [showCurser, setShowCurser] = useState(false)
  const [hasBeenSeen, setHasBeenSeen] = useState(false)
  const totalDuration = duration ? duration / children.length : null

  useEffect(() => {
    let interval: NodeJS.Timer
    const setter = () => {
      if (revealedLetters <= children.length) {
        setRevealedLetters(l => l + 1)
      }
    }
    if (hasBeenSeen && revealedLetters === 0) {
      setTimeout(() => {
        if (curserStyle !== "none") {
          setShowCurser(true)
        }
        interval = setInterval(() => {
          setter()
        }, totalDuration ? totalDuration : delay)
      }, timeout)

    } else if (hasBeenSeen && revealedLetters < children.length) {
      interval = setInterval(() => {
        setter()
      }, totalDuration ? totalDuration : delay)
    }

    return () => clearInterval(interval)
  }, [hasBeenSeen, revealedLetters, children.length, curserStyle, delay, timeout, totalDuration])

  return (
    <Tag ref={ref} className={className}>
      {`${isVisible && !hasBeenSeen ? setHasBeenSeen(true) : ""}`}
      {`${revealedLetters === 0 && placeHolder != false ? `${placeHolder}` : ""}`}
      {`${children.substring(0, revealedLetters)}`}
      {curserStyle !== "none" && (curserStyle === "static" || curserStyle === "blink")
        && revealedLetters < children.length
        && showCurser
        && <span className={`${curserStyle === "blink" && styles.blink}`}>{curser}</span>
      }
    </Tag>
  )
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
 * @param {string | false} placeHolder string | false | undefined
 * - Text to be in position before the typing starts
 * - Default is a zero width space 
 * @param {"none" | "static" | "blink"} curserStyle "none" | "static" | "blink" | undefined
 * - if left undefined curser will be static
 * @param {string} curser - string
 * @param {ElementType} tag - ElementType
 */
export default memo(TypedText)
