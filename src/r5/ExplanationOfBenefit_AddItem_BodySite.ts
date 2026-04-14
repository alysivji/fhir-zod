// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";

/** Physical location where the service is performed or applies. */
export interface ExplanationOfBenefit_AddItem_BodySite extends BackboneElement {
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
export const ExplanationOfBenefit_AddItem_BodySiteSchemaInternal =
	BackboneElementSchemaInternal.extend({
		site: z.lazy(getCodeableReferenceSchema).array(),
		subSite: z.lazy(getCodeableConceptSchema).array().optional(),
	}).strict();

export const ExplanationOfBenefit_AddItem_BodySiteSchema =
	ExplanationOfBenefit_AddItem_BodySiteSchemaInternal as z.ZodType<ExplanationOfBenefit_AddItem_BodySite>;
