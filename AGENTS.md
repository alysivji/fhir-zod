# AGENTS.md

## Project Intent

`fhir-zod` generates versioned TypeScript model types and Zod schemas from official HL7 FHIR definitions.

The goal is a thin, spec-aligned TypeScript library:

- generated, not handwritten
- type-first for the public model surface
- separate Zod schemas for runtime validation
- version-separated (`stu3`, `r4`, `r4b`, `r5`)
- focused on structural/schema validation, not full FHIR platform behavior

## Project Status

This project is pre-release.

The public API is stable and follows semantic versioning. Agents should optimize for:

- correctness and spec-faithfulness
- clarity in generated output
- simplifying the architecture when the current path is wrong
- documenting tradeoffs and open questions as they are discovered

Breaking changes to public import paths or exported types require a major version bump. Internal generator changes and emitted schema corrections that do not affect the public API shape do not.

## Current Reality

The README describes the current branch status, but prefer the code paths below
when behavior and docs disagree.

As of this branch:

- STU3, R4, R4B, and R5 generation are implemented and checked in under `src/stu3/`, `src/r4/`, `src/r4b/`, and `src/r5/`
- default STU3, R4, R4B, and R5 generation target the canonical core-resource set plus required dependencies
- spec manifests exist for `stu3`, `r4`, `r4b`, and `r5`
- the default fetch flow only downloads `r4`
- real generated schema output exists for `stu3`, `r4`, `r4b`, and `r5`
- profile-resource definitions are still excluded from generation because the current emitted file identity is name-based and some profile names collide

## Source of Truth

When there is tension between docs and code, use this order:

1. `scripts/` entrypoints
2. `src/generator/`
3. `src/spec/*/manifest.json`
4. generated output in `src/stu3/`, `src/r4/`, `src/r4b/`, and `src/r5/`
5. `README.md`

## Generation Pipeline

The current generation pipeline is:

1. Pin upstream package metadata in `src/spec/<version>/manifest.json`
2. Fetch and cache upstream artifacts into `.local/spec-cache/<version>/package/`
3. Load StructureDefinitions and related inputs from the pinned cache
4. Normalize FHIR definitions into an internal generator model
5. Emit deterministic generated output into `src/<version>/`
6. Run tests and comparison scripts to catch regressions

Primary commands:

```bash
npm run fetch-spec
npm run fetch-spec -- stu3 r4b r5
npm run list:stu3-targets -- --summary
npm run list:r4-targets -- --summary
npm run list:r4b-targets -- --summary
npm run list:r5-targets -- --summary
npm run list:targets -- r4 --summary
npm run generate
npm test
npm run typecheck
```

Important implementation facts:

- `src/generator/versions.ts` is the central release registry for `stu3`, `r4`, `r4b`, and `r5`
- `scripts/generate.ts`, `scripts/list-targets.ts`, and `scripts/fetch-examples.ts` resolve versions through the release registry
- the default STU3 generation scope is all `core-resource` targets reported by `npm run list:stu3-targets -- --summary`, plus the abstract whitelist
- the default R4 generation scope is all `core-resource` targets reported by `npm run list:r4-targets -- --summary`, plus the abstract whitelist
- the default R4B generation scope is all `core-resource` targets reported by `npm run list:r4b-targets -- --summary`, plus the abstract whitelist
- the default R5 generation scope is all `core-resource` targets reported by `npm run list:r5-targets -- --summary`, plus the abstract whitelist
- target inventory, generation, example-page URL construction, and shared StructureDefinition normalization are implemented once on `FhirRelease` or its shared source normalizer
- `scripts/fetch-spec.ts` defaults to fetching `r4` only
- `scripts/fetch-examples.ts` refreshes committed STU3, R4, R4B, and R5 example fixtures from the official site when available; the site may rate-limit automation, so existing committed fixtures remain the deterministic test source
- manifests are committed; extracted upstream package contents in `.local/` are not
- code paths that require extracted spec inputs now fail with an explicit `MissingSpecPackageError` that tells the user to run `npm run fetch-spec`
- spec-dependent generator suites skip cleanly on a fresh checkout when `.local/spec-cache/<version>/package` is absent; fetching the relevant version enables the full generator-side test coverage
- generated files include timestamps, so normalized comparison logic matters for determinism checks

