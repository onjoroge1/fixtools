# Existing FixTools Feature Inventory (PR1 baseline)
Snapshot date: 2026-10-27. **Scope:** public web observations; **not** code verification. Site copy may be stale, contradictory or inaccurate. Evidence label: OBSERVED_SITE = surfaced in public UI/copy, NOT verified working end-to-end; UNKNOWN_CODE = implementation not confirmed.

## Public sources
- https://www.fixtools.io/tools — claims 87 free tools in 21 categories, though category list includes AI and mixed processing modes.
- https://www.fixtools.io/ai — AI index, fourteen standalone eligible text tools, Document AI, model/tool resources.
- https://www.fixtools.io/workspace — local-browser workflow history, saved-tool placeholders; explicitly states account sync pending.
- https://www.fixtools.io/ai/documents — one-PDF browser-session extraction, three paid outputs; says original PDF stays local and extracted text sent.
- https://www.fixtools.io/ai/pricing — advertises free text quota and paid credits, Day Pass/Monthly/Pro.

## Category census (public /tools page; counts are self-reported, not deduplicated tool URLs)
| Category | Advertised count | Classification / target |
|---|---:|---|
| JSON | 13 | Free deterministic; AI repair separate premium |
| HTML | 14 | Free deterministic; AI debugging separate premium |
| CSS | 19 | Free deterministic; AI design advice separate premium |
| Image | not shown | Free edit/conversion; premium intelligent edits |
| PDF | not shown | Free mechanics; premium understanding/reconstruction |
| AI | 8 on generic index | Mixed; audit actual routes/provider usage |
| Models & AI Stacks | 15 | Informational content; not automatically premium |
| SEO | 4 | Free deterministic; provider-backed copy premium |
| Conversion | 14 | Free deterministic |
| Text | 3 | Free deterministic |
| Utility | 5 | Free deterministic |
| Web | 12 | Free deterministic; website AI analysis premium |
| Video | 3 | Free compression/subtitles/GIF; AI versions premium |
| Audio | 2 | Free waveform/recording; AI transcript premium |
| Design | 5 | Free deterministic; generative design premium |
| Language | 4 | Free drills; AI adaptive tutor premium if later validated |
| Developer | 6 | Free regex/diff/UUID; AI bugfix premium |
| Regex | 9 | Free deterministic |
| Claude Developer | 3 | Inspect provider behavior individually |
| Game | 9 | Existing games remain free |
| Translation | 15 | Determine local vs provider backed; no blanket free classification |

**Caution:** totals overlap/inconsistent: category-specific counts sum beyond '87'. This is not a verified route count. A repo crawl must produce route-level canonical inventory before any migration.

## Confirmed public surfaces (OBSERVED_SITE, UNKNOWN_CODE)
| Surface | Observed description | State for planned workspace |
|---|---|---|
| /tools | public catalog; promises no sign-in and browser processing | Retain free entry point |
| /ai | premium Document AI plus eligible free low-cost text AI | Redesign as discovery index |
| /workspace | recent workflow actions local to browser, saved tool placeholders; no account sync per copy | Extend/replace with authenticated dashboard; preserve anonymous local data |
| /ai/documents | PDF summarize, PDF→quiz, PDF→flashcards in same browser tab | First migration candidate |
| /ai/pricing | Day Pass $2.99/100 credits/24h; Monthly $9.99/1500; Pro $19.99/5000; 5 free daily eligible text AI | Reconcile with billing backend; planned all provider-backed AI premium conflicts with current free quota |

### Advertised AI tools at /ai
Document: pdf-summarizer, pdf-to-quiz, pdf-to-flashcards (paid per site).
Eligible text: quiz-generator, prompt-generator, prompt-improver, email-writer, code-explainer, ai-humanizer, transcript-summarizer, resume-tailor, cover-letter-generator, citation-generator, seo-title-generator, meta-description-rewriter, blog-outliner, job-description-writer.
Other linked resources: model atlas, code reviewer, interview question generator; determine whether provider calls are made.

### Advertised credit table
| Tool ID | Current advertised credits/run | Migration |
|---|---:|---|
| quiz-generator | 3 | premium transition |
| prompt-generator | 1 | premium transition |
| prompt-improver | 1 | premium transition |
| email-writer | 2 | premium transition |
| code-explainer | 2 | premium transition |
| ai-humanizer | 2 | premium transition |
| pdf-summarizer | 5 | keep premium |
| pdf-to-quiz | 5 | keep premium |
| pdf-to-flashcards | 5 | keep premium |
| transcript-summarizer | 3 | premium transition |
| resume-tailor | 5 | premium transition |
| cover-letter-generator | 4 | premium transition |
| citation-generator | 1 | verify deterministic vs provider-backed first |
| seo-title-generator | 1 | premium transition |
| meta-description-rewriter | 1 | premium transition |
| job-description-writer | 2 | premium transition |
| blog-outliner | 2 | premium transition |

## Verification backlog before PR2/PR3
1. Identify active deployed frontend/backend repository and record default commit SHA; guessed root paths package.json, README.md, app/workspace/page.tsx, src/app/workspace/page.tsx did not resolve in accessible onjoroge1/fixtools default branch.
2. Enumerate actual routes from framework manifest/sitemap, annotate aliases, localized duplicates and canonical URLs.
3. For every tool, identify handler, execution location, provider-backed vs deterministic, upload behavior, export type, auth requirement, analytics and current pricing class.
4. Verify Stripe products, checkout, credit ledger, granted credits, webhook idempotency, plan expiry and whether advertised buttons work.
5. Verify current /workspace local state implementation and safe account migration.
6. Ensure marketing claims '100% browser-only', 'no account' and 'all free' are scoped correctly; /ai and /ai/documents descriptions already contradict blanket /tools claims.
7. Record QA/smoke results for each feature; public surface alone is not proof of functionality.
