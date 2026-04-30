import { useRef } from "react"

function FocusInput() {
  const inputRef = useRef<HTMLInputElement | null>(null)

    function handleClick() {
        inputRef.current?.focus()
    }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus</button>
    </>
  )
}

export default FocusInput