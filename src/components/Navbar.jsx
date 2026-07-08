const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang' },
  { label: 'Perkembangan Anak', href: '/anak' },
  { label: 'Berkontribusi', href: '/kontribusi' },
  { label: 'Daftarkan Anak', href: '/lapor' },
]

export default function Navbar() {
  return (
    <tera-header
      logo-text="Tera Foundation"
      logo-img="/logo.png"
      logo-href="/"
      nav={JSON.stringify(navItems)}
    ></tera-header>
  )
}
