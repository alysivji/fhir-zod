# FHIR Zod Task List

Track the work needed to align the repository with the current README.

## Foundation

- [x] Initialize TypeScript library
- [x] Use ESM-only package setup
- [x] Enable strict TypeScript configuration
- [x] Configure build output to `dist/`
- [x] Add Zod dependency
- [x] Add build script
- [x] Add test script
- [x] Add basic Vitest setup
- [x] Add `.gitignore`

## Package Surface

- [x] Publish root package as `@fhir-zod/core`
- [x] Export versioned subpaths for `./stu3`
- [x] Export versioned subpaths for `./r4`
- [x] Export versioned subpaths for `./r4b`
- [x] Export versioned subpaths for `./r5`
- [x] Verify subpath import works for `@fhir-zod/core/r4`

## Repository Structure

- [x] Create `src/generator`
- [x] Create `src/spec`
- [x] Create `src/shared`
- [x] Create `src/stu3`
- [x] Create `src/r4`
- [x] Create `src/r4b`
- [x] Create `src/r5`
- [x] Create `scripts`
- [x] Create `tests`
- [x] Add `scripts/generate.ts` placeholder

## Placeholder Schema

- [x] Add placeholder `Patient` schema in `src/r4/Patient.ts`
- [x] Export `Patient` from `src/r4/index.ts`
- [x] Add test proving `Patient.parse(...)` works

## Spec Inputs

- [x] Decide how official HL7 artifacts will be stored under `src/spec`
- [ ] Add initial raw FHIR spec files for STU3
- [ ] Add initial raw FHIR spec files for R4
- [ ] Add initial raw FHIR spec files for R4B
- [ ] Add initial raw FHIR spec files for R5
- [x] Document expected spec file layout

## Generator

- [ ] Parse StructureDefinitions
- [ ] Map FHIR primitive types to Zod
- [ ] Map FHIR complex types to Zod
- [ ] Handle cardinality for arrays
- [ ] Handle required vs optional fields
- [ ] Handle choice fields such as `value[x]`
- [ ] Enforce single-choice presence for generated choice fields
- [ ] Make generator output deterministic
- [ ] Implement generation entrypoint in `scripts/generate.ts`

## Generated Schema Output

- [ ] Generate shared primitives/helpers needed by emitted schemas
- [ ] Generate first real STU3 schema set
- [ ] Generate first real R4 schema set
- [ ] Generate first real R4B schema set
- [ ] Generate first real R5 schema set
- [ ] Export generated schemas by version without mixing versions
- [ ] Keep generated schemas Zod-first with no wrapper layer
- [ ] Add explicit type annotations where generated schemas exceed TypeScript's serialized inferred type limit

## Testing

- [x] Validate parsing of a basic valid resource
- [ ] Add tests for rejecting invalid structures
- [ ] Add tests for required field enforcement
- [ ] Add tests for choice field constraints
- [ ] Add version-specific test coverage
- [ ] Add tests for generator determinism
- [ ] Add a schema test that rejects unknown top-level Patient fields
- [ ] Compare generated Patient fields against the official HL7 R4 Patient definition page or source schema

## Documentation

- [ ] Keep README examples aligned with generated output
- [x] Document how to refresh spec files
- [ ] Document how to run the generator
- [ ] Document expectations around generated vs handwritten files
- [ ] Document how BackboneElement behavior is represented in generated schemas
- [ ] Carry source descriptions into generated schema fields where practical

## Patient Follow-Up

- [ ] Confirm whether `animal` should remain in the generated R4 Patient schema based on the pinned HL7 source artifacts
- [ ] Model primitive underscore fields as FHIR primitive extensions and compare the approach with `fhir.resources`
- [ ] Validate whether `Reference` fields should stay generic or be constrained by the HL7 source definitions
- [ ] Remove handwritten TODO-style notes from generated or checked-in schema files

## Non-Goals

- [ ] Do not add terminology validation
- [ ] Do not add FHIRPath evaluation
- [ ] Do not add profile resolution
- [ ] Do not add slicing support
- [ ] Do not add server-side logic
