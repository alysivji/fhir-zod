// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalImpression
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Specific findings or diagnoses that were considered likely or relevant to ongoing treatment. */
export interface ClinicalImpression_Finding extends BackboneElement {
	/** Which investigations support finding or diagnosis. */
	basis?: string;
	/** Extensions for basis */
	_basis?: Element;
	/** Specific text, code or reference for finding or diagnosis, which may include ruled-out or resolved conditions. */
	item?: CodeableReference;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ClinicalImpression_FindingSchemaInternal =
	BackboneElementSchemaInternal.extend({
		basis: fhirString().optional(),
		_basis: z.lazy(getElementSchema).optional(),
		item: z.lazy(getCodeableReferenceSchema).optional(),
	}).strict();

export const ClinicalImpression_FindingSchema =
	ClinicalImpression_FindingSchemaInternal as z.ZodType<ClinicalImpression_Finding>;
