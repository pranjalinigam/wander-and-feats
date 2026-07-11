import { useState } from 'react';
import { galleryImages } from '../data/posts';

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Visual Diaries</p>
        <h1>
          <span className="script">The Gallery</span>
          <br />Moments Frozen in Time
        </h1>
        <p>A little collection of aesthetic corners, golden hours, and beautiful stillness.</p>
      </header>

      <section className="section container">
        <div className="masonry">
          {galleryImages.map((img) => (
            <div key={img.id} className="masonry-item" onClick={() => setSelected(img)}>
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="caption">{img.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 999, cursor: 'pointer', padding: 30,
          }}
          onClick={() => setSelected(null)}
        >
          <div style={{ maxWidth: 700, width: '100%', textAlign: 'center' }}>
            <img src={selected.src} alt={selected.caption} style={{ width: '100%', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }} />
            <p style={{ color: '#fff', marginTop: 14, fontSize: '0.95rem' }}>{selected.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}