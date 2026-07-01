import { waLink } from '../lib/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-xl font-extrabold text-teal mb-2">Tera Foundation</div>
          <p className="text-sm text-white/70">
            Setiap anak berhak atas masa depan yang lebih baik.
          </p>
        </div>

        <div>
          <div className="font-semibold mb-2">Alamat</div>
          <p className="text-sm text-white/70">
            Ratujaya, Cipayung, Depok, Jawa Barat
          </p>
        </div>

        <div>
          <div className="font-semibold mb-2">Hubungi Kami</div>
          <a
            href={waLink('Halo Tera Foundation, saya ingin bertanya lebih lanjut.')}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-teal hover:text-teal-dark"
          >
            +62 853-6100-5445 (WhatsApp)
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © 2026 Tera Foundation. Semua hak dilindungi.
      </div>
    </footer>
  )
}
