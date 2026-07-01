import { useState } from 'react'
import Seo from '../components/Seo'
import { waLink } from '../lib/whatsapp'

const initialForm = {
  namaPelapor: '',
  noWaPelapor: '',
  namaAnak: '',
  usiaAnak: '',
  lokasi: '',
  situasi: '',
  kebutuhan: '',
}

export default function Lapor() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = [
      'LAPORAN ANAK TERA FOUNDATION',
      `Pelapor: ${form.namaPelapor}`,
      `No WA: ${form.noWaPelapor}`,
      '---',
      `Nama Anak: ${form.namaAnak}`,
      `Usia: ${form.usiaAnak}`,
      `Lokasi: ${form.lokasi}`,
      `Situasi: ${form.situasi}`,
      `Kebutuhan: ${form.kebutuhan || '-'}`,
    ].join('\n')

    window.open(waLink(message), '_blank')
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <Seo
        title="Lapor Anak"
        description="Laporkan anak di sekitar Anda yang membutuhkan bantuan pendidikan kepada Tera Foundation."
      />

      <section className="max-w-2xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-ink mb-2 text-center">
          Laporkan Anak yang Butuh Bantuan
        </h1>
        <p className="text-ink/70 text-center mb-10">
          Bantu kami menjangkau lebih banyak anak dengan melaporkan situasi yang kamu ketahui.
        </p>

        {submitted && (
          <div className="bg-green-50 text-green-700 border border-green-200 rounded-xl p-4 mb-6 text-center font-medium">
            Terima kasih, laporan kamu akan segera kami tindaklanjuti dalam 1x24 jam.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <Field label="Nama Pelapor" name="namaPelapor" value={form.namaPelapor} onChange={handleChange} required />
          <Field label="Nomor WA Pelapor" name="noWaPelapor" value={form.noWaPelapor} onChange={handleChange} required />
          <Field label="Nama atau Inisial Anak" name="namaAnak" value={form.namaAnak} onChange={handleChange} required />
          <Field label="Usia Anak" name="usiaAnak" type="number" value={form.usiaAnak} onChange={handleChange} required />
          <Field label="Lokasi (Kelurahan, Kecamatan, Kota)" name="lokasi" value={form.lokasi} onChange={handleChange} required />
          <TextArea label="Situasi Anak" name="situasi" value={form.situasi} onChange={handleChange} required />
          <TextArea label="Kebutuhan yang Diketahui (opsional)" name="kebutuhan" value={form.kebutuhan} onChange={handleChange} />

          <button
            type="submit"
            className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Kirim Laporan via WhatsApp
          </button>
        </form>
      </section>
    </>
  )
}

function Field({ label, name, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal"
      />
    </div>
  )
}

function TextArea({ label, name, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal"
      />
    </div>
  )
}
