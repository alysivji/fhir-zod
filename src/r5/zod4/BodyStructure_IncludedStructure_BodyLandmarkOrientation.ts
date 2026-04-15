// Profile: http://hl7.org/fhir/StructureDefinition/BodyStructure
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmark } from "./BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmark";
import { BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmarkSchemaInternal } from "./BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmark";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Body locations in relation to a specific body landmark (tatoo, scar, other body structure). */
export interface BodyStructure_IncludedStructure_BodyLandmarkOrientation
	extends BackboneElement {
	/** An description of the direction away from a landmark something is located based on a radial clock dial. */
	clockFacePosition?: Array<CodeableConcept>;
	/** The distance in centimeters a certain observation is made from a body landmark. */
	distanceFromLandmark?: Array<BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmark>;
	/** A description of a landmark on the body used as a reference to locate something else. */
	landmarkDescription?: Array<CodeableConcept>;
	/** The surface area a body location is in relation to a landmark. */
	surfaceOrientation?: Array<CodeableConcept>;
}

const getBodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmarkSchema =
	(): z.ZodType<BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmark> =>
		BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmarkSchemaInternal as z.ZodType<BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmark>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const BodyStructure_IncludedStructure_BodyLandmarkOrientationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		clockFacePosition: z.lazy(getCodeableConceptSchema).array().optional(),
		distanceFromLandmark: z
			.lazy(
				getBodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmarkSchema,
			)
			.array()
			.optional(),
		landmarkDescription: z.lazy(getCodeableConceptSchema).array().optional(),
		surfaceOrientation: z.lazy(getCodeableConceptSchema).array().optional(),
	}).strict();

export const BodyStructure_IncludedStructure_BodyLandmarkOrientationSchema =
	BodyStructure_IncludedStructure_BodyLandmarkOrientationSchemaInternal as z.ZodType<BodyStructure_IncludedStructure_BodyLandmarkOrientation>;
