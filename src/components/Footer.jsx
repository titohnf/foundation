import { waLink } from '../lib/whatsapp'

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang' },
]

const contactItems = [
  { text: '+62 853-6100-5445 (WhatsApp)', href: waLink('Halo Tera Foundation, saya ingin bertanya lebih lanjut.') },
  { text: 'Ratujaya, Cipayung, Depok, Jawa Barat' },
]

export default function Footer() {
  return (
    <tera-footer
      site="foundation"
      logo-text="Tera Foundation"
      logo-img="/logo.png"
      description="Setiap anak berhak atas masa depan yang lebih baik."
      nav={JSON.stringify(navItems)}
      contact={JSON.stringify(contactItems)}
    />
  )
}
