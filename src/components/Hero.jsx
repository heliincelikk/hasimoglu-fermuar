import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, ShieldCheck, Star, MessageSquare } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import './Hero.css';

// Kullanıcının Seçtiği 5 Özel Fermuar Görseli
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';

/**
 * 🧵 YENİDEN SIRALANMIŞ ÖZEL FERMUAR GÖRSELLERİ (Hero.jsx)
 * 
 * Görsellerin geçiş sırası yeniden düzenlendi:
 * 1. Koyu mermer üzerindeki gümüş & siyah metal fermuarlar (slide4)
 * 2. Yağmur damlalı teknik su geçirmez fermuar (slide2)
 * 3. Deri tezgahtaki antik metal fermuarlar (slide1)
 * 4. Mermer üzerindeki rose gold & renkli fermuarlar (slide3)
 * 5. Yakın çekim şık fermuar elciği (slide5)
 */

const userZipperSlides = [slide4, slide2, slide1, slide3, slide5];

export default function Hero() {
  const { contact } = siteInfo;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatik Slayt Geçişi (Her 4 saniyede bir)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % userZipperSlides.length);
    }, 4000);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section id="hero" className="hero-slider-section">
      {/* Kullanıcının Seçtiği 5 Özel Fermuar Arka Plan Fotoğrafı */}
      {userZipperSlides.map((slideImg, index) => (
        <div
          key={index}
          className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slideImg} alt="Haşımoğlu Fermuar Özel Üretim" className="hero-slide-img" />
        </div>
      ))}

      {/* Koyu Karartma Katmanı (Okunabilirlik İçin) */}
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
