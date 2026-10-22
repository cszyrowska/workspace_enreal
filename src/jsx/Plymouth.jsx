import React from 'react';
import '../css/Plymouth.css';
import { homeActions } from '../config';
import plymouthHarbour from '../assets/Plymouth Harbour Collage at Golden Hour.png';

export default function Plymouth() {
  return (
    <section className="plymouth wrap" id="plymouth" aria-labelledby="plymouth-title">
      <p className="eyebrow">01 / A local connection</p>
      <div className="plymouth-grid">
        <div className="plymouth-copy">
          <span className="status">Planned chapter</span>
          <h2 id="plymouth-title">Meet PyPlym<span>.</span><br /><em>A shared curiosity.<br />A place to connect.</em></h2>
          <p>EnReal’s planned Plymouth chapter brings the human side of AI into the room — with free monthly evenings for exploring, questioning and building together.</p>
          <p>Builders and explorers, side by side. Bring a real task, learn from a different perspective and try something practical. No coding needed for explorers.</p>
          <a className="button" href={homeActions.pyplym.href}>Explore PyPlym <span aria-hidden="true">↗</span></a>
          <p className="plymouth-pending">The first gathering, venue and booking details are still to be confirmed.</p>
        </div>
        <figure className="plymouth-artwork">
          <img src={plymouthHarbour} width="1536" height="1024" loading="lazy" alt="Golden-hour collage of Plymouth’s waterfront, Smeaton’s Tower and sailing boats, layered with abstract circular shapes." />
          <figcaption><span>Plymouth, by the water</span><span>Human × Machine · Together, locally</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
