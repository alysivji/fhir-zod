---
layout: home
title: fhir-zod — FHIR Types and Zod Validation for TypeScript
titleTemplate: ':title'

hero:
  name: fhir-zod
  text: FHIR types and Zod validation for TypeScript
  tagline: Install, import, validate. No generators, no servers, no HL7 toolchain required.
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started
    - theme: alt
      text: Supported Resources
      link: /versions/
features:
  - title: Works out of the box
    icon: "📦"
    details: "Pre-generated TypeScript models and Zod schemas for every major FHIR version. npm install and import — no spec files or generators to run."
  - title: Validate without a server
    icon: "⚡"
    details: "Validate FHIR payloads in-process using Zod. No validation server, no network round-trips, no infrastructure required."
  - title: Every major FHIR version
    icon: "🗂️"
    details: "One library with full support for R5, R4B, R4, and STU3. No need to install separate packages per version."
---

`fhir-zod` gives TypeScript developers FHIR types and runtime validation without the setup. Other approaches hand you a generator and expect you to run it. This one ships the output.

## Get started

```bash
npm install fhir-zod zod
```

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

- TypeScript models and Zod schemas for all core FHIR resources
- Versioned imports for R5, R4B, R4, and STU3
- Structural validation, primitive formatting, and choice-type checks
- Tree-shakeable — you only bundle the FHIR version(s) your project uses
- Works with Zod 3 and 4

## What this library is not

- Not a FHIR server
- Not a FHIR client
- Not a terminology validator
- Not a FHIRPath engine
- Not a profile-resolution or slicing engine

## Next steps

- [Getting Started](/getting-started) — install and validate your first payload
- [Why fhir-zod](/why-fhir-zod) — package boundaries and intended use
- [FHIR Versions](/versions/) — supported releases and import paths
- [Validation Scope](/validation-scope) — what the schemas check and what they don't
- [For AI Agents](/for-agents) — task-oriented guidance for coding assistants and automated tooling
