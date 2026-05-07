# Contributing

`fhir-zod` is a generated TypeScript library. Most changes should improve the
generator, the pinned FHIR inputs, tests, or documentation instead of editing
generated version output by hand.

## Setup

Use Node.js 20 or newer.

```bash
npm install
npm test
npm run typecheck
```

The repository commits generated output and official example fixtures, but it
does not commit extracted HL7 package contents. Commands that need raw
StructureDefinition inputs read from `.local/spec-cache/<version>/package`.

Fetch the default R4 package:

```bash
npm run fetch-spec
```

Fetch every pinned package:

```bash
npm run fetch-spec:all
```

## Developer CLI

The npm scripts are backed by a shared TypeScript CLI:

```bash
npm run cli -- --help
npm run cli -- fetch-spec
npm run cli -- fetch-spec all
npm run cli -- generate r4
npm run cli -- list-targets r5 --summary
npm run cli -- examples fetch r4 Patient --force --limit=1
```

Common npm aliases remain available:

```bash
npm run generate
npm run list:r4-targets -- --summary
npm run fetch-examples -- r4 Patient --limit=1
```

The default generation and fetch commands target R4 unless a version is passed.
Supported versions are `stu3`, `r4`, `r4b`, and `r5`.

## Generated Output

Generated files live under:

- `src/stu3/`
- `src/r4/`
- `src/r4b/`
- `src/r5/`

Do not make one-off edits in those directories for normal fixes. Update
`src/generator/`, `src/shared/`, `src/spec/`, or the relevant script, then run
the generator and review the emitted diff.

```bash
npm run generate
npm test
npm run typecheck
```

Generated files include timestamps, so use the existing tests and comparison
logic rather than relying on raw timestamp diffs.

## Testing

Use the narrowest command that exercises the change while iterating. Most tests
can be run directly by file:

```bash
npm test -- tests/scripts.test.ts
npm test -- tests/r4-choice-contracts.test.ts
```

Run `npm test` before pushing a change that touches generator behavior, runtime
schemas, package exports, or committed fixtures.

The suite has several different kinds of tests:

- **Runtime schema contracts** check focused validation behavior, such as FHIR
  primitives, choice-type exclusivity, primitive arrays, inheritance, and
  constrained references.
- **Official example tests** parse committed HL7 example fixtures for each
  supported release. These are broad regression tests for generated schemas.
- **Generator tests** check the internal model, version registry, target
  inventory, source normalization, and generated declaration shape.
- **Script tests** cover developer commands such as spec fetching, example
  fetching, target listing, and the shared CLI wrapper.
- **Packaging tests** check public exports, generated imports, declaration
  output, and tree-shaking behavior.

Run `npm run typecheck` when TypeScript declarations, generated types, scripts,
or package exports change. `npm run check` combines Biome checks with
`typecheck`, and is a good final local gate for most pull requests.

```bash
npm run check
npm test
```

`npm run test:runtime` is a package-consumer runtime test. Run it after
`npm run build`; it imports the built package through public exports, checks a
few library-level schema behaviors, and parses the committed official example
fixtures without Vitest.

The main CI workflow runs the Node/Zod matrix on pushes and pull requests.
Bun and Deno are covered by the Runtime Compatibility workflow on a weekly
schedule and through manual `workflow_dispatch` runs. Those jobs install the
packed package in a fresh consumer project and run the same runtime tests with
Zod 3.25.1 and Zod 4.

Generator-side tests that need extracted spec packages skip cleanly on a fresh
checkout. That is expected for contributors who have not populated `.local`.
Run `npm run fetch-spec` when working on R4 generator behavior, or
`npm run fetch-spec:all` when changing shared release logic that affects STU3,
R4, R4B, and R5.

Official example tests use committed fixtures under `tests/fixtures/`, so they
are deterministic and do not fetch from the HL7 site during normal test runs.
Only run `npm run fetch-examples` when intentionally refreshing those fixtures.

Coverage focuses on handwritten generator, shared runtime, and script code. The
checked-in generated FHIR model output is intentionally excluded from coverage
accounting. Use coverage when changing validation logic, generator internals, or
developer scripts:

```bash
npm run coverage
```

When a test suite skips because a spec package is missing, mention that in the
pull request notes rather than treating it as a failure.

## Contribution Expectations

Prefer changes that are:

- spec-aligned
- deterministic
- generator-first
- covered by focused tests
- clear about FHIR version differences

The public package API follows semantic versioning. Breaking changes to the public API require a major version bump. Internal generator changes, emitted schema corrections, and contributor workflow improvements do not require a major version if the public import paths and exported types are unaffected.

## AI-Assisted Development

This project has been developed with help from AI coding tools, including
OpenAI Codex and Claude Code. AI assistance is used as part of an engineering
workflow centered on developer experience, test-driven development, code
generation, and reviewable changes.

Human judgment remains responsible for project direction, architecture,
validation scope, tests, and release decisions. Generated FHIR models and
schemas are derived from pinned official HL7 artifacts, not from AI-generated
FHIR definitions.
