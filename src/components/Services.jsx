import React from 'react';
import { ChevronRight } from 'lucide-react';
import { productsData } from '../data/siteData';
import './Services.css';

/**
 * HAŞİMOĞLU FERMUAR - KOLEKSİYON BİLEŞENİ (Services.jsx)
 * 
 * Burada attığınız görseldeki gibi:
 * - Arka planda fermuar fotoğrafları,
 * - Üzerinde ürün özelliğini anlatan Türkçe rozetler,
 * - Alt kısımda koyu degrade ve ürün isimleri yer alır.
 */
export default function Services() {
  return (
    <section id="services" className="section-padding collection-section">
      <div className="container">
        {/* Görseldeki gibi "Koleksiyon" ve "Tümünü Gör >" başlığı */}
        <div className="collection-header">
          <h2 className="collection-main-title">Koleksiyon</h2>
          <a href="#contact" className="view-all-link">
            <span>Tümünü Gör</span>
            <ChevronRight size={18} />
          </a>
        </div>

        {/* 2x2 Fotoğraflı Koleksiyon Kartları Grid Yapısı */}
        <div className="grid-2 collection-grid">
          {productsData.map((product) => (
            <div key={product.id} className="collection-card">
              {/* Arka Plan Görseli */}
              <img 
                src={product.image} 
                alt={product.title} 
                className="collection-card-img" 
              />
              
              {/* Görsel Üzerindeki Karartma (Gradient Overlay) */}
              <div className="collection-card-overlay">
                {/* Beyaz Rozet (Badge) */}
                <div className="collection-pill-badge">
                  {product.badge}
                </div>

                {/* Alt Kısımdaki Başlık */}
                <h3 className="collection-card-title">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
