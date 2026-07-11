import { useParams, Link } from 'react-router-dom';
import { stories, getStoryBySlug } from '../data/posts';

export default function StoryDetail() {
  const { slug } = useParams();
  const story = getStoryBySlug(slug);

  if (!story) {
    return (
      <div className="notfound">
        <p className="script" style={{ fontSize: '4rem', marginBottom: 10 }}>&#x1F4D6;</p>
        <h2>Story not found</h2>
        <p>This story seems to have wandered off somewhere.</p>
        <Link to="/stories" className="btn btn-primary">&#x2190; Back to Stories</Link>
      </div>
    );
  }

  return (
    <>
      <div className="story-detail-header">
        <p className="eyebrow" style={{ color: 'var(--violet)', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.78rem' }}>
          {story.category}
        </p>
        <h1 style={{ fontSize: '2.6rem', margin: '10px 0 12px' }}>{story.title}</h1>
        <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem' }}>
          {story.date} &middot; {story.readTime} &middot; &#x2764; {story.likes}
        </p>
      </div>

      <div className="story-detail-img">
        <img src={story.image} alt={story.title} />
      </div>

      <div className="story-detail-body">
        {story.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        <div style={{ borderTop: '1px solid rgba(139,111,184,0.15)', paddingTop: 30, marginTop: 40, textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-script)', fontSize: '1.4rem', color: 'var(--violet-dark)', marginBottom: 20 }}>
            &#x2728; Thanks for reading!
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/stories" className="btn btn-outline btn-sm">&#x2190; All Stories</Link>
            <Link to="/" className="btn btn-primary btn-sm">&#x1F3E0; Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}