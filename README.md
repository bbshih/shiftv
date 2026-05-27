# ShiftV Microsite

Public static download page and Sparkle appcast host for sharing ShiftV.

## GitHub Pages

This repository deploys the site to GitHub Pages from `master` using `.github/workflows/pages.yml`.
The download button points to:

```text
downloads/ShiftV.dmg
```

Sparkle checks the feed at:

```text
https://bbshih.github.io/shiftv/appcast.xml
```

The bundled DMG was built from the Release `ShiftV.app`.
Release notes are published at `changelog.html`.

## Build Included

- App: ShiftV
- Version: 1.0.0
- Build: 1
- Requires: macOS 14 or later
- DMG size: 6.1 MB
- SHA-256: `a3cacb90d11f6bd57ddf3cbcfebefcef607343c3dcdab9468f92cec7b32207b9`

This is an early direct-distribution build and is not notarized by Apple. The page includes the first-launch right-click/Open instruction for testers.
