import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import './Contact.css';

/**
 * HAŞİMOĞLU FERMUAR - İLETİŞİM BİLEŞENİ (Contact.jsx)
 * 
 * Form kısmını tamamen kaldırarak doğrudan telefon, WhatsApp,
 * e-posta ve Google Harita konumuna odaklanan sade ve modern bir yapı oluşturduk.
 */
export default function Contact() {
  const { contact } = siteInfo;

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Bölüm Başlığı */}
        <div className="section-header">
          <div className="section-tag">İletişime Geçin</div>
          <h2 className="section-title">
            Bizimle <span>İletişime Geçin</span>
          </h2>
          <p className="section-subtitle">
            Sipariş vermek, fiyat almak veya dükkanımızı ziyaret etmek için aşağıdaki iletişim kanallarımızdan bize doğrudan ulaşabilirsiniz.
          </p>
        </div>

        {/* 4'lü İletişim Kartları Grid Yapısı */}
        <div className="grid-2 contact-cards-grid">
          {/* 1. Telefon Kartı */}
          <div className="contact-direct-card">
            <div className="contact-icon-box phone-icon">
              <Phone size={26} />
            </div>
            <div className="contact-card-text">
              <h4>Telefon Sipariş Hattı</h4>
              <a href={`tel:${contact.phone}`} className="contact-primary-link">
                {contact.phone}
              </a>
              <p className="contact-sub-text">Hafta içi & Cumartesi çalışma saatlerinde hemen arayın.</p>
            </div>
          </div>

          {/* 2. WhatsApp Kartı */}
          <div className="contact-direct-card whatsapp-card-border">
            <div className="contact-icon-box whatsapp-icon-box">
              <MessageSquare size={26} />
            </div>
            <div className="contact-card-text">
              <h4>WhatsApp Sipariş & Destek</h4>
              <a 
                href={`https://wa.me/${contact.whatsapp}?text=Merhaba,%20fermuar%20sipari%C5%9Fi%20ve%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-link"
              >
                WhatsApp İle Mesaj Atın ↗
              </a>
              <p className="contact-sub-text">Fotoğraf veya ölçü göndererek anında fiyat teklifi alın.</p>
            </div>
          </div>

          {/* 3. Dükkan Adresi Kartı */}
          <div className="contact-direct-card">
            <div className="contact-icon-box map-pin-icon-box">
              <MapPin size={26} />
            </div>
            <div className="contact-card-text">
              <h4>Dükkan Adresimiz (Bayrampaşa)</h4>
              <a 
                href={contact.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-primary-link"
              >
                {contact.address} <ExternalLink size={14} />
              </a>
              <p className="contact-sub-text">Haritada açmak ve yol tarifi almak için adrese tıklayın.</p>
            </div>
          </div>

          {/* 4. Çalışma Saatleri & E-Posta */}
          <div className="contact-direct-card">
            <div className="contact-icon-box clock-icon-box">
              <Clock size={26} />
            </div>
            <div className="contact-card-text">
              <h4>Çalışma Saatleri & E-Posta</h4>
              <p className="contact-highlight-text">{contact.workingHours}</p>
              <p className="contact-sub-text">E-Posta: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            </div>
          </div>
        </div>

        {/* Harita Entegrasyonu ve Yol Tarifi Barı */}
        <div className="map-wrapper">
          <div className="map-header-bar">
            <div className="map-header-title">
              <MapPin size={20} className="map-pin-icon" />
              <span><strong>Dükkan Konumu:</strong> {contact.address}</span>
            </div>

            <a 
              href={contact.googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary map-directions-btn"
            >
              <span>Google Haritalar'da Yol Tarifi Al ↗</span>
            </a>
          </div>

          <a 
            href={contact.googleMapsLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="map-iframe-container"
            title="Haritaya Tıklayarak Google Haritalar'da Açın"
          >
            <iframe
              title="Google Maps Bayrampaşa Haritası"
              src={contact.googleMapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0, pointerEvents: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </div>
      </div>
    </section>
  );
}
