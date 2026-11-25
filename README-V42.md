# Lukulu HQ V42.1 development update

This update builds on the V41 development branch and the separate V42 review starter. It preserves the existing HQ dashboard and Operations Control. Academy remains separate. No merge, social post, email, distributor submission or production rollout is performed by this update.

## App pages

- `index.html`: existing HQ and Release Desk, with an added Release Review link.
- `operations.html`: existing local release checklist and social draft review. Backup validation now rejects string values masquerading as completed checklist items and malformed draft fields.
- `review.html`: the V42 manual integration and release-gate review, linked to both HQ and Operations Control. Adds Coder, Code and Google Drive to the manual review list. A reviewed status is not a live connection or a publishing approval.

All three pages keep their existing local storage identities. No records are migrated or overwritten automatically. The review page does not overwrite unreadable saved data during startup and shows a warning if a save fails. Operation backup restore keeps the previous in-memory state when persistence fails.

## Packages and local use

Extract the repository into `I:\Lukulu Office App` if that is your chosen Windows folder. Open it in VS Code.

```powershell
Set-Location 'I:\Lukulu Office App'
npm ci
npm test
npm run build-win
```

Windows NSIS setup and portable executables are written to `installers/` after a successful build. The desktop package contains the three app pages, icons and required launcher files; original backup JSON and old install ZIPs are excluded. No signing certificate is configured. This is not a Catalina-compatible Mac build.

`npm run build` creates `dist/` with all three pages and their assets. The Vercel configuration now uses this common build. Publishing remains a separate decision.

Android Actions bundle all three HTML views. The APK is a debug preview, not a Play Store release. A successful build does not establish real-device compatibility. Browser-generated downloads, file import, local persistence after restart, hardware Back, clipboard and large text still require physical-device checks. Existing Android export limitations are not declared fixed by this update.

## Verification and connections

Run `npm test` for script parsing, strict backup validation, static packaging, desktop link boundaries and Android page routing checks. Browser QA and build results are recorded separately in `VERIFICATION-V42.md`.

Browser Use returned insufficient credits on 25 November 2026. Coder can prepare a separate builder brief; this does not modify the repository. No callable Code tool was exposed in this session. Google Drive returned existing HQ source files; no Drive files were replaced or shared. No live integration status was inferred from those files.

Keep credentials server-side. Review PR #8 and existing service permission notes before enabling any live connector. Main, PR #8 and production remain unchanged by this feature branch.

## Brand and label workflow references

The supplied Ladysmith banner and studio portrait are reused as provided. Brand copy stays inside the supplied banner image. The existing main HQ exposes the images in an expandable brand section; Operations Control and Release Review show them directly. The Gmail preparation card distinguishes Draft, Sent, receipt and acceptance, and requires the audio link format to be checked. No private email content, recipient list or mailbox credentials are bundled.

Run Lukulu and skill-creator guidance informed the workflow boundaries. The installed Run Lukulu skill was read, not modified.
