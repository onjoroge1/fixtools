# FixTools AI Platform — Product Requirements (PR1)
Status: Proposed / documentation-only. Date: 2026-10-27. Owner: FixTools.
Related: [existing feature inventory](./EXISTING_INVENTORY.md) · [AI tool catalog](./AI_TOOL_CATALOG.md)

## 1. Product decision
**Every conventional, deterministic FixTools utility remains free and accessible without sign-in. Every provider-backed generative/understanding AI tool becomes premium, metered and accessed from a single authenticated AI Workspace.** Preserve all existing public tool URLs and SEO entry points. Do not move deterministic features behind a paywall. All current anonymous AI free allowances need a deliberate, separately approved migration and communications plan.

Positioning: **"Free tools for everyday tasks. Powerful AI for everything else."**

## 2. Problems, user stories, success
- Casual visitor: I can convert/compress/format without a login, subscription or AI credits.
- AI visitor from search: I see what output the AI tool creates, what goes to a provider, its estimated credit cost, and can sign in without losing my task context.
- Paid individual: I can open any AI tool from a consistent sidebar, upload/enter inputs, estimate credits, execute, review, download and optionally save outputs.
- Returning user: I can find prior jobs and reusable assets in a persistent project, subject to retention choices.
- Support/admin: I can diagnose jobs, reconcile credit reservations/charges/refunds and resolve entitlements without viewing sensitive content by default.

North-star metric: **weekly distinct paying users with >=1 successfully downloaded or saved AI result**. Supporting: public→AI click-through, sign-up completion, first paid job, successful outputs, repeat 7/30d usage, cost per successful job, gross margin, credit reconciliation, error and refund rates. Instrument events as consented aggregates with funnel IDs; do not treat raw clicks as conversion rates.

## 3. Information architecture
Public: /tools and existing deterministic category/tool routes; /ai as premium discovery index; each AI tool has an SEO landing page with examples, input/privacy disclosure and CTA.
Authenticated: /app (home); /app/tools/{toolId}; /app/projects; /app/projects/{projectId}; /app/history; /app/credits; /app/billing; /app/settings. Suggested paths; routing not yet approved.
Sidebar: Dashboard, PDF & Documents, Images, Video, Audio, Writing & Text, Business, Developer, Projects, History, Credits, Settings & Billing. Mobile uses collapsible drawer. Tool search is globally available. Navigation keeps users within same workspace, not nested isolated apps.

Home: New task, recommended/recent tools, recent projects, in-progress jobs, credit balance and recent usage. **Do not imply all catalog tools are shipped.** Expose only live/usable features; future tools may be described on public roadmap separately.

## 4. Primary flows
### 4a. Anonymous free utility
Search/landing → use deterministic tool in browser → download/copy. No auth, checkout or AI credits. Optional contextual link to premium enhancement, never blocking free success.
### 4b. AI tool via landing
Landing with sample before/after + provider processing notice + transparent estimated pricing → choose tool → auth as required → restore intended tool and inputs when safe → file/input preview → options → server-side credit quote and balance → explicit run confirmation → queued/running/completed/failed → preview result → download, save to project, or continue in another tool.
### 4c. Returning user
Login → dashboard → resume existing project/job or choose sidebar tool → select previously saved asset (with permission and supported modality) → same quote/run flow.
### 4d. Insufficient credits
Quote → explanation/plan options → checkout → server verifies entitlement/credit grant → resume pending tool setup; no payment-success assumption on redirect alone.

