import { useState } from 'react'

export default function AnnouncementBanner() {
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <div className="relative bg-teal-dark text-white text-sm text-center px-10 py-2.5">
      Pendaftaran Batch 2 Anak Binaan Tera akan segera dibuka, kunjungi web secara berkala untuk
      tahu updatenya
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Tutup pengumuman"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/10 transition-colors"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
