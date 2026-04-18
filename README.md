# FHIR Zod 🩺

Type-safe FHIR models and runtime validation with Zod.

![FHIR R5](https://img.shields.io/badge/FHIR-R5-purple) ![FHIR R4B](https://img.shields.io/badge/FHIR-R4B-blue) ![FHIR R4](https://img.shields.io/badge/FHIR-R4-green) ![FHIR STU3](https://img.shields.io/badge/FHIR-STU3-lightgrey)

[![npm version](https://img.shields.io/npm/v/fhir-zod.svg)](https://www.npmjs.com/package/fhir-zod) ![Zod](https://img.shields.io/badge/Zod-3.25.x%20%7C%204.x.x-3068B7?logo=zod&logoColor=white) [![CI](https://github.com/alysivji/fhir-zod/actions/workflows/ci.yml/badge.svg)](https://github.com/alysivji/fhir-zod/actions/workflows/ci.yml) [![codecov](https://codecov.io/gh/alysivji/fhir-zod/graph/badge.svg)](https://codecov.io/gh/alysivji/fhir-zod)

## Why use it?

- 🧩 **Type-first models**: TypeScript interfaces for FHIR resources and datatypes.
- ✅ **Runtime validation**: Zod schemas for parsing data at boundaries.
- 🗂️ **Versioned imports**: separate entry points for R5, R4B, R4, and STU3.
- 📘 **Spec-aligned generation**: generated from pinned official HL7 artifacts.
- 🧪 **Example-backed tests**: checked against official FHIR example fixtures.
- 🌳 **Tree-shakeable shape**: import the versioned schemas you need.

## Project status

`fhir-zod` is pre-release. Early versions may include breaking changes while the package shape stabilizes.

Published versions are intended for testing and feedback rather than production use.

## Installation

```bash
npm install fhir-zod zod
```

Compatible with [Zod](https://zod.dev/) 3.25.x and 4.x.x.

Supports Node.js 20+ and modern bundlers. Import using ES modules and versioned entry points such as `fhir-zod/r4`, resource module entry points such as `fhir-zod/r4/Patient`, and other release entry points such as `fhir-zod/r5`.

## Quick start

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4/Patient"

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
import { PatientSchema } from "fhir-zod/r4/Patient"
```

## Common use cases

### Validate data from an API

```ts
import { PatientSchema } from "fhir-zod/r4/Patient"

const response = await fetch("/api/patient/john-doe")
const payload: unknown = await response.json()

const parsed = PatientSchema.safeParse(payload)

if (!parsed.success) {
  throw new Error("Received an invalid R4 Patient payload")
}

console.log(parsed.data.resourceType)
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

### Validate Bundle resources

`BundleSchema` recursively validates known FHIR resources in `entry[].resource`.

```ts
import { BundleSchema, type Bundle } from "fhir-zod/r4"
import type { Patient } from "fhir-zod/r4/Patient"

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

### Keep FHIR versions explicit

```ts
import type { Patient as R4Patient } from "fhir-zod/r4/Patient"
import type { Patient as R5Patient } from "fhir-zod/r5"

function useR4Patient(patient: R4Patient) {
  return patient.resourceType
}

function useR5Patient(patient: R5Patient) {
  return patient.resourceType
}
```

## Validation scope

`fhir-zod` validates the structure of FHIR data.

**Covers:**
- required fields and cardinality
- FHIR primitive formats
- enum and code literal unions from the spec
- choice-type exclusivity (e.g. `value[x]`)
- selected constrained reference targets

**Does not cover:**
- terminology validation
- FHIRPath execution
- profile resolution or slicing
- FHIR server behavior

## Supported FHIR versions

| FHIR release | Import path |
| --- | --- |
| R5 | `fhir-zod/r5` |
| R4B | `fhir-zod/r4b` |
| R4 | `fhir-zod/r4`, `fhir-zod/r4/Patient` |
| STU3 | `fhir-zod/stu3` |

Each release entry point exports TypeScript interfaces and matching Zod schemas. R4 is beginning to add resource-specific folder modules, starting with Patient:

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4/Patient"
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

Each FHIR version is exposed as a separate entry point. Bundlers will tree-shake unused FHIR versions. In frontend code, lazy-load runtime schema imports where validation runs.

R4 Patient is also exposed through its own resource module:

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4/Patient"
```

The R4 Patient module registers Patient for contained-resource validation. Import `fhir-zod/r4` when you need the full R4 resource registry.

## Specification alignment

Schemas and TypeScript models are generated from pinned official HL7 FHIR definitions, not handwritten schemas or converted TypeScript typedefs. Validation is tested against official FHIR example data from the specification across supported versions.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup, generation, testing, and developer CLI workflow.

## AI and tooling notes

For development process notes, including AI-assisted workflow details, see [CONTRIBUTING.md](./CONTRIBUTING.md). For AI coding assistants and other tools using this package, see [llms.txt](./llms.txt).

## Trademark notice

FHIR® is a registered trademark of Health Level Seven International (HL7). Use of the FHIR® name does not imply endorsement by HL7.
