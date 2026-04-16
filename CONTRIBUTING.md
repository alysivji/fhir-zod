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

Use the narrowest test command that exercises the change while iterating, then
run the broader checks before opening a pull request.

```bash
npm test
npm run typecheck
npm run check
npm run coverage
```

Generator-side tests that need extracted spec packages skip cleanly on a fresh
checkout. Run `npm run fetch-spec` or `npm run fetch-spec:all` when you need the
full spec-backed coverage.

Coverage focuses on handwritten generator, shared runtime, and script code. The
checked-in generated FHIR model output is intentionally excluded from coverage
accounting.

## Contribution Expectations

Prefer changes that are:

- spec-aligned
- deterministic
- generator-first
- covered by focused tests
- clear about FHIR version differences

This project is pre-release. Breaking changes are acceptable when they make the
generator, emitted schemas, public package shape, or contributor workflow more
correct and easier to maintain.
