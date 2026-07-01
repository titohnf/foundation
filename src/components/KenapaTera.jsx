import { Link } from 'react-router-dom'
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
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="max-w-2xl mb-8">
        <p className="text-sm font-semibold text-teal-dark mb-2">
          Tera Foundation &mdash; Wadah Ikhtiar Kami Untuk
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2">
          Mengentaskan Kemiskinan Melalui Pendidikan
        </h2>
        <p className="text-ink/60">
          Mulai dari pelatihan hingga pemberdayaan, semua program disusun secara menyeluruh dan
          berkelanjutan untuk benar-benar bisa menghadirkan pendidikan yang setara untuk anak
          sejahtera.{' '}
          <Link to="/tentang" className="text-teal-dark font-semibold hover:text-teal">
            Ingin tahu ekosistem lengkap Tera? Kunjungi Tentang Kami &rarr;
          </Link>
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {alasan.map((a) => (
          <div
            key={a.title}
            className="bg-white border border-gray-100 rounded-xl p-4 text-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#E1F5EE] text-[#085041] flex items-center justify-center mx-auto mb-2.5">
              <a.icon size={20} stroke={2} />
            </div>
            <h3 className="text-[15px] font-medium text-ink mb-1">{a.title}</h3>
            <p className="text-sm text-ink/60">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
