// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The system that is reporting the event. */
export interface AuditEvent_Source extends BackboneElement {
	/** Identifier of the source where the event was detected. */
	observer: Reference;
	/** Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group. */
	site?: string;
	/** Extensions for site */
	_site?: Element;
	/** Code specifying the type of source where event originated. */
	type?: Array<Coding>;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AuditEvent_SourceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		observer: z.lazy(getReferenceSchema),
		site: fhirString().optional(),
		_site: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodingSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.observer,
				"observer",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Device",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
		});

export const AuditEvent_SourceSchema =
	AuditEvent_SourceSchemaInternal as z.ZodType<AuditEvent_Source>;
