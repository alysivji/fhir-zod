// Profile: http://hl7.org/fhir/StructureDefinition/Specimen
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A physical feature or landmark on a specimen, highlighted for context by the collector of the specimen (e.g. surgeon), that identifies the type of feature as well as its meaning (e.g. the red ink indicating the resection margin of the right lobe of the excised prostate tissue or wire loop at radiologically suspected tumor location). */
export interface Specimen_Feature extends BackboneElement {
	/** Description of the feature of the specimen. */
	description: string;
	/** Extensions for description */
	_description?: Element;
	/** The landmark or feature being highlighted. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Specimen_FeatureSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString(),
		_description: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema),
	}).strict();

export const Specimen_FeatureSchema =
	Specimen_FeatureSchemaInternal as z.ZodType<Specimen_Feature>;
