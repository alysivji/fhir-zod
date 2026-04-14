// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition
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

/** Coding words or phrases of the name. */
export interface MedicinalProductDefinition_Name_Part extends BackboneElement {
	/** A fragment of a product name. */
	part: string;
	/** Extensions for part */
	_part?: Element;
	/** Identifying type for this part of the name (e.g. strength part). */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MedicinalProductDefinition_Name_PartSchemaInternal =
	BackboneElementSchemaInternal.extend({
		part: fhirString(),
		_part: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema),
	}).strict();

export const MedicinalProductDefinition_Name_PartSchema =
	MedicinalProductDefinition_Name_PartSchemaInternal as z.ZodType<MedicinalProductDefinition_Name_Part>;
