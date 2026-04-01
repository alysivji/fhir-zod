// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const Patient_Communication = z
	.object({
		_id: z.lazy(getElementSchema).optional(),
		_preferred: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		language: z.lazy(getCodeableConceptSchema),
		modifierExtension: z.lazy(getExtensionSchema).array().optional(),
		preferred: z.boolean().optional(),
	})
	.strict();

export type Patient_Communication = z.output<typeof Patient_Communication>;
