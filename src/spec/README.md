# Spec Inputs

`src/spec` tracks the pinned official HL7 FHIR core package metadata used as generator input.

The raw package contents are downloaded on demand into `.context/` so the repository stays small while generation remains pinned and reproducible.

## Layout

The generator currently pins all target versions, using this directory contract:

```text
src/spec/<version>/
  manifest.json
```

- `manifest.json` records the pinned upstream package and the local cache path used by downstream tooling.
- The extracted package contents live outside git at `.context/spec-cache/<version>/package/`.

## Pinned Versions

| Directory | FHIR version | Upstream package | Package version |
| --- | --- | --- | --- |
| `stu3` | `3.0.2` | `hl7.fhir.r3.core` | `3.0.2` |
| `r4` | `4.0.1` | `hl7.fhir.r4.core` | `4.0.1` |
| `r4b` | `4.3.0` | `hl7.fhir.r4b.core` | `4.3.0` |
| `r5` | `5.0.0` | `hl7.fhir.r5.core` | `5.0.0` |

## Rules

- Do not commit extracted upstream package files into the repository.
- Do not hand-edit files inside `.context/spec-cache/`.
- Keep this directory limited to official core spec inputs. Generated code belongs elsewhere.

## Refresh Workflow

Fetch the default cached package set:

```bash
npm run fetch-spec
```

This currently downloads `r4` only.

Fetch specific versions explicitly:

```bash
npm run fetch-spec -- stu3
npm run fetch-spec -- r4b r5
```

After refreshing:

1. Update the matching `src/spec/<version>/manifest.json` if the pinned package changed.
2. Confirm `.context/spec-cache/<version>/package/StructureDefinition-*.json` exists.
3. Confirm a representative resource such as `.context/spec-cache/<version>/package/StructureDefinition-Patient.json` is present.
4. Run `npm test` to verify the baseline still passes.
