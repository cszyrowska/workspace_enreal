import React from 'react';
import '../css/Hero.css';
import { homeActions } from '../config';
import ApproachVisual from './ApproachVisual';

export default function Hero() {
  return <section className="hero-section" id="top" aria-labelledby="hero-title">
    <div className="hero wrap">
    <div className="hero-copy">
      <p className="eyebrow">Human × Machine</p>
      <div className="hero-title-row">
        <h1 id="hero-title">EnReal<span className="cyan">.</span></h1>
        <p className="hero-name-meaning">Engineering Reality</p>
      </div>
      <p className="hero-tagline">AI, human first.</p>
      <p className="hero-subtitle">Built with technical honesty.</p>
      <p className="intro">EnReal is a community being developed for people who want to use AI well. We explore how people learn, decide and work alongside what AI can do, where it fails and what to try in practice.</p>
      <div className="hero-actions" aria-label="Explore EnReal">
        <a className="button" href={homeActions.pyplym.href}>{homeActions.pyplym.label}<span aria-hidden="true">↗</span></a>
        <a className="button button-secondary" href={homeActions.presentation.href}>{homeActions.presentation.label}<span aria-hidden="true">▷</span></a>
      </div>
      <p className="cta-caption">Our Plymouth chapter, and the thinking behind it.</p>
    </div>
    <ApproachVisual />
    <div className="hero-bottom">
      <span>Curiosity, with a practical purpose.</span>
      <a href="#idea">Discover the approach <span aria-hidden="true">↓</span></a>
    </div>
    </div>
  </section>;
}
