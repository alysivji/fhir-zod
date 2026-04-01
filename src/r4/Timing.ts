// Profile: http://hl7.org/fhir/StructureDefinition/Timing
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Timing_Repeat } from "./Timing_Repeat";

const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getTiming_RepeatSchema = (): z.ZodType<unknown> => Timing_Repeat;

export const Timing = z
	.object({
		_event: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		event: fhirDateTime().array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		modifierExtension: z.lazy(getExtensionSchema).array().optional(),
		repeat: z.lazy(getTiming_RepeatSchema).optional(),
	})
	.strict();

export type Timing = z.output<typeof Timing>;
