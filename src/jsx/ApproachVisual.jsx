import React from 'react';
import '../css/ApproachVisual.css';

export default function ApproachVisual() {
  return (
    <figure className="approach-visual">
      <svg viewBox="0 0 560 570" role="img" aria-labelledby="visual-title visual-description">
        <title id="visual-title">A little curiosity. A new perspective.</title>
        <desc id="visual-description">
          An original illustration of a person using a laptop beside a
          precise, folded blue form. Beyond their shared table, a warm sunset meets
          a deep blue sea through an arched window.
        </desc>
        <defs>
          <linearGradient id="evening-sky" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0" stopColor="#17394e" />
            <stop offset="0.5" stopColor="#839599" />
            <stop offset="1" stopColor="#f3c9a3" />
          </linearGradient>
          <linearGradient id="evening-water" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#64828b" />
            <stop offset="1" stopColor="#14394c" />
          </linearGradient>
          <linearGradient id="paper-fold" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#84c6cf" />
            <stop offset="1" stopColor="#28637b" />
          </linearGradient>
          <radialGradient id="sun-halo">
            <stop stopColor="#ffdfab" stopOpacity="0.8" />
            <stop offset="0.45" stopColor="#f9cb99" stopOpacity="0.35" />
            <stop offset="1" stopColor="#f9cb99" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fold-halo">
            <stop stopColor="#9de6eb" stopOpacity="0.65" />
            <stop offset="0.55" stopColor="#69cedb" stopOpacity="0.25" />
            <stop offset="1" stopColor="#69cedb" stopOpacity="0" />
          </radialGradient>
          <clipPath id="window-arch">
            <path d="M95 432V218a185 185 0 0 1 370 0v214Z" />
          </clipPath>
        </defs>

        <ellipse cx="283" cy="520" rx="225" ry="22" fill="#dedbd0" opacity="0.5" />
        <path d="M76 434V219a204 204 0 0 1 408 0v215" fill="none" stroke="#dedfd7" />
        <g clipPath="url(#window-arch)">
          <path d="M95 28h370v405H95Z" fill="url(#evening-sky)" />
          <circle className="scene-sun-glow" cx="363" cy="277" r="105" fill="url(#sun-halo)" />
          <circle cx="363" cy="277" r="45" fill="#ffe0b4" />
          <path d="M95 294c63-28 93-16 143-4s92-12 136-4 67-8 91-14v160H95Z" fill="#6d8182" />
          <path d="M95 317c89-18 137 9 210-3s109-7 160-10v128H95Z" fill="url(#evening-water)" />
          <g className="scene-water" stroke="#d9c6ad" opacity="0.55" strokeLinecap="round">
            <path d="M336 328h47m-61 9h69m-49 10h30m-57 12h79m-50 14h27m-42 15h61" />
            <path d="M131 349h42m-13 22h39m205-28h26m-298 43h56" opacity="0.5" />
          </g>
          <g className="scene-stars" fill="#f4e9d4">
            <circle cx="178" cy="125" r="1.5" /><circle cx="321" cy="89" r="1.3" />
            <circle cx="402" cy="179" r="1.4" /><circle cx="249" cy="69" r="1" />
            <circle cx="142" cy="224" r="1" /><circle cx="373" cy="135" r="1" />
          </g>
          <path d="M215 199q9-9 18 0m3 3q7-7 14 0" fill="none" stroke="#344f5c" strokeWidth="1.5" />
        </g>

        {/* Broad cut-paper shapes keep the figure and chair visually distinct. */}
        <g className="scene-chair">
          <path d="M87 459l-11 60m65-58 15 59" fill="none" stroke="#947c60" strokeWidth="6" strokeLinecap="round" />
          <path d="M77 367q0-10 11-10h13l13 91-29 5Z" fill="#a2aaa0" />
          <path d="M85 451h73v13l-71 3Z" fill="#b29b7a" />
        </g>

        <g className="scene-seated-legs">
          <path d="M112 427l39-1 59 22-7 69h-16l-3-52-56-8Z" fill="#32444c" />
          <path d="M119 441l58 17-6 58h-16l-2-46-28-9Z" fill="#243840" />
          <path d="M154 509h17l13 11h-31Zm33 1h16l17 12h-34Z" fill="#202d33" />
        </g>

        {/* A curved torso and angular sleeve echo the organic/geometric pairing. */}
        <path d="M110 326q18-11 41 1l19 49-7 33 10 26q-30 13-62-1l-9-37q-8-44 8-71Z" fill="#244a5b" />
        <path d="M116 322l8-30 26 5 2 34" fill="#b67e60" />
        <g className="scene-head">
          <path d="M117 259q24-20 44 6l-1 29-14 17-25-13Z" fill="#d3a183" />
          <path d="M112 296q-26-29-7-51 17-21 43-7 23 12 15 34l-23-15-11 40Z" fill="#212e33" />
          <circle cx="108" cy="244" r="16" fill="#212e33" />
        </g>
        <path d="M146 335l35 48 47 18-9 14-65-16-35-44Z" fill="#346074" />
        <path d="M222 400l22 4 11 12-31-1-6-7Z" fill="#d3a183" />

        <g className="scene-fold">
          <ellipse className="scene-fold-glow" cx="393" cy="356" rx="95" ry="108" fill="url(#fold-halo)" />
          <path d="M331 383l61-103 67 91-69 64Z" fill="url(#paper-fold)" />
          <path d="M392 280l-2 155-59-52Z" fill="#153f56" />
          <path d="M392 280l24 90 43 1Z" fill="#b4dce0" />
          <path d="M390 435l26-65-85 13Z" fill="#427c91" />
          <path d="M392 280l-2 155m26-65-85 13" fill="none" stroke="#e3f1ee" strokeOpacity="0.4" />
        </g>

        <path d="M166 424l237-8 40 24-245 12Z" fill="#cba77b" />
        <path d="M198 452l245-12v8l-245 13-32-28v-9Z" fill="#a7825d" />
        <path d="M213 460l-8 65m210-76 11 73" fill="none" stroke="#213e4c" strokeWidth="7" />
        {/* Both objects sit on the tabletop plane, with soft contact shadows. */}
        <g className="scene-laptop">
          <path d="M222 430l70-7 23 10-73 9Z" fill="#785e48" opacity="0.2" />
          {/* The rear lid faces the viewer; the keyboard opens toward the person. */}
          <path d="M247 420l-7-51q-1-4 3-4l53-5q4 0 4 4l7 50Z" fill="#536e7a" stroke="#91a7ae" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M247 370l48-4 6 43-48 5Z" fill="#365461" />
          <path d="M249 372l44-4" fill="none" stroke="#6f8992" strokeWidth="1" />
          <path d="M247 420l60-6-24 17-60 5Z" fill="#a7b7bc" stroke="#6b838e" strokeWidth="1" strokeLinejoin="round" />
          <path d="M223 436l60-5 24-17v3l-23 18-60 5Z" fill="#6e8792" />
          <path d="M246 422l50-5-13 9-50 5Z" fill="#6e8792" />
          <path d="M245 425l43-4m-47 7 43-4" stroke="#a6bbc2" strokeWidth="0.8" />
          <path d="M230 432l12-1 4 2-12 1Z" fill="#8b9fa8" />
        </g>
        <g className="scene-coffee">
          <ellipse cx="336" cy="432" rx="15" ry="4" fill="#785e48" opacity="0.2" />
          <ellipse cx="336" cy="430" rx="14" ry="3" fill="#d9cbb3" />
          <path d="M345 412q13-2 11 7-1 7-11 6" fill="none" stroke="#ede2cd" strokeWidth="3.5" />
          <path d="M326 408l2 18q1 5 8 5t8-5l2-18Z" fill="#e9ddc7" />
          <path d="M329 412l1 13q0 3 3 4" fill="none" stroke="#faf1df" strokeWidth="1.5" />
          <ellipse cx="336" cy="408" rx="10" ry="3.5" fill="#f7edda" />
          <ellipse cx="336" cy="408" rx="7.5" ry="2.2" fill="#74533d" />
          <path className="scene-steam" d="M335 399q-5-6 0-12t0-10" fill="none" stroke="#a5b1aa" strokeWidth="1.3" strokeLinecap="round" />
        </g>

        {/* Small marginal marks add a playful editorial feel. */}
        <path d="M474 98v16m-8-8h16M58 303v12m-6-6h12" stroke="#a18258" strokeWidth="1.4" />
        <path d="M451 468q40 12 43-24m-9 4 10-6 3 12" fill="none" stroke="#8f9e99" strokeWidth="1.3" />
      </svg>
      <figcaption>
        <p>A little curiosity. <span>A new perspective.</span></p>
      </figcaption>
    </figure>
  );
}
