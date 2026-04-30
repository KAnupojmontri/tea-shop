import { useState } from "react"

function SimpleForm() {
  const [name, setName] = useState("")

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>สวัสดี: {name}</p>
    </div>
  )
}

export default SimpleForm