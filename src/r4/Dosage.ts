// Profile: http://hl7.org/fhir/StructureDefinition/Dosage
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

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
		_asNeededBoolean: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for asNeededBoolean"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_patientInstruction: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patientInstruction"),
		_sequence: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for sequence"),
		_text: z.lazy(getElementSchema).optional().describe("Extensions for text"),
		additionalInstruction: z
			.lazy(getCodeableConceptSchema)
			.array()
			.optional()
			.describe(
				'Supplemental instructions to the patient on how to take the medication  (e.g. "with meals" or"take half to one hour before food") or warnings for the patient about the medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or sunlamps").',
			),
		asNeededBoolean: z
			.boolean()
			.optional()
			.describe(
				"Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).",
			),
		asNeededCodeableConcept: z
			.lazy(getCodeableConceptSchema)
			.optional()
			.describe(
				"Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).",
			),
		doseAndRate: z
			.unknown()
			.array()
			.optional()
			.describe("The amount of medication administered."),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		maxDosePerAdministration: z
			.lazy(getQuantitySchema)
			.optional()
			.describe("Upper limit on medication per administration."),
		maxDosePerLifetime: z
			.lazy(getQuantitySchema)
			.optional()
			.describe("Upper limit on medication per lifetime of the patient."),
		maxDosePerPeriod: z
			.lazy(getRatioSchema)
			.optional()
			.describe("Upper limit on medication per unit of time."),
		method: z
			.lazy(getCodeableConceptSchema)
			.optional()
			.describe("Technique for administering medication."),
		modifierExtension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
			),
		patientInstruction: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Instructions in terms that are understood by the patient or consumer.",
			),
		route: z
			.lazy(getCodeableConceptSchema)
			.optional()
			.describe("How drug should enter body."),
		sequence: z
			.number()
			.int()
			.optional()
			.describe(
				"Indicates the order in which the dosage instructions should be applied or interpreted.",
			),
		site: z
			.lazy(getCodeableConceptSchema)
			.optional()
			.describe("Body site to administer to."),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe("Free text dosage instructions e.g. SIG."),
		timing: z
			.lazy(getTimingSchema)
			.optional()
			.describe("When medication should be administered."),
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
