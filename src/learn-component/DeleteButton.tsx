import React from 'react'

function DeleteButton({ onDelete }: { onDelete: (id: number) => void }) {
  return <button onClick={() => onDelete(1)}>ลบ</button>
}

export default DeleteButton