// Profile: http://hl7.org/fhir/StructureDefinition/AllergyIntolerance
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Details about each adverse reaction event linked to exposure to the identified substance. */
export interface AllergyIntolerance_Reaction extends BackboneElement {
  /** Text description about the reaction as a whole, including details of the manifestation if required. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Identification of the route by which the subject was exposed to the substance. */
  exposureRoute?: CodeableConcept;
  /** Clinical symptoms and/or signs that are observed or associated with the adverse reaction event. */
  manifestation: Array<CodeableReference>;
  /** Additional text about the adverse reaction event not captured in other fields. */
  note?: Array<Annotation>;
  /** Record of the date and/or time of the onset of the Reaction. */
  onset?: string;
  /** Extensions for onset */
  _onset?: Element;
  /** Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations. */
  severity?: "mild" | "moderate" | "severe";
  /** Extensions for severity */
  _severity?: Element;
  /** Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance. */
  substance?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const AllergyIntolerance_ReactionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    exposureRoute: z.lazy(getCodeableConceptSchema).optional(),
    manifestation: z.lazy(getCodeableReferenceSchema).array(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    onset: fhirDateTime().optional(),
    _onset: z.lazy(getElementSchema).optional(),
    severity: z.enum(["mild", "moderate", "severe"]).optional(),
    _severity: z.lazy(getElementSchema).optional(),
    substance: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const AllergyIntolerance_ReactionSchema =
  AllergyIntolerance_ReactionSchemaInternal as z.ZodType<AllergyIntolerance_Reaction>;
