# Lukulu HQ V43 — Artist Ops (development branch)

Status: **private, draft-only implementation**. Follow-up to issue #12 and draft PR #8. This branch builds on `upgrade/v41-operations-control-20261029`, **not** production `main`.

## What is included
- `artist-ops.html`: black-and-gold, mobile-friendly separate module for private beat showcases, vocalist recording planning, remix proposals, artist interests and radio submissions.
- Local browser persistence and JSON/CSV export/import, with size and input validation, duplicate protection and spreadsheet-formula escaping.
- Artist roster of **six unverified** Airtable entries, explicitly identified as a dated snapshot (28 November 2026).
- Rights-review blocking: a draft with unchecked rights cannot advance to internal review. Even owner-noted rights lead only to an **internal review queue**, never a sending/publishing action.
- `operations.html`: an accessible navigation link to Artist Ops. Original HQ interface remains in `index.html`.
- `vercel.json`: bundles three static pages on any correctly configured Vercel preview.
- Android GitHub Actions: bundles all three pages and routes `artist-ops.html` through the offline WebView. This is a **debug APK workflow**, not a signed Play Store release.

## What is NOT provided
No live Airtable / Artist Growth / Railway / Tunio / distributor integration; no authentication server, private audio storage, published radio, global fan sync, mail, contract approvals or paid Runway generation. Browser localStorage is device- and origin-specific. This public GitHub repository contains no roster contacts or private music.

## Validation gates
- [x] GitHub feature branch based on V41
- [x] HTML module source and navigation wired into repository
- [x] Vercel static build list amended
- [x] Android debug build workflow amended
- [ ] GitHub Actions APK success and artifact inspected
- [ ] Real Samsung navigation, persistence, file chooser and downloads
- [ ] V41 regression checks and credentials review
- [ ] Confirm correct editable project for `https://lukulu-label-office.clearloom513.chatgpt.site/`
- [ ] Stage/test/publish to that **exact** live URL and verify it

## Publishing boundary
At review time, Browser Use could not inspect or edit the requested URL due to insufficient credits. The connected Vercel project `lukulu-hub` is linked to `DjNastor/Lukulu`, **not** this repository. A GitHub push or pull request does NOT update the `chatgpt.site` website; the site owner must open the correct ChatGPT Site project and use its editing/publishing workflow. Do not merge, publish, or overwrite credentials until that mapping is confirmed.

## Standalone alternate preview
The separate downloadable **Lukulu HQ V43 Artist Ops private build ZIP** was prepared from a saved 26 Nov V42.1 HTML preview, tested with 20/20 Chromium in-memory interaction checks. It is a self-contained alternative preview, **not identical to this V41-derived GitHub module**, and neither is the verified original live site.
