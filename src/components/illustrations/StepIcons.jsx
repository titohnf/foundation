function Base({ children }) {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10">
      {children}
    </svg>
  )
}

export function PelatihanIcon() {
  return (
    <Base>
      <rect x="8" y="10" width="32" height="22" rx="3" fill="#3DBFB0" opacity="0.2" />
      <rect x="12" y="14" width="24" height="4" rx="2" fill="#3DBFB0" />
      <rect x="12" y="22" width="16" height="4" rx="2" fill="#2A9E95" />
      <rect x="18" y="32" width="12" height="8" fill="#3DBFB0" opacity="0.4" />
    </Base>
  )
}

export function PendampinganIcon() {
  return (
    <Base>
      <circle cx="18" cy="16" r="6" fill="#3DBFB0" />
      <circle cx="32" cy="20" r="5" fill="#2A9E95" />
      <path d="M8 40c0-8 5-12 10-12s10 4 10 12" fill="none" stroke="#3DBFB0" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 40c0-6 4-9 8-9" fill="none" stroke="#2A9E95" strokeWidth="3" strokeLinecap="round" />
    </Base>
  )
}

export function PengalamanIcon() {
  return (
    <Base>
      <path d="M24 6l4.5 9.2 10.1 1.5-7.3 7.1 1.7 10-8.5-4.5-8.5 4.5 1.7-10-7.3-7.1 10.1-1.5z" fill="#3DBFB0" />
    </Base>
  )
}

export function PembiayaanIcon() {
  return (
    <Base>
      <circle cx="24" cy="24" r="16" fill="#3DBFB0" opacity="0.2" />
      <circle cx="24" cy="24" r="12" fill="#3DBFB0" />
      <text x="24" y="29" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="sans-serif">Rp</text>
    </Base>
  )
}

export function PemberdayaanIcon() {
  return (
    <Base>
      <path d="M24 6v20l14 8" stroke="#2A9E95" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="18" stroke="#3DBFB0" strokeWidth="3" fill="none" />
    </Base>
  )
}
