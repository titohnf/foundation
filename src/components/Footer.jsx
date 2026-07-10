import { Link } from 'react-router-dom'
import { waLink } from '../lib/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-ink mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <img src="/logo.png" alt="Tera Foundation" className="h-8 w-auto mb-2" />
          <div className="text-xl font-extrabold text-teal-dark mb-2">Tera Foundation</div>
          <p className="text-sm text-ink/70 max-w-xs">
            Setiap anak berhak atas masa depan yang lebih baik.
          </p>
        </div>

        <div>
          <div className="font-semibold mb-2">Jelajahi</div>
          <ul className="space-y-2 text-sm text-ink/70">
            <li><Link to="/" className="hover:text-teal-dark">Beranda</Link></li>
            <li><Link to="/tentang" className="hover:text-teal-dark">Tentang Kami</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-2">Bagian dari Tera</div>
          <ul className="space-y-2 text-sm text-ink/70">
            <li>
              <a href="https://tera.or.id" target="_blank" rel="noopener" className="hover:text-teal-dark">
                Tera
              </a>
            </li>
            <li>
              <a href="https://bimbeltera.com" target="_blank" rel="noopener" className="hover:text-teal-dark">
                Bimbel Tera
              </a>
            </li>
            <li>
              <a href="https://komunitas.tera.or.id" target="_blank" rel="noopener" className="hover:text-teal-dark">
                Komunitas Tera
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-2">Kontak</div>
          <ul className="space-y-2 text-sm text-ink/70">
            <li>
              <a
                href={waLink('Halo Tera Foundation, saya ingin bertanya lebih lanjut.')}
                target="_blank"
                rel="noreferrer"
                className="text-blue hover:text-blue-dark"
              >
                +62 853-6100-5445 (WhatsApp)
              </a>
            </li>
            <li>Ratujaya, Cipayung, Depok, Jawa Barat</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-sm text-ink/50">
        © 2026 Tera Foundation. Semua hak dilindungi.
      </div>
    </footer>
  )
}
