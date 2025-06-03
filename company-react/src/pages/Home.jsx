import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/bg2.png';

const images = [bg1, bg2];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const Home = () => {
  // State untuk indeks gambar dan arah animasi
  const [[bgIndex, direction], setBgIndex] = useState([0, 0]);

  useEffect(() => {
    // Interval untuk mengganti gambar setiap 5 detik
    const interval = setInterval(() => {
      setBgIndex(([prevIndex]) => {
        const nextIndex = (prevIndex + 1) % images.length;
        return [nextIndex, 1];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        className="text-white text-center py-5 relative overflow-hidden flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={bgIndex}
            src={images[bgIndex]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover', // agar gambar memenuhi layar tanpa ter-stretch
              zIndex: -1,
            }}
            alt="background"
          />
        </AnimatePresence>
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // latar belakang hitam transparan
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '800px',
            zIndex: 10,
          }}
        >
          <h1 className="text-4xl font-bold mb-4">Mitra Griya Abadi</h1>
          <p className="text-lg leading-relaxed">
            Mitra Griya Abadi adalah toko bangunan terpercaya yang menyediakan berbagai macam bahan bangunan dan peralatan konstruksi berkualitas tinggi. Kami berkomitmen untuk memberikan produk terbaik dengan harga yang kompetitif serta layanan pelanggan yang ramah dan profesional.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Dengan pengalaman bertahun-tahun di industri ini, kami siap membantu Anda mewujudkan proyek konstruksi dan renovasi dengan solusi lengkap dan terpercaya. Pilih Mitra Griya Abadi sebagai mitra Anda untuk kualitas dan kepuasan terbaik.
          </p>
        </div>
      </motion.div>
      <section style={{ backgroundColor: '#f5f7fa', padding: '40px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#555', marginBottom: '30px', fontSize: '28px', fontWeight: '600' }}>
          Mengapa Memilih Mitra Griya Abadi
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', width: '280px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', color: '#e74c3c', marginBottom: '15px' }}>🏢</div>
            <h3 style={{ fontWeight: '600', marginBottom: '10px' }}>Gedung Mitra Griya Abadi</h3>
            <p>Menyediakan fasilitas gedung yang lengkap dan nyaman untuk kebutuhan konstruksi Anda.</p>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', width: '280px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', color: '#e74c3c', marginBottom: '15px' }}>📍</div>
            <h3 style={{ fontWeight: '600', marginBottom: '10px' }}>Lokasi Strategis</h3>
            <p>Terletak di lokasi strategis yang mudah diakses dari berbagai daerah.</p>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', width: '280px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', color: '#e74c3c', marginBottom: '15px' }}>🏗️</div>
            <h3 style={{ fontWeight: '600', marginBottom: '10px' }}>Fasilitas Lengkap</h3>
            <p>Menyediakan berbagai fasilitas lengkap untuk mendukung proyek konstruksi Anda.</p>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', width: '280px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', color: '#e74c3c', marginBottom: '15px' }}>🎓</div>
            <h3 style={{ fontWeight: '600', marginBottom: '10px' }}>Tim Profesional</h3>
            <p>Didukung oleh tim profesional yang berpengalaman dan ahli di bidangnya.</p>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', width: '280px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', color: '#e74c3c', marginBottom: '15px' }}>🔔</div>
            <h3 style={{ fontWeight: '600', marginBottom: '10px' }}>Layanan Terpercaya</h3>
            <p>Memberikan layanan terpercaya dengan dukungan penuh untuk setiap proyek Anda.</p>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', width: '280px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', color: '#e74c3c', marginBottom: '15px' }}>🕌</div>
            <h3 style={{ fontWeight: '600', marginBottom: '10px' }}>Komitmen Kualitas</h3>
            <p>Berkomitmen pada kualitas terbaik untuk kepuasan pelanggan.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
