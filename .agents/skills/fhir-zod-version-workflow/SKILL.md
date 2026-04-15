---
name: fhir-zod-version-workflow
description: Use when adding or extending FHIR version support in fhir-zod, including generator wiring, target inventories, generated schemas, official example fixtures, and expected-failure tracking.
---

# fhir-zod Version Workflow

Use this skill inside the `fhir-zod` repo when adding a FHIR version or extending example coverage for an existing version.

## Ground Rules

- Treat `scripts/`, `src/generator/`, `src/spec/*/manifest.json`, and tests as the source of truth.
- Do not patch generated `src/<version>/` files by hand. Fix the generator, then regenerate.
- Keep version output separated under `src/<version>/`.
- If examples fail validation, classify the failure first. Prefer generator fixes for spec-normalization bugs; use expected-failure maps only for confirmed official-example mismatches or validation scope limits.
- Avoid broad example fetches unless the user explicitly asks. Start with one resource and use a delay.

## Add A Version

1. Confirm a manifest exists under `src/spec/<version>/manifest.json`.
2. Add target inventory support in `src/generator/targets/<version>.ts`.
3. Add a list script, npm script, and any justfile/docs entry for the target summary command.
4. Add the source wrapper in `src/generator/sources/structuredefinition-<version>.ts`.
5. Add `src/generator/<version>.ts` and export it from `src/generator/index.ts`.
6. Wire `scripts/generate.ts` so `npm run generate -- <version>` works.
7. Run `npm run fetch-spec -- <version>`, then `npm run list:<version>-targets -- --summary`.
8. Run `npm run generate -- <version>`.
9. Add focused tests for target inventory, declaration behavior, and spec availability helpers.
10. Update `README.md`, `TASKS.md`, and `AGENTS.md` if the pipeline changed.
11. Verify with `npm run check`, `npm test`, and `npm run build`.

## Add Examples

1. Update `scripts/fetch-examples.ts` to accept the version and use its core-resource target list.
2. Add `tests/<version>-official-examples.test.ts` and `tests/<version>-example-expected-failures.ts`.
3. Add the expected-failure map to `tests/official-example-expected-failures.test.ts`.
4. Fetch one resource first, for example `npm run fetch-examples -- <version> Patient --force --delay-ms 1500`.
5. Let the user decide whether to fetch the full fixture set. HL7 may rate-limit or challenge automation.
6. Run `npm run test -- tests/<version>-official-examples.test.ts`.
7. For failures caused by too-narrow reference targets, repeated choice/reference entries, profile collisions, BOMs, or parser differences, fix the generator and regenerate.
8. Add expected-failure entries only after confirming the schema behavior is intentionally stricter or out of current validation scope.

## Known Generator Pitfalls

- Some upstream JSON files may include a BOM; strip it before `JSON.parse`.
- STU3 can encode allowed `Reference` targets as repeated non-choice `type` entries. Merge target profiles across matching normalized types.
- Choice fields can produce duplicate JSON names for repeated `Reference` variants. Merge target profiles instead of emitting duplicate properties.
- Prefer canonical StructureDefinitions when profile names collide with base resource names.
