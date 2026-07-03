import { waLink } from '../lib/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-ink mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-xl font-extrabold text-teal-dark mb-2">Tera Foundation</div>
          <p className="text-sm text-ink/70">
            Setiap anak berhak atas masa depan yang lebih baik.
          </p>
        </div>

        <div>
          <div className="font-semibold mb-2">Alamat</div>
          <p className="text-sm text-ink/70">
            Ratujaya, Cipayung, Depok, Jawa Barat
          </p>
        </div>

        <div>
          <div className="font-semibold mb-2">Hubungi Kami</div>
          <a
            href={waLink('Halo Tera Foundation, saya ingin bertanya lebih lanjut.')}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue hover:text-blue-dark"
          >
            +62 853-6100-5445 (WhatsApp)
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-sm text-ink/50">
        © 2026 Tera Foundation. Semua hak dilindungi.
      </div>
    </footer>
  )
}
