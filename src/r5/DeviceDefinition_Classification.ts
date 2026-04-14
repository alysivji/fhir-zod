// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { RelatedArtifact } from "./RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";

/** What kind of device or device system this is. */
export interface DeviceDefinition_Classification extends BackboneElement {
	/** Further information qualifying this classification of the device model. */
	justification?: Array<RelatedArtifact>;
	/** A classification or risk class of the device model. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;

/** @internal */
export const DeviceDefinition_ClassificationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		justification: z.lazy(getRelatedArtifactSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema),
	}).strict();

export const DeviceDefinition_ClassificationSchema =
	DeviceDefinition_ClassificationSchemaInternal as z.ZodType<DeviceDefinition_Classification>;
