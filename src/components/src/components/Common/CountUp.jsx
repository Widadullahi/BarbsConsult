import { useState, useEffect } from 'react'

const CountUp = ({ end, suffix = '', duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0
      const increment = end / (duration / 16)

      const timerId = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timerId)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timerId)
    }, delay)

    return () => clearTimeout(timer)
  }, [end, duration, delay])

  return (
    <span className="inline-block">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default CountUp
