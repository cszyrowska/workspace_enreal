import React from 'react';
import SiteNavigation from './SiteNavigation';
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap">
        <div className="footer-top">
          <a className="wordmark" href="./#top" aria-label="EnReal home">EnReal<span aria-hidden="true">.</span></a>
          <SiteNavigation label="Footer navigation" />
        </div>
        <div className="footer-bottom">
          <div className="footer-contact">
            <h2>Contact</h2>
            <p>Our public contact details are being confirmed.<br />We’ll share a way to get in touch here when it’s ready.</p>
          </div>
          <div className="footer-credit">
            <p>EnReal is operated by SoftOcean Ltd.</p>
            <p>First website prototype · Proposed visual direction</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
