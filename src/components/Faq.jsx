import { useState } from 'react'
import { IconChevronDown } from '@tabler/icons-react'

const faqGroups = [
  {
    label: 'Untuk Donatur',
    items: [
      {
        q: 'Apakah donasi saya bisa dialokasikan untuk kebutuhan tertentu?',
        a: 'Bisa. Hubungi tim Tera lewat WhatsApp untuk mendiskusikan jenis bantuan yang ingin kamu berikan, baik untuk operasional bimbel, kebutuhan anak tertentu, maupun kontribusi lainnya.',
      },
      {
        q: 'Bagaimana Tera memastikan dana yang diberikan tersalurkan dengan tepat?',
        a: 'Setiap anak melalui proses seleksi dan pendampingan end to end oleh tim Tera, dengan evaluasi berkala terhadap perkembangan anak binaan.',
      },
      {
        q: 'Apakah seluruh fasilitas untuk anak binaan gratis?',
        a: 'Ya, seluruh anak yang lolos seleksi menjadi anak binaan mendapat akses ke semua fasilitas (bimbel, sekolah karakter, BUNDA, dan lainnya) tanpa biaya, didanai sepenuhnya dari donasi.',
      },
    ],
  },
  {
    label: 'Untuk Orang Tua/Wali',
    items: [
      {
        q: 'Siapa yang bisa mendaftar sebagai anak binaan Tera Foundation?',
        a: 'Anak yang berdomisili di Cipayung, Depok, berasal dari keluarga kurang mampu, memiliki semangat dan cita-cita, serta orang tua/wali yang bersedia terlibat aktif selama menjadi anak binaan.',
      },
      {
        q: 'Bagaimana cara mendaftarkan anak menjadi anak binaan Tera?',
        a: 'Klik tombol "Daftarkan Anak" di halaman utama, lalu isi formulir singkat melalui WhatsApp. Tim Tera akan menghubungi untuk proses seleksi lebih lanjut.',
      },
    ],
  },
]

export default function Faq() {
  const [openKey, setOpenKey] = useState(null)

  const toggle = (key) => setOpenKey((prev) => (prev === key ? null : key))

  return (
    <section className="border-t border-gray-100 py-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-ink mb-10">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="space-y-8">
          {faqGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[13px] font-semibold text-ink uppercase tracking-[0.02em] mb-3">
                {group.label}
              </p>
              <div className="space-y-3">
                {group.items.map((item) => {
                  const key = `${group.label}-${item.q}`
                  const isOpen = openKey === key
                  return (
                    <div
                      key={key}
                      className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-medium text-ink text-[15px]">{item.q}</span>
                        <IconChevronDown
                          size={20}
                          className={`shrink-0 text-ink/50 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && <p className="px-5 pb-4 text-sm text-ink/60">{item.a}</p>}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
