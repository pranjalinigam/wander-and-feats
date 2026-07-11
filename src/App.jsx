import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Destinations from './pages/Destinations';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import StoryDetail from './pages/StoryDetail';
import DestinationDetail from './pages/DestinationDetail';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/story/:slug" element={<StoryDetail />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:slug" element={<DestinationDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}