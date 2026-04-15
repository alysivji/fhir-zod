// Profile: http://hl7.org/fhir/StructureDefinition/HealthcareService
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Does this service have specific eligibility requirements that need to be met in order to use the service? */
export interface HealthcareService_Eligibility extends BackboneElement {
	/** Coded value for the eligibility. */
	code?: CodeableConcept;
	/** Describes the eligibility conditions for the service. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const HealthcareService_EligibilitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		comment: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_comment: z.lazy(getElementSchema).optional(),
	}).strict();

export const HealthcareService_EligibilitySchema =
	HealthcareService_EligibilitySchemaInternal as z.ZodType<HealthcareService_Eligibility>;
