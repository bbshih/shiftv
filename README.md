# ShiftV Microsite

Public static download page and Sparkle appcast host for sharing ShiftV.

## GitHub Pages

This repository deploys the site to GitHub Pages from `master` using `.github/workflows/pages.yml`.
This repo is the canonical public microsite for ShiftV. The private `bbshih/ClipStash` repo keeps source release output in `microsite/`, but the public site, appcast, and downloads are published here.

The live site is:

```text
https://bbshih.github.io/shiftv/
```

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

## Deployment

To publish a new direct-distribution build:

1. In `/Users/billyshih/dev/ClipStash`, run `script/release_sparkle.sh`.
2. Copy the updated release files from `/Users/billyshih/dev/ClipStash/microsite/` into this repo:
   - `appcast.xml`
   - `downloads/ShiftV.dmg`
   - `downloads/releases/ShiftV-<version>.dmg`
   - `downloads/releases/ShiftV-<version>.md`
   - any changed `index.html`, `styles.css`, `theme-toggle.js`, `README.md`, or `assets/` files
3. Confirm `.github/workflows/pages.yml` copies `appcast.xml` into `_site`.
4. Commit and push this repo to `master`.
5. Wait for the `Deploy ShiftV microsite` GitHub Actions workflow to pass.
6. Verify the live site, appcast, and DMG hashes.

Useful verification commands:

```bash
curl -fsSL https://bbshih.github.io/shiftv/appcast.xml
curl -fsSL https://bbshih.github.io/shiftv/downloads/releases/ShiftV-1.0.0.dmg | shasum -a 256
curl -fsSL https://bbshih.github.io/shiftv/downloads/ShiftV.dmg | shasum -a 256
```

Both DMG URLs should return the same SHA-256 listed below and on the microsite.

## Build Included

- App: ShiftV
- Version: 1.0.0
- Build: 1
- Requires: macOS 14 or later
- DMG size: 6.1 MB
- SHA-256: `a3cacb90d11f6bd57ddf3cbcfebefcef607343c3dcdab9468f92cec7b32207b9`

This is an early direct-distribution build and is not notarized by Apple. The page includes the first-launch right-click/Open instruction for testers.
