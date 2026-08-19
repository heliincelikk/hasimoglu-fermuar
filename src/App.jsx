import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

/**
 * 🧵 HAŞIMOĞLU FERMUAR - ANA SAYFA BİLEŞENİ (App.jsx)
 * 
 * REACT ÖĞRENME NOTU:
 * Babanızın 19 yıllık tecrübesini ve kaliteli imalatını tanıtan tüm bölümleri
 * bağımsız modüller (bileşenler) halinde aşağıda birleştirdik.
 */
export default function App() {
  return (
    <div className="app-main">
      {/* 1. ÜST MENÜ & LOGO */}
      <Navbar />

      {/* 2. KARŞILAMA (HERO) BÖLÜMÜ - 19 Yıllık Deneyim Vurgusu */}
      <Hero />

      {/* 3. HAKKIMIZDA & İMALATHANE HİKAYESİ */}
      <About />

      {/* 4. FERMUAR ÇEŞİTLERİ VE ÜRÜNLER (Metal, Kemik, Gizli vb.) */}
      <Services />

      {/* 5. NEDEN HAŞIMOĞLU FERMUAR? (Özellikler) */}
      <Features />

      {/* 6. İLETİŞİM, SİPARİŞ VE WHATSAPP FORMU */}
      <Contact />

      {/* 7. ALT BİLGİ & TELİF HAKKI */}
      <Footer />
    </div>
  );
}
