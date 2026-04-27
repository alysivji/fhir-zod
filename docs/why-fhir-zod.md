---
title: Why fhir-zod
description: Why fhir-zod exists, what problem it solves for TypeScript developers working with FHIR APIs, and where its boundaries are.
---

# Why `fhir-zod`

TypeScript developers working with FHIR APIs — Epic, Cerner, SMART on FHIR — have had limited options for validation. Send payloads to a validation server, or wire up your own schema generators against the HL7 spec definitions and maintain the output yourself. Neither is a great default.

`fhir-zod` is a third option: pre-generated TypeScript models and Zod schemas for all core FHIR resources, published as a versioned npm package. Install it, import what you need, validate in-process. No server. No generators. No HL7 toolchain to set up.

## Why in-process validation matters

Sending FHIR payloads to an external validation server adds latency, introduces an infrastructure dependency, and means patient data leaves your process. In-process Zod validation eliminates all three. You get the same structural checks at the point where data enters or leaves your system, with no round-trip.

## Why Zod

Zod is already how most TypeScript projects handle runtime validation. `fhir-zod` fits into that existing stack — same `parse` and `safeParse` API, same error shape, same composability. Teams working with FHIR don't need a separate validation library or a different mental model.

## Types and schemas together

Each resource ships with both a TypeScript type and a matching Zod schema generated from the same FHIR definition. The type gives you editor ergonomics and compile-time safety. The schema gives you runtime protection where JSON is untrusted, external, or version-sensitive. They stay in sync because they come from the same source.

The package is tree-shakeable at the version level — using only R4 means only R4 ends up in your bundle, not every FHIR version the package ships. See the README for a full explanation of how bundling works in practice.

## Validated against official FHIR examples

The generated schemas are tested against the official example resources published by HL7 for each FHIR version. If a schema rejects a valid example from the spec, that's a bug. This gives you confidence that the validation reflects what HL7 actually intends, not just a best-effort interpretation of the definitions.

## Multi-version by design

FHIR has four actively used versions — R5, R4B, R4, and STU3. `fhir-zod` supports all of them through explicit versioned entry points (`fhir-zod/r4/Patient`, `fhir-zod/r5/Patient`, etc.) so imports are unambiguous and releases never mix.

## What this library is not

`fhir-zod` handles structural validation — field presence, cardinality, primitive formatting, choice-type exclusivity. It does not resolve terminology, evaluate FHIRPath, handle profiles or slicing, or implement any FHIR server or client behavior. The official HL7 specification remains the source of truth for resource semantics, workflow guidance, and interoperability requirements.
