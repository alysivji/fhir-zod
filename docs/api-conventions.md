---
title: FHIR TypeScript API Conventions
description: Naming rules and import conventions for fhir-zod's TypeScript FHIR models and Zod schemas — types, schemas, and versioned paths.
---

# API Conventions

The intended public shape is type-first:

- `Patient` is the generated TypeScript model
- `PatientSchema` is the runtime validator

## Preferred import patterns

Use `fhir-zod/<release>/<Resource>` for concrete resources; use `fhir-zod/<release>` for shared datatypes and release-level exports.

Import concrete resources from resource entry points:

```ts
import { PatientSchema, type Patient } from "fhir-zod/r4/Patient";
```

Import shared datatypes from the version entry point when needed:

```ts
import { HumanNameSchema, type HumanName } from "fhir-zod/r4";
```

Import root helpers from the package root:

```ts
import { configureFhirString } from "fhir-zod";
```

## Rules to keep

- Keep the FHIR release explicit in every import path.
- Use the exported TypeScript model as the main application-facing type.
- Use the exported Zod schema at runtime boundaries.
- Use resource entry points for concrete resources and version entry points for shared datatypes.
- Treat `z.output<typeof SomeSchema>` as an implementation detail, not the primary public model strategy.

## Imports to avoid

Do not import generated internal schema symbols:

```ts
// Avoid
import { PatientSchemaInternal } from "fhir-zod/r4/Patient";
```

Do not import from generated source paths in application code:

```ts
// Avoid
import { PatientSchema } from "../src/r4/Patient/Patient";
```

Do not mix releases in a single flow unless you are translating deliberately:

```ts
import type { Patient as R4Patient } from "fhir-zod/r4/Patient";
import type { Patient as R5Patient } from "fhir-zod/r5/Patient";
```
