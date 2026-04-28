---
title: Contributor Notes
description: How the docs site relates to the generator, source-of-truth boundaries, and release-derived content.
---

# Contributor Notes

This docs site is package orientation, not a replacement for the HL7 FHIR specification.

## Source of truth

- `scripts/` and `src/generator/` define generation behavior.
- `src/spec/*/manifest.json` pins upstream package metadata.
- Generated output under `src/r5/`, `src/r4b/`, `src/r4/`, and `src/stu3/` shows the current emitted surface.
- HL7 remains the semantic source of truth for FHIR behavior and documentation.

## Docs boundaries

- Docs should explain package usage, import conventions, supported releases, and validation scope.
- Docs should link outward for canonical semantics instead of restating large parts of FHIR.
- Resource-level discovery should come from generated or release-derived inventories, not handwritten lists.
- Treat `docs/` as public site content, not a workspace for internal design notes or temporary planning documents.
- When design work needs to be preserved for later, prefer GitHub issues over adding standalone design pages under `docs/`.

## Build flow

- `npm run docs:prepare` regenerates the versions page from the release registry.
- `npm run docs:build` prepares and builds the VitePress site.
- `npm run docs:dev` prepares the generated page before starting the local docs server.

## Analytics

The docs site uses Google Analytics 4 in production builds only — it does not fire during local development (`npm run docs:dev`).

If you review the live site at `fhir-zod.vercel.app` and don't want your visits counted, run this once in your browser console:

```js
localStorage.setItem('ga-exclude', 'true')
```

This persists across sessions. GA will silently skip tracking in any browser where the flag is set.

## Fresh-checkout behavior

The versions page prefers extracted spec inputs when they are available. If `.local/spec-cache/*/package` is absent, docs generation falls back to committed generated output so the docs site still builds on a fresh checkout.

That fallback is only for package-surface discovery. It does not change the rule that HL7 and the pinned manifests remain the upstream source of truth.
