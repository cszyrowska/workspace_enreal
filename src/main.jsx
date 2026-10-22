import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Header from './jsx/Header';
import Footer from './jsx/Footer';
import Home from './jsx/Home';
import { homeActions } from './config';
import PresentationPage from './jsx/PresentationPage';

function App() {
  const page = new URLSearchParams(window.location.search).get('page');
  useEffect(() => {
    // Cross-page anchors can be resolved before React has mounted their targets.
    if (!window.location.hash) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [page]);
  // Keep existing chapter bookmarks working after moving to the dedicated site.
  if (page === 'pyplym') {
    window.location.replace(homeActions.pyplym.href);
    return null;
  }
  const Page = page === 'presentation' ? PresentationPage : Home;
  document.title = page === 'presentation' ? 'The vision — EnReal' : 'EnReal — Human judgement. Technical honesty.';
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header isPresentation={page === 'presentation'} />
      <Page />
      {page !== 'presentation' && <Footer />}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
