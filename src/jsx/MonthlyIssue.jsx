import React from 'react';
import '../css/MonthlyIssue.css';

export default function MonthlyIssue() {
  return (
    <section className="community" id="community" aria-labelledby="community-title">
      <div className="wrap">
        <div className="community-heading">
          <p className="eyebrow">03 / Find your kind of curious</p>
          <h2 id="community-title">A space for the <em>“what if?”</em><br />and the <em>“let’s build it.”</em></h2>
          <p>You don’t need the same skills to explore the same question.</p>
        </div>
        <div className="community-meeting">
          <article className="community-perspective curious-minds">
            <div className="community-art" aria-hidden="true">
              <svg width="240" height="140" viewBox="0 0 240 140">
                <path d="M57 95C18 44 89 1 126 41s-38 99-44 49 85-73 105-15-39 61-26 14" fill="none" stroke="#a07843" strokeWidth="2" strokeLinecap="round" />
                <circle cx="86" cy="61" r="34" fill="#cfb58d" opacity=".25" />
                <text x="108" y="99" fill="#775d3d" fontFamily="Georgia, serif" fontSize="72">?</text>
                <path d="M189 22v14m-7-7h14" stroke="#a07843" />
              </svg>
            </div>
            <p className="community-role">The curiosity</p>
            <h3>Curious minds.</h3>
            <p>A question from work. Something you want to learn. A feeling there might be a better way.</p>
            <span className="community-invitation">Bring your perspective.</span>
          </article>
          <div className="community-intersection">
            <span aria-hidden="true">×</span>
            <p>One real question.<br /><strong>Explore it together.</strong></p>
          </div>
          <article className="community-perspective community-builders">
            <div className="community-art" aria-hidden="true">
              <svg width="240" height="140" viewBox="0 0 240 140">
                <rect x="70" y="26" width="98" height="88" rx="5" fill="#c1d8d7" />
                <path d="M85 40h96v88H85Z" fill="none" stroke="#59818b" strokeWidth="1" />
                <path d="m104 60-18 16 18 16m43-32 18 16-18 16m-23-36-10 40" stroke="#24576b" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M64 108h36m-18-8v16" stroke="#a07843" />
              </svg>
            </div>
            <p className="community-role">The craft</p>
            <h3>Builders &amp; practitioners.</h3>
            <p>You like to make things work. Bring technical experience, test an idea and learn from a real task.</p>
            <span className="community-invitation">Bring your know-how.</span>
          </article>
        </div>
        <p className="community-closing">You can be both. <span>Curiosity is the common ground.</span></p>
      </div>
    </section>
  );
}
