---
layout: home

hero:
  name: fhir-zod
  text: Zod schemas for FHIR resources
  tagline: Generated TypeScript models and runtime validators for HL7 FHIR.
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/alysivji/fhir-zod
---

`fhir-zod` is a generated TypeScript library for working with HL7 FHIR shapes in application code.

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

## Next steps

- Start with [Getting Started](/getting-started) for install and validation examples.
- Use [FHIR Versions](/versions) to keep imports release-specific.
- Read [Validation Scope](/validation-scope) before relying on the schemas for non-structural checks.
