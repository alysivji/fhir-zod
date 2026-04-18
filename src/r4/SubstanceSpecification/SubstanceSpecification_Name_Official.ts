// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSpecification
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Details of the official nature of this name. */
export interface SubstanceSpecification_Name_Official extends BackboneElement {
	/** Which authority uses this official name. */
	authority?: CodeableConcept;
	/** Date of official name change. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** The status of the official name. */
	status?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubstanceSpecification_Name_OfficialSchemaInternal =
	BackboneElementSchemaInternal.extend({
		authority: z.lazy(getCodeableConceptSchema).optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		status: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstanceSpecification_Name_OfficialSchema =
	SubstanceSpecification_Name_OfficialSchemaInternal as z.ZodType<SubstanceSpecification_Name_Official>;
