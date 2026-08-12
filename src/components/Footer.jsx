import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import './Footer.css';

/**
 * REACT DERSİ #7: DINAMIK JAVASCRIPT DEĞERLERİ & FOOTER
 * 
 * `new Date().getFullYear()` ile bulunulan yılı dinamik alırız.
 * Böylece her yıl footer yılını elle değiştirmemiz gerekmez!
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-4 footer-top">
          {/* Kolon 1 - Logo ve Tanıtım */}
          <div className="footer-col brand-col">
            <a href="#hero" className="footer-logo">
              <span className="logo-badge">H</span>
              <span className="logo-title">{siteInfo.companyName}</span>
            </a>
            <p className="footer-about-text">
              {siteInfo.subtitle}
            </p>
            <p className="footer-tagline">
              "Dürüst Hizmet, Yılların Güveni."
            </p>
          </div>

          {/* Kolon 2 - Hızlı Bağlantılar */}
          <div className="footer-col">
            <h4 className="footer-col-title">Hızlı Bağlantılar</h4>
            <ul className="footer-links">
              <li><a href="#hero">Ana Sayfa</a></li>
              <li><a href="#about">Hakkımızda</a></li>
              <li><a href="#services">Hizmetlerimiz</a></li>
              <li><a href="#gallery">Fotoğraf Galerisi</a></li>
              <li><a href="#contact">İletişim</a></li>
            </ul>
          </div>

          {/* Kolon 3 - Hizmetler */}
          <div className="footer-col">
            <h4 className="footer-col-title">Hizmet Alanlarımız</h4>
            <ul className="footer-links">
              <li><a href="#services">Kurumsal Danışmanlık</a></li>
              <li><a href="#services">Kalite & Montaj</a></li>
              <li><a href="#services">7/24 Destek & Bakım</a></li>
              <li><a href="#services">Özel Projelendirme</a></li>
              <li><a href="#services">Tedarik & Lojistik</a></li>
            </ul>
          </div>

          {/* Kolon 4 - İletişim */}
          <div className="footer-col">
            <h4 className="footer-col-title">İletişim</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-icon" />
                <span>{siteInfo.contact.address}</span>
              </li>
              <li>
                <Phone size={18} className="footer-icon" />
                <a href={`tel:${siteInfo.contact.phone}`}>{siteInfo.contact.phone}</a>
              </li>
              <li>
                <Mail size={18} className="footer-icon" />
                <a href={`mailto:${siteInfo.contact.email}`}>{siteInfo.contact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bar ve Telif Hakkı */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} <strong>{siteInfo.companyName}</strong>. Tüm Hakları Saklıdır.
          </p>

          <p className="dev-credit">
            Sevgiyle <Heart size={14} className="heart-icon" /> Hazırlandı
          </p>

          <button onClick={scrollToTop} className="scroll-to-top" aria-label="Yukarı Çık">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
