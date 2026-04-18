// Source: https://hl7.org/fhir/R5/examplescenario-definitions.html#ExampleScenario.instance
// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCanonical,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { ExampleScenario_Instance_ContainedInstance } from "./ExampleScenario_Instance_ContainedInstance";
import { ExampleScenario_Instance_ContainedInstanceSchemaInternal } from "./ExampleScenario_Instance_ContainedInstance";
import type { ExampleScenario_Instance_Version } from "./ExampleScenario_Instance_Version";
import { ExampleScenario_Instance_VersionSchemaInternal } from "./ExampleScenario_Instance_Version";

/** A single data collection that is shared as part of the scenario. */
export interface ExampleScenario_Instance extends BackboneElement {
  /** References to other instances that can be found within this instance (e.g. the observations contained in a bundle). */
  containedInstance?: Array<ExampleScenario_Instance_ContainedInstance>;
  /** Points to an instance (typically an example) that shows the data that would corespond to this instance. */
  content?: Reference;
  /** An explanation of what the instance contains and what it's for. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A unique string within the scenario that is used to reference the instance. */
  key: string;
  /** Extensions for key */
  _key?: Element;
  /** Refers to a profile, template or other ruleset the instance adheres to. */
  structureProfileCanonical?: string;
  /** Extensions for structureProfileCanonical */
  _structureProfileCanonical?: Element;
  /** Refers to a profile, template or other ruleset the instance adheres to. */
  structureProfileUri?: string;
  /** Extensions for structureProfileUri */
  _structureProfileUri?: Element;
  /** A code indicating the kind of data structure (FHIR resource or some other standard) this is an instance of. */
  structureType: Coding;
  /** Conveys the version of the data structure instantiated.  I.e. what release of FHIR, X12, OpenEHR, etc. is instance compliant with. */
  structureVersion?: string;
  /** Extensions for structureVersion */
  _structureVersion?: Element;
  /** A short descriptive label the instance to be used in tables or diagrams. */
  title: string;
  /** Extensions for title */
  _title?: Element;
  /** Represents the instance as it was at a specific time-point. */
  version?: Array<ExampleScenario_Instance_Version>;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExampleScenario_Instance_ContainedInstanceSchema =
  (): z.ZodType<ExampleScenario_Instance_ContainedInstance> =>
    ExampleScenario_Instance_ContainedInstanceSchemaInternal as z.ZodType<ExampleScenario_Instance_ContainedInstance>;
const getExampleScenario_Instance_VersionSchema =
  (): z.ZodType<ExampleScenario_Instance_Version> =>
    ExampleScenario_Instance_VersionSchemaInternal as z.ZodType<ExampleScenario_Instance_Version>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExampleScenario_InstanceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    containedInstance: z
      .lazy(getExampleScenario_Instance_ContainedInstanceSchema)
      .array()
      .optional(),
    content: z.lazy(getReferenceSchema).optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    key: fhirString(),
    _key: z.lazy(getElementSchema).optional(),
    structureProfileCanonical: fhirCanonical().optional(),
    _structureProfileCanonical: z.lazy(getElementSchema).optional(),
    structureProfileUri: fhirUri().optional(),
    _structureProfileUri: z.lazy(getElementSchema).optional(),
    structureType: z.lazy(getCodingSchema),
    structureVersion: fhirString().optional(),
    _structureVersion: z.lazy(getElementSchema).optional(),
    title: fhirString(),
    _title: z.lazy(getElementSchema).optional(),
    version: z
      .lazy(getExampleScenario_Instance_VersionSchema)
      .array()
      .optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const structureProfile_x_Present = [
        "structureProfileCanonical",
        "structureProfileUri",
      ].filter((field) => record[field] !== undefined);
      if (structureProfile_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of structureProfileCanonical, structureProfileUri may be present for structureProfile[x]",
          path: [structureProfile_x_Present[0]],
        });
      }
    });

export const ExampleScenario_InstanceSchema =
  ExampleScenario_InstanceSchemaInternal as z.ZodType<ExampleScenario_Instance>;
