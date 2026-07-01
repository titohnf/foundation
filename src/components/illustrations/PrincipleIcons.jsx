export function KolaboratifIcon(props) {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" {...props}>
      <circle cx="16" cy="18" r="8" fill="#3DBFB0" />
      <circle cx="32" cy="18" r="8" fill="#2A9E95" opacity="0.7" />
      <path d="M8 40c0-8 6-12 8-12s8 4 8 12" fill="none" stroke="#3DBFB0" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 40c0-8 6-12 8-12s8 4 8 12" fill="none" stroke="#2A9E95" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

export function AdaptifIcon(props) {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" {...props}>
      <path
        d="M24 6a18 18 0 1 1-12.7 5.3"
        fill="none"
        stroke="#3DBFB0"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M6 6v10h10" fill="none" stroke="#3DBFB0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="5" fill="#2A9E95" />
    </svg>
  )
}

export function InklusifIcon(props) {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" {...props}>
      <circle cx="24" cy="24" r="20" fill="#3DBFB0" opacity="0.15" />
      <circle cx="16" cy="20" r="6" fill="#3DBFB0" />
      <circle cx="32" cy="20" r="6" fill="#2A9E95" />
      <path d="M8 38c1-6 5-9 8-9s7 3 8 9" fill="none" stroke="#3DBFB0" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 38c1-6 5-9 8-9s7 3 8 9" fill="none" stroke="#2A9E95" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