## Generated vs Handwritten Code

Treat these areas differently:

- `src/generator/`, `src/shared/`, `scripts/`, `tests/`, and `src/spec/` are handwritten
- `src/stu3/`, `src/r4/`, `src/r4b/`, and `src/r5/` are generated output and should usually be changed by editing the generator, not by hand

If generated output is wrong:

- fix the generator or its source normalization
- regenerate
- verify the emitted diff

Do not make manual one-off edits in generated files unless the task is explicitly a temporary unblocker and the follow-up is documented.

## Base Types

Base types are an important part of the current design.

Today the generator uses inheritance-style emission where it is safe:

- `BackboneElement` extends `Element`
- `DomainResource` extends `Resource`
- concrete resources such as `Patient` can extend `DomainResource`

This is not purely cosmetic. It keeps shared FHIR structure visible in emitted schemas and avoids duplicating common fields everywhere.

The same inheritance relationships should also be reflected in the public generated TypeScript model surface where practical.

Current caveat:

- some definitions still fall back to flattened one-shot schemas when dependency cycles would cause ESM initialization problems

When changing base-type behavior, preserve clarity around:

- where common fields come from
- when `.extend(...)` is safe
- when flattening is required to avoid cyclic runtime failures
- how this choice affects emitted TypeScript declarations

## Validation Scope

This library is currently aiming at structural FHIR validation.

In scope:

- field presence
- cardinality
- primitive formatting
- choice-type exclusivity such as `value[x]`
- selected runtime checks derived from the spec, such as constrained reference targets

Out of scope unless the project direction changes:

- terminology validation
- FHIRPath execution
- profile resolution
- slicing
- server behavior

## Public API Direction

The intended package shape is:

- generated TypeScript interfaces/types as the primary developer-facing FHIR model layer
- separate generated Zod schemas as the runtime validation layer
- no long-term reliance on `z.output<typeof Schema>` as the main exported model type strategy

Preferred naming direction:

- `Patient` for the public TypeScript model
- `PatientSchema` for the runtime validator

Why:

- recursive FHIR models are easier to express and maintain as named TS models
- recursive Zod graphs should not be forced to carry the entire public type story
- this keeps editor ergonomics clean and makes room for future higher-level helpers such as builders in a separate package

If work moves the repo further toward this separation, update docs and tests accordingly.

## Working Norms

When making changes, prefer:

- generator-first fixes over patching generated files
- deterministic output
- explicit tests for schema behavior
- updating docs when project reality changes
- adding future FHIR versions through a small `FhirRelease` subclass plus thin compatibility wrappers, instead of copying version-specific generator logic

If you change the pipeline, also consider updating:

- `README.md`
- this file
- any scripts or tests that encode generator assumptions

## Documentation Style

Write markdown prose as long lines — do not hard-wrap at 80 characters. Renderers (GitHub, VitePress) handle wrapping. Hard line breaks add noise to diffs and make paragraphs harder to edit.

## Open Edges Worth Remembering

These are active areas, not settled design:

- adding future FHIR versions beyond STU3, R4, R4B, and R5 through the release registry
- handling inheritance safely in the presence of dependency cycles
- replacing the current mixed type/schema export story with generated public TS models plus separate schema exports
- deciding how primitive underscore fields should be modeled long-term
- documenting BackboneElement behavior and reference validation more clearly
- deciding where to use interfaces vs type aliases in the generated public model layer

## Good Agent Contributions

High-value work in this repo usually looks like:

- making the generator more spec-faithful
- reducing special cases in emitted code
- improving deterministic generation and reviewability
- tightening tests around known tricky FHIR constructs
- deleting stale assumptions from docs
