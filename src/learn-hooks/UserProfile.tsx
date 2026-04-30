import { useState, useMemo } from "react"

function UserProfile() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  // ❌ object ใหม่ทุก render → ทำให้ child re-render
  const user = { name, age }

  // ✅ สร้าง object ใหม่เฉพาะเมื่อ name หรือ age เปลี่ยน
  const userMemoized = useMemo(() => ({ name, age }), [name, age])

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={age} onChange={e => setAge(+e.target.value)} />
    </div>
  )
}

export default UserProfile