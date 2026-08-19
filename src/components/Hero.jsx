import React from 'react';
import { ArrowRight, Award, ShieldCheck, Star, MessageSquare, ChevronDown } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import './Hero.css';

export default function Hero() {
  const { contact } = siteInfo;

  return (
    <section id="hero" className="hero-cinematic">
      {/* Tam ekran arka plan slaytları */}
      <div className="hero-bg-stack" aria-hidden="true">
        <div className="hero-bg-slide is-active">
          <img src="/kapak.png" alt="Metal fermuar detayı" className="hero-bg-image" loading="eager" />
        </div>
      </div>

      {/* Açık, şık gradient — karanlık değil */}
      <div className="hero-overlay-warm" aria-hidden="true" />
      <div className="hero-overlay-vignette" aria-hidden="true" />

      {/* İçerik */}
      <div className="container hero-cinematic-inner">
        <div className="hero-editorial">
          <div className="hero-eyebrow">
            <Award size={15} />
            <span>20 Yıllık Tecrübe & Üstün Kalite İmalat</span>
          </div>

          <div className="hero-title-block">
            <h1 className="hero-display-title">
              Her Detayda Kalite,
              <span className="hero-display-accent">Her Fermuarda Güven.</span>
            </h1>
            <div className="hero-title-rule" aria-hidden="true" />
          </div>

          <p className="hero-lead">
            20 yılı aşkın imalat tecrübemiz ve yüksek hassasiyetli üretimimizle
            tekstil dünyasının yanındayız.
          </p>

          <div className="hero-cta-group">
            <a href="#services" className="hero-btn hero-btn-primary">
              <span>Ürünlerimizi İnceleyin</span>
              <ArrowRight size={18} className="hero-btn-arrow" />
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}?text=Merhaba,%20fermuar%20sipari%C5%9Fi%20ve%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
            >
              <MessageSquare size={18} />
              <span>WhatsApp İle İletişime Geçin</span>
            </a>
          </div>

          <div className="hero-trust-pills">
            <div className="hero-trust-pill">
              <ShieldCheck size={16} />
              <span>Kendi İmalatımız</span>
            </div>
            <div className="hero-trust-pill">
              <Award size={16} />
              <span>20+ Yıl Tecrübe</span>
            </div>
            <div className="hero-trust-pill">
              <Star size={16} />
              <span>Özel Ölçü Kesim</span>
            </div>
          </div>
        </div>

      </div>

      {/* Alt şerit */}
      <div className="hero-bottom-bar">
        <div className="hero-bottom-tags">
          <span>Metal Fermuar</span>
          <span className="hero-tag-sep">·</span>
          <span>Kemik Fermuar</span>
          <span className="hero-tag-sep">·</span>
          <span>Gizli Fermuar</span>
          <span className="hero-tag-sep">·</span>
          <span>Su Geçirmez</span>
        </div>
        <a href="#about" className="hero-scroll-hint" aria-label="Aşağı kaydır">
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}
