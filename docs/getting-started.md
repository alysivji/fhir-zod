---
title: Getting Started
description: Install the package, import generated models and schemas, and validate FHIR payloads.
---

# Getting Started

Install `fhir-zod` alongside `zod`:

```bash
npm install fhir-zod zod
```

## Parse a concrete resource

Use the generated TypeScript model for the data shape and the matching schema for runtime validation.

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

- Use [Why `fhir-zod`](/why-fhir-zod) to understand the package boundary before layering on other FHIR tooling.
- Use [FHIR Versions](/versions) to keep imports release-specific.
- Use [Supported Resources](/supported-resources/) to confirm resource coverage and find canonical HL7 links.
- Use [API Conventions](/api-conventions) to understand `Patient` versus `PatientSchema`.
- Use [Validation Scope](/validation-scope) to understand the structural checks the schemas enforce.
