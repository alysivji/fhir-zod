// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";

/** Physical location where the service is performed or applies. */
export interface ClaimResponse_AddItem_BodySite extends BackboneElement {
  /** Physical service site on the patient (limb, tooth, etc.). */
  site: Array<CodeableReference>;
  /** A region or surface of the bodySite, e.g. limb region or tooth surface(s). */
  subSite?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;

/** @internal */
export const ClaimResponse_AddItem_BodySiteSchemaInternal =
  BackboneElementSchemaInternal.extend({
    site: z.lazy(getCodeableReferenceSchema).array(),
    subSite: z.lazy(getCodeableConceptSchema).array().optional(),
  }).strict();

export const ClaimResponse_AddItem_BodySiteSchema =
  ClaimResponse_AddItem_BodySiteSchemaInternal as z.ZodType<ClaimResponse_AddItem_BodySite>;
