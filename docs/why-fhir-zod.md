---
title: Why fhir-zod
description: What the library is for, what it deliberately does not do, and why that boundary matters.
---

# Why `fhir-zod`

`fhir-zod` is a single-purpose library for developers who want spec-aligned FHIR shapes in TypeScript and matching Zod schemas at runtime, without pulling in a larger FHIR platform.

## What it is

- A small-scope package built from pinned official FHIR definitions.
- A TypeScript model layer that mirrors base FHIR shapes closely.
- A matching runtime validation layer built from the same definitions.
- An opinionated schema surface for Zod `^3.25.1` and `^4.0.0`.
- A version-explicit package surface for `r5`, `r4b`, `r4`, and `stu3`.

## Why that split is useful

Use the generated TypeScript model when you want a named FHIR shape in your codebase. Use the matching Zod schema when data enters or leaves your system.

That keeps editor ergonomics clean while still giving you runtime protection where JSON is untrusted, external, or version-sensitive. It also means teams already using Zod do not need a separate FHIR-specific validation stack.

## What it is not

- Not a FHIR server.
- Not a FHIR client.
- Not a terminology validation engine.
- Not a FHIRPath engine.
- Not a profile-resolution or slicing-aware validator.

## What you should rely on it for

- Structural validation of FHIR payloads.
- Primitive formatting checks.
- Choice-type exclusivity such as `value[x]`.
- Selected reference-target checks emitted from the base spec.

## Where HL7 still owns the semantics

This docs site explains how to use the package. The official HL7 specification remains the source of truth for resource meaning, workflow semantics, terminology, profiles, and interoperability guidance.
