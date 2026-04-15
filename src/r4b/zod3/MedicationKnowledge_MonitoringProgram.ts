// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The program under which the medication is reviewed. */
export interface MedicationKnowledge_MonitoringProgram extends BackboneElement {
	/** Name of the reviewing program. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Type of program under which the medication is monitored. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MedicationKnowledge_MonitoringProgramSchemaInternal =
	BackboneElementSchemaInternal.extend({
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const MedicationKnowledge_MonitoringProgramSchema =
	MedicationKnowledge_MonitoringProgramSchemaInternal as z.ZodType<MedicationKnowledge_MonitoringProgram>;
