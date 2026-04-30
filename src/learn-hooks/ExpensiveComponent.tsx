import { useState } from "react"

function ExpensiveComponent() {
  const [count, setCount] = useState(0)

  // ❌ ฟังก์ชันนี้จะทำงานทุกครั้งที่ render
  // แม้ว่า `count` จะไม่เปลี่ยน
  function expensiveCalculation() {
    console.log("Calculating...")
    let result = 0
    for (let i = 0; i < 1000000; i++) {
      result += i
    }
    return result
  }

  const result = expensiveCalculation()

  return (
    <div>
      <p>Result: {result}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  )
}

export default ExpensiveComponent