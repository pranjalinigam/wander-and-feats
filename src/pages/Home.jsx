import { Link } from 'react-router-dom';
import { stories, destinations, img } from '../data/posts';

function Home() {
  const featuredStories = stories.slice(0, 5);
  const featuredDests = destinations.slice(0, 5);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-photo">
            <img src={img('hero-main', 1200, 700)} alt="Wander & Whimsy" />
          </div>

          {/* Sticker decorations */}
          <div className="hero-sticker s1">
            <img src={img('sticker-travel', 400, 300)} alt="" />
          </div>
          <div className="hero-sticker s2">
            <img src={img('sticker-coffee', 300, 300)} alt="" />
          </div>

          <div className="hero-content">
            <p className="eyebrow">✦ A travel &amp; diary blog</p>
            <h1>
              <span className="script">Wander &amp; Whimsy</span>
              Stories, Journeys &amp; Quiet Joys
            </h1>
            <p>
              Curating little moments from around the world — one coffee,
              one sunset, one story at a time.
            </p>
            <Link to="/stories" className="btn btn-primary">
              ✦ Explore Stories
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <div className="container">
        <div className="quick-links">
          <Link to="/stories" className="quick-link">
            <div className="emoji">&#x1F30D;</div>
            <div>
              <h4>Travel Stories</h4>
              <p>8 new adventures</p>
            </div>
          </Link>
          <Link to="/destinations" className="quick-link">
            <div className="emoji">&#x1F334;</div>
            <div>
              <h4>Destinations</h4>
              <p>6 dreamy places</p>
            </div>
          </Link>
          <Link to="/gallery" className="quick-link">
            <div className="emoji">&#x1F4F7;</div>
            <div>
              <h4>Photo Gallery</h4>
              <p>12 aesthetic shots</p>
            </div>
          </Link>
          <Link to="/about" className="quick-link">
            <div className="emoji">&#x1F9E1;</div>
            <div>
              <h4>About Me</h4>
              <p>The story behind</p>
            </div>
          </Link>
        </div>
      </div>

      {/* ===== RECENT STORIES ===== */}
      <section className="section container">
        <div className="section-head">
          <h2 className="section-title">
            &#x1F4D6; Recent Stories
          </h2>
          <Link to="/stories" className="view-all">
            View All &rarr;
          </Link>
        </div>

        <div className="card-grid">
          {featuredStories.map((s) => (
            <article key={s.slug} className="story-card">
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

      {/* ===== DESTINATIONS ===== */}
      <section className="section container">
        <div className="section-head">
          <h2 className="section-title">
            &#x1F30D; Dreamy Destinations
          </h2>
          <Link to="/destinations" className="view-all">
            View All &rarr;
          </Link>
        </div>

        <div className="dest-grid">
          {featuredDests.map((d) => (
            <Link to={`/destination/${d.slug}`} key={d.slug} className="dest-card">
              <img src={d.thumb} alt={d.name} loading="lazy" />
              <div className="heart">&#x2764;</div>
              <div className="overlay">
                <h4>{d.name}</h4>
                <p>{d.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="section container">
        <div className="newsletter">
          <div className="quote">
            <q>Not all those who wander are lost.</q>
            <span>&mdash; J.R.R. Tolkien</span>
          </div>
          <div className="newsletter-form">
            <h3>&#x1FAB6; Stay in the loop</h3>
            <p>Cozy letters, travel tips &amp; new stories — straight to your inbox.</p>
            <form className="form-row" onSubmit={(e) => { e.preventDefault(); alert('You\'re subscribed! ✨'); }}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== LOWER GRID: Featured Post + About + Popular ===== */}
      <section className="section container">
        <div className="lower-grid">
          {/* Featured post */}
          <div className="panel">
            <h3>&#x2B50; Featured Story</h3>
            {stories.slice(0, 1).map((s) => (
              <div key={s.slug}>
                <Link to={`/story/${s.slug}`}>
                  <img
                    src={s.image}
                    alt={s.title}
                    style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 14, marginBottom: 14 }}
                  />
                </Link>
                <Link to={`/story/${s.slug}`}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: 8 }}>{s.title}</h4>
                </Link>
                {s.content.slice(0, 2).map((para, i) => (
                  <p key={i} style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', marginBottom: 10 }}>
                    {para}
                  </p>
                ))}
                <Link to={`/story/${s.slug}`} className="btn btn-outline btn-sm" style={{ marginTop: 4 }}>
                  Read Full Story &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* Popular posts */}
          <div className="panel">
            <h3>&#x1F525; Popular</h3>
            {stories.slice(0, 4).map((s) => (
              <Link to={`/story/${s.slug}`} key={s.slug} className="mini-post">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div>
                  <h5>{s.title}</h5>
                  <p className="date">{s.date} &middot; {s.readTime}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* About panel */}
          <div className="panel about-panel">
            <h3>&#x1F9E1; Behind the Blog</h3>
            <img
              src={img('about-avatar', 700, 700)}
              alt="Wander & Whimsy avatar"
              loading="lazy"
              style={{ height: 140, objectPosition: 'center 30%' }}
            />
            <p>
              Hi there! I&apos;m a daydreamer who believes the best stories
              happen between sips of coffee and wanderlust maps. This little
              corner of the internet is where I capture it all.
            </p>
            <Link to="/about" className="btn btn-outline btn-sm">
              More About Me &rarr;
            </Link>
            <div className="connect-icons">
              <a href="#" aria-label="Instagram">&#x1F4F8;</a>
              <a href="#" aria-label="Pinterest">&#x1F4CC;</a>
              <a href="#" aria-label="Twitter">&#x1F426;</a>
              <a href="#" aria-label="YouTube">&#x1F4FA;</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;