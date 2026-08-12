import React, { useState } from 'react';
import { galleryData } from '../data/siteData';
import { Image as ImageIcon } from 'lucide-react';
import './Gallery.css';

/**
 * REACT DERSİ #5: STATE İLE FİLTRELEME MANTIĞI
 * 
 * Burada `activeCategory` adında bir State tanımlıyoruz.
 * Kullanıcı "Tesislerimiz", "Ekip" veya "Projeler" butonuna tıkladığında
 * `setActiveCategory` çalışır ve React sayfayı otomatik olarak filtrelenmiş
 * elemanlarla yeniden çizer!
 */
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Tümü');

  // Benzersiz kategorileri bulma
  const categories = ['Tümü', ...new Set(galleryData.map(item => item.category))];

  // Seçili kategoriye göre görselleri filtreleme
  const filteredGallery = activeCategory === 'Tümü' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Fotoğraflar & İşlerimiz</div>
          <h2 className="section-title">
            Çalışma Alanlarımız ve <span>İşlerimizden Kareler</span>
          </h2>
          <p className="section-subtitle">
            Tesislerimizden, ekibimizden ve tamamladığımız işlerden örnek fotoğraflar.
          </p>
        </div>

        {/* Kategori Filtre Butonları */}
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Fotoğraf Grid Yapısı */}
        <div className="grid-3 gallery-grid">
          {filteredGallery.map((item) => (
            <div key={item.id} className="gallery-item fade-in">
              <img src={item.image} alt={item.title} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-category">{item.category}</span>
                <h4 className="gallery-title">{item.title}</h4>
                <div className="gallery-icon-circle">
                  <ImageIcon size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
