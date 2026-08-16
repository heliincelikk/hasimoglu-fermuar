import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, ShieldCheck, Star, MessageSquare } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import './Hero.css';

// Kullanıcının Seçtiği 5 Özel Fermuar Görseli
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';

const userZipperSlides = ['/zipper-light-bg.jpg', slide4, slide2, slide1, slide3, slide5];

export default function Hero() {
  const { contact } = siteInfo;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Otomatik Slayt Geçişi (Her 4 saniyede bir)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % userZipperSlides.length);
    }, 4000);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section id="hero" className="hero-slider-section">
      {/* 3D Hareketli Arka Plan Slaytları */}
      {userZipperSlides.map((slideImg, index) => (
        <motion.div
          key={index}
          className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
          animate={{
            scale: isHovered && index === currentSlide ? 1.05 : 1,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img src={slideImg} alt="Haşımoğlu Fermuar Özel Üretim" className="hero-slide-img" />
        </motion.div>
      ))}

      {/* Koyu Karartma Katmanı (Okunabilirlik İçin) */}
      <div className="hero-slider-overlay"></div>
      
      {/* Ambient Orbs - Pro Max UI için parlak ışıklar */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="container hero-slider-container">
        <motion.div 
          className="hero-slider-content glassmorphism-card"
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          style={{
            perspective: 1000
          }}
        >
          <motion.div
            animate={{
              rotateY: isHovered ? 5 : 0,
              rotateX: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Üst Rozet */}
            <motion.div 
              className="hero-top-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Award size={16} className="badge-gold-icon" />
              <span>20 Yıllık Tecrübe & Üstün Kalite İmalat</span>
            </motion.div>

            {/* Ana Başlık */}
            <h1 className="hero-serif-title">
              Her Detayda Kalite,<br />
              <span className="text-gradient">Her Fermuarda Güven.</span>
            </h1>

            {/* Açıklama */}
            <p className="hero-serif-subtitle">
              20 yılı aşkın imalat tecrübemiz ve yüksek hassasiyetli üretimimizle tekstil dünyasının yanındayız.
            </p>

            {/* Butonlar */}
            <div className="hero-action-buttons">
              <motion.a 
                href="#services" 
                className="btn btn-leather"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(133, 83, 43, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ürünlerimizi İnceleyin</span>
                <ArrowRight size={20} />
              </motion.a>

              <motion.a 
                href={`https://wa.me/${contact.whatsapp}?text=Merhaba,%20fermuar%20sipari%C5%9Fi%20ve%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass-whatsapp"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare size={20} />
                <span>WhatsApp İle İletişime Geçin</span>
              </motion.a>
            </div>

            {/* Alt Şerit Özellikleri */}
            <motion.div 
              className="hero-bottom-highlights"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
