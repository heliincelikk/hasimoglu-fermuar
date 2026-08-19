import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MessageSquare } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import './Navbar.css';

/**
 * REACT DERSİ #1: NAVBAR BİLEŞENİ
 * 
 * Üstteki adres/saat barını kaldırarak daha sade, şık ve modern bir başlık oluşturduk.
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* LOGO */}
        <a href="#hero" className="logo" onClick={closeMenu}>
          <span className="logo-badge">H</span>
          <div className="logo-text">
            <span className="logo-title">{siteInfo.companyName}</span>
            <span className="logo-sub">Fermuar & İmalat</span>
          </div>
        </a>

        {/* Masaüstü Menü Linkleri */}
        <nav className="desktop-nav">
          <a href="#hero" className="nav-link">Ana Sayfa</a>
          <a href="#about" className="nav-link">Hakkımızda</a>
          <a href="#services" className="nav-link">Ürünlerimiz</a>
          <a href="#features" className="nav-link">Neden Biz?</a>
          <a href="#contact" className="nav-link">İletişim</a>
        </nav>

        {/* Aksiyon Butonu */}
        <div className="nav-actions">
          <a 
            href={`https://wa.me/${siteInfo.contact.whatsapp}?text=Merhaba,%20fermuar%20sipari%C5%9Fi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-whatsapp nav-btn"
          >
            <MessageSquare size={18} />
            <span>WhatsApp Sipariş</span>
          </a>

          {/* Mobil Menü Butonu */}
          <button 
            className="mobile-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ DRAWER */}
      {isMobileMenuOpen && (
        <div className="mobile-menu fade-in">
          <nav className="mobile-nav">
            <a href="#hero" onClick={closeMenu}>Ana Sayfa <ChevronRight size={18} /></a>
            <a href="#services" onClick={closeMenu}>Ürünlerimiz <ChevronRight size={18} /></a>
            <a href="#about" onClick={closeMenu}>Hakkımızda <ChevronRight size={18} /></a>
            <a href="#features" onClick={closeMenu}>Neden Biz? <ChevronRight size={18} /></a>
            <a href="#contact" onClick={closeMenu}>İletişim <ChevronRight size={18} /></a>
            
            <div className="mobile-contact-info">
              <p><strong>Telefon:</strong> {siteInfo.contact.phone}</p>
              <p><strong>E-Posta:</strong> {siteInfo.contact.email}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
