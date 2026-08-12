import React from 'react';
import * as Icons from 'lucide-react';
import { featuresData } from '../data/siteData';
import './Features.css';

export default function Features() {
  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName] || Icons.CheckCircle2;
    return <IconComponent size={32} className="feature-card-icon" />;
  };

  return (
    <section id="features" className="section-padding features-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Ayrıcalıklarımız</div>
          <h2 className="section-title">
            Neden <span>Haşımoğlu</span>'nu Tercih Etmelisiniz?
          </h2>
          <p className="section-subtitle">
            Müşterilerimizin bizi tercih etmesindeki en büyük faktörler ve çalışma prensiplerimiz.
          </p>
        </div>

        <div className="grid-4 features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-box">
                {renderIcon(feature.iconName)}
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
