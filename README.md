# FHIR Zod

Canonical, versioned, generated TypeScript models and Zod schemas for the FHIR specification.

## Goal

Provide a **reference implementation of FHIR types and schemas in TypeScript** using Zod.

This library is:
- **spec-aligned** (generated from HL7 definitions)
- **versioned** (STU3, R4, R4B, R5)
- **minimal** (no business logic, no terminology validation)
- **predictable** (deterministic generation)
- **type-first** (developer-facing TS models, with runtime Zod validation)

This is NOT:
- a full FHIR validator
- a terminology engine
- a FHIR server

## Status

Current repository status:

- TypeScript library scaffold is set up
- versioned subpath exports are wired
- R4 generation is implemented and checked in under `src/r4`
- default R4 generation covers the canonical core-resource set plus required dependencies
- build, lint, format, coverage, and test commands are configured
- spec manifests are pinned for `stu3`, `r4`, `r4b`, and `r5`
- real generated schema output currently exists for `r4`
- the project is pre-release, with no compatibility guarantees yet

## Installation

```bash
npm install @fhir-zod/core
```

Library consumers should install Zod as well:

```bash
npm install zod
```

## Usage

```ts
import type { Patient } from "@fhir-zod/core/r4"
import { PatientSchema } from "@fhir-zod/core/r4"

const parsed = PatientSchema.parse(data)

const patient: Patient = {
  resourceType: "Patient",
}
```

Target package shape:

- export generated TypeScript interfaces/types for FHIR model shapes
- export separate generated Zod schemas for runtime validation
- avoid making `z.output<typeof Schema>` the primary public type story

The repository is not fully on that API yet, but this is the intended direction.

## Development

Install dependencies:

```bash
npm install
```

Common commands:

```bash
make help
make build
make check
make coverage
make fetch-spec
make test
make generate
make list-r4-targets
```

Equivalent npm scripts:

```bash
npm run build
npm run check
npm run format
npm run fetch-spec
npm run fetch-spec -- r4b
npm run lint
npm run coverage
npm test
npm run generate
npm run list:r4-targets -- --summary
```

Tracked implementation work lives in [`TASKS.md`](./TASKS.md).

### Spec-dependent tests

Some generator-side tests validate behavior against pinned extracted R4 spec inputs
under `.local/spec-cache/r4/package`.

Those extracted inputs are not committed. On a clean checkout, run:

```bash
npm run fetch-spec
```

before running the full generator-oriented test suite with `npm test`.

## Pre-release

This repository is still pre-release.

There are no customers and no compatibility promises yet. Breaking changes are acceptable when they improve:

- generator correctness
- emitted schema quality
- package shape
- long-term maintainability

## Inspecting R4 Targets

Use the R4 target listing script to inspect which `StructureDefinition` entries are:

- core canonical resources
- profile-like resource definitions
- abstract shared base types
- final generation targets

Examples:

```bash
npm run list:r4-targets -- --summary
npm run list:r4-targets -- --category core-resource --names-only
npm run list:r4-targets -- --category profile-resource --names-only
npm run list:r4-targets -- --category generation-target --names-only
```

Supported categories:

- `core-resource`
- `profile-resource`
- `abstract-whitelist`
- `generation-target`
- `other`
- `all`

Supported output modes:

- default JSON output
- `--names-only`
- `--summary`

Current generation policy:

- `npm run generate` emits all canonical R4 core resources plus the abstract base whitelist and required dependencies
- profile-resource definitions are intentionally excluded from generation for now
- `profile-resource` entries are deferred because some pinned R4 profile names are not unique enough for the current name-based file emission strategy

## Design Principles

### 1. Generated, not handwritten

All schemas are generated from:

- StructureDefinitions
- official HL7 artifacts

No manual schema definitions.

### 2. Types First, Zod Second

The intended public model is:

- generated TypeScript interfaces/types for FHIR resources and shared complex types
- separate generated Zod schemas for runtime validation

Zod remains the runtime validation layer.

- do not build a custom validation DSL on top of Zod
- do not make Zod inference the only source of public TypeScript types
- prefer generating named TS models from the normalized FHIR definition graph

```ts
const parsed = PatientSchema.parse(data)
PatientSchema.safeParse(data)
```

