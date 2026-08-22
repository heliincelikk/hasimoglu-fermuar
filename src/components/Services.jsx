import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Services.css';

const productGroups = [
  { name: 'Naylon Fermuar', className: 'nylon', summary: 'Hafif, esnek ve çok yönlü kullanım için.', use: 'Giyim · Çanta · Ev tekstili', types: ['Tip.5', 'Tip.10'] },
  { name: 'Gizli Fermuar', className: 'invisible', summary: 'Temiz ve zarif kapanış isteyen tasarımlar için.', use: 'Elbise · Etek · İnce tasarımlar', types: ['Tip.3 Naylon'] },
  { name: 'Kemik Fermuar', className: 'bone', summary: 'Dış giyimde sağlam diş yapısı ve pratik kullanım.', use: 'Mont · Spor giyim · Çanta', types: ['Tip.6', 'Tip.8', 'Tip.9'] },
  { name: 'Metal Fermuar', className: 'metal', summary: 'Güçlü, karakterli ve uzun ömürlü detaylar için.', use: 'Denim · Deri · Ceket', types: ['Tip.4', 'Tip.5', 'Tip.8'] },
];

export default function Services() {
  return (
    <section id="services" className="section-padding collection-section">
      <div className="container">
        <div className="collection-intro">
          <div><span className="section-tag">Fermuar Çeşitleri</span><h2 className="section-title">Fermuar <span>Koleksiyonumuz</span></h2></div>
          <p>Ürünlerimizi kullanım alanına ve malzeme türüne göre seçin; uygun tip için ekibimizden bilgi alın.</p>
        </div>
        <div className="collection-groups">
          {productGroups.map((group) => (
            <article className={`collection-group collection-group-${group.className}`} key={group.name}>
              <div className="collection-group-top"><span className="collection-group-label">{group.className === 'invisible' ? 'GİZLİ SERİ' : `${group.name.split(' ')[0].toUpperCase()} SERİ`}</span><span className="collection-group-count">{group.types.length} tip</span></div>
              <h3>{group.name}</h3>
              <p className="collection-group-summary">{group.summary}</p>
              <div className="collection-type-list" aria-label={`${group.name} tipleri`}>{group.types.map((type) => <span key={type}>{type}</span>)}</div>
              <div className="collection-group-bottom"><span>{group.use}</span><a href="#contact" aria-label={`${group.name} için bilgi ve teklif al`}>Bilgi Al <ArrowUpRight size={17} aria-hidden="true" /></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
