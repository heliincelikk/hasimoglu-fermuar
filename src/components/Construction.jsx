import React from 'react';
import { Building2, CheckCircle2, MessageSquare } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import buildingImage from '../assets/construction-1.jpeg';
import './Construction.css';

export default function Construction() {
  return (
    <section id="construction" className="section-padding construction-section">
      <div className="container construction-shell">
        <div className="construction-copy">
          <div className="section-tag"><Building2 size={16} aria-hidden="true" /> Müteahhitlik</div>
          <h2>Geleceği inşa eden, <span>kalıcı değer üreten projeler.</span></h2>
          <p className="construction-lead">Haşimioğlu Müteahhitlik; modern yapı çözümlerini güçlü işçilik, çağdaş tasarım anlayışı ve detaylara verilen önemle bir araya getirir. Her projede sağlamlık, estetik ve güveni birlikte hedefler.</p>
          <div className="construction-points">
            <p><CheckCircle2 size={19} aria-hidden="true" /><span><strong>Modern yaşam için güçlü yapılar:</strong> Estetik, işlevsel ve uzun ömürlü çözümler.</span></p>
            <p><CheckCircle2 size={19} aria-hidden="true" /><span><strong>Titizlikle yönetilen süreç:</strong> Planlamadan uygulamaya her ayrıntıya önem veren yaklaşım.</span></p>
            <p><CheckCircle2 size={19} aria-hidden="true" /><span><strong>Yeni proje ve fiyat talepleri:</strong> Hizmet satın alma bilgileriniz için doğrudan iletişim.</span></p>
          </div>
          <div className="construction-actions">
            <a className="btn btn-primary" href={`https://wa.me/${siteInfo.contact.whatsapp}?text=Merhaba,%20m%C3%BCteahhitlik%20hizmetleriniz%20i%C3%A7in%20teklif%20ve%20fiyat%20bilgisi%20almak%20istiyorum.`} target="_blank" rel="noopener noreferrer"><MessageSquare size={18} aria-hidden="true" /> Teklif ve Fiyat Bilgisi Alın</a>
            <a className="construction-text-link" href={`https://wa.me/${siteInfo.contact.whatsapp}?text=Merhaba,%20binan%C4%B1zdaki%20m%C3%BCteahhitlik%20projesi%20hakk%C4%B1nda%20fiyat%20bilgisi%20almak%20istiyorum.`} target="_blank" rel="noopener noreferrer">Projeyi İnceleyin</a>
          </div>
        </div>
        <div className="construction-visual">
          <img src={buildingImage} alt="Haşimioğlu Müteahhitlik bina projesi" className="construction-image" loading="lazy" />
          <div className="construction-stamp"><span>HAŞİMİOĞLU</span><strong>MÜTEAHHİTLİK</strong></div>
        </div>
      </div>
    </section>
  );
}
