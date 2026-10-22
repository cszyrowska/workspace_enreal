import React from 'react';
import '../css/Header.css';
import SiteNavigation from './SiteNavigation';
import { presentationUrl } from '../config';

export default function Header({ isPresentation = false }) {
  if (isPresentation) {
    return (
      <header className="site-header presentation-header wrap">
        <a className="wordmark" href="./#top" aria-label="EnReal home">EnReal<span aria-hidden="true">.</span></a>
        <nav aria-label="Presentation navigation">
          <a href="./#plymouth">Plymouth</a>
          <a href={presentationUrl} target="_blank" rel="noopener noreferrer">Open presentation separately <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
    );
  }

  return <header className="site-header wrap">
    <a className="wordmark" href="./#top" aria-label="EnReal home">EnReal<span aria-hidden="true">.</span></a>
    <SiteNavigation />
  </header>;
}
