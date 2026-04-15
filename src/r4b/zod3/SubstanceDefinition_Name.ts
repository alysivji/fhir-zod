// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { SubstanceDefinition_Name_Official } from "./SubstanceDefinition_Name_Official";
import { SubstanceDefinition_Name_OfficialSchemaInternal } from "./SubstanceDefinition_Name_Official";

/** Names applicable to this substance. */
export interface SubstanceDefinition_Name extends BackboneElement {
	/** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive. */
	domain?: Array<CodeableConcept>;
	/** The jurisdiction where this name applies. */
	jurisdiction?: Array<CodeableConcept>;
	/** Human language that the name is written in. */
	language?: Array<CodeableConcept>;
	/** The actual name. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** Details of the official nature of this name. */
	official?: Array<SubstanceDefinition_Name_Official>;
	/** If this is the preferred name for this substance. */
	preferred?: boolean;
	/** Extensions for preferred */
	_preferred?: Element;
	/** Supporting literature. */
	source?: Array<Reference>;
	/** The status of the name, for example 'current', 'proposed'. */
	status?: CodeableConcept;
	/** A synonym of this particular name, by which the substance is also known. */
	synonym?: Array<unknown>;
	/** A translation for this name into another human language. */
	translation?: Array<unknown>;
	/** Name type, for example 'systematic',  'scientific, 'brand'. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getSubstanceDefinition_Name_OfficialSchema =
	(): z.ZodType<SubstanceDefinition_Name_Official> =>
		SubstanceDefinition_Name_OfficialSchemaInternal as z.ZodType<SubstanceDefinition_Name_Official>;

/** @internal */
export const SubstanceDefinition_NameSchemaInternal =
	BackboneElementSchemaInternal.extend({
		domain: z.lazy(getCodeableConceptSchema).array().optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		language: z.lazy(getCodeableConceptSchema).array().optional(),
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		official: z
			.lazy(getSubstanceDefinition_Name_OfficialSchema)
			.array()
			.optional(),
		preferred: z.boolean().optional(),
		_preferred: z.lazy(getElementSchema).optional(),
		source: z.lazy(getReferenceSchema).array().optional(),
		status: z.lazy(getCodeableConceptSchema).optional(),
		synonym: z.unknown().array().optional(),
		translation: z.unknown().array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.source,
				"source",
				["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
				["DocumentReference"],
				ctx,
			);
		});

export const SubstanceDefinition_NameSchema =
	SubstanceDefinition_NameSchemaInternal as z.ZodType<SubstanceDefinition_Name>;
