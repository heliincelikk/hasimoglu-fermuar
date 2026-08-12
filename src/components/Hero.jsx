import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, ShieldCheck, Star, MessageSquare } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import './Hero.css';

/**
 * 🧵 SADECE FERMUAR GÖRSELLERİ İLE OTOMATİK SLIDER (Hero.jsx)
 * 
 * Slider kontrolleri (oklar/noktalar) kaldırılarak tamamen temiz hale getirildi.
 * Sadece yüksek kaliteli %100 fermuar görselleri arka planda otomatik kayar.
 */

const zipperBackgroundSlides = [
  "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=80", // Metal Dişli Fermuar
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1600&q=80", // Renkli Kemik Fermuar
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80", // Koyu Deri Üzeri Metal Fermuar
  "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=1600&q=80"  // Fermuar Elcik & Kürsör Detayı
];

export default function Hero() {
  const { contact } = siteInfo;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatik Slayt Geçişi (Her 4 saniyede bir)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % zipperBackgroundSlides.length);
    }, 4000);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section id="hero" className="hero-slider-section">
      {/* Kayan Sadece Fermuar Arka Plan Fotoğrafları */}
      {zipperBackgroundSlides.map((slideImg, index) => (
        <div
          key={index}
          className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slideImg} alt="Haşımoğlu Fermuar" className="hero-slide-img" />
        </div>
      ))}

      {/* Koyu Karartma Katmanı */}
      <div className="hero-slider-overlay"></div>

      <div className="container hero-slider-container">
        <div className="hero-slider-content">
          {/* Üst Rozet */}
          <div className="hero-top-badge">
            <Award size={16} className="badge-gold-icon" />
            <span>20 Yıllık Tecrübe & Üstün Kalite İmalat</span>
          </div>

          {/* Ana Başlık */}
          <h1 className="hero-serif-title">
            Her Detayda Kalite,<br />
            Her Fermuarda Güven.
          </h1>

          {/* Açıklama */}
          <p className="hero-serif-subtitle">
            20 yılı aşkın imalat tecrübemiz ve yüksek hassasiyetli üretimimizle tekstil dünyasının yanındayız.
          </p>

          {/* Butonlar */}
          <div className="hero-action-buttons">
            <a href="#services" className="btn btn-leather">
              <span>Ürünlerimizi İnceleyin</span>
              <ArrowRight size={20} />
            </a>

            <a 
              href={`https://wa.me/${contact.whatsapp}?text=Merhaba,%20fermuar%20sipari%C5%9Fi%20ve%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass-whatsapp"
            >
              <MessageSquare size={20} />
              <span>WhatsApp İle İletişime Geçin</span>
            </a>
          </div>

          {/* Alt Şerit Özellikleri */}
          <div className="hero-bottom-highlights">
            <div className="highlight-tag">
              <ShieldCheck size={18} />
              <span>Kendi İmalatımız</span>
            </div>
            <div className="highlight-tag">
              <Award size={18} />
              <span>20+ Yıllık Tecrübe</span>
            </div>
            <div className="highlight-tag">
              <Star size={18} />
              <span>Özel Ölçü Kesim</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
