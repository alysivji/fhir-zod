// Profile: http://hl7.org/fhir/StructureDefinition/Dosage
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Quantity } from "./Quantity";
import { Ratio } from "./Ratio";
import { Timing } from "./Timing";

const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getQuantitySchema = (): z.ZodType<unknown> => Quantity;
const getRatioSchema = (): z.ZodType<unknown> => Ratio;
const getTimingSchema = (): z.ZodType<unknown> => Timing;

export const Dosage = z
	.object({
		_asNeededBoolean: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_patientInstruction: z.lazy(getElementSchema).optional(),
		_sequence: z.lazy(getElementSchema).optional(),
		_text: z.lazy(getElementSchema).optional(),
		additionalInstruction: z.lazy(getCodeableConceptSchema).array().optional(),
		asNeededBoolean: z.boolean().optional(),
		asNeededCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		doseAndRate: z.unknown().array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		maxDosePerAdministration: z.lazy(getQuantitySchema).optional(),
		maxDosePerLifetime: z.lazy(getQuantitySchema).optional(),
		maxDosePerPeriod: z.lazy(getRatioSchema).optional(),
		method: z.lazy(getCodeableConceptSchema).optional(),
		modifierExtension: z.lazy(getExtensionSchema).array().optional(),
		patientInstruction: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		route: z.lazy(getCodeableConceptSchema).optional(),
		sequence: z.number().int().optional(),
		site: z.lazy(getCodeableConceptSchema).optional(),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		timing: z.lazy(getTimingSchema).optional(),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const asNeeded_x_Present = [
			"asNeededBoolean",
			"asNeededCodeableConcept",
		].filter((field) => record[field] !== undefined);
		if (asNeeded_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of asNeededBoolean, asNeededCodeableConcept may be present for asNeeded[x]",
				path: [asNeeded_x_Present[0]],
			});
		}
	});

export type Dosage = z.output<typeof Dosage>;
