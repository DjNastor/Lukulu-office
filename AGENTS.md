# Lukulu HQ — Codex project instructions

## Product
Lukulu HQ is the label-office application for **Lukulu Recordings**. Preserve its established black-and-gold interface. **Lukulu Academy is a separate project and must not be merged into this application.**

## Source of truth
- GitHub repository: https://github.com/DjNastor/Lukulu-office
- Development branch: `upgrade/v41-operations-control-20261029`; production/default branch: `main`.
- `index.html`: existing main dashboard; a large, embedded single-page app. Do not replace it wholesale.
- `operations.html`: V41 standalone Operations Control (release checklists, artist status, social drafts and backup).
- `vercel.json`: static build copies both HTML pages into `public`.
- `.github/workflows/android-apk.yml`: Android debug APK preview. Test on a physical device before claiming support.

## Boundaries and safety
- Do not publish to social media, email publishers, register rights, submit distributor releases or deploy to production without explicit authorisation and actual service permissions.
- Never place API keys, private tokens, member numbers, contracts or user account credentials in the HTML, front-end JavaScript, repository or documentation.
- Existing Airtable Social Control and Artist Roster are separate data stores; `operations.html` is device-local and does not sync until a secure backend is implemented.
- Do not claim live API integration without verifying real responses. Artist Growth previously returned 0 accessible artists. Preserve 'unlinked' until a genuine profile ID is confirmed.
- Use feature branches and draft PRs. Keep `main` and production deployment unchanged unless explicitly instructed.

## Quick checks
1. Parse inline scripts in `index.html` and `operations.html`.
2. Check `vercel.json` includes both HTML pages.
3. Verify the Operations Control shortcut in the main page.
4. Test mobile viewport, tabs, keyboard, checklist, draft approval states, JSON import/export and accessibility.
5. GitHub Actions Android build success is not equivalent to device verification.

## Priorities
First: release data and rights workflow correctness. Second: social content reviews. Third: secure connectors (Airtable, Paradise, Beevi/Metricool, SAMRO, SAMPRA, CAPASSO, RiSA, Artist Growth). Then: Android finishing, accessibility, deployment and performance.
