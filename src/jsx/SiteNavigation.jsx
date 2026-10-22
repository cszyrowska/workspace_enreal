import React from 'react';
import PartnersDropdown from './PartnersDropdown';
import '../css/SiteNavigation.css';

export default function SiteNavigation({ label = 'Main navigation' }) {
  return (
    <nav className="site-navigation" aria-label={label}>
      <a href="./#top">Home</a>
      <a href="./#about">About</a>
      <a href="./#community">Community</a>
      <a href="./#plymouth">Plymouth</a>
      <a href="./#contact">Contact</a>
      <PartnersDropdown />
    </nav>
  );
}
