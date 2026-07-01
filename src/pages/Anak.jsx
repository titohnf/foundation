import Seo from '../components/Seo'
import PerkembanganAnakCard from '../components/PerkembanganAnakCard'
import perkembanganAnakData from '../data/perkembanganAnak.json'

export default function Anak() {
  return (
    <>
      <Seo
        title="Perkembangan Anak"
        description="Kisah anak-anak yang tumbuh dan berkembang berkat dukungan donatur Tera Foundation."
      />

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-ink mb-2 text-center">Perkembangan Anak</h1>
        <p className="text-ink/70 text-center mb-10 max-w-2xl mx-auto">
          Sebagian kisah anak yang tumbuh berkat dukungan donatur seperti kamu.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {perkembanganAnakData.map((anak) => (
            <PerkembanganAnakCard key={anak.id} anak={anak} />
          ))}
        </div>
      </section>
    </>
  )
}
