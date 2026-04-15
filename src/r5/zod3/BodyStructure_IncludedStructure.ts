// Profile: http://hl7.org/fhir/StructureDefinition/BodyStructure
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { BodyStructure_IncludedStructure_BodyLandmarkOrientation } from "./BodyStructure_IncludedStructure_BodyLandmarkOrientation";
import { BodyStructure_IncludedStructure_BodyLandmarkOrientationSchemaInternal } from "./BodyStructure_IncludedStructure_BodyLandmarkOrientation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The anatomical location(s) or region(s) of the specimen, lesion, or body structure. */
export interface BodyStructure_IncludedStructure extends BackboneElement {
	/** Body locations in relation to a specific body landmark (tatoo, scar, other body structure). */
	bodyLandmarkOrientation?: Array<BodyStructure_IncludedStructure_BodyLandmarkOrientation>;
	/** Code that represents the included structure laterality. */
	laterality?: CodeableConcept;
	/** Code that represents the included structure qualifier. */
	qualifier?: Array<CodeableConcept>;
	/** XY or XYZ-coordinate orientation for structure. */
	spatialReference?: Array<Reference>;
	/** Code that represents the included structure. */
	structure: CodeableConcept;
}

const getBodyStructure_IncludedStructure_BodyLandmarkOrientationSchema =
	(): z.ZodType<BodyStructure_IncludedStructure_BodyLandmarkOrientation> =>
		BodyStructure_IncludedStructure_BodyLandmarkOrientationSchemaInternal as z.ZodType<BodyStructure_IncludedStructure_BodyLandmarkOrientation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const BodyStructure_IncludedStructureSchemaInternal =
	BackboneElementSchemaInternal.extend({
		bodyLandmarkOrientation: z
			.lazy(getBodyStructure_IncludedStructure_BodyLandmarkOrientationSchema)
			.array()
			.optional(),
		laterality: z.lazy(getCodeableConceptSchema).optional(),
		qualifier: z.lazy(getCodeableConceptSchema).array().optional(),
		spatialReference: z.lazy(getReferenceSchema).array().optional(),
		structure: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.spatialReference,
				"spatialReference",
				["http://hl7.org/fhir/StructureDefinition/ImagingSelection"],
				["ImagingSelection"],
				ctx,
			);
		});

export const BodyStructure_IncludedStructureSchema =
	BodyStructure_IncludedStructureSchemaInternal as z.ZodType<BodyStructure_IncludedStructure>;
