---
title: Getting Started with FHIR TypeScript Validation
description: Install fhir-zod and validate FHIR resources in TypeScript using Zod schemas — no generators, no servers, no HL7 toolchain.
---

# Getting Started

Install `fhir-zod` alongside `zod`:

```bash
npm install fhir-zod zod
```

`fhir-zod` works with Zod 3 and 4, so it fits into existing Zod-based validation flows without any changes to your setup.

## Parse a concrete resource

The TypeScript model gives you the type; the Zod schema validates at runtime.

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

## Validate untrusted JSON

Prefer `safeParse` when invalid input should stay in normal control flow.

```ts
import { ObservationSchema } from "fhir-zod/r4/Observation";

const payload: unknown = await fetch("/api/observation").then((response) =>
  response.json(),
);

const parsed = ObservationSchema.safeParse(payload);

if (!parsed.success) {
  throw new Error("Invalid R4 Observation payload");
}
```

Use `parse` when invalid input should throw immediately.

```ts
import { BundleSchema, type Bundle } from "fhir-zod/r4/Bundle";

const bundle: Bundle = {
  resourceType: "Bundle",
  type: "collection",
  entry: [],
};

BundleSchema.parse(bundle);
```

## Configure empty FHIR string handling

The root package exports shared helpers such as `configureFhirString`.

```ts
import { configureFhirString } from "fhir-zod";

configureFhirString({ allowEmpty: true });
```

This setting is process-global and only changes validation for the FHIR `string` primitive.

## Next steps

- [Why fhir-zod](/why-fhir-zod) — understand the package boundary before layering on other FHIR tooling
- [FHIR Versions](/versions/) — supported releases, import paths, and resource inventory
- [API Conventions](/api-conventions) — understand `Patient` versus `PatientSchema`
- [Validation Scope](/validation-scope) — what the schemas check and what they don't
- [For AI Agents](/for-agents) — task-oriented guidance for coding assistants and automated tooling
