// Profile: http://hl7.org/fhir/StructureDefinition/VerificationResult
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Information about the primary source(s) involved in validation. */
export interface VerificationResult_PrimarySource extends BackboneElement {
  /** Ability of the primary source to push updates/alerts (yes; no; undetermined). */
  canPushUpdates?: CodeableConcept;
  /** Method for communicating with the primary source (manual; API; Push). */
  communicationMethod?: Array<CodeableConcept>;
  /** Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source). */
  pushTypeAvailable?: Array<CodeableConcept>;
  /** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source). */
  type?: Array<CodeableConcept>;
  /** When the target was validated against the primary source. */
  validationDate?: string;
  /** Extensions for validationDate */
  _validationDate?: Element;
  /** Status of the validation of the target against the primary source (successful; failed; unknown). */
  validationStatus?: CodeableConcept;
  /** Reference to the primary source. */
  who?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const VerificationResult_PrimarySourceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    canPushUpdates: z.lazy(getCodeableConceptSchema).optional(),
    communicationMethod: z.lazy(getCodeableConceptSchema).array().optional(),
    pushTypeAvailable: z.lazy(getCodeableConceptSchema).array().optional(),
    type: z.lazy(getCodeableConceptSchema).array().optional(),
    validationDate: fhirDateTime().optional(),
    _validationDate: z.lazy(getElementSchema).optional(),
    validationStatus: z.lazy(getCodeableConceptSchema).optional(),
    who: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.who,
        "who",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
        ["Organization", "Practitioner", "PractitionerRole"],
        ctx,
      );
    });

export const VerificationResult_PrimarySourceSchema =
  VerificationResult_PrimarySourceSchemaInternal as z.ZodType<VerificationResult_PrimarySource>;
