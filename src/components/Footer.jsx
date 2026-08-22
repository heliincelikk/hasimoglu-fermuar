import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Heart, Factory, Building2 } from 'lucide-react';
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
              Haşimioğlu Grup; fermuar imalatındaki köklü deneyimini, müteahhitlikteki modern ve titiz uygulama anlayışıyla bir araya getirir.
            </p>
            <p className="footer-tagline">
              Üretimde kalite, yapılarda güven.
            </p>
          </div>

          {/* Kolon 2 - Sayfa bağlantıları */}
          <div className="footer-col">
            <h4 className="footer-col-title">Keşfedin</h4>
            <ul className="footer-links">
              <li><a href="#hero">Ana Sayfa</a></li>
              <li><a href="#about">Fermuar İmalatımız</a></li>
              <li><a href="#services">Fermuar Koleksiyonumuz</a></li>
              <li><a href="#gallery">Fermuar Galerimiz</a></li>
              <li><a href="#construction">Müteahhitlik</a></li>
              <li><a href="#contact">İletişim</a></li>
            </ul>
          </div>

          {/* Kolon 3 - Hizmet alanları */}
          <div className="footer-col">
            <h4 className="footer-col-title">Hizmet Alanlarımız</h4>
            <ul className="footer-links">
              <li><a href="#about" className="footer-service-link"><Factory size={17} aria-hidden="true" /> Fermuar İmalatı</a></li>
              <li><a href="#services">Fermuar Çeşitleri</a></li>
              <li><a href="#construction" className="footer-service-link"><Building2 size={17} aria-hidden="true" /> Müteahhitlik Hizmetleri</a></li>
              <li><a href="#construction">Projeler ve Fiyat Bilgisi</a></li>
            </ul>
          </div>

          {/* Kolon 4 - İletişim */}
          <div className="footer-col">
            <h4 className="footer-col-title">İletişim</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-icon" />
                <a href={siteInfo.contact.googleMapsLink} target="_blank" rel="noreferrer">
                  {siteInfo.contact.address}
                </a>
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
            Fermuar İmalatı- Müteahhitlik
          </p>

          <button onClick={scrollToTop} className="scroll-to-top" aria-label="Yukarı Çık">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
