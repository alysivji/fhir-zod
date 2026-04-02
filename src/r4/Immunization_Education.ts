// Profile: http://hl7.org/fhir/StructureDefinition/Immunization
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Educational material presented to the patient (or guardian) at the time of vaccine administration. */
export interface Immunization_Education extends BackboneElement {
	/** Identifier of the material presented to the patient. */
	documentType?: string;
	/** Extensions for documentType */
	_documentType?: Element;
	/** Date the educational material was given to the patient. */
	presentationDate?: string;
	/** Extensions for presentationDate */
	_presentationDate?: Element;
	/** Date the educational material was published. */
	publicationDate?: string;
	/** Extensions for publicationDate */
	_publicationDate?: Element;
	/** Reference pointer to the educational material given to the patient if the information was on line. */
	reference?: string;
	/** Extensions for reference */
	_reference?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Immunization_EducationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		documentType: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_documentType: z.lazy(getElementSchema).optional(),
		presentationDate: fhirDateTime().optional(),
		_presentationDate: z.lazy(getElementSchema).optional(),
		publicationDate: fhirDateTime().optional(),
		_publicationDate: z.lazy(getElementSchema).optional(),
		reference: z.string().regex(/\S*/).optional(),
		_reference: z.lazy(getElementSchema).optional(),
	}).strict();

export const Immunization_EducationSchema =
	Immunization_EducationSchemaInternal as z.ZodType<Immunization_Education>;
