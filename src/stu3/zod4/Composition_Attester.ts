// Profile: http://hl7.org/fhir/StructureDefinition/Composition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDateTime } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A participant who has attested to the accuracy of the composition/document. */
export interface Composition_Attester extends BackboneElement {
	/** The type of attestation the authenticator offers. */
	mode: Array<"legal" | "official" | "personal" | "professional" | null>;
	/** Extensions for mode */
	_mode?: Array<Element | null>;
	/** Who attested the composition in the specified way. */
	party?: Reference;
	/** When the composition was attested by the party. */
	time?: string;
	/** Extensions for time */
	_time?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Composition_AttesterSchemaInternal =
	BackboneElementSchemaInternal.extend({
		mode: z
			.enum(["legal", "official", "personal", "professional"])
			.nullable()
			.array(),
		_mode: z.lazy(getElementSchema).nullable().array().optional(),
		party: z.lazy(getReferenceSchema).optional(),
		time: fhirDateTime().optional(),
		_time: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.mode,
				record._mode,
				"mode",
				"_mode",
				ctx,
			);
			validateReferenceTarget(
				record.party,
				"party",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
				],
				["Organization", "Patient", "Practitioner"],
				ctx,
			);
		});

export const Composition_AttesterSchema =
	Composition_AttesterSchemaInternal as z.ZodType<Composition_Attester>;
