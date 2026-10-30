# Lukulu HQ V41 — operations control (development branch)

## Scope and design principles

- Keep the existing Lukulu HQ V40/V38 black-and-gold interface untouched except for one accessible Operations Control shortcut.
- **Lukulu Academy is separate**; no Academy modules or data are merged into the label office.
- `operations.html` is a standalone, dependency-free, responsive page for low-risk local release readiness and social copy drafting.
- No external write actions, API secrets, fake real-time connectivity badges or automatic publication.
- Data that came from Airtable / Beevi / Metricool / Artist Growth is shown as a **dated, manually verified snapshot** (29 October 2026); reopen the source to check its current state.

## Changes

1. `operations.html`: six accessible tabs (Overview, Release checks, Artist roster, Social drafts, Integrations, Backup), local checklist persistence, status-gated local drafts, safe DOM text rendering, JSON import/export, direct source links.
2. `index.html`: small gold-pill shortcut to Operations Control; the original React app and current release overlay remain intact.
3. `vercel.json`: bundle the two static HTML files.
4. `.github/workflows/android-apk.yml`: bundle both pages offline in the test APK; route both `appassets.androidplatform.net` paths to Android assets; V41 debug APK artifact.
5. `ANDROID-INSTALL.md`: build and test instructions, non-goals and download caveats.

## Service integration status (snapshot, not live feed)

- Airtable: Lukulu HQ Label Office has published Release Desk, Music Catalogue, Rights Registrations, Import Review, Social Campaigns, Social Post Review, Social Channels, Artist Roster and Integration Health.
- Beevi: Lukulu Recordings workspace has DJ Nastor TikTok connected; no posts listed at last check.
- Metricool: DJ Nastor TikTok brand was verified. Do not assume that is a separate label-owned account.
- Artist Growth: production service responded, but no accessible artist profiles. Verify selected organisation and account access before assigning a profile ID.
- Paradise Direct Pro/Tarret Pro: require a permitted, authenticated distributor integration for actual submissions. Nothing here sends releases.
- SAMRO, SAMPRA, CAPASSO and RiSA: manual review/registration remains until their portal or authorised API flows are implemented.
- Credential safety: no private keys in static HTML. Previously shared private credentials should be revoked and replaced; server-only secrets for future gateways.

## Browser and data tests

- [ ] Load `index.html`, click Operations Control; return to the HQ.
- [ ] On phone-sized viewport, tabs and tables are usable without side navigation collisions.
- [ ] Toggle the eight checks; refresh and confirm device-only persistence.
- [ ] Save a caption, advance Draft → Needs review → Approved for preparation; confirm no network publishing takes place.
- [ ] Copy caption and verify clipboard results/failure messages.
- [ ] Download JSON backup and re-import it; malformed files and >500 KB files must fail safely.
- [ ] Clear local data with confirmation; refresh and verify it stays cleared.
- [ ] Verify external links open with rel=noopener and server-side permissions are still required.
- [ ] Confirm the HTML contains no pasted API keys and no Academy module.
- [ ] Run the Android GitHub Actions test build and device-level smoke test before approving an APK.

## Deployment notes

- Current GitHub `main` is still V38; this branch is based on V40. Open pull requests #6 and #7 are related to earlier V39 / Android work.
- Production Vercel deployment is **not verified**: the deployment API returned a 403 permissions response. Do not mark production as updated until Vercel project access is repaired and a deployment is confirmed.
- GitHub Pages only serves the configured published branch/folder or Actions deployment; an open development PR is not automatically published on Pages.
- Android debug APK can be built on the V41 branch by GitHub Actions. A build workflow file is not proof of an existing APK artifact.

## Phase two (requires approvals and credentials)

- A server-authorised read/write API gateway and per-provider permissions, with audit logs and explicit release/publishing approvals.
- Airtable sync with record IDs, timestamps and conflict handling; never use static or client-side Airtable tokens.
- Metricool/Beevi posting, Gmail sending and Calendar event creation only after individual content and timing approval.
- Artist Growth linking only after an actual artist ID is visible to the connected account.

