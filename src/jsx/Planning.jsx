import React from 'react';
import '../css/Planning.css';

// Content: vision foundation §§2.1/3; PyPlym presentation slides 5/9;
// AI-Bench leader vision §§1–4; AI Workbench practitioner vision §§1/3.
const plans = [
  { title: 'Monthly online issue', type: 'issue', status: 'Planned', description: 'One topic, explored from the human and technical sides: a research note, lab note, practical “try this,” live online session and optional challenge. Format and access are still being explored.' },
  { title: 'PyPlym AI Edition', type: 'plymouth', status: 'Planned Plymouth chapter', description: 'Free monthly evenings taking the previous month’s online topic into practical work. The explorer brings a real task and drives; the builder guides the technology. Build something useful, with a method to reuse.' },
  { title: 'AI-Bench & AI Workbench', type: 'programmes', status: 'Planned programmes', description: 'AI-Bench: a peer group for leaders to test and measure one workflow change over 90 days. AI Workbench: a six-week Plymouth cohort for practitioners to build a real AI tool, evaluate it properly and share it at demo night.' },
  { title: 'Self-paced online courses', type: 'courses', status: 'Under investigation', description: 'Online learning focused on one practical result, designed to work at your own pace. Separate from the monthly issue and cohort programmes; the offer is still being investigated.' },
];

export default function Planning() {
  return (
    <section className="planning wrap" id="planning" aria-labelledby="planning-title">
      <div className="planning-heading">
        <p className="eyebrow">04 / Looking ahead</p>
        <h2 id="planning-title">What we’re<br /><em>planning.</em></h2>
        <p>One community, online and in Plymouth, with different ways to learn and build.</p>
        <p className="planning-note">These offers are being developed; they are not running yet.</p>
      </div>
      <ol className="planning-list">
        {plans.map(({ title, type, status, description }, index) => (
          <li className="planning-entry" key={type}>
            <span className="planning-number" aria-hidden="true">0{index + 1}</span>
            <div className="planning-entry-title">
              <p className="planning-status">{status}</p>
              <h3>{title}</h3>
            </div>
            <p className="planning-description">{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
