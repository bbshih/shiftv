# ShiftV Microsite

Static download page and Sparkle appcast host for sharing ShiftV.

## Canonical Deployment

The canonical public microsite is the separate public GitHub repo:

```text
bbshih/shiftv
```

GitHub Pages deploys that repo from `master` using `.github/workflows/pages.yml`. Do not use the private `bbshih/ClipStash` repo's Pages settings as the canonical host; this source folder is copied into the `shiftv` repo when publishing.

The live site is:

```text
https://bbshih.github.io/shiftv/
```

To publish a new direct-distribution build:

1. From the ClipStash repo, run `script/release_sparkle.sh`.
2. Copy the updated microsite release files into the `bbshih/shiftv` repo:
   - `appcast.xml`
   - `downloads/ShiftV.dmg`
   - `downloads/releases/ShiftV-<version>.dmg`
   - `downloads/releases/ShiftV-<version>.md`
   - any generated `downloads/releases/*.delta` files referenced by `appcast.xml`
   - any changed `index.html`, `changelog.html`, `styles.css`, `theme-toggle.js`, `README.md`, or `assets/` files
3. Make sure `bbshih/shiftv/.github/workflows/pages.yml` includes `appcast.xml` in the Pages artifact.
4. Commit and push `bbshih/shiftv` to `master`.
5. Wait for the `Deploy ShiftV microsite` GitHub Actions workflow to pass.
6. Verify the live site, appcast, and DMG hashes.

The homepage download button points to the mirrored latest artifact:

```text
downloads/ShiftV.dmg
```

Sparkle checks the feed at:

```text
appcast.xml
```

For the public GitHub Pages deployment, the app uses:

```text
https://bbshih.github.io/shiftv/appcast.xml
```

The appcast references the versioned release artifact and any generated delta files:

```text
downloads/releases/ShiftV-1.0.2.dmg
downloads/releases/ShiftV3-2.delta
```

The latest DMG is mirrored between `downloads/ShiftV.dmg` and the versioned release directory so the web download and Sparkle appcast resolve to the same build.

## Build Included

- App: ShiftV
- Version: 1.0.2
- Build: 3
- Requires: macOS 14 or later
- DMG size: 6.1 MB
- SHA-256: `9b9019cd2e4f8523dd6a0eaabfb83b03da620aa2604b67c770bcce934db2b0a6`

This is an early direct-distribution build and is not notarized by Apple. The page includes the first-launch right-click/Open instruction for testers.

## Sparkle Releases

Run the release helper from the repository root:

```bash
script/release_sparkle.sh
```

The helper builds the locally signed Release app, packages a versioned DMG in `downloads/releases/`, then runs Sparkle's `generate_appcast` tool to update `appcast.xml`. No Apple Developer account is required for this direct-distribution path.

Private Sparkle key material must stay out of the repository. The default signing account is `com.clipstash.shiftv` in the macOS Keychain. CI can pass the key through `SPARKLE_PRIVATE_KEY` instead.

## Live Verification

After GitHub Pages deploys, verify the published files:

```bash
curl -fsSL https://bbshih.github.io/shiftv/appcast.xml
curl -fsSL https://bbshih.github.io/shiftv/downloads/releases/ShiftV-1.0.2.dmg | shasum -a 256
curl -fsSL https://bbshih.github.io/shiftv/downloads/ShiftV.dmg | shasum -a 256
```

Both DMG URLs should return the same SHA-256 listed in this README and on the microsite.
