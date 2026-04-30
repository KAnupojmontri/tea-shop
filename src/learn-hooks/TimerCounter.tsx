import { useState, useEffect } from "react"

function TimerCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // สร้าง interval ทุก 1 วินาที
    const timer = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)

    // ❌ ถ้าไม่มี cleanup — timer จะทำงานต่อไปเรื่อย ๆ แม้ unmount แล้ว!

    // ✅ cleanup: ลบ interval เมื่อ component ถูกทำลาย
    return () => clearInterval(timer)
  }, []) // empty array = run ครั้งเดียวตอน mount

  return <div>Count: {count}</div>
}

export default TimerCounter