## 5. Functional requirements
R1 Central registry: stable tool ID, family, capability, implementation state, free/premium class, accepted inputs, output MIME types, provider capability, quote policy, max size/duration, retention class, UX schema, SEO route, feature flag and rollout.
R2 Shared workspace shell with accessible keyboard navigation, sidebar categories, tool search, recent items, responsive design, clear empty/error/loading states.
R3 Server-issued auth and entitlements; no client-only credit or role authorization; account-scoped projects, jobs and assets.
R4 Job state machine: draft → quoted → reserved → queued → running → succeeded | failed | canceled | expired. Idempotency keys for submit/checkout/webhooks; progress and retry without duplicate charges. Download artifacts created/validated before marking success.
R5 Credit ledger: grants, reservations, captures, releases, refunds and expirations immutable and auditable. Show estimates **before execution**; final amount never exceeds approved max without new confirmation. Charge only on policy-defined success; refund automatically for failed/canceled pre-result jobs. Distinguish provider cost from user-facing credits.
R6 Shared upload/storage: validate type, size, malware where feasible; isolate accounts; issue expiring access URLs; encrypt at rest/in transit; explicit per-workflow retention notice. Allow in-session processing with no persistence where possible. File deletion removes derived assets according to policy and prevents new runs.
R7 Structured output contracts: preview, edit/review when applicable, export (PDF/DOCX/XLSX/CSV/JSON/PNG/MP4/SRT/TXT as supported), provenance/confidence and citations where relevant. Do not imply model output is verified.
R8 Provider adapter/router: select by capability, price, latency, quality and contractual data handling; quotas, retry/backoff, circuit breaker, fallbacks only when output guarantees preserved. Log cost/latency without raw sensitive prompts by default.
R9 Security: prompt-injection hardening for untrusted files, scoped authorization, PII minimization, abuse controls, provider data-processing disclosures, consent-sensitive telemetry, data deletion workflows and per-tool content restrictions.
R10 Billing: retain and reconcile current Day Pass, Monthly, Pro entitlements with Stripe; confirm actual live implementation before migration; upgrade/cancel, receipts and account status. Existing 5-runs/day anonymous text AI must not be silently removed.
R11 Accessibility WCAG 2.2 AA target; mobile usable; keyboard flows; status announcements.
R12 Operations: feature flags, limits, provider budget caps, traces, error monitoring, QA fixtures and rollback. Enable expensive video only after margin/cancellation testing.

## 6. Non-goals for PR1 / MVP
No new AI execution endpoints, infrastructure deployment, DB migrations, auth or billing modifications in PR1. No team collaboration, public API, full text-to-video generator, perpetual uploaded-file retention, or forced account requirement for free tools in MVP.

## 7. Architectural entities (conceptual; not migration instructions)
User, Workspace, Project, Asset, ToolDefinition, Job, JobInput, JobOutput, JobEvent, CreditAccount, LedgerEntry, Entitlement, Purchase, ProviderUsage, Consent/RetentionPreference. Enforce unique user+idempotency key; jobs reference immutable tool version and provider cost audit; payments reconcile by provider event ID.

## 8. Rollout and milestones
- PR1: documentation inventory, catalog, user journeys, requirements, unresolved verification list (this PR).
- PR2: premium workspace shell and shared routing/registry UI (no new providers).
- PR3: verified auth/entitlements and paid-access integration.
- PR4: job state/credit-ledger contract, reservations/refunds and provider abstraction.
- PR5: project/asset storage lifecycle, history, deletion and export.
- PR6: migrate existing Document AI and eligible text AI tools with explicit free-quota transition gate.
- Wave A: PDF-to-Excel, invoice extraction, PDF comparison, image upscaling, background-removal premium; enable individually after quality and margin gates.
- Wave B: auto-subtitles/transcription, image editing, object removal.
- Wave C: video shorts/translation, batch/team/API only after observed demand.

## 9. Gates and acceptance criteria
PR1: all docs cross-linked, evidence level for every inventory claim, catalog includes stable IDs and implementation status, pricing migration risk identified, no code/config/runtime changes.
MVP: public deterministic free flow passes unauthenticated E2E; logged-in AI tool selection/quote/run/download works; no overspend/duplicate capture in concurrent jobs; delete/data retention verified; Stripe webhook replay safe; tool usage measurable; failed runs auto-release credits; keyboard/mobile pass; dashboard doesn't expose unavailable tools as live.
Each tool release: reproducible golden input/output tests, malformed file tests, privacy disclosure, provider limits, cost ceilings, fallbacks, user-facing review of uncertain output.

## 10. Decisions / unknowns
- **Code not yet verified:** connector searches and guessed root fetches did not resolve source files. Inventory is public-site evidence, not a complete repository audit; validate location/active deployment repository before any implementation PR.
- Determine whether /workspace should redirect to /app for signed-in users while preserving anonymous local history.
- Confirm exact authentication/billing/Stripe/API/storage stack and current payment activation before choosing adapters.
- Decide credit expiration policy by plan and retention defaults; define uploaded file TTLs per modality.
- Assess current SEO landing pages and map redirects/canonicalization; do not blanket-redirect existing URLs.
- Confirm which publicly advertised 'AI' tools actually call external models versus local deterministic rules. Classification follows backend behavior, not label.
- Validate AI provider pricing and search demand before finalizing P1 production scope.
