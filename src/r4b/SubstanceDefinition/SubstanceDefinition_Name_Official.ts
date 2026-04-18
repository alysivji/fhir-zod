// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Details of the official nature of this name. */
export interface SubstanceDefinition_Name_Official extends BackboneElement {
	/** Which authority uses this official name. */
	authority?: CodeableConcept;
	/** Date of the official name change. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** The status of the official name, for example 'draft', 'active', 'retired'. */
	status?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubstanceDefinition_Name_OfficialSchemaInternal =
	BackboneElementSchemaInternal.extend({
		authority: z.lazy(getCodeableConceptSchema).optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		status: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstanceDefinition_Name_OfficialSchema =
	SubstanceDefinition_Name_OfficialSchemaInternal as z.ZodType<SubstanceDefinition_Name_Official>;
