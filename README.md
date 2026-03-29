# FHIR Zod

Canonical, versioned, generated Zod schemas for the FHIR specification.

## Goal

Provide a **reference implementation of FHIR schemas in TypeScript** using Zod.

This library is:
- **spec-aligned** (generated from HL7 definitions)
- **versioned** (STU3, R4, R4B, R5)
- **minimal** (no business logic, no terminology validation)
- **predictable** (deterministic generation)

This is NOT:
- a full FHIR validator
- a terminology engine
- a FHIR server

## Status

Current repository status:

- TypeScript library scaffold is set up
- versioned subpath exports are wired
- a placeholder `Patient` schema exists in `src/r4`
- build, lint, format, coverage, and test commands are configured
- the generator is not implemented yet
- full FHIR schemas are not implemented yet

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
import { Patient } from "@fhir-zod/core/r4"

Patient.parse(data)
```

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
```

Tracked implementation work lives in [`TASKS.md`](./TASKS.md).

## Design Principles

### 1. Generated, not handwritten

All schemas are generated from:

- StructureDefinitions
- official HL7 artifacts

No manual schema definitions.

### 2. Zod is the runtime

We use Zod directly.

- Do not wrap or abstract Zod
- Export native Zod schemas

```ts
Patient.parse(data)
Patient.safeParse(data)
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

### 5. Thin runtime layer

Schemas remain Zod-first.

Optional helpers may be added, but must not obscure Zod.

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

## Example Output

```ts
export const Patient = z.object({
  resourceType: z.literal("Patient"),
  id: z.string().optional(),
  identifier: z.array(Identifier).optional(),
})
```

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
3. Run tests
4. Commit generated output

No manual edits to generated schemas.
