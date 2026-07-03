import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AnnouncementBanner from './components/AnnouncementBanner'
import Footer from './components/Footer'
import Beranda from './pages/Beranda'
import Anak from './pages/Anak'
import Tentang from './pages/Tentang'
import Kontribusi from './pages/Kontribusi'
import Lapor from './pages/Lapor'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Sembunyikan sementara, aktifkan lagi saat pendaftaran batch 2 dibuka */}
      {false && <AnnouncementBanner />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/anak" element={<Anak />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontribusi" element={<Kontribusi />} />
          <Route path="/lapor" element={<Lapor />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
