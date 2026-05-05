import { personal, experience, education } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '3+', label: 'Projects Shipped' },
  { value: '3', label: 'Certifications' },
  { value: '15+', label: 'Technologies' },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section about" aria-label="About me">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <span className="section-label">About</span>
          <h2 className="section-title">A little about me</h2>
        </div>

        <div className="about__grid">
          {/* Text */}
          <div className="about__text">
            {personal.about.split('\n').map((para, i) =>
              para.trim() ? <p key={i} className="about__paragraph fade-up">{para.trim()}</p> : null
            )}

            <div className="about__quick-facts fade-up">
              <div className="about__fact">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {personal.location}
              </div>
              <div className="about__fact">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                Open to remote &amp; hybrid roles
              </div>
              <div className="about__fact">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
                Backend, Cloud &amp; Full-Stack
              </div>
            </div>

            {/* Experience */}
            <div className="about__timeline fade-up">
              <h3 className="about__timeline-heading">Experience</h3>
              {experience.map(exp => (
                <div key={exp.id} className="about__timeline-item">
                  <div className="about__timeline-dot" aria-hidden="true" />
                  <div className="about__timeline-content">
                    <div className="about__timeline-header">
                      <strong className="about__timeline-role">{exp.role}</strong>
                      <span className="about__timeline-period">{exp.period}</span>
                    </div>
                    <span className="about__timeline-company">{exp.company} · {exp.location}</span>
                    <ul className="about__timeline-points">
                      {exp.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <h3 className="about__timeline-heading" style={{ marginTop: '28px' }}>Education</h3>
              {education.map(edu => (
                <div key={edu.id} className="about__timeline-item">
                  <div className="about__timeline-dot about__timeline-dot--edu" aria-hidden="true" />
                  <div className="about__timeline-content">
                    <div className="about__timeline-header">
                      <strong className="about__timeline-role">{edu.degree}</strong>
                      <span className="about__timeline-period">{edu.period}</span>
                    </div>
                    <span className="about__timeline-company">
                      {edu.institution}
                      {edu.location && ` · ${edu.location}`}
                      {edu.score && ` · ${edu.score}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="about__sidebar">
            <div className="about__stats fade-up">
              {stats.map(stat => (
                <div key={stat.label} className="about__stat card">
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about__stack-note card fade-up">
              <span className="about__stack-title mono">Current Stack</span>
              <div className="about__stack-chips">
                {['Java', 'MuleSoft', 'TIBCO', 'Docker', 'AWS', 'PostgreSQL', 'React.js'].map(t => (
                  <span key={t} className="about__stack-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
