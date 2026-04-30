import React from 'react'

function ConditionalExample({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div>
      {isLoggedIn ? <p>ยินดีต้อนรับ!</p> : <p>กรุณาเข้าสู่ระบบ</p>}
    </div>
  );
}

export default ConditionalExample