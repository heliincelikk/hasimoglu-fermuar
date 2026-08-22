import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, X, Maximize2 } from 'lucide-react';
import storeImage from '../assets/store.jpg';
import showcaseVideo from '../assets/hasimioglu-showcase.mp4';
import './Gallery.css';

const media = [
  { type: 'image', source: storeImage, title: 'Haşimioğlu Fermuar Mağazası', description: 'Fermuar çeşitlerimizi mağazamızda yakından inceleyebilirsiniz.' },
  { type: 'video', source: showcaseVideo, title: 'Mağaza Tanıtım Videosu', description: 'Mağazamızdan kısa bir görünüm.' },
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);
  const activeMedia = media[activeIndex];
  const show = (index) => { setActiveIndex(index); setIsOpen(true); };
  const previous = () => setActiveIndex((index) => (index + media.length - 1) % media.length);
  const next = () => setActiveIndex((index) => (index + 1) % media.length);
  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) { videoRef.current.play(); setIsVideoPlaying(true); }
    else { videoRef.current.pause(); setIsVideoPlaying(false); }
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        <div className="section-header"><div className="section-tag">Fermuar İmalat Galerimiz</div><h2 className="section-title">Mağazamızdan <span>Kareler</span></h2><p className="section-subtitle">Fotoğrafa tıklayarak mağazamızı tam ekrana yakın boyutta inceleyin; yanına geçerek videoyu izleyin.</p></div>
        <div className="gallery-showcase">
          <button className="gallery-main-preview" onClick={() => show(0)} aria-label="Mağaza fotoğrafını büyük görüntüle"><img src={storeImage} alt="Haşimioğlu Fermuar mağazası" loading="lazy" /><span className="gallery-preview-overlay"><Maximize2 size={21} aria-hidden="true" /> Mağazayı Büyük Gör</span></button>
          <button className="gallery-video-preview" onClick={() => show(1)} aria-label="Mağaza videosunu görüntüle"><video muted playsInline preload="metadata" aria-hidden="true"><source src={showcaseVideo} type="video/mp4" /></video><span className="gallery-video-preview-overlay"><Play size={24} aria-hidden="true" /> Tanıtım Videosunu İzle</span></button>
        </div>
      </div>

      {isOpen && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={activeMedia.title}>
          <button className="gallery-close" onClick={() => setIsOpen(false)} aria-label="Görüntüleyiciyi kapat"><X size={26} /></button>
          <button className="gallery-nav gallery-nav-left" onClick={previous} aria-label="Önceki medya"><ChevronLeft size={30} /></button>
          <div className="gallery-lightbox-content">
            {activeMedia.type === 'image' ? <img src={activeMedia.source} alt={activeMedia.title} /> : <div className="gallery-silent-video"><video ref={videoRef} muted playsInline autoPlay preload="metadata" onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)}><source src={activeMedia.source} type="video/mp4" /></video><button className="gallery-video-toggle" onClick={toggleVideo} aria-label={isVideoPlaying ? 'Videoyu duraklat' : 'Videoyu oynat'}>{isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}</button></div>}
            <div className="gallery-lightbox-caption"><span>{activeIndex + 1} / {media.length}</span><div><strong>{activeMedia.title}</strong><p>{activeMedia.description}</p></div></div>
          </div>
          <button className="gallery-nav gallery-nav-right" onClick={next} aria-label="Sonraki medya"><ChevronRight size={30} /></button>
        </div>
      )}
    </section>
  );
}
