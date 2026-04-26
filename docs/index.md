---
layout: home

hero:
  name: fhir-zod
  text: Spec-aligned FHIR types and validators
  tagline: Generated TypeScript models and runtime validators for HL7 FHIR, with explicit release separation and clear validation boundaries.
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started
    - theme: alt
      text: Supported Resources
      link: /supported-resources
features:
  - title: Type-first package surface
    details: Use named TypeScript models such as `Patient` in application code, then reach for matching runtime schemas such as `PatientSchema` at trust boundaries.
  - title: Runtime validation where it matters
    details: Validate structural FHIR payloads, primitive formatting, choice-type exclusivity, and selected reference-target constraints.
  - title: Explicit FHIR release paths
    details: Keep `stu3`, `r4`, `r4b`, and `r5` imports separate so version drift stays visible in code review.
---

`fhir-zod` gives you spec-aligned TypeScript models and runtime validators for HL7 FHIR, without pretending to be a FHIR server, client, or full semantic validator.

## Why teams use it

- Generate from pinned HL7 artifacts instead of hand-maintaining model shapes.
- Keep TypeScript models and runtime schemas separate but aligned.
- Validate data when it crosses trust boundaries without mixing FHIR releases accidentally.
- Stay close to the base spec while keeping package ergonomics practical.

## Install

```bash
npm install fhir-zod zod
```

## Basic usage

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4/Patient";

const patient: Patient = {
  resourceType: "Patient",
  id: "john-doe",
  active: true,
  name: [{ family: "Doe", given: ["John"] }],
  gender: "male",
  birthDate: "1985-03-15",
};

const result = PatientSchema.safeParse(patient);

if (!result.success) {
  console.error(result.error.issues);
}
```

## What you get

- Generated TypeScript models such as `Patient`
- Generated Zod schemas such as `PatientSchema`
- Explicit versioned imports for STU3, R4, R4B, and R5
- Spec-aligned output from pinned HL7 artifacts

## What validation covers

- Structural field presence and cardinality
- Primitive formatting
- Choice-type exclusivity such as `value[x]`
- Selected constrained reference targets

## What this library is not

- Not a FHIR server
- Not a FHIR client
- Not a terminology validator
- Not a FHIRPath engine
- Not a profile-resolution or slicing engine

## Next steps

- Start with [Getting Started](/getting-started) for install and validation examples.
- Read [Why `fhir-zod`](/why-fhir-zod) for package boundaries and intended use.
- Use [FHIR Versions](/versions) to keep imports release-specific.
- Use [Supported Resources](/supported-resources) to browse generated core resources by release.
- Read [Validation Scope](/validation-scope) before relying on the schemas for non-structural checks.
