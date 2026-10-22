import React from 'react';

const principles = [
  { title: 'Human-centred', description: 'People’s needs, experience and judgement come first.', icon: 'human' },
  { title: 'Practical', description: 'Real questions, useful experiments and something to try.', icon: 'practical' },
  { title: 'Open-minded', description: 'Different backgrounds and perspectives, learning together.', icon: 'open' },
];

function PrincipleIcon({ name }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === 'human' && <><circle cx="12" cy="9" r="4" /><path d="M5 21v-2a7 7 0 0 1 14 0v2M5 7 3 9m16-2 2 2" /></>}
      {name === 'practical' && <><path d="M8 14a6 6 0 1 1 8 0l-1 3H9ZM9 20h6M11 17v-6m2 6v-6M10 10l2 2 2-2" /></>}
      {name === 'open' && <><path d="M9 18H5l-3 3v-8a6 6 0 0 1 6-6h2M14 16h4l3 3V9a6 6 0 0 0-6-6h-1a6 6 0 0 0-6 6v1a6 6 0 0 0 6 6Z" /></>}
    </svg>
  );
}

export default function AboutEnReal() {
  return (
    <section className="about-enreal" id="about" aria-labelledby="about-enreal-title">
      <div className="wrap">
        <div className="about-enreal-layout">
          <div className="about-enreal-heading">
            <p className="eyebrow">About EnReal</p>
            <h2 id="about-enreal-title">A community for<br /><em>using AI well.</em></h2>
          </div>
          <div className="about-enreal-copy">
            <p>EnReal is a community being built to bring together people who are curious about AI — from those who are not technical to those who build with technology.</p>
            <p>We explore AI from both sides: how people learn, delegate, remember and judge, and how the technology behaves, where it fails and what we can do practically.</p>
            <p className="about-enreal-purpose">Our purpose is simple: thoughtful exploration, practical learning and real-world use of AI.</p>
          </div>
        </div>
        <div className="about-enreal-principles">
          {principles.map(({ title, description, icon }) => (
            <article className="about-principle" key={title}>
              <span className="about-principle-icon"><PrincipleIcon name={icon} /></span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
