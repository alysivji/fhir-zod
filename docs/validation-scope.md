---
title: Validation Scope
description: What the generated schemas validate, and what remains outside the scope of this library.
---

# Validation Scope

`fhir-zod` focuses on structural FHIR validation.

## Covered

- Field presence and cardinality
- FHIR primitive formatting
- Enum and code literal unions generated from the spec
- Choice-type exclusivity such as `value[x]`
- Selected constrained reference targets

## Not covered

- Terminology validation
- FHIRPath execution
- Profile resolution
- Slicing
- FHIR server behavior
- End-to-end clinical or regulatory correctness

## Practical implication

Use `fhir-zod` to validate the structural shape of data entering or leaving your system. If a workflow depends on terminology services, profile-aware validation, or server semantics, combine `fhir-zod` with other FHIR-specific tooling instead of stretching this package past its design target.

If you need the clinical or interoperability meaning of a resource, follow the version-specific HL7 links from [FHIR Versions](/versions) or [Supported Resources](/supported-resources/).
