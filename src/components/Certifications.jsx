import { certifications } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Certifications.css';

const certLogos = {
  'AWS Essential Training for Developers': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  'DevOps Professional Certificate': 'https://cdn.worldvectorlogo.com/logos/devops-2.svg',
  'Cloud Computing Fundamentals': 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'Oracle Java Foundations': 'https://cdn.worldvectorlogo.com/logos/java-14.svg',
};

const defaultLogo = 'https://cdn.worldvectorlogo.com/logos/verified.svg';

export default function Certifications() {
  const ref = useScrollAnimation();

  return (
    <section id="certifications" className="section certifications" aria-label="Certifications">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Verified credentials</h2>
          <p className="section-subtitle">
            Industry certifications validating my expertise in cloud, integration, and software engineering.
          </p>
        </div>

        <div className="certs__grid">
          {certifications.map(cert => (
            <div key={cert.id} className="cert__card card fade-up">
              <div className="cert__icon">
                <img src={certLogos[cert.name] || defaultLogo} alt={cert.name} className="cert__logo-img" loading="lazy" />
              </div>
              <div className="cert__body">
                <h3 className="cert__name">{cert.name}</h3>
                <span className="cert__issuer">{cert.issuer}</span>
              </div>
              <div className="cert__badge" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
