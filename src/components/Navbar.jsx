import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/tentang', label: 'Tentang Kami' },
  { to: '/anak', label: 'Perkembangan Anak' },
  { to: '/kontribusi', label: 'Berkontribusi' },
  { to: '/lapor', label: 'Daftarkan Anak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-extrabold text-ink">
          <img src="/logo.png" alt="Logo Tera Foundation" className="w-6 h-6" />
          Tera Foundation
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-blue' : 'text-ink/80 hover:text-blue'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-6 h-0.5 bg-ink" />
          <span className="w-6 h-0.5 bg-ink" />
          <span className="w-6 h-0.5 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium py-2 border-b border-gray-100 ${
                  isActive ? 'text-blue' : 'text-ink/80'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
