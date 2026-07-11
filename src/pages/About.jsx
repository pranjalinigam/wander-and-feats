import { img } from '../data/posts';

export default function About() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Behind the Blog</p>
        <h1>
          <span className="script">A Little About Me</span>
          <br />Daydreamer, Coffee Lover, Wanderer
        </h1>
      </header>

      <section className="section container">
        <div className="about-hero">
          <img src={img('about-hero', 800, 900)} alt="About Wander & Whimsy" loading="lazy" />
          <div>
            <h1>Hi, I'm the soul behind this little corner &#x2728;</h1>
            <p>
              Wander &amp; Whimsy is where I pour out all the little things that make life feel
              like a beautiful story — golden hour in a new city, the way light hits a café
              table, the quiet thrill of an empty page waiting to be filled.
            </p>
            <p>
              I started this blog to capture the in-between moments that often go unnoticed.
              Not just the big adventures, but the soft pauses — the good coffee, the rainy
              afternoons, the pages of a worn journal.
            </p>
            <p>
              This is my love letter to slow living, travel, and the art of being still.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--gradient-soft)' }}>
        <div className="container">
          <h2 className="section-title" style={{ justifyContent: 'center', marginBottom: 30 }}>
            &#x1F31F; What I Believe In
          </h2>
          <div className="value-grid">
            {[
              { emoji: '&#x1F30D;', title: 'Wander Often', desc: 'Every journey shapes a story. I believe in exploring both the world and the mind, one step at a time.' },
              { emoji: '&#x1F9EC;', title: 'Slow Down', desc: 'The best moments don\'t rush. I celebrate slow mornings, still evenings, and the beauty of doing nothing.' },
              { emoji: '&#x1F4D0;', title: 'Keep Creating', desc: 'Whether it\'s words, photos, or just a beautifully made cup of tea — creativity is how we stay alive inside.' },
              { emoji: '&#x1F3B1;', title: 'Embrace Whimsy', desc: 'Life is too short for serious all the time. I believe in doodles, daydreams, and doing things that make you smile.' },
              { emoji: '&#x1F33F;', title: 'Stay Curious', desc: 'The world is full of wonder if we choose to see it. I never want to stop learning, exploring, and wondering.' },
              { emoji: '&#x1F9E1;', title: 'Share Kindness', desc: 'The internet can be a beautiful place. I aim to spread warmth, encouragement, and gentle inspiration.' },
            ].map((v, i) => (
              <div key={i} className="value-card">
                <div className="emoji" dangerouslySetInnerHTML={{ __html: v.emoji }} />
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--ink-soft)', maxWidth: 600, margin: '0 auto' }}>
          Thank you for being here. Whether you&apos;re a wanderer, a dreamer, or someone who just
          loves a good cup of coffee — you belong here.
        </p>
        <p style={{ marginTop: 30, fontFamily: 'var(--font-script)', fontSize: '1.8rem', color: 'var(--violet-dark)' }}>
          With warmth, <br /> Wander &amp; Whimsy &#x2728;
        </p>
      </section>
    </>
  );
}