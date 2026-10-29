# Lukulu HQ — Android V39 Preview

This branch contains the V39 Lukulu HQ web app and a GitHub Actions workflow that builds a **debug-signed Android APK for testing**. It **does not** change the production website or merge V39 into main.

## APK
1. Open [Android Build Actions](https://github.com/DjNastor/Lukulu-office/actions/workflows/android-apk.yml).
2. Choose the most recent successful run on `apk/lukulu-hq-v39-20261029`.
3. Open **Artifacts** and download **Lukulu-HQ-V39-Android-APK**. GitHub may require sign-in.
4. Extract `app-debug.apk` from the artifact ZIP.
5. On Android, open My Files > Downloads, tap the APK, and approve **Install unknown apps** for My Files if Android asks.
6. Install, then open **Lukulu HQ**.

## What this is
- The tested preview is bundled offline; external website links open in the device browser.
- It is an Android WebView wrapper, **not** a fully native release workflow.
- Tallyfy, Gmail, Spotify, SAMRO, SAMPRA, CAPASSO and distributor buttons are not newly authorised or integrated by the wrapper.
- WebView's generic file picker is supported. Browser-generated blob exports may need a further Android download integration.
- Local device data can be lost when the application is uninstalled or its storage is cleared.
- No secrets should be put into the `index.html` assets.
- Debug signing is not Play Store release signing. Use a versioned production signing identity for future releases.

## Source
- [V39 baseline](https://github.com/DjNastor/Lukulu-office/tree/upgrade/v39-release-desk-20261029)
- [Original V38 main branch](https://github.com/DjNastor/Lukulu-office)
