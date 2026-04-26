---
title: Why fhir-zod
description: What the library is for, what it deliberately does not do, and why that boundary matters.
---

# Why `fhir-zod`

`fhir-zod` gives you spec-aligned TypeScript models and runtime validators for HL7 FHIR, without pretending to be a FHIR server, client, or full semantic validator.

## What it is

- A generated package built from pinned HL7 artifacts.
- A type-first model layer for application code.
- A runtime validation layer for data crossing trust boundaries.
- A version-explicit package surface for `r5`, `r4b`, `r4`, and `stu3`.

## Why that split is useful

Use the generated TypeScript model when you want a named FHIR shape in your codebase. Use the matching Zod schema when data enters or leaves your system.

That keeps editor ergonomics clean while still giving you runtime protection where JSON is untrusted, external, or version-sensitive.

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
