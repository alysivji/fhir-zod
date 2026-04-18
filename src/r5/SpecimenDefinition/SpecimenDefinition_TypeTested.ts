// Profile: http://hl7.org/fhir/StructureDefinition/SpecimenDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Duration } from "../Duration";
import { DurationSchemaInternal } from "../Duration";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { SpecimenDefinition_TypeTested_Container } from "./SpecimenDefinition_TypeTested_Container";
import { SpecimenDefinition_TypeTested_ContainerSchemaInternal } from "./SpecimenDefinition_TypeTested_Container";
import type { SpecimenDefinition_TypeTested_Handling } from "./SpecimenDefinition_TypeTested_Handling";
import { SpecimenDefinition_TypeTested_HandlingSchemaInternal } from "./SpecimenDefinition_TypeTested_Handling";

/** Specimen conditioned in a container as expected by the testing laboratory. */
export interface SpecimenDefinition_TypeTested extends BackboneElement {
  /** The specimen's container. */
  container?: SpecimenDefinition_TypeTested_Container;
  /** Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process. */
  handling?: Array<SpecimenDefinition_TypeTested_Handling>;
  /** Primary of secondary specimen. */
  isDerived?: boolean;
  /** Extensions for isDerived */
  _isDerived?: Element;
  /** The preference for this type of conditioned specimen. */
  preference: "alternate" | "preferred";
  /** Extensions for preference */
  _preference?: Element;
  /** Criterion for rejection of the specimen in its container by the laboratory. */
  rejectionCriterion?: Array<CodeableConcept>;
  /** Requirements for delivery and special handling of this kind of conditioned specimen. */
  requirement?: string;
  /** Extensions for requirement */
  _requirement?: Element;
  /** The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing. */
  retentionTime?: Duration;
  /** Specimen can be used by only one test or panel if the value is "true". */
  singleUse?: boolean;
  /** Extensions for singleUse */
  _singleUse?: Element;
  /** Where the specimen will be tested: e.g., lab, sector, device or any combination of these. */
  testingDestination?: Array<CodeableConcept>;
  /** The kind of specimen conditioned for testing expected by lab. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getSpecimenDefinition_TypeTested_ContainerSchema =
  (): z.ZodType<SpecimenDefinition_TypeTested_Container> =>
    SpecimenDefinition_TypeTested_ContainerSchemaInternal as z.ZodType<SpecimenDefinition_TypeTested_Container>;
const getSpecimenDefinition_TypeTested_HandlingSchema =
  (): z.ZodType<SpecimenDefinition_TypeTested_Handling> =>
    SpecimenDefinition_TypeTested_HandlingSchemaInternal as z.ZodType<SpecimenDefinition_TypeTested_Handling>;

/** @internal */
export const SpecimenDefinition_TypeTestedSchemaInternal =
  BackboneElementSchemaInternal.extend({
    container: z
      .lazy(getSpecimenDefinition_TypeTested_ContainerSchema)
      .optional(),
    handling: z
      .lazy(getSpecimenDefinition_TypeTested_HandlingSchema)
      .array()
      .optional(),
    isDerived: z.boolean().optional(),
    _isDerived: z.lazy(getElementSchema).optional(),
    preference: z.enum(["alternate", "preferred"]),
    _preference: z.lazy(getElementSchema).optional(),
    rejectionCriterion: z.lazy(getCodeableConceptSchema).array().optional(),
    requirement: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _requirement: z.lazy(getElementSchema).optional(),
    retentionTime: z.lazy(getDurationSchema).optional(),
    singleUse: z.boolean().optional(),
    _singleUse: z.lazy(getElementSchema).optional(),
    testingDestination: z.lazy(getCodeableConceptSchema).array().optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const SpecimenDefinition_TypeTestedSchema =
  SpecimenDefinition_TypeTestedSchemaInternal as z.ZodType<SpecimenDefinition_TypeTested>;
