import React, { useEffect, useId, useRef, useState } from 'react';
import { homeActions } from '../config';
import '../css/PartnersDropdown.css';

export default function PartnersDropdown() {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const pinned = useRef(false);
  const container = useRef(null);
  const trigger = useRef(null);

  function close() {
    pinned.current = false;
    setOpen(false);
  }

  useEffect(() => {
    function outside(event) {
      if (!container.current?.contains(event.target)) close();
    }
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, []);

  return (
    <div
      className="partners-dropdown"
      ref={container}
      onPointerEnter={(event) => { if (event.pointerType === 'mouse') setOpen(true); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          close();
          trigger.current.focus();
        }
      }}
    >
      <button
        className="partners-trigger"
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          pinned.current = !pinned.current;
          setOpen(pinned.current);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setOpen(true);
            requestAnimationFrame(() => container.current.querySelector('a')?.focus());
          }
        }}
      >
        Partners <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
      </button>
      <div className="partners-panel" id={panelId} hidden={!open}>
        <div className="partners-panel-heading">
          <h2>Partners</h2>
          <button type="button" className="partners-close" aria-label="Close partners" onClick={() => { close(); trigger.current.focus(); }}>×</button>
        </div>
        <p className="partners-caption">People. Ideas. Local connections.</p>
        <ul>
          <li>
            <a href={homeActions.pyplym.href} className="partners-link">
              <span className="partners-emblem" aria-hidden="true">Py</span>
              <span><strong>PyPlym</strong><span className="partners-description">EnReal’s Plymouth chapter</span></span>
              <span className="partners-link-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
        <p className="partners-footnote">A local connection. A shared curiosity.</p>
      </div>
    </div>
  );
}
