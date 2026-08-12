import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Award, Star, MessageSquare } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import './Hero.css';

/**
 * HAŞİMOĞLU FERMUAR - HERO COMPONENT (LUXURY BANNER TASARIMI)
 * 
 * Attığınız görseldeki gibi:
 * - Koyu fermuar dokulu arka plan,
 * - "Her Detayda Kalite, Her Fermuarda Güven." tırnaklı serif başlık,
 * - Taba / Deri rengi "Ürünlerimizi İnceleyin →" butonu.
 */
export default function Hero() {
  const { contact } = siteInfo;

  return (
    <section id="hero" className="hero-luxury-section">
      {/* Arka Plan Koyu Fermuar Dokusu Görseli */}
      <img 
        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80" 
        alt="Haşımoğlu Fermuar İmalatı" 
        className="hero-bg-img"
      />
      
      {/* Koyu Karartma ve Gölge Katmanı */}
      <div className="hero-dark-overlay"></div>

      <div className="container hero-container-centered">
        <div className="hero-luxury-content">
          {/* Üst Küçük Rozet */}
          <div className="hero-top-badge">
            <Award size={16} className="badge-gold-icon" />
            <span>20 Yıllık Tecrübe & Üstün Kalite İmalat</span>
          </div>

          {/* Görseldeki Birebir Serif Başlık */}
          <h1 className="hero-serif-title">
            Her Detayda Kalite,<br />
            Her Fermuarda Güven.
          </h1>

          {/* Alt Açıklama Metni */}
          <p className="hero-serif-subtitle">
            20 yılı aşkın imalat tecrübemiz ve yüksek hassasiyetli üretimimizle tekstil dünyasının yanındayız.
          </p>

          {/* Görseldeki Taba / Deri Rengi Buton ve WhatsApp Butonu */}
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

          {/* Öne Çıkan Özellik Şeridi */}
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
