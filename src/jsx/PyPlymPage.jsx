import React from 'react';
import { homeActions } from '../config';
import '../css/PyPlymPage.css';

export default function PyPlymPage() {
  return (
    <main id="main" className="pyplym-page wrap">
      <a className="page-back" href="./#plymouth">← Back to EnReal</a>
      <div className="pyplym-page-content">
        <p className="eyebrow">EnReal’s Plymouth chapter</p>
        <span className="status">Website in development</span>
        <h1>PyPlym.<br />Real questions. Shared discovery.</h1>
        <p className="pyplym-page-intro">A local home for exploring AI from both sides: how people learn and work, and how the technology behaves.</p>
        <p>The planned free monthly evenings bring builders and explorers together around a real task. No coding is needed for explorers — bring curiosity and a question to try.</p>
        <div className="pyplym-page-notice">
          <h2>A new website is on its way.</h2>
          <p>This is a temporary page while the PyPlym website is being created. Event dates, venue and registration will be shared once confirmed. Booking is not open here.</p>
        </div>
        <a className="button" href={homeActions.presentation.href}>See the vision <span aria-hidden="true">↗</span></a>
      </div>
    </main>
  );
}
