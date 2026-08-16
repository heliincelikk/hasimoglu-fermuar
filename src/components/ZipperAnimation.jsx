import React from 'react';
import './ZipperAnimation.css';

const TOOTH_COUNT = 28;

export default function ZipperAnimation() {
  return (
    <div className="zipper-scene" aria-hidden="true">
      <div className="zipper-orbit">
        <div className="zipper-3d">
          {/* Sol kumaş paneli */}
          <div className="zipper-panel zipper-panel-left">
            <div className="fabric-texture" />
            <div className="fabric-fold fabric-fold-1" />
            <div className="fabric-fold fabric-fold-2" />
          </div>

          {/* Fermuar mekanizması */}
          <div className="zipper-mechanism">
            <div className="zipper-teeth">
              {Array.from({ length: TOOTH_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className={`zipper-tooth ${i % 2 === 0 ? 'tooth-left' : 'tooth-right'}`}
                  style={{ '--i': i }}
                />
              ))}
            </div>

            <div className="zipper-slider">
              <div className="slider-tab" />
              <div className="slider-body">
                <div className="slider-shine" />
              </div>
              <div className="slider-ring" />
            </div>

            <div className="zipper-stop zipper-stop-top" />
            <div className="zipper-stop zipper-stop-bottom" />
          </div>

          {/* Sağ kumaş paneli */}
          <div className="zipper-panel zipper-panel-right">
            <div className="fabric-texture" />
            <div className="fabric-fold fabric-fold-1" />
            <div className="fabric-fold fabric-fold-2" />
          </div>
        </div>
      </div>

      {/* Dekoratif halkalar */}
      <div className="zipper-ring-decor ring-1" />
      <div className="zipper-ring-decor ring-2" />
      <div className="zipper-ring-decor ring-3" />
    </div>
  );
}
