# AI Tool Catalog and Release Plan
Status: candidate portfolio, NOT implemented feature list. 2026-10-27.
Legend: E=existing public analogous AI capability (implementation pending code verification), X=enhancement of existing traditional/AI tool, N=new. P1=first premium release candidates, P2=later, P3=exploratory. **P1 means product priority, not that this documentation PR implements the tool.**

## Unified tool card contract
Each tool must register: id, displayName, category, pitch, status(draft|beta|live|retired), implementationType(local|provider|hybrid), entryRoute, inputSchema, outputSchema, quoteEstimator, maxLimit, retentionMode, providerDisclosure, goldenTests, featureFlag. Tool pages should share Upload/Input → Options → Credit Quote → Confirm → Job Progress → Result Review → Export/Save/Next Tool.

| ID | Name | Family | Origin | Priority | Inputs → primary output |
|---|---|---|---|---|---|
| pdf-to-excel-ai | AI PDF to Excel | PDF | N | P1 | PDF → structured XLSX with cell review |
| document-chat | Document Chat | PDF | N | P1 | PDF/text → cited Q&A |
| pdf-editor-ai | AI PDF Editor | PDF | N | P2 | PDF+instructions → edited PDF (layout QA) |
| pdf-compare-ai | AI PDF Comparison | PDF | N | P1 | two PDFs → categorized changes |
| pdf-ocr-ai | AI OCR & Scan Repair | PDF | X | P1 | scanned PDF/image → searchable PDF/text |
| pdf-summarizer | AI PDF Summarizer | PDF | E | P1 | PDF → page-cited summary |
| pdf-translator-ai | AI PDF Translator | PDF | X | P2 | PDF+language → translated document |
| image-editor-ai | AI Image Editor | Image | N | P1 | image+prompt → edited image |
| background-remover-ai | AI Background Remover Pro | Image | X | P1 | image → alpha-matted image |
| image-upscaler-ai | AI Image Upscaler | Image | N | P1 | low-resolution image → enhanced image |
| object-remover-ai | AI Object Remover | Image | N | P2 | image+mask/prompt → inpainted image |
| product-photo-ai | AI Product Photo Studio | Image | N | P2 | product photo+style → marketing image |
| image-generator-ai | AI Image Generator | Image | N | P2 | prompt → generated image |
| video-subtitles-ai | AI Auto Subtitles | Video | N | P1 | video → SRT/VTT/captioned video |
| video-shorts-ai | AI Video to Shorts | Video | N | P2 | long video → selected short clips |
| video-summarizer-ai | AI Video Summarizer | Video | N | P2 | video → chaptered notes/timestamps |
| video-translator-ai | AI Video Translator | Video | N | P3 | video+language → subtitles/translated audio |
| video-reframe-ai | AI Smart Reframe | Video | N | P3 | video+target ratio → tracked crop |
| audio-transcription-ai | AI Audio Transcription | Audio | N | P1 | audio → timestamped transcript |
| audio-denoise-ai | AI Noise Removal | Audio | N | P2 | noisy audio → cleaned audio |
| audio-translate-ai | AI Voice Translation | Audio | N | P3 | speech → translated speech/text |
| podcast-summary-ai | AI Podcast Summarizer | Audio | N | P2 | audio/transcript → show notes |
| text-rewriter-ai | AI Text Rewriter | Writing | E | P1 | text+tone → rewrite |
| resume-tailor | AI Resume Tailor | Writing | E | P1 | resume+job description → tailored draft |
| invoice-extractor-ai | AI Invoice Extractor | Business | X | P1 | invoices → reviewed JSON/CSV/XLSX |
| contract-analyzer-ai | AI Contract Analyzer | Business | N | P2 | agreement → clauses/risks with citations |
| receipt-processor-ai | AI Receipt Processor | Business | N | P2 | receipts → structured expenses |
| seo-writer-ai | AI SEO Content Writer | Business | X | P2 | brief/keywords → draft |
| json-repair-ai | AI JSON Repair | Developer | N | P2 | invalid JSON → explained patch |
| code-debugger-ai | AI Code Debugger | Developer | X | P2 | code+trace → diagnosis/proposed fix |
| website-auditor-ai | AI Website Auditor | Developer | N | P3 | URL/HTML → prioritized audit |

**Correction to planning estimate:** This table has **31** candidate tools, not 30. Previous informal 30-tool count was an estimation error. Maintain IDs as canonical planning keys; published IDs can be revised before implementation.

## Existing AI migration registry (not all represented as new standalone catalog rows)
Existing advertised text AI tools at /ai: quiz-generator, prompt-generator, prompt-improver, email-writer, code-explainer, ai-humanizer, transcript-summarizer, resume-tailor, cover-letter-generator, citation-generator, seo-title-generator, meta-description-rewriter, blog-outliner, job-description-writer. Document: pdf-summarizer, pdf-to-quiz, pdf-to-flashcards. Do not remove or reimplement them blindly. Map existing routes/handlers to shared workspace entries; retain any original URLs and SEO. Some can be grouped under a unified writing tool, but keep their stable backend IDs if already used for billing.

## Quality/monetization safeguards
- PDF structured extraction: cell/table alignment, low-confidence highlights, page references, manual corrections; no fabricated totals.
- Legal/contracts: plain-language assistance, linked source passages and disclaimers, not legal advice or guaranteed risk detection.
- Image: preview watermarks only if not deceptive; export original without silent alterations; consent/IP controls.
- Video: duration and resolution caps, asynchronous status, cost estimate at submission, cancel/refund policy, verified output codec.
- All categories: free deterministic counterpart remains available with clear differentiation; do not create provider calls for tasks already solved exactly by local code.
- Prioritization gate per tool: demand test, provider cost and margin, latency, benchmark quality, abuse/privacy review, instrumented funnel and customer support readiness.

## Example premium UX
From /pdf/pdf-to-excel public free conversion → optionally select 'AI: recover scanned tables' → /ai/tools/pdf-to-excel-ai marketing/CTA → login → /app/tools/pdf-to-excel-ai → upload and configure → quote/confirm → job → confidence review → export XLSX → optionally save project. Free converter still finishes without auth or upsell interaction.

## Release planning notes
First validate existing PDFs and low-cost text AI migration, then selectively implement 3–5 new premium tools. Avoid opening a single PR for 31 tools. Show not-yet-built catalog entries in planning docs only, not as clickable product features. Launch by quality and unit economics, not tool-count target.
