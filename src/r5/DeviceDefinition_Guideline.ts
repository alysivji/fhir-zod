// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { RelatedArtifact } from "./RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** Information aimed at providing directions for the usage of this model of device. */
export interface DeviceDefinition_Guideline extends BackboneElement {
  /** A specific situation when a device should not be used because it may cause harm. */
  contraindication?: Array<CodeableConcept>;
  /** A clinical condition for which the device was designed to be used. */
  indication?: Array<CodeableConcept>;
  /** A description of the general purpose or medical use of the device or its function. */
  intendedUse?: string;
  /** Extensions for intendedUse */
  _intendedUse?: Element;
  /** A source of information or reference for this guideline. */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Detailed written and visual directions for the user on how to use the device. */
  usageInstruction?: string;
  /** Extensions for usageInstruction */
  _usageInstruction?: Element;
  /** The circumstances that form the setting for using the device. */
  useContext?: Array<UsageContext>;
  /** Specific hazard alert information that a user needs to know before using the device. */
  warning?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
  RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const DeviceDefinition_GuidelineSchemaInternal =
  BackboneElementSchemaInternal.extend({
    contraindication: z.lazy(getCodeableConceptSchema).array().optional(),
    indication: z.lazy(getCodeableConceptSchema).array().optional(),
    intendedUse: fhirString().optional(),
    _intendedUse: z.lazy(getElementSchema).optional(),
    relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
    usageInstruction: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _usageInstruction: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    warning: z.lazy(getCodeableConceptSchema).array().optional(),
  }).strict();

export const DeviceDefinition_GuidelineSchema =
  DeviceDefinition_GuidelineSchemaInternal as z.ZodType<DeviceDefinition_Guideline>;
