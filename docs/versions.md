---
title: FHIR Versions
description: Supported FHIR releases, versioned import paths, and links back to the canonical HL7 specification.
---

# Supported FHIR releases

`fhir-zod` keeps each FHIR release on an explicit import path. Pick one release for a given model flow and keep the types and schemas on that same path.

| FHIR release | Version entry point | Resource entry points | Canonical HL7 docs |
| --- | --- | --- | --- |
| STU3 | `fhir-zod/stu3` | `fhir-zod/stu3/<Resource>` | [HL7 STU3](https://hl7.org/fhir/STU3) |
| R4 | `fhir-zod/r4` | `fhir-zod/r4/<Resource>` | [HL7 R4](https://hl7.org/fhir/R4) |
| R4B | `fhir-zod/r4b` | `fhir-zod/r4b/<Resource>` | [HL7 R4B](https://hl7.org/fhir/R4B) |
| R5 | `fhir-zod/r5` | `fhir-zod/r5/<Resource>` | [HL7 R5](https://hl7.org/fhir/R5) |

## Import rules

- Use one release consistently in a given parsing or modeling flow.
- Import shared datatypes from the version entry point when that is sufficient.
- Import concrete resources from resource entry points such as `fhir-zod/r4/Patient`.
- Do not mix STU3, R4, R4B, and R5 types unless your code explicitly translates between releases.

## Support status

- STU3, R4, R4B, and R5 generation are implemented and checked in on this branch.
- The package is still pre-release, so package shape and generated output may change between releases.
- Package orientation lives here; full semantic meaning still belongs to the official HL7 FHIR specification for each release.
