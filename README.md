# FHIR Zod 🩺

Generated TypeScript models and Zod schemas for HL7 FHIR.

![HL7 FHIR](https://img.shields.io/badge/HL7%20FHIR-compatible-blue) ![FHIR R5](https://img.shields.io/badge/FHIR-R5-purple) ![FHIR R4B](https://img.shields.io/badge/FHIR-R4B-blue) ![FHIR R4](https://img.shields.io/badge/FHIR-R4-green) ![FHIR STU3](https://img.shields.io/badge/FHIR-STU3-lightgrey)

[![npm version](https://img.shields.io/npm/v/fhir-zod.svg)](https://www.npmjs.com/package/fhir-zod) ![Zod](https://img.shields.io/badge/Zod-3.25.x%20%7C%204.x.x-3068B7?logo=zod&logoColor=white) ![Node](https://img.shields.io/badge/Node-%3E%3D20-339933?logo=node.js&logoColor=white) ![Bun](https://img.shields.io/badge/Bun-%3E%3D1.3-000000?logo=bun&logoColor=white) ![Deno](https://img.shields.io/badge/Deno-%3E%3D2-000000?logo=deno&logoColor=white)

[![CI](https://github.com/alysivji/fhir-zod/actions/workflows/ci.yml/badge.svg)](https://github.com/alysivji/fhir-zod/actions/workflows/ci.yml) [![Runtime Compatibility](https://github.com/alysivji/fhir-zod/actions/workflows/runtime-compat.yml/badge.svg)](https://github.com/alysivji/fhir-zod/actions/workflows/runtime-compat.yml) [![codecov](https://codecov.io/gh/alysivji/fhir-zod/graph/badge.svg)](https://codecov.io/gh/alysivji/fhir-zod) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Code style: Biome](https://img.shields.io/badge/code%20style-biome-60a5fa)](https://biomejs.dev/)

`fhir-zod` gives you type-safe FHIR models for your editor and Zod schemas for your runtime. The generated output is versioned by FHIR release, so R5, R4B, R4, and STU3 stay explicit in your imports.

Bring your own FHIR workflow. This package focuses on structural validation, not on becoming a terminology server, profile resolver, FHIRPath engine, or FHIR platform.

## Why use it?

- 🧩 **Type-first models**: generated TypeScript interfaces and types for FHIR resources and datatypes.
- ✅ **Runtime validation**: generated Zod schemas for parsing data at boundaries.
- 🗂️ **Versioned imports**: separate entry points for R5, R4B, R4, and STU3.
- 📘 **Spec-aligned generation**: generated from pinned official HL7 artifacts.
- 🧪 **Example-backed tests**: checked against official FHIR example fixtures.
- 🌳 **Tree-shakeable shape**: import the versioned schemas you need.

## Project status

`fhir-zod` is pre-release. The package shape is stabilizing, and breaking changes are still possible before the first public release.

The install command below describes the intended public package shape. The project is still pre-release, so publication timing, versioning, and API details may change.

## Installation

```bash
npm install fhir-zod zod
```

Works with [Zod](https://zod.dev/) 3.25.x and 4.x.x.

The published ESM library supports Node.js 20+, Bun 1.3+, and Deno 2+ for
public package imports, model construction, and schema parsing. The generator
and repository developer scripts are Node.js tooling.

Runtime compatibility is tested by installing the packed npm package in a fresh
consumer project and parsing the committed official FHIR example fixtures with
Zod 3.25.x and Zod 4.x.x.

## Runtime usage

The published package is ESM-only. Use public imports such as `fhir-zod`,
`fhir-zod/r4`, `fhir-zod/r4b`, `fhir-zod/r5`, and `fhir-zod/stu3`.

Node.js:

```bash
npm install fhir-zod zod
node app.mjs
```

Bun:

```bash
bun add fhir-zod zod
bun run app.ts
```

Deno:

```bash
deno add npm:fhir-zod npm:zod
deno run --node-modules-dir=auto app.ts
```

In all supported runtimes, application code imports the same package entrypoints:

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4"
```

## Quick start

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4"

const patient: Patient = {
  resourceType: "Patient",
  id: "john-doe",
  active: true,
  name: [{ family: "Doe", given: ["John"] }],
  gender: "male",
  birthDate: "1985-03-15",
}

const result = PatientSchema.safeParse(patient)

if (!result.success) {
  console.error(result.error.issues)
}
```

Use the TypeScript model when constructing or consuming known FHIR shapes, and use the schema when data crosses a trust boundary.

The versioned entrypoints import from bare `zod`, so their schema instances follow the installed Zod package. `fhir-zod` works with Zod 3.25.x and 4.x.x through the same generated schema surface:

```ts
import { PatientSchema } from "fhir-zod/r4"
```

## Common use cases

### Validate data from an API

```ts
import { PatientSchema } from "fhir-zod/r4"

const response = await fetch("/api/patient/john-doe")
const payload: unknown = await response.json()

const parsed = PatientSchema.safeParse(payload)

if (!parsed.success) {
  throw new Error("Received an invalid R4 Patient payload")
}

console.log(parsed.data.resourceType)
```

### Keep FHIR versions explicit

```ts
import type { Patient as R4Patient } from "fhir-zod/r4"
import type { Patient as R5Patient } from "fhir-zod/r5"

function useR4Patient(patient: R4Patient) {
  return patient.resourceType
}

function useR5Patient(patient: R5Patient) {
  return patient.resourceType
}
```

### Validate choice fields

FHIR choice fields such as `value[x]` are emitted as concrete fields such as `valueQuantity`, `valueString`, and `valueBoolean`. The generated schemas reject payloads that provide more than one value for the same choice group.

```ts
import { ObservationSchema, type Observation } from "fhir-zod/r4"

const bodyWeight: Observation = {
  resourceType: "Observation",
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "29463-7",
        display: "Body weight",
      },
    ],
  },
  subject: { reference: "Patient/john-doe" },
  valueQuantity: {
    value: 72,
    unit: "kg",
    system: "http://unitsofmeasure.org",
    code: "kg",
  },
}

ObservationSchema.parse(bodyWeight)
```

### Validate Bundle structure

`BundleSchema` validates the Bundle envelope and the basic shape of entry resources. If your workflow needs full validation for known entry resources, validate those resources with their own schemas as well.

```ts
import { BundleSchema, type Bundle, type Patient } from "fhir-zod/r4"

const patient: Patient = {
  resourceType: "Patient",
  id: "john-doe",
}

const bundle: Bundle = {
  resourceType: "Bundle",
  type: "collection",
  entry: [{ resource: patient }],
}

BundleSchema.parse(bundle)
```

## Validation scope

`fhir-zod` is built for structural FHIR validation.

What generated schemas cover:

- required fields and cardinality
- FHIR primitive formats
- enum and code literal unions where generated from the spec
- choice-type exclusivity such as `value[x]`
- selected constrained reference targets

What generated schemas do not do:

- terminology validation
- FHIRPath execution
- profile resolution
- slicing
- FHIR server behavior

## Supported FHIR versions

| FHIR release | Import path |
| --- | --- |
| R5 | `fhir-zod/r5` |
| R4B | `fhir-zod/r4b` |
| R4 | `fhir-zod/r4` |
| STU3 | `fhir-zod/stu3` |

Each version exports generated TypeScript models and matching Zod schemas:

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4"
```

## Handling empty FHIR strings

FHIR `string` values reject empty strings by default. To accept real-world payloads that use empty strings for the FHIR `string` primitive, configure the root package before constructing or importing schemas that use `fhirString()`:

```ts
import { configureFhirString } from "fhir-zod"

configureFhirString({ allowEmpty: true })
```

This affects all generated schemas. It only changes the FHIR `string` primitive. Other primitives such as `date`, `dateTime`, `base64Binary`, `code`, `id`, and `uri` keep their default validation behavior.

## Bundle size and imports

Import from a specific FHIR version subpath:

```ts
import { ObservationSchema } from "fhir-zod/r4"
```

The package is designed for unbundled ESM output with `sideEffects: false`, so bundlers can drop generated schemas that your application does not import.

## Generation and quality

The generated models and schemas come from pinned official HL7 artifacts. Generated output is checked into this repository under `src/r5`, `src/r4b`, `src/r4`, and `src/stu3` so changes are reviewable.

The generator is part of the repository for transparency. Official FHIR example fixtures are checked into the test suite and used to validate generated schemas against real spec examples across supported releases.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup, generation, testing, and developer CLI workflow.

## AI usage

This project has been developed with help from AI coding tools, including OpenAI Codex. AI assistance is used as part of an engineering workflow centered on developer experience, test-driven development, generated output, and reviewable changes.

Human judgment remains responsible for project direction, architecture, validation scope, tests, and release decisions. Generated FHIR models and schemas are derived from pinned official HL7 artifacts, not from AI-generated FHIR definitions.

For AI coding assistants and other tools using this package, see [llms.txt](./llms.txt). It documents canonical imports, type/schema naming, validation scope, choice fields, Bundle validation, and common mistakes to avoid.

## Trademark notice

FHIR® is a registered trademark of Health Level Seven International (HL7). Use of the FHIR® name does not imply endorsement by HL7.
