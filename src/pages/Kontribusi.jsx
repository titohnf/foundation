import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { waLink } from '../lib/whatsapp'

const kartu = [
  {
    title: 'Donatur',
    desc: 'Salurkan bantuan dana untuk pendidikan anak-anak yang membutuhkan.',
    message: 'Halo, saya ingin menjadi donatur Tera Foundation, bagaimana caranya?',
  },
  {
    title: 'Pengajar',
    desc: 'Bergabung sebagai relawan pengajar dalam program-program Tera.',
    message: 'Halo, saya tertarik menjadi relawan pengajar di Tera Foundation.',
  },
  {
    title: 'Pembicara',
    desc: 'Bagikan inspirasi dan ilmu lewat seminar atau kelas parenting BUNDA.',
    message: 'Halo, saya ingin menjadi pembicara untuk program Tera Foundation.',
  },
]

export default function Kontribusi() {
  return (
    <>
      <Seo
        title="Berkontribusi"
        description="Pilih jalur kontribusimu untuk membantu Tera Foundation: donatur, pengajar, pembicara, atau daftarkan anak."
      />

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-ink mb-2 text-center">
          Berkontribusi Bersama Tera
        </h1>
        <p className="text-ink/70 text-center mb-10">
          Pilih cara yang paling sesuai untukmu berkontribusi bagi masa depan anak-anak.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {kartu.map((k) => (
            <div key={k.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
              <h2 className="text-xl font-bold text-teal-dark mb-3">{k.title}</h2>
              <p className="text-ink/70 mb-6 flex-1">{k.desc}</p>
              <a
                href={waLink(k.message)}
                target="_blank"
                rel="noreferrer"
                className="bg-blue hover:bg-blue-dark text-white font-semibold text-center py-3 rounded-xl transition-colors"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          ))}

          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold text-teal-dark mb-3">Daftarkan Anak</h2>
            <p className="text-ink/70 mb-6 flex-1">
              Ketahui ada anak di sekitarmu yang memenuhi kriteria anak binaan Tera? Daftarkan
              kepada kami.
            </p>
            <Link
              to="/lapor"
              className="bg-blue hover:bg-blue-dark text-white font-semibold text-center py-3 rounded-xl transition-colors"
            >
              Daftarkan Anak
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
