---
layout: home

hero:
  name: fhir-zod
  text: Small-scope FHIR types and Zod schemas
  tagline: A single-purpose library for spec-aligned FHIR shapes, opinionated Zod 3/4 support, and explicit multi-version imports.
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started
    - theme: alt
      text: Supported Resources
      link: /supported-resources/
features:
  - title: FHIR Types and Runtime Validation
    icon: "🔥"
    details: "This library does one thing: generate FHIR types and matching Zod schemas from official FHIR definitions."
  - title: Built with Zod
    icon: "🩺"
    details: "Fits into standard Zod-based workflows with support for Zod ^3.25.1 and ^4.0.0."
  - title: Supports All Major FHIR Versions
    icon: "🧭"
    details: "Supports R5, R4B, R4, and STU3 through explicit release-specific entry points generated from the official definitions for each version."
---

`fhir-zod` is a small-scope developer library: it gives you FHIR shapes that stay close to official definitions in both TypeScript and runtime validation, without trying to be a FHIR server, client, or full semantic validator.

## Why teams use it

- Keep your TypeScript models and runtime validators aligned to the same official FHIR source.
- Drop FHIR validation into existing Zod-based code without swapping validation stacks.
- Validate data at trust boundaries without mixing FHIR releases accidentally.
- Use one library with explicit support for R5, R4B, R4, and STU3.

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
- One opinionated schema surface for Zod `^3.25.1` and `^4.0.0`
- Explicit versioned imports for R5, R4B, R4, and STU3
- Output generated from pinned official FHIR definitions

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
- Use [Supported Resources](/supported-resources/) to browse generated core resources by release.
- Read [Validation Scope](/validation-scope) before relying on the schemas for non-structural checks.
