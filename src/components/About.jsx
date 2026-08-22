import React from 'react';
import { CheckCircle, Award, Users } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import storeImg from '../assets/store.jpg';
import './About.css';

/**
 * HAŞİMİOĞLU FERMUAR - HAKKIMIZDA BİLEŞENİ (About.jsx)
 * 
 * Babanızın Bayrampaşa'daki gerçek fermuar mağazasının fotoğrafı entegre edildi.
 */
export default function About() {
  const { about } = siteInfo;

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header about-section-header">
          <div className="section-tag">Haşimioğlu Grup</div>
          <h2 className="section-title">Fermuar <span>İmalatımız</span></h2>
        </div>
        <div className="grid-2 about-grid">
          {/* Sol Kolon - Babanın Gerçek Mağaza Fotoğrafı ve 20 Yıl Deneyim Rozeti */}
          <div className="about-image-column">
            <div className="about-image-frame">
              <img 
                src={storeImg} 
                alt="Haşimioğlu Fermuar Bayrampaşa Mağazamız"
                className="about-img"
              />
              <div className="experience-badge">
                <span className="years">{about.experienceYears}</span>
                <span className="text">Yıllık Sektör Tecrübesi</span>
              </div>
            </div>
          </div>

          {/* Sağ Kolon - Detaylar ve İstatistikler */}
          <div className="about-content">
            <div className="section-tag">{about.badge}</div>
            <h2 className="section-title">{about.title}</h2>
            
            <p className="about-text">{about.description1}</p>
            <p className="about-text text-secondary">{about.description2}</p>

            <ul className="about-highlights">
              <li>
                <CheckCircle className="check-icon" size={20} />
                <span>Müşteri Odaklı ve Kaliteli Hizmet Sanatı</span>
              </li>
              <li>
                <CheckCircle className="check-icon" size={20} />
                <span>Deneyimli ve Üretken Kadro</span>
              </li>
              <li>
                <CheckCircle className="check-icon" size={20} />
                <span>Zamanında Teslimat ve Dürüst Fiyat Politikası</span>
              </li>
            </ul>

            {/* Sayısal Sayaç Kartları */}
            <div className="stats-row">
              <div className="stat-card">
                <Users size={24} className="stat-icon" />
                <span className="stat-number">{about.happyClients}</span>
                <span className="stat-label">Mutlu Müşteri</span>
              </div>

              <div className="stat-card">
                <Award size={24} className="stat-icon" />
                <span className="stat-number">%100</span>
                <span className="stat-label">Güven ve Başarı</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
