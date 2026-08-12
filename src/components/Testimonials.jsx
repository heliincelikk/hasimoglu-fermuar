import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/siteData';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Referanslarımız</div>
          <h2 className="section-title">
            Müşterilerimiz <span>Bizim İçin Ne Diyor?</span>
          </h2>
          <p className="section-subtitle">
            Hizmet verdiğimiz mutlu müşterilerimizden gelen gerçek deneyim ve yorumlar.
          </p>
        </div>

        <div className="grid-3 testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="card testimonial-card">
              <Quote className="quote-icon" size={32} />
              
              <div className="stars-row">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} className="star-filled" />
                ))}
              </div>

              <p className="testimonial-comment">"{item.comment}"</p>

              <div className="testimonial-author">
                <div className="author-avatar">{item.name.charAt(0)}</div>
                <div>
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
