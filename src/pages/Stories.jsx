import { useState } from 'react';
import { Link } from 'react-router-dom';
import { stories } from '../data/posts';

const categories = ['All', 'Travel', 'Diaries', 'Coffee', 'Tips', 'Food'];

export default function Stories() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? stories : stories.filter((s) => s.category === active);

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Explore</p>
        <h1>
          <span className="script">Our Stories</span>
          <br />Every Journey Tells a Tale
        </h1>
        <p>From mountaintop sunrises to rainy café corners — a collection of little adventures.</p>

        <div className="pill-row">
          {categories.map((c) => (
            <button key={c} className={`pill ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>
      </header>

      <section className="section container">
        <div className="card-grid">
          {filtered.map((s) => (
            <article key={s.slug} className="story-card fade-in">
              <Link to={`/story/${s.slug}`} className="img-wrap">
                <img src={s.image} alt={s.title} loading="lazy" />
                <span className="badge">{s.category}</span>
              </Link>
              <div className="body">
                <Link to={`/story/${s.slug}`}>
                  <h3>{s.title}</h3>
                </Link>
                <p className="excerpt">{s.excerpt}</p>
                <div className="story-meta">
                  <span>&#x1F552; {s.readTime}</span>
                  <span className="likes">&#x2764; {s.likes}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}