### 3. Version-first architecture

FHIR versions are explicitly separated.

```ts
import { Patient } from "@fhir-zod/core/r4"
import { Patient as PatientR5 } from "@fhir-zod/core/r5"
```

Do NOT mix versions.

### 4. Schema correctness over features

We prioritize:

- correct fields
- correct cardinality
- correct types

We explicitly do NOT support:

- terminology validation (ValueSets)
- FHIRPath evaluation
- profile resolution
- slicing

### 5. Thin Runtime Layer

Schemas remain Zod-first.

Optional helpers may be added later, but must not obscure Zod or replace the generated model/schema surface.

Possible future convenience layers such as builders should live above core, not inside the core generated package.

## Generated vs Handwritten Code

Most changes should happen in handwritten generator code, not in generated schemas.

Handwritten areas:

- `src/generator/`
- `src/shared/`
- `src/spec/`
- `scripts/`
- `tests/`

Generated areas:

- `src/r4/`

If generated output is wrong, fix the generator or source normalization logic, then regenerate.

## Project Structure

```console
/src
  /generator        # codegen logic
  /spec             # raw FHIR definitions
  /r4
  /r4b
  /r5
  /stu3
  /shared           # primitives, helpers

/scripts
  generate.ts

/tests
```

## Generator Responsibilities

The generator must:

1. Parse StructureDefinitions
2. Map FHIR types → Zod
3. Handle:

   - primitives
   - complex types
   - arrays (cardinality)
   - required vs optional
   - choice types (`value[x]`)
4. Output deterministic schemas

## Generation Pipeline

The current pipeline is:

1. Pin upstream package metadata in `src/spec/<version>/manifest.json`
2. Fetch official HL7 artifacts into `.local/spec-cache/<version>/package/`
3. Load StructureDefinitions and related spec inputs from the pinned cache
4. Normalize them into the internal generator model
5. Emit deterministic TypeScript model declarations and Zod schemas into `src/<version>/`
6. Run tests and comparison tooling to review diffs

Current implementation notes:

- `npm run fetch-spec` defaults to `r4`
- `npm run generate` currently generates `r4`
- manifests are committed, but extracted upstream package contents in `.local/` are not

## Example Output

```ts
export interface Patient extends DomainResource {
  resourceType: "Patient"
  identifier?: Identifier[]
}

export const PatientSchema: z.ZodType<Patient> = DomainResourceSchema.extend({
  resourceType: z.literal("Patient"),
  identifier: z.array(z.lazy(() => IdentifierSchema)).optional(),
})
```

Actual emitted schemas may also include inherited fields, choice-type validation, and selected runtime checks such as constrained reference target validation.

## Choice Types (`[x]`)

FHIR:

```json
value[x]
```

Generated:

```ts
z.object({
  valueString: z.string().optional(),
  valueQuantity: Quantity.optional(),
}).refine(...)
```

Must enforce:

- only one value present

## Base Types

Generated schemas use inheritance-style emission where it is safe.

Examples:

- `BackboneElement` extends `Element`
- `DomainResource` extends `Resource`
- concrete resources such as `Patient` can extend `DomainResource`

This keeps shared FHIR structure visible and avoids duplicating common fields everywhere.

Some definitions still fall back to flattened one-shot schemas when dependency cycles would create ESM initialization problems.

## Zod Version Strategy

Current:

- develop against Zod 3.25+
- use Zod directly

```ts
import * as z from "zod"
```

Future:

- support Zod 4
- test both versions

## Testing Strategy

Tests must validate:

- parsing valid resources
- rejecting invalid structures
- choice field constraints
- required field enforcement

## Non-Goals

Do NOT implement:

- terminology validation (LOINC, SNOMED, etc.)
- FHIRPath engine
- profile-based validation
- server-side logic

## Philosophy

This library is:

> FHIR as code, not FHIR as a platform

We aim to be:

- boring
- correct
- stable

## Development Workflow

1. Update FHIR spec files
2. Run generator
3. Run comparison and tests
4. Commit generator and generated output together when appropriate

No manual edits to generated schemas.

## Useful Links

- https://zod.dev/library-authors
- https://github.com/nazrulworld/fhir.resources
