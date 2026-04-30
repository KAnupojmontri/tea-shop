import React from 'react'

function PremiumFeature({ isPremium }: { isPremium: boolean }) {
  if (!isPremium) {
    return <div>กรุณาอัพเกรดเป็น Premium เพื่อใช้งาน</div>;
  }

  return <div>Premium Feature พร้อมใช้งาน!</div>;
}

export default PremiumFeature