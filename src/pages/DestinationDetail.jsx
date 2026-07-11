import { useParams, Link } from 'react-router-dom';
import { getDestinationBySlug } from '../data/posts';

export default function DestinationDetail() {
  const { slug } = useParams();
  const dest = getDestinationBySlug(slug);

  if (!dest) {
    return (
      <div className="notfound">
        <p className="script" style={{ fontSize: '4rem', marginBottom: 10 }}>&#x1F30D;</p>
        <h2>Destination not found</h2>
        <p>This place might only exist in daydreams for now.</p>
        <Link to="/destinations" className="btn btn-primary">&#x2190; All Destinations</Link>
      </div>
    );
  }

  return (
    <>
      <div className="detail-hero" style={{ marginTop: 30 }}>
        <img src={dest.image} alt={dest.name} />
        <div className="overlay">
          <div>
            <p style={{ fontWeight: 500, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
              &#x1F4CD; {dest.days} days
            </p>
            <h1>{dest.name}</h1>
            <p>{dest.tagline}</p>
          </div>
        </div>
      </div>

      <section className="section container">
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: 800 }}>
          {dest.description}
        </p>

        <h3 style={{ marginTop: 40, marginBottom: 20, color: 'var(--violet-dark)' }}>
          &#x2B50; Highlights
        </h3>
        <div className="highlight-grid">
          {dest.highlights.map((h, i) => (
            <div key={i} className="highlight-chip">&#x2728; {h}</div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/destinations" className="btn btn-outline">&#x2190; Back to Destinations</Link>
        </div>
      </section>
    </>
  );
}