---
title: For Agents
description: Task-oriented guidance for AI coding assistants and other automated tools using fhir-zod.
---

# For Agents

Use this page when the consumer is an AI coding assistant or another automated tool that needs operational guidance instead of conceptual package docs.

## Pick one release first

Choose the FHIR release before choosing schemas or model types. Keep the same release in the type import, schema import, and surrounding workflow.

Use `fhir-zod/<release>/<Resource>` for concrete resources; use `fhir-zod/<release>` for shared datatypes and release-level exports.

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4/Patient";
```

Do not mix releases unless the code is explicitly translating between them.

## Validate unknown JSON

Use `safeParse` when input is untrusted and validation failure should stay in normal control flow.

```ts
import { PatientSchema } from "fhir-zod/r4/Patient";

const payload: unknown = await fetch("/api/patient/example").then((response) =>
  response.json(),
);

const result = PatientSchema.safeParse(payload);

if (!result.success) {
  console.error(result.error.issues);
} else {
  console.log(result.data.resourceType);
}
```

## Handle Bundle carefully

`BundleSchema` validates the Bundle envelope and the basic shape of known entry resources. When the workflow depends on a specific entry resource type, validate that resource again with its own schema.

```ts
import { BundleSchema, type Bundle } from "fhir-zod/r4/Bundle";
import { PatientSchema } from "fhir-zod/r4/Patient";

const bundle: Bundle = {
  resourceType: "Bundle",
  type: "collection",
  entry: [
    {
      resource: {
        resourceType: "Patient",
        id: "example",
      },
    },
  ],
};

const parsedBundle = BundleSchema.parse(bundle);

for (const entry of parsedBundle.entry ?? []) {
  if (entry.resource?.resourceType === "Patient") {
    PatientSchema.parse(entry.resource);
  }
}
```

## Do not assume

- Structural validation is not full FHIR semantics, terminology validation, or profile validation.
- `Reference.reference` does not prove the referenced resource exists.
- R5, R4B, R4, and STU3 should not be mixed unless the code is translating deliberately.
- `*SchemaInternal` symbols are generated implementation details, not public API.

## When validation fails

Prefer `safeParse` for repair and retry loops. Inspect `result.error.issues`, keep the issue paths, and preserve those paths in logs or follow-up prompts so fixes can be targeted to the failing fields.

```ts
import { ObservationSchema } from "fhir-zod/r4/Observation";

const payload: unknown = await fetch("/api/observation/example").then(
  (response) => response.json(),
);

const result = ObservationSchema.safeParse(payload);

if (!result.success) {
  const issues = result.error.issues.map((issue) => ({
    code: issue.code,
    message: issue.message,
    path: issue.path,
  }));

  console.error(issues);
}
```

Use `parse` only when invalid input should throw immediately and the caller does not need to recover in normal control flow.
