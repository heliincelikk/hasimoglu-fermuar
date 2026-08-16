import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Award, ShieldCheck, Star, MessageSquare, ChevronDown } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import slide1 from '../assets/slide1.jpg';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import './Hero.css';

const HERO_SLIDES = [
  { src: '/zipper-light-bg.jpg', alt: 'Premium fermuar imalat', caption: 'Premium İmalat' },
  { src: slide3, alt: 'Metal ve kemik fermuar koleksiyonu', caption: 'Koleksiyon Serisi' },
  { src: slide1, alt: 'El işçiliği fermuar üretimi', caption: 'El İşçiliği' },
  { src: slide4, alt: 'Profesyonel fermuar çeşitleri', caption: 'Profesyonel Seri', lighten: true },
];

const SLIDE_INTERVAL = 6000;

export default function Hero() {
  const { contact } = siteInfo;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [currentSlide, isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero-cinematic">
      {/* Tam ekran arka plan slaytları */}
      <div className="hero-bg-stack" aria-hidden="true">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.caption}
            className={`hero-bg-slide ${index === currentSlide ? 'is-active' : ''} ${slide.lighten ? 'hero-bg-slide--lighten' : ''}`}
          >
            <img src={slide.src} alt="" className="hero-bg-image" loading={index === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
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

        {/* Slayt kontrolü */}
        <div className="hero-slide-controls">
          <div className="hero-slide-counter">
            <span className="hero-slide-current">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="hero-slide-divider">/</span>
            <span className="hero-slide-total">{String(HERO_SLIDES.length).padStart(2, '0')}</span>
          </div>

          <div className="hero-slide-dots">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.caption}
                type="button"
                className={`hero-dot ${index === currentSlide ? 'is-active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`${slide.caption} görseline geç`}
                aria-current={index === currentSlide ? 'true' : undefined}
              >
                <span className="hero-dot-fill" style={{ animationDuration: `${SLIDE_INTERVAL}ms` }} />
              </button>
            ))}
          </div>

          <p className="hero-slide-caption">{HERO_SLIDES[currentSlide].caption}</p>
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
