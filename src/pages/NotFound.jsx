import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notfound">
      <p className="script" style={{ fontSize: '5rem' }}>&#x1F4AB;</p>
      <h2>Oops! Page wandered off...</h2>
      <p>The page you're looking for doesn't exist or has been carried away by the wind.</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-primary">&#x1F3E0; Go Home</Link>
        <Link to="/stories" className="btn btn-outline">&#x1F4D6; Read Stories</Link>
      </div>
    </div>
  );
}