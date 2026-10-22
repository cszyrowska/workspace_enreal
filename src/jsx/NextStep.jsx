import React from 'react';
import '../css/NextStep.css';
import lighthouse from '../assets/Red-Striped Lighthouse Harbor at Golden Hour.png';

export default function NextStep() {
  return (
    <section className="next-step" id="next-step" aria-labelledby="next-title">
      <img className="stay-informed-image" src={lighthouse} width="1536" height="1024" loading="lazy" alt="" />
      <div className="wrap stay-informed-content">
        <p className="eyebrow">Stay informed</p>
        <h2 id="next-title">Be part of<br /><em>what’s next.</em></h2>
        <p>EnReal is taking shape. Follow what’s developing —<br className="stay-informed-break" /> the community, the ideas and the plans ahead.</p>
        <details className="stay-informed-details">
          <summary>Stay informed <span aria-hidden="true">↗</span></summary>
          <p>Our update sign-up is being prepared. There’s no mailing list to join on this page yet; check back for a confirmed way to keep in touch.</p>
        </details>
        <p className="stay-informed-status">Sign-up details coming soon.</p>
      </div>
    </section>
  );
}
