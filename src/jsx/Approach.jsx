import React from 'react';

const perspectives = [
  {
    name: 'human',
    label: 'The human question',
    title: 'Start with what matters.',
    description: 'Bring a real question about how you learn, decide or work.',
  },
  {
    name: 'machine',
    label: 'The machine perspective',
    title: 'Look under the surface.',
    description: 'Explore what AI can do, where it fails and what to check.',
  },
  {
    name: 'practice',
    label: 'The practical outcome',
    title: 'Try it. Keep your judgement.',
    description: 'Try something useful and keep your judgement in the loop.',
  },
];

function PerspectiveMotif({ name }) {
  return (
    <svg width="240" height="130" viewBox="0 0 240 130" aria-hidden="true" className="perspective-motif">
      {name === 'human' && <>
        <path d="M67 96C23 62 62 12 104 30S161 111 113 109 78 38 130 36s64 58 33 59" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="164" cy="95" r="6" fill="currentColor" />
        <path d="M188 26v14m-7-7h14" stroke="currentColor" />
        <circle cx="73" cy="56" r="21" fill="currentColor" opacity="0.1" />
      </>}
      {name === 'machine' && <>
        <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
          {[60, 84, 108, 132, 156, 180].map((x) => <path key={x} d={`M${x} 20v90`} />)}
          {[20, 44, 68, 92, 110].map((y) => <path key={y} d={`M60 ${y}h120`} />)}
        </g>
        <rect x="84" y="44" width="48" height="48" rx="2" fill="currentColor" opacity="0.14" />
        <path d="M84 68h24V44h48v48h24" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="84" cy="68" r="5" fill="currentColor" />
        <circle cx="180" cy="92" r="5" fill="currentColor" />
      </>}
      {name === 'practice' && <>
        <path d="M64 35q38-22 63 12t-2 55q-47 23-63-11t2-56Z" fill="#d0a66a" opacity="0.5" />
        <path d="M119 26h65v74h-65Z" fill="#32819a" opacity="0.25" transform="rotate(12 151 63)" />
        <circle cx="124" cy="69" r="29" fill="#173b4d" />
        <path d="M111 69l9 9 18-20" fill="none" stroke="#f4f5f2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M188 22v12m-6-6h12" stroke="currentColor" />
      </>}
    </svg>
  );
}

export default function Approach() {
  return (
    <section className="approach" id="idea" aria-label="The EnReal approach">
      <div className="wrap approach-panel">
        <div className="steps">
          {perspectives.map((perspective, index) => (
            <article className={`perspective perspective-${perspective.name}`} key={perspective.name}>
              <div className="perspective-topline">
                <span className="perspective-number">0{index + 1}</span>
              </div>
              <PerspectiveMotif name={perspective.name} />
              <p className="small-label">{perspective.label}</p>
              <h3>{perspective.title}</h3>
              <p className="perspective-description">{perspective.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
