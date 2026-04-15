// Profile: http://hl7.org/fhir/StructureDefinition/SubstancePolymer
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T00:02:07.682Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString } from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { SubstancePolymer_MonomerSet } from "./SubstancePolymer_MonomerSet";
import { SubstancePolymer_MonomerSetSchemaInternal } from "./SubstancePolymer_MonomerSet";
import type { SubstancePolymer_Repeat } from "./SubstancePolymer_Repeat";
import { SubstancePolymer_RepeatSchemaInternal } from "./SubstancePolymer_Repeat";

/** Todo. */
export interface SubstancePolymer extends DomainResource {
	/** Todo. */
	class?: CodeableConcept;
	/** Todo. */
	copolymerConnectivity?: Array<CodeableConcept>;
	/** Todo. */
	geometry?: CodeableConcept;
	/** Todo. */
	modification?: Array<string | null>;
	/** Extensions for modification */
	_modification?: Array<Element | null>;
	/** Todo. */
	monomerSet?: Array<SubstancePolymer_MonomerSet>;
	/** Todo. */
	repeat?: Array<SubstancePolymer_Repeat>;
	/** This is a SubstancePolymer resource. */
	resourceType: "SubstancePolymer";
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getSubstancePolymer_MonomerSetSchema =
	(): z.ZodType<SubstancePolymer_MonomerSet> =>
		SubstancePolymer_MonomerSetSchemaInternal as z.ZodType<SubstancePolymer_MonomerSet>;
const getSubstancePolymer_RepeatSchema =
	(): z.ZodType<SubstancePolymer_Repeat> =>
		SubstancePolymer_RepeatSchemaInternal as z.ZodType<SubstancePolymer_Repeat>;

/** @internal */
export const SubstancePolymerSchemaInternal =
	DomainResourceSchemaInternal.extend({
		class: z.lazy(getCodeableConceptSchema).optional(),
		copolymerConnectivity: z.lazy(getCodeableConceptSchema).array().optional(),
		geometry: z.lazy(getCodeableConceptSchema).optional(),
		modification: fhirString().nullable().array().optional(),
		_modification: z.lazy(getElementSchema).nullable().array().optional(),
		monomerSet: z.lazy(getSubstancePolymer_MonomerSetSchema).array().optional(),
		repeat: z.lazy(getSubstancePolymer_RepeatSchema).array().optional(),
		resourceType: z.literal("SubstancePolymer"),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.modification,
				record._modification,
				"modification",
				"_modification",
				ctx,
			);
		});

export const SubstancePolymerSchema =
	SubstancePolymerSchemaInternal as z.ZodType<SubstancePolymer>;
