import React from 'react';
import groupHeroCover from '../assets/group-hero-cover.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-cinematic hero-group-cover">
      <h1 className="sr-only">Haşimioğlu Grup</h1>
      <div className="hero-group-art">
        <img src={groupHeroCover} alt="Haşimioğlu Grup: fermuar imalatı ve müteahhitlik hizmetleri" loading="eager" />
      </div>
      <div className="hero-group-summary">
        <div className="container">
          <p className="hero-group-story">Haşimioğlu Grup, <strong>fermuar imalatı</strong> ve <strong>müteahhitlik</strong> alanlarında uzun yıllara dayanan deneyimiyle hizmet sunar. Üretimde kaliteli çözümler, yapılarda modern uygulama ve titiz işçilik anlayışıyla çalışır; her projede güvenilir iletişimi, doğru çözümü ve sürdürülebilir kaliteyi ön planda tutar.</p>
        </div>
      </div>
    </section>
  );
}
