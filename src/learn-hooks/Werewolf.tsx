import React, { useEffect, useState } from 'react'

function Werewolf() {
    const [isDark, setIsDark] = useState(false);
    const [isWolfWakeUp, setIsWolfWakeUp] = useState(false);

    useEffect(() => {
        if (isDark) {
            setIsWolfWakeUp(true)
        } else { 
            setIsWolfWakeUp(false)
        }
    }, [isDark])

  return (
    <div>
        เวลา : {isDark ? "กลางคืน" : "กลางวัน"}
        หมาป่า : {isWolfWakeUp ? "ตื่น" : "หลับ"}
        <button onClick={() => setIsDark((e) => !e)}>Toggle </button>
    </div>
  )
}

export default Werewolf