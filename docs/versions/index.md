---
title: FHIR Versions
description: Supported FHIR releases, versioned import paths, and the generated resource inventory for each version.
---

# FHIR Versions & Resources

`fhir-zod` supports all four major FHIR releases through explicit versioned entry points. Each release is independent — pick one for a given model flow and keep your types and schemas on that path.

## Import paths

| FHIR release | Version entry point | Resource entry points | HL7 spec |
| --- | --- | --- | --- |
| R5 | `fhir-zod/r5` | `fhir-zod/r5/<Resource>` | [HL7 R5](https://hl7.org/fhir/R5) |
| R4B | `fhir-zod/r4b` | `fhir-zod/r4b/<Resource>` | [HL7 R4B](https://hl7.org/fhir/R4B) |
| R4 | `fhir-zod/r4` | `fhir-zod/r4/<Resource>` | [HL7 R4](https://hl7.org/fhir/R4) |
| STU3 | `fhir-zod/stu3` | `fhir-zod/stu3/<Resource>` | [HL7 STU3](https://hl7.org/fhir/STU3) |

Use `fhir-zod/<release>/<Resource>` for concrete resources; use `fhir-zod/<release>` for shared datatypes and release-level exports.

Import concrete resources from their resource entry point:

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4/Patient";
```

Import shared datatypes from the version entry point when needed:

```ts
import { HumanNameSchema, type HumanName } from "fhir-zod/r4";
```

Don't mix releases in a single flow unless you're explicitly translating between them:

```ts
import type { Patient as R4Patient } from "fhir-zod/r4/Patient";
import type { Patient as R5Patient } from "fhir-zod/r5/Patient";
```

## Resource inventory

Browse generated core resources by release. Each resource links back to the canonical HL7 docs for semantics beyond the package shape.

- [R5](/versions/r5)
- [R4B](/versions/r4b)
- [R4](/versions/r4)
- [STU3](/versions/stu3)

## Support status

R5, R4B, R4, and STU3 are fully supported. The package is pre-release, so package shape and generated output may change between versions. For the full semantic meaning of any resource, refer to the official HL7 FHIR specification for that release.
