import { IconUserCheck, IconSchool, IconUsersGroup, IconRoute } from '@tabler/icons-react'

const alasan = [
  {
    icon: IconUserCheck,
    title: 'Anak-anak diseleksi',
    desc: 'Setiap anak yang dibantu melalui proses seleksi agar bantuan tepat sasaran.',
  },
  {
    icon: IconSchool,
    title: 'Bimbel dikelola secara profesional',
    desc: 'Program belajar dijalankan dengan kurikulum dan pengajar yang terstruktur.',
  },
  {
    icon: IconUsersGroup,
    title: 'Penguatan peran orang tua',
    desc: 'Orang tua dilibatkan aktif lewat sesi BUNDA untuk mendukung tumbuh kembang anak.',
  },
  {
    icon: IconRoute,
    title: 'Pendampingan end to end',
    desc: 'Tim Tera mendampingi anak dari awal hingga perkembangannya dipantau berkelanjutan.',
  },
]

export default function KenapaTera() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold text-teal-dark mb-2">Tentang Tera Foundation</p>
        <p className="text-ink/70">
          Tera Foundation adalah yayasan terdaftar resmi yang menjembatani anak-anak kurang mampu
          dengan pendidikan yang layak, lewat program bimbel gratis yang terstruktur dan
          terdampingi.
        </p>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-ink mb-3">
        Kenapa Tera Foundation
      </h2>
      <p className="text-center text-ink/60 max-w-2xl mx-auto mb-10">
        Setiap donasi dikelola dengan proses dan pendampingan yang jelas, bukan sekadar disalurkan.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {alasan.map((a) => (
          <div
            key={a.title}
            className="bg-white border border-gray-100 rounded-xl p-5 text-center"
          >
            <div className="w-11 h-11 rounded-full bg-[#E1F5EE] text-[#085041] flex items-center justify-center mx-auto mb-3">
              <a.icon size={22} stroke={2} />
            </div>
            <h3 className="text-[15px] font-medium text-ink mb-1">{a.title}</h3>
            <p className="text-sm text-ink/60">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
