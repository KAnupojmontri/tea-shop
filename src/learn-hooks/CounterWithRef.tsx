import { useRef, useState } from "react"

function CounterWithRef() {
  const [count, setCount] = useState(0)
  const prevCountRef = useRef(0)

  function handleClick() {
    prevCountRef.current = count // เก็บค่าก่อนเปลี่ยน
    setCount(c => c + 1)
  }

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default CounterWithRef