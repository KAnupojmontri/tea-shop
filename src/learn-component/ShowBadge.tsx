import React from 'react'

function ShowBadge({ badge }: { badge?: string }) {
  return (
    <div>
      {badge && <span className="badge">{badge}</span>}
    </div>
  );
}

export default ShowBadge