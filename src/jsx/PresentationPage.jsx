import React from 'react';
import { presentationUrl } from '../config';
import '../css/PresentationPage.css';

export default function PresentationPage() {
  return (
    <main id="main" className="presentation-page">
      <iframe
        src={presentationUrl}
        title="PyPlym AI Edition presentation"
        allow="fullscreen"
        allowFullScreen
      />
    </main>
  );
}
