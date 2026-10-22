import React from 'react';
import '../css/Audience.css';

export default function Audience() {
  return <section className="people section wrap" aria-labelledby="people-title">
    <p className="eyebrow">04 / Different perspectives, shared curiosity</p>
    <div className="people-grid">
      <h2 id="people-title">You don’t need to code.<br />You do need questions.</h2>
      <div>
        <p className="large-copy">For people who want to use AI well. For people who build with it. And for the conversations between them.</p>
        <p>You might bring an everyday task, a technical puzzle or a healthy dose of uncertainty. The idea is to learn alongside someone who sees it differently, with room for both first questions and deeper investigation.</p>
      </div>
    </div>
  </section>;
}
