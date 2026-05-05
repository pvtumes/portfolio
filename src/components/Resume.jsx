import ReactGA from 'react-ga4';
import { personal } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Resume.css';

export default function Resume() {
  const ref = useScrollAnimation();

  const handleDownload = () => {
    ReactGA.event({
      category: 'Resume',
      action: 'Download',
      label: 'PDF Download'
    });
  };

  return (
    <section id="resume" className="section resume" aria-label="Resume">
      <div className="container">
        <div className="resume__card card fade-up" ref={ref}>
          <div className="resume__left">
            <div className="resume__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <div>
              <h2 className="resume__title">My Resume</h2>
              <p className="resume__desc">
                Get a full overview of my experience, education, and skills in one document.
              </p>
            </div>
          </div>
          <a
            href={personal.resume}
            download
            onClick={handleDownload}
            className="btn btn-primary resume__btn"
            id="resume-download"
            aria-label="Download Resume PDF"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
