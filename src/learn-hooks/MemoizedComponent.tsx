import { useState, useMemo } from "react"

function MemoizedComponent() {
  const [count, setCount] = useState(0)

  // ✅ คำนวณเฉพาะเมื่อ count เปลี่ยนเท่านั้น
  const result = useMemo(() => {
    console.log("Calculating...")
    let res = 0
    for (let i = 0; i < 1000000; i++) {
      res += i
    }
    return res
  }, [count]) // dependency array

  return (
    <div>
      <p>Result: {result}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  )
}

export default MemoizedComponent