import { Link } from 'react-router-dom';
import { destinations } from '../data/posts';

export default function Destinations() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Wander</p>
        <h1>
          <span className="script">Dream Destinations</span>
          <br />Places That Steal Your Heart
        </h1>
        <p>A curated list of beautiful places that feel like poetry, peace, and pure magic.</p>
      </header>

      <section className="section container">
        <div className="dest-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {destinations.map((d) => (
            <Link to={`/destination/${d.slug}`} key={d.slug} className="dest-card" style={{ height: 280 }}>
              <img src={d.thumb} alt={d.name} loading="lazy" />
              <div className="heart">&#x2764;</div>
              <div className="overlay">
                <h4>{d.name}</h4>
                <p>{d.tagline}</p>
                <p style={{ marginTop: 4, fontSize: '0.72rem', opacity: 0.7 }}>{d.days} days &middot; {d.highlights.length} highlights</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}