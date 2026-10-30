# Lukulu HQ — V41 Android test build

This development branch is based on the V40 Lukulu HQ interface. The original black-and-gold HQ remains the home page. The added **Operations Control** screen is bundled as a second offline page in the Android WebView test APK.

## Build and install (after a successful GitHub Actions run)

1. Open [Android Build Actions](https://github.com/DjNastor/Lukulu-office/actions/workflows/android-apk.yml).
2. Select a successful run for the `upgrade/v41-operations-control-20261029` branch (or its pull request).
3. In **Artifacts**, download `Lukulu-HQ-V41-Android-APK` and extract `app-debug.apk`.
4. On an Android device, open My Files > Downloads, select the APK, and allow installation from that file manager if Android asks.
5. Open **Lukulu HQ**, then tap **Operations Control** in the original HQ to view the new screen.

The artifact must exist and the workflow must pass before an APK is considered available. This document is not a claim that the APK has built successfully.

## What works in the V41 preview

- The original HQ V40 screen and V41 Operations Control are both bundled offline.
- Operations Control supports local release checklist progress and local draft captions with a review-only status.
- No network requests, posting, releases, event creation or distributor submissions occur when saving local drafts.
- External links (Airtable, Beevi, Artist Growth) require Internet and their separate account permissions.
- The app uses device-local storage. It is not an Airtable, Metricool, Beevi or rights-society API synchronisation.

## Known limitations and review checklist

- Browser Blob/JSON downloads from a WebView may not work without Android-specific download handling; test backup export on the device before relying on it. Import from the file picker is also device-dependent.
- Test navigation between HQ and Operations Control, copy caption behaviour, tabs, local persistence after restart, accessibility / large text, hardware back navigation, the file picker and all links.
- Debug APK is not Play Store-signed. Real releases need a versioned signing identity and full regression tests.
- Do not store API keys in bundled HTML or JavaScript. Server-side authenticated integrations require backend design and explicit approval.

## Other deployments

`vercel.json` now copies both `index.html` and `operations.html` into the static output. The Vercel project was not deployed or confirmed by this change because deployment inspection returned insufficient permissions.

GitHub Pages serves the selected published branch, not every open pull request. Main currently holds older V38. Test this branch independently or merge only after review.

See [Operations V41 notes](./OPERATIONS-V41.md).
