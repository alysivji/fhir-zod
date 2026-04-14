// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Information that only applies to packages (not products). */
export interface MedicationKnowledge_Packaging extends BackboneElement {
	/** The cost of the packaged medication. */
	cost?: Array<unknown>;
	/** A reference to a PackagedProductDefinition that provides the details of the product that is in the packaging and is being priced. */
	packagedProduct?: Reference;
}

const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationKnowledge_PackagingSchemaInternal =
	BackboneElementSchemaInternal.extend({
		cost: z.unknown().array().optional(),
		packagedProduct: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.packagedProduct,
				"packagedProduct",
				["http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition"],
				["PackagedProductDefinition"],
				ctx,
			);
		});

export const MedicationKnowledge_PackagingSchema =
	MedicationKnowledge_PackagingSchemaInternal as z.ZodType<MedicationKnowledge_Packaging>;
