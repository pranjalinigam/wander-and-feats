import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="logo">✦ Wander &amp; Whimsy</div>
          <p style={{ marginTop: 12, fontSize: '0.85rem', lineHeight: 1.6 }}>
            A cozy corner for travel stories, coffee diaries, and the little
            moments that make life beautiful.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/stories">Stories</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div>
          <h4>Categories</h4>
          <ul>
            <li><Link to="/stories">Travel</Link></li>
            <li><Link to="/stories">Diaries</Link></li>
            <li><Link to="/stories">Coffee</Link></li>
            <li><Link to="/stories">Food</Link></li>
          </ul>
        </div>

        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">FAQ</Link></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Wander &amp; Whimsy. Made with lots of tea &hearts; and daydreams.
      </div>
    </footer>
  );
}