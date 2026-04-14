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
- [x] Emit package output in a tree-shakeable shape
  Current state:
  package builds use unbundled ESM output with `sideEffects: false`, and a
  consumer-bundle regression test verifies importing one R4 schema does not
  retain unrelated R4 schema modules.

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

## Initial Bootstrap Milestones

- [x] Add placeholder `Patient` schema in `src/r4/Patient.ts`
- [x] Export `Patient` from `src/r4/index.ts`
- [x] Add test proving `Patient.parse(...)` works

## Spec Inputs

- [x] Decide how official HL7 artifacts will be stored under `src/spec`
- [x] Store pinned official HL7 package metadata in version manifests instead of committing raw extracted spec files
- [x] Fetch extracted upstream package contents into `.local/spec-cache/<version>/package` on demand
- [x] Document expected spec file layout

## Generator

- [x] Parse StructureDefinitions
- [x] Map FHIR primitive types to Zod
- [x] Map FHIR complex types to Zod
- [x] Handle cardinality for arrays
- [x] Handle required vs optional fields
- [x] Handle choice fields such as `value[x]`
- [x] Enforce single-choice presence for generated choice fields
- [x] Enforce required choice-group presence without making every variant individually required
- [x] Make generator output deterministic
- [x] Implement generation entrypoint in `scripts/generate.ts`
- [x] Replace the hand-maintained Patient-first R4 seed list with shared target discovery
- [x] Default R4 generation to all canonical core resources plus required dependencies
- [x] Exclude profile-resource definitions from generation until canonical-url-based naming is implemented

## Generated Schema Output

- [x] Generate shared primitives/helpers needed by emitted schemas
- [ ] Generate first real STU3 schema set
- [x] Generate first real R4 schema set
- [ ] Generate first real R4B schema set
- [x] Generate first real R5 schema set
- [x] Export generated schemas by version without mixing versions
- [x] Keep generated schemas Zod-first with no wrapper layer
- [x] Add a short-term workaround for generated schemas that exceed TypeScript's serialized inferred type limit
  Current workaround: annotate oversized generated schema shapes to unblock DTS builds.
- [x] Split the public generated surface into TypeScript models and separate Zod schemas for generated R4 output
  Current state:
  generated R4 exports `Patient` as the public TS model and `PatientSchema` as the runtime validator.
  Follow-up:
  extend the same public surface pattern to additional generated versions.
- [x] Decide the public model strategy for generated declarations in additional versions
  Current state:
  generated R4 and R5 output use named TypeScript models for the public surface
  and separate `*Schema` exports for runtime validation. Object-like FHIR
  definitions prefer interfaces, with type aliases retained where unions or
  recursive composition make that cleaner.
- [x] Teach the generator to emit named TypeScript models for generated R4 definitions
  Current state:
  generated R4 declaration tests assert named interfaces and `z.ZodType<Model>` schema exports instead of `z.output<typeof Schema>`.
  Follow-up:
  carry the same emission strategy into additional generated versions.
- [x] Rename generated R4 schema exports to `*Schema` alongside the separate public model layer
- [x] Preserve spec-defined inheritance relationships in generated TS models and schema exports where runtime initialization is safe
  Current state:
  generated R4 and R5 output preserve base relationships such as `Resource`
  extending `Base`, `DomainResource` extending `Resource`, and concrete
  resources extending their spec-defined base types when those relationships can
  be emitted without triggering cyclic ESM initialization failures.
- [ ] Audit inheritance/codegen gaps for abstract schemas and cyclic dependencies
  Current state: safe cases now emit `Base.extend({...})` for abstract types such as `Resource`, `DomainResource`, and some concrete resources.
  Current shortfall: definitions that participate in dependency cycles still fall back to flattened one-shot schemas to avoid ESM initialization failures.
  Follow-up direction: generate a class hierarchy/dependency diagram from Python's `fhir.resources` package and use it to define which FHIR types can participate in runtime inheritance safely and which need a different emission strategy.

## Testing

- [x] Validate parsing of a basic valid resource
- [x] Add tests for rejecting invalid structures
- [x] Add tests for required field enforcement
- [x] Add tests for choice field constraints
- [x] Add version-specific test coverage
- [x] Add tests for generator determinism
- [x] Fail clearly or skip intentionally when extracted spec cache is missing
- [x] Add a schema test that rejects unknown top-level Patient fields
- [x] Validate generated Patient fields directly against the pinned HL7 R4 StructureDefinition inputs
- [x] Add R4 target-inventory regression tests
- [x] Add R5 target-inventory regression tests
- [x] Add generic official-example tests for generated R4 fixtures
- [x] Download broader official R5 example fixtures
  Current state:
  R5 target discovery exists, committed R5 official example fixtures are
  checked in under `tests/fixtures/r5/`, and the generic R5 official-example
  suite validates them with known mismatches tracked as expected failures.
