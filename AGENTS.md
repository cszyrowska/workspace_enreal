# EnReal working guidance

## Source of truth

The user has designated the Markdown files in `information/` as the source of truth for EnReal concepts, themes, offers and future work. Read relevant documents before content, design or implementation changes; check for newly added or updated Markdown files. Use `information/00-vision-foundation.md` for the overall vision, naming, structure, principles and claim boundaries, and `information/c-38_create-first-enreal-landing-page.md` for the landing-page brief and acceptance requirements. Read the offer-specific documents for work concerning those offers:

- `01-pyplym-ai-edition.md`: Plymouth chapter and builder–explorer evenings.
- `02-ai-b-partners.md`: partner perspective on the two programmes.
- `03-ai-bench-leaders.md`: leaders' peer group and measured workflow changes.
- `04-ai-workbench-practitioners.md`: practitioners' project-based programme.
- `11-content-engine.md`: research/lab notes, content reuse and proposed publishing pilot.

These are internal vision documents, not proof of current delivery. Retain their planned, assumption, unchecked and permission labels. Conditional launch scripts such as “Issue #1 is running now” are usable only when the document's stated prerequisites are verified. Do not convert proposals, dates, prices, named prospective partners or platforms into live public claims. Missing linked documents are unresolved sources, not permission to invent their contents. Follow the user's current explicit instructions when they revise a direction.

## Direction to preserve

- EnReal is the community, with an online home and planned monthly issues; PyPlym AI Edition is its Plymouth chapter. SoftOcean Ltd operates EnReal; ProDanX is the platform engine, not the public community identity. Claim actual platform use only with evidence.
- Human × Machine is the conceptual spine: learn, delegate, remember, judge, act, create together. Connect a human mechanism to machine behaviour, limitations and a practical task; preserve human judgement and capability.
- Include both non-technical explorers and technical builders without diluting technical depth. In PyPlym's planned pairing, the explorer drives and the builder navigates.
- AI-Bench is a planned leaders' peer group: baseline a workflow, make a bounded change, measure, check unaided capability, then keep/adapt/drop. AI Workbench is a planned practitioners' programme: build a real tool, evaluate and harden it. Do not conflate their audiences or formats.
- Use thoughtful, warm, human-centred visuals and technically honest language. Avoid hype, robot imagery, sales-room framing and unsupported research generalisations. Research claims need source reading and accurate scope; internal drafts alone do not verify them.
- Keep internal operational, contractual and commercial details out of public copy unless needed and explicitly suitable. Named partnerships and personal stories require the permissions described in the sources.
- A working, Tomasz-agreed primary action, source/ticket linkage, domain/hosting handover and Tomasz's review remain separate acceptance requirements. Do not mark the company task accepted or done without evidence; preserve human Comments and existing Logs.

## Repository conventions

- Keep work on `website-creation`; do not commit, push, merge or publish without instruction. Preserve existing user changes.
- Keep `main.jsx`, `styles.css` and `config.js` directly in `src/`.
- Use `src/jsx/` for JSX components and `src/css/` for matching component stylesheets. Home and every section have their own JSX/CSS files; shared setup and styles stay at the `src` root.
- Preserve the user's accepted visual refinements unless the requested work changes them. Use reduced-motion preferences for animation.

## Visual verification

The user requires rendered visual checks before handing over visual changes. Use the available local Chrome browser to capture and inspect desktop and mobile screenshots, including the affected section. Build success alone is insufficient. Check for missing styles, oversized SVGs, clipping and horizontal overflow. If browser verification is blocked, report that explicitly and do not claim the visual result has been checked. Keep browser QA helpers temporary rather than adding unnecessary project dependencies.
