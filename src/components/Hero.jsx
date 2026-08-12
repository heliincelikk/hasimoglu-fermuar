import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, ShieldCheck, Star, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import './Hero.css';

/**
 * 🎠 SLIDER / CAROUSEL ARKA PLANLI HERO COMPONENT (Hero.jsx)
 * 
 * REACT ÖĞRENME NOTU:
 * `heroSlides` dizisindeki fermuar görsellerini `useEffect` ve `setInterval`
 * kullanarak her 4 saniyede bir otomatik olarak kaydırıyoruz (Slider).
 * Kullanıcı ok veya noktalara basarak da fotoğraflar arasında geçiş yapabilir!
 */

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=80",
    caption: "Metal Fermuar Üretimi"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1600&q=80",
    caption: "Renkli Kemik & Plastik Fermuarlar"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    caption: "Tekstil ve Konfeksiyon İmalatı"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=1600&q=80",
    caption: "Özel Tasarım Elcik & Aksesuarlar"
  }
];

export default function Hero() {
  const { contact } = siteInfo;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatik Slider (Her 4 saniyede bir sonraki fotoğrafa geçer)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(slideTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section id="hero" className="hero-slider-section">
      {/* Kayan Arka Plan Fotoğrafları (Background Carousel) */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.caption} className="hero-slide-img" />
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

        {/* SLİDER GEÇİŞ KONTROLLERİ (Sağ Alt Köşe Oklar ve Noktalar) */}
        <div className="slider-controls">
          <div className="slider-arrows">
            <button onClick={prevSlide} className="slider-arrow-btn" aria-label="Önceki Fotoğraf">
              <ChevronLeft size={22} />
            </button>
            <button onClick={nextSlide} className="slider-arrow-btn" aria-label="Sonraki Fotoğraf">
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="slider-dots">
            {heroSlides.map((_, idx) => (
              <span
                key={idx}
                className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              ></span>
            ))}
          </div>

          <span className="slider-caption-tag">
            📸 {heroSlides[currentSlide].caption}
          </span>
        </div>
      </div>
    </section>
  );
}
