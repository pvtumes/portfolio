import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Toaster } from 'react-hot-toast';
import { useTheme } from './hooks/useTheme';
import { useGlobalScrollAnimations } from './hooks/useGlobalScrollAnimations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const { theme, toggle } = useTheme();
  useGlobalScrollAnimations();

  useEffect(() => {
    // Replace G-XXXXXXXXXX with your actual Google Analytics Measurement ID
    ReactGA.initialize("G-XXXXXXXXXX");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="app">
      <Toaster 
        position="bottom-right" 
        toastOptions={{ 
          style: { background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--border)' } 
        }} 
      />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
