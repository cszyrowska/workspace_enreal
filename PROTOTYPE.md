# EnReal landing-page prototype

First local visual iteration on `website-creation`. The existing README is preserved.

## Local review

Use Node.js 22.12+ (or 20.19+).

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open the Local URL printed by Vite (normally http://127.0.0.1:5173).

```sh
npm run build
npm run preview -- --host 127.0.0.1
```

The build outputs `dist/`. This is a static frontend: no backend, accounts, registration, remote fonts or external services.

## Edit points

- `src/config.js`: the two user-requested hero actions, PyPlym holding-page destination, local presentation source and supplied public presentation URL. Replace `homeActions.pyplym.href` when the new PyPlym website is ready.
- `src/main.jsx`: application entry, query-page selection and shared header/footer composition. `?page=pyplym` opens the temporary chapter page; `?page=presentation` opens the deck viewer. These routes work on static hosting without server rewrites, including direct links, refresh and browser back/forward. Header/footer home links clear the query before navigating to a section.
- `src/jsx/Home.jsx`: home page composition. Each section and the original inline SVG have their own component in `src/jsx/` and a matching stylesheet in `src/css/`.
- `src/jsx/ApproachVisual.jsx`: original illustration. The hero illustration uses a person and a precise folded blue form using an unbranded laptop with a coffee cup resting on the desk against an arched dusk seascape. It is an original SVG, not a logo or product screenshot. The hero uses a local Georgia serif for an editorial direction; body text uses the system sans-serif stack.
- `src/styles.css`: shared typography, utilities, focus styles, reduced-motion handling and proposed palette. Page and section layouts and breakpoints live in the matching `src/css/` files. Local system fonts only, including Georgia for the hero heading and illustration caption. Navy #071B2B, cyan #28B6D1, warm off-white #F4F5F2, ink #172832 and gold #D0A66A; darker teal is used for text contrast. These are proposals, not approved brand specifications.
- `index.html`: title, description and document metadata.

## Content and handover

The repository contained only a workspace README, with no newer approved content, assets, CTA or verified public routes. Copy uses the supplied brief as its baseline. No external research repository or personal brand assets were copied.

The monthly issue, its access model and PyPlym are described as planned. No unverified event/issue dates, venues, contact addresses, domain links or live product claims are displayed. EnReal is identified as operated by SoftOcean Ltd. Further programmes are omitted to keep this introduction focused.

Before final acceptance:

- The user requested the two current discovery actions. Confirm final acceptance with Tomasz; the PyPlym destination is still a temporary holding page until the separate website is ready. Neither action is a registration promise.
- Review and approve proposed copy, palette, layout and the planned-offer status with Tomasz.
- Confirm domain ownership/purchase, hosting responsibility and public deployment separately. No domain or hosting claim is made and nothing has been deployed.
- Supply the implementation ticket/source repository or authorised preview link for the company handover. Local source alone does not establish those external links.

No approved EnReal logo was available; the page uses a text wordmark. The supplied presentation includes its own image assets.

## Verification performed

- `npm install --no-audit --no-fund --fetch-retries=0 --fetch-timeout=20000 --cache /tmp/enreal-npm-cache`: passed; lockfile generated. Restricted-environment DNS initially prevented installation; the permitted network retry succeeded.
- `npm run build`: passed (Vite 7.3.7, 24 modules transformed).
- `npm run dev -- --host 127.0.0.1`: started successfully; local HTTP GET via `curl --fail --silent --show-error http://127.0.0.1:5173/` returned the expected page. Local sockets required sandbox permission. Verification server stopped after checks.
- `git diff --check`: passed.
- Source anchor check: all seven static anchor links and the configured CTA resolve to existing section IDs.

No test or lint suite existed. No browser automation/preview tool was available, so rendered mobile/desktop appearance and keyboard behaviour have not been browser-tested. Review those locally before acceptance. Responsive CSS includes phone/tablet breakpoints, visible focus, a skip link and reduced-motion handling.

## Current content authority

The user designated the seven Markdown documents in `information/` as the source of truth for subsequent work. `AGENTS.md` records the source map, core direction and claim boundaries for future sessions. The foundation is the overall vision; the individual offer documents supply their intended audiences and methods; c-38 supplies landing-page acceptance. This source adoption does not establish that the proposed launches, prices, partners, platform usage or sign-up routes are live, and does not mark c-38 accepted or complete.


## PyPlym and presentation pages

The home page has two hero buttons: **Discover PyPlym** and **See the vision**. The local chapter section is immediately below the hero, with section numbers adjusted to the new reading order. Its button shares the configurable PyPlym destination.

- `src/jsx/PyPlymPage.jsx` and `src/css/PyPlymPage.css`: clearly labelled temporary page for the future PyPlym website; no fabricated booking or registration.
- `src/jsx/PresentationPage.jsx` and `src/css/PresentationPage.css`: local iframe viewer beneath the shared EnReal header, slide-control guidance, standalone viewing link and the user-supplied public presentation link.
- `presentation/01-pyplym-ai-edition.html` and `presentation/assets/`: supplied deck and images, preserved unchanged. It is a **PyPlym AI Edition** deck, so the viewer introduces it as EnReal's approach through its planned Plymouth chapter, rather than relabelling it a general EnReal deck.
- `vite.config.js`: uses `presentation/` as Vite's public directory, serving/copying the standalone HTML and relative images unchanged. No duplicated deck or extra dependency is needed. Its published local URL is `/01-pyplym-ai-edition.html`.

Verification for this change: `npm run build` passed (48 modules); `git diff --check` passed. Production preview HTTP checks passed for the home page, both query-page URLs, standalone deck and all four referenced images. Production deck bytes match the supplied original. The owned preview server was stopped after verification. These are HTTP/build checks, not browser rendering or interaction tests. The web reader could not access the supplied Netlify URL, so the viewer uses the local deck and the external link remains user-supplied rather than independently verified. No publication was performed.


### Presentation viewing update

The user revised the presentation requirement: **See the vision** now navigates directly to `/01-pyplym-ai-edition.html`, served unchanged from `presentation/01-pyplym-ai-edition.html`. This standalone page shows only the supplied presentation, with no EnReal header/footer, iframe or introductory content. The former viewer component and stylesheet were removed. Old `?page=presentation` links redirect to the standalone deck. This supersedes the wrapper-page description above. PyPlym's holding page is unchanged.


### Current presentation destination

The user requested that **See the vision** link directly to `https://pyplym-ai-edition.netlify.app/`. The destination is set in `src/config.js`; the local presentation files remain available unchanged. This supersedes the local presentation destination above.

### Presentation navigation header

The latest request restores a minimal local presentation page at `?page=presentation`, embedding the **public Netlify URL** configured as `presentationUrl`. It retains the shared EnReal header plus an explicit Back to EnReal link above the deck; no introductory content or footer is shown. A separate-tab link is provided for standalone viewing. The external site's contents are unchanged. Build and whitespace checks pass; external iframe rendering and its hosting policy have not been browser-verified.


### Presentation-only header refinement

The presentation page now uses only the light shared-header variant: EnReal returns home, Plymouth opens the PyPlym holding page, and Open presentation separately opens the public deck in a new tab. The extra back-link toolbar is removed. The default home header markup and styling are preserved.

