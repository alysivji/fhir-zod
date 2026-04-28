# fhir-zod

FHIR types and Zod validation for TypeScript — install, import, validate. No generators, no servers, no HL7 toolchain required.

![FHIR R5](https://img.shields.io/badge/FHIR-R5-purple) ![FHIR R4B](https://img.shields.io/badge/FHIR-R4B-blue) ![FHIR R4](https://img.shields.io/badge/FHIR-R4-green) ![FHIR STU3](https://img.shields.io/badge/FHIR-STU3-lightgrey)

[![npm version](https://img.shields.io/npm/v/fhir-zod.svg)](https://www.npmjs.com/package/fhir-zod) ![Zod](https://img.shields.io/badge/Zod-3.25.x%20%7C%204.x.x-3068B7?logo=zod&logoColor=white) [![CI](https://github.com/alysivji/fhir-zod/actions/workflows/ci.yml/badge.svg)](https://github.com/alysivji/fhir-zod/actions/workflows/ci.yml) [![codecov](https://codecov.io/gh/alysivji/fhir-zod/graph/badge.svg)](https://codecov.io/gh/alysivji/fhir-zod)

## Why use it?

- 📦 **Works out of the box**: pre-generated TypeScript models and Zod schemas from pinned HL7 definitions. No spec files to download, no generators to run.
- ⚡ **Validate without a server**: in-process Zod validation — no validation server, no network round-trips, no infrastructure.
- 🗂️ **One library, every major FHIR version**: R5, R4B, R4, and STU3 with explicit versioned entry points.
- 🌳 **Tree-shakeable**: unused FHIR versions are excluded from your bundle. See [Bundle size and imports](#bundle-size-and-imports) for how polymorphic fields affect bundling.
- 🧪 **Validated against official examples**: schemas are tested against HL7's own example fixtures for each supported version.
- ✅ **Zod 3 and 4**: fits into existing Zod-based validation workflows without swapping validation stacks.

## Project status

`fhir-zod` is pre-release. Early versions may include breaking changes while the package shape stabilizes.

Published versions are intended for testing and feedback rather than production use.

## Installation

```bash
npm install fhir-zod zod
```

Compatible with [Zod](https://zod.dev/) `^3.25.1` and `^4.0.0`.

Supports Node.js 20+ and modern bundlers. Import concrete resources from resource module entry points such as `fhir-zod/r4/Patient`. Versioned entry points such as `fhir-zod/r4` expose shared datatypes and supporting generated definitions.

## Documentation

Browse the package docs at <https://fhir-zod.vercel.app/>.

The VitePress source for package usage and validation boundaries lives in [`docs/`](./docs/). Preview it locally with:

```bash
npm run docs:dev
```

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

Use the TypeScript model when you want the FHIR shape in code, and use the schema when data crosses a trust boundary.

The versioned entrypoints import from bare `zod`, so their schema instances follow the installed Zod package. `fhir-zod` works with the same generated schema surface across Zod `^3.25.1` and `^4.0.0`:

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
import { ObservationSchema, type Observation } from "fhir-zod/r4/Observation"

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
import { BundleSchema, type Bundle } from "fhir-zod/r4/Bundle"
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
import type { Patient as R5Patient } from "fhir-zod/r5/Patient"

function useR4Patient(patient: R4Patient) {
  return patient.resourceType
}

function useR5Patient(patient: R5Patient) {
  return patient.resourceType
}
```

## Validation scope

`fhir-zod` validates the structural shape of FHIR data while keeping the emitted types close to the base specification.

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

| FHIR release | Version entry point | Resource entry points |
| --- | --- | --- |
| R5 | `fhir-zod/r5` | `fhir-zod/r5/<Resource>` |
| R4B | `fhir-zod/r4b` | `fhir-zod/r4b/<Resource>` |
| R4 | `fhir-zod/r4` | `fhir-zod/r4/<Resource>` |
| STU3 | `fhir-zod/stu3` | `fhir-zod/stu3/<Resource>` |

Each release exposes two import styles. The version entry point exports shared datatype schemas and supporting generated definitions. Concrete resources are exported from resource entry points:

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4/Patient"
```

## Handling empty FHIR strings

FHIR `string` values reject empty strings by default. To accept real-world payloads that use empty strings for the FHIR `string` primitive, configure the root package before parsing:

```ts
import { configureFhirString } from "fhir-zod"

configureFhirString({ allowEmpty: true })
```

This setting is process-global and is read when schemas parse input, so it can be applied before or after generated schema modules are imported. It affects all generated schemas that validate FHIR `string` values. It only changes the FHIR `string` primitive. Other primitives such as `date`, `dateTime`, `base64Binary`, `code`, `id`, and `uri` keep their default validation behavior.

Test suites that change this setting should reset it in `afterEach`:

```ts
afterEach(() => {
  configureFhirString({ allowEmpty: false })
})
```

## Bundle size and imports

Import concrete resources from their resource entry points:

```ts
import { ObservationSchema } from "fhir-zod/r4/Observation"
```

Each FHIR version is exposed as a separate entry point for shared datatypes and supporting generated definitions. Bundlers will tree-shake unused FHIR versions. In frontend code, lazy-load runtime schema imports where validation runs.

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4/Patient"
```

Schemas with polymorphic `Resource` fields, such as `Bundle.entry[].resource` and `DomainResource.contained`, include the internal full-resource dispatcher for that FHIR release. This keeps validation independent of import order, but resources with polymorphic fields can pull more schemas into a runtime bundle.

## Specification alignment

Schemas and TypeScript models are generated from pinned official HL7 FHIR definitions, not handwritten schemas or converted TypeScript typedefs. That keeps the public shapes close to the base specification while still fitting into existing Zod-based validation flows. Validation is tested against official FHIR example data from the specification across supported versions.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup, generation, testing, and developer CLI workflow.

## Developer benchmarking

The internal validation benchmark harness, including Synthea setup instructions, lives in [`scripts/benchmarking/README.md`](./scripts/benchmarking/README.md). Generated benchmark payloads and result JSON stay under `.local/` and are not committed.

## AI and tooling notes

For development process notes, including AI-assisted workflow details, see [CONTRIBUTING.md](./CONTRIBUTING.md). For AI coding assistants and other tools using this package, see [llms.txt](./llms.txt).

## Acknowledgements

`fhir-zod` was inspired by [fhir.resources](https://github.com/nazrulworld/fhir.resources), the Python library for working with FHIR resources.

## Trademark notice

FHIR® is a registered trademark of Health Level Seven International (HL7). Use of the FHIR® name does not imply endorsement by HL7.
