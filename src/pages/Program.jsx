import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import Seo from '../components/Seo'
import { program } from '../data/program'
import { waLink } from '../lib/whatsapp'
import SekolahKarakter from '../components/program/SekolahKarakter'

const customPages = {
  'sekolah-karakter': SekolahKarakter,
}

export default function Program() {
  const { slug } = useParams()
  const p = program.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!p) {
    return (
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-20 text-center">
        <h1 className="text-2xl font-bold text-ink mb-4">Program tidak ditemukan</h1>
        <Link to="/" className="text-sm font-semibold text-teal-dark hover:text-teal">
          Kembali ke Beranda
        </Link>
      </section>
    )
  }

  const lainnya = program.filter((item) => item.slug !== slug)
  const CustomPage = customPages[slug]

  return (
    <>
      <Seo title={p.seoTitle ?? p.label} description={p.desc} />

      {CustomPage ? (
        <CustomPage />
      ) : (
        <section className="max-w-3xl mx-auto px-4 md:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal-dark hover:text-teal transition-colors mb-8"
          >
            <IconArrowLeft size={16} stroke={2} />
            Kembali
          </Link>

          <div className="w-14 h-14 rounded-full bg-teal/10 text-teal-dark flex items-center justify-center mb-5">
            <p.icon size={28} stroke={2} />
          </div>
          <p className="text-sm font-semibold text-teal-dark uppercase tracking-[0.02em] mb-2">
            Program Tera Foundation
          </p>
          <h1 className="text-3xl font-extrabold text-ink mb-4">{p.label}</h1>
          <p className="text-ink/80 leading-relaxed mb-10">{p.detail}</p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-ink mb-2">Dukung program ini</h2>
            <p className="text-ink/70 mb-6">
              Bantu program {p.label} terus berjalan lewat donasi atau menjadi relawan.
            </p>
            <a
              href={waLink(`Halo Tera Foundation, saya ingin mendukung program ${p.label}.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-center px-6 py-3 rounded-button transition-colors"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </section>
      )}

      <section className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold text-ink mb-6">Program Lainnya</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {lainnya.map((item) => (
              <Link
                key={item.slug}
                to={`/program/${item.slug}`}
                className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-teal transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-teal/10 text-teal-dark flex items-center justify-center shrink-0">
                  <item.icon size={20} stroke={2} />
                </div>
                <span className="flex-1 text-sm font-semibold text-ink">{item.label}</span>
                <IconArrowRight
                  size={16}
                  stroke={2}
                  className="text-ink/30 group-hover:text-teal-dark transition-colors"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
