// Profile: http://hl7.org/fhir/StructureDefinition/Immunization
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Contains information about the protocol(s) under which the vaccine was administered. */
export interface Immunization_VaccinationProtocol extends BackboneElement {
	/** Indicates the authority who published the protocol.  E.g. ACIP. */
	authority?: Reference;
	/** Contains the description about the protocol under which the vaccine was administered. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Nominal position in a series. */
	doseSequence?: number;
	/** Extensions for doseSequence */
	_doseSequence?: Element;
	/** Indicates if the immunization event should "count" against  the protocol. */
	doseStatus: CodeableConcept;
	/** Provides an explanation as to why an immunization event should or should not count against the protocol. */
	doseStatusReason?: CodeableConcept;
	/** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
	series?: string;
	/** Extensions for series */
	_series?: Element;
	/** The recommended number of doses to achieve immunity. */
	seriesDoses?: number;
	/** Extensions for seriesDoses */
	_seriesDoses?: Element;
	/** The targeted disease. */
	targetDisease: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Immunization_VaccinationProtocolSchemaInternal =
	BackboneElementSchemaInternal.extend({
		authority: z.lazy(getReferenceSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		doseSequence: z.number().int().positive().optional(),
		_doseSequence: z.lazy(getElementSchema).optional(),
		doseStatus: z.lazy(getCodeableConceptSchema),
		doseStatusReason: z.lazy(getCodeableConceptSchema).optional(),
		series: fhirString().optional(),
		_series: z.lazy(getElementSchema).optional(),
		seriesDoses: z.number().int().positive().optional(),
		_seriesDoses: z.lazy(getElementSchema).optional(),
		targetDisease: z.lazy(getCodeableConceptSchema).array(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.authority,
				"authority",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const Immunization_VaccinationProtocolSchema =
	Immunization_VaccinationProtocolSchemaInternal as z.ZodType<Immunization_VaccinationProtocol>;