- [x] Add package tree-shaking regression test
  Current state:
  `tests/tree-shaking.test.ts` builds a temporary package and bundles a consumer
  import of `PatientSchema` from `@fhir-zod/core/r4`, asserting unrelated R4
  schema internals are absent from the consumer bundle.
- [ ] Consider a dedicated CI profile that exercises spec-dependent suites after `npm run fetch-spec`
- [ ] Investigate official example expected failures that violate emitted structural constraints
  Current handling:
  expected-failure fixtures still execute in the R4/R5 official-example suites
  via Vitest `it.fails`, and each entry is also surfaced as a skipped tracking
  test in `tests/official-example-expected-failures.test.ts` so the unresolved
  investigation debt remains visible in `npm test` summaries.
  Resolved R5 generator issue:
  R5 `ResourceType` enum failures in `GraphDefinition`, `OperationDefinition`,
  and `SearchParameter` were caused by the generator not following imported
  ValueSets such as `version-independent-all-resource-types -> all-resource-types`.
  That is fixed by recursive ValueSet import resolution; those fixtures now pass
  and are no longer expected failures.
  Current R4 expected failures:
  `DeviceMetric/devicemetric-example.json`
  `DeviceUseStatement/deviceusestatement-example.json`
  `MedicationRequest/medicationrequest0301.json`
  `Observation/observation-example-clinical-gender.json`
  Current R5 expected failures:
  `BiologicallyDerivedProduct/biologicallyderivedproduct-example-allogeneicHCT.json`
  `BiologicallyDerivedProduct/biologicallyderivedproduct-example-autologousHCT.json`
  `DocumentReference/documentreference-example-xray.json`
  `Encounter/encounter-example.json`
  `QuestionnaireResponse/questionnaireresponse-example-f201-lifelines.json`
  `Transport/transport-example.json`
  Current R5 classification:
  the remaining R5 expected failures match the pinned base StructureDefinition
  constraints emitted by the generator. They appear to be official-example/base
  spec mismatches or validation-scope decisions, not known generator bugs.
  Follow-up:
  trace each example back to the pinned StructureDefinitions and decide whether
  the mismatch is a spec/example inconsistency, a generator extraction bug, or
  an intentional compatibility gap.

## Documentation

- [x] Keep README examples aligned with generated output and target public API
- [x] Document how to refresh spec files
- [x] Document how to run the generator
- [x] Document expectations around generated vs handwritten files
- [ ] Document how BackboneElement behavior is represented in generated schemas
- [x] Document the current split between public TS models and runtime Zod schemas
- [ ] Document the future layering for convenience builders above core
- [x] Carry source descriptions into generated schema fields where practical

## Patient Follow-Up

- [x] Confirm whether `animal` should remain in the generated R4 Patient schema based on the pinned HL7 source artifacts
- [ ] Model primitive underscore fields as FHIR primitive extensions and compare the approach with `fhir.resources`
- [ ] Decide whether to support lenient parsing of empty-string primitive values seen in real-world data even when they are invalid FHIR
  Follow-up:
  determine whether this belongs in core schema validation, an opt-in compatibility mode, or a separate normalization layer before validation.
- [x] Validate whether `Reference` fields should stay generic or be constrained by the HL7 source definitions

## Reference Follow-Up

- [x] Reuse the shared reference-target runtime validation in additional generated versions beyond R4
- [ ] Add direct unit tests for `src/shared/fhir-reference-validation.ts`
- [ ] Decide whether constrained reference validation should surface richer errors for internal references when the containing `contained` resources are available
- [ ] Document the supported FHIR reference forms and current ambiguity behavior in the README or generator docs
- [ ] Decide whether `Resource`-typed fields should keep the current permissive runtime handling or move to a generated any-resource dispatcher

## Non-Goals

- [ ] Do not add terminology validation
- [ ] Do not add FHIRPath evaluation
- [ ] Do not add profile resolution
- [ ] Do not add slicing support
- [ ] Do not add server-side logic

## Aly's Notes

- Have a file / folder that just has Base definition for all elements in a resource
  - elements are not FHIR resources but just other base definitions (how do we define these)
- public direction:
  - `Patient` should be the TS model
  - `PatientSchema` should be the Zod validator
  - core should be type-first, then Zod
- future layering:
  - builders/factories could exist later, but should sit above core rather than replacing the generated model/schema layer
