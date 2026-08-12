import React, { useState } from 'react';
import { ArrowRight, Award, ShieldCheck, Star, MessageSquare, Play } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import './Hero.css';

/**
 * 🤐 ETKİLEŞİMLİ FERMUAR AÇILMA BİLEŞENİ (Hero.jsx)
 * 
 * REACT ÖĞRENME NOTU:
 * Kullanıcı "Fermuarı Aç/Kapat" butonuna bastığında veya sürüklediğinde
 * `isZipperOpen` State'i değişir (`true` veya `false`).
 * React bu State değişimine göre metal fermuar dişlerini ve elciği animasyonla kaydırır!
 */
export default function Hero() {
  const { contact } = siteInfo;
  
  // Fermuar açık mı kapalı mı State'i (varsayılan: açık/yarım açık şık görünüm)
  const [isZipperOpen, setIsZipperOpen] = useState(true);

  const toggleZipper = () => {
    setIsZipperOpen(!isZipperOpen);
  };

  return (
    <section id="hero" className="hero-zipper-section">
      {/* Arka Plan Koyu Deri/Kumaş Dokusu */}
      <div className="hero-dark-pattern"></div>

      <div className="container hero-container">
        {/* Sol Kolon - Başlık ve Çağrı Butonları */}
        <div className="hero-luxury-content">
          <div className="hero-top-badge">
            <Award size={16} className="badge-gold-icon" />
            <span>20 Yıllık Tecrübe & Üstün Kalite İmalat</span>
          </div>

          <h1 className="hero-serif-title">
            Her Detayda Kalite,<br />
            Her Fermuarda Güven.
          </h1>

          <p className="hero-serif-subtitle">
            20 yılı aşkın imalat tecrübemiz ve yüksek hassasiyetli üretimimizle tekstil dünyasının yanındayız.
          </p>

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

        {/* Sağ Kolon - CANLI ETKİLEŞİMLİ METAL FERMUAR ANİMASYONU */}
        <div className="hero-zipper-interactive-wrapper">
          <div className="zipper-interactive-card">
            {/* Üst Etkileşim Butonu */}
            <button onClick={toggleZipper} className="zipper-toggle-btn">
              <Play size={14} className={`play-icon ${isZipperOpen ? 'active' : ''}`} />
              <span>{isZipperOpen ? '🤐 Fermuarı Kapat' : '🧵 Fermuarı Aç'}</span>
            </button>

            {/* Metal Fermuar Sahnesi */}
            <div className={`zipper-stage ${isZipperOpen ? 'open' : 'closed'}`}>
              {/* Sol Dişler */}
              <div className="zipper-track track-left">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="metal-tooth tooth-left"></div>
                ))}
              </div>

              {/* Sağ Dişler */}
              <div className="zipper-track track-right">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="metal-tooth tooth-right"></div>
                ))}
              </div>

              {/* Fermuar Kürsörü / Elcik (Pull Tab) */}
              <div className="zipper-slider-pull" onClick={toggleZipper}>
                <div className="slider-head">
                  <div className="slider-loop"></div>
                  <div className="slider-body">H</div>
                </div>
                <div className="slider-pull-tab">
                  <span>HAŞİMOĞLU</span>
                </div>
              </div>

              {/* Açılan İçerik Kumaşı */}
              <div className="zipper-revealed-content">
                <span className="revealed-badge">%100 METAL & KEMİK</span>
                <h4>ÜSTÜN İMALAT</h4>
                <p>Takılmayan, Uzun Ömürlü Fermuarlar</p>
              </div>
            </div>

            <p className="zipper-hint-text">👆 Fermuarı açıp kapatmak için tıklayın!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
