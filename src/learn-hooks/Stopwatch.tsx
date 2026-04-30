import { useEffect, useRef, useState } from "react"

function Stopwatch() {
  const [time, setTime] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((t) => t + 1)
      }, 1000)
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isRunning])

  return (
    <div>
      <p>Time: {time}s</p>

      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  )
}

export default Stopwatch