import { useEffect, useState } from 'react'

const CITA_CITA_ICONS = {
  Dokter: (
    <>
      <path d="M8 2v5a4 4 0 0 0 8 0V2" />
      <path d="M10 2h4" />
      <path d="M12 11v5a5 5 0 0 0 10 0v-1" />
      <circle cx="20" cy="10" r="2" />
    </>
  ),
  'Guru Matematika': (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </>
  ),
  Montir: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  Perawat: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
  ),
  Insinyur: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
}

const DEFAULT_ICON = <path d="M12 2 15 9l7 1-5 5 1.5 7-6.5-3.5L5.5 22 7 15l-5-5 7-1z" />

export default function PolaroidHero({ photos, interval = 3000 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length)
    }, interval)
    return () => clearInterval(timer)
  }, [photos.length, interval])

  const current = photos[index]

  return (
    <div className="flex justify-center md:justify-end">
      <div className="relative bg-white p-3 pb-6 rounded-sm shadow-xl rotate-[-3deg] w-64 md:w-72">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 bg-yellow-500/50 border border-yellow-600/30 rotate-[-2deg] shadow-sm" />

        <div className="relative aspect-square bg-teal/10 overflow-hidden">
          {photos.map((photo, i) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.nama}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}

          <div className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-teal-dark border-2 border-white shadow-md flex items-center justify-center">
            <svg
              className="w-4.5 h-4.5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {CITA_CITA_ICONS[current.citaCita] ?? DEFAULT_ICON}
            </svg>
          </div>
        </div>

        <div className="pt-3 text-center">
          <p className="font-heading font-bold text-ink text-sm">{current.nama}</p>
          <p className="text-ink/60 text-sm">Cita-cita: {current.citaCita}</p>
        </div>
      </div>
    </div>
  )
}
