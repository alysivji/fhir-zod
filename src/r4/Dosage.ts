// Profile: http://hl7.org/fhir/StructureDefinition/Dosage
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Quantity } from "./Quantity";
import type { Ratio } from "./Ratio";
import type { Timing } from "./Timing";
import { fhirId } from "../shared/fhir-primitives";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { QuantitySchemaInternal } from "./Quantity";
import { RatioSchemaInternal } from "./Ratio";
import { TimingSchemaInternal } from "./Timing";

export interface Dosage extends BackboneElement {
	additionalInstruction?: Array<CodeableConcept>;
	asNeededBoolean?: boolean;
	_asNeededBoolean?: Element;
	asNeededCodeableConcept?: CodeableConcept;
	doseAndRate?: Array<unknown>;
	maxDosePerAdministration?: Quantity;
	maxDosePerLifetime?: Quantity;
	maxDosePerPeriod?: Ratio;
	method?: CodeableConcept;
	patientInstruction?: string;
	_patientInstruction?: Element;
	route?: CodeableConcept;
	sequence?: number;
	_sequence?: Element;
	site?: CodeableConcept;
	text?: string;
	_text?: Element;
	timing?: Timing;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getQuantitySchema = (): z.ZodType<Quantity> => QuantitySchemaInternal;
const getRatioSchema = (): z.ZodType<Ratio> => RatioSchemaInternal;
const getTimingSchema = (): z.ZodType<Timing> => TimingSchemaInternal;

/** @internal */
export const DosageSchemaInternal = z
	.object({
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
		_asNeededBoolean: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for asNeededBoolean"),
		asNeededCodeableConcept: z
			.lazy(getCodeableConceptSchema)
			.optional()
			.describe(
				"Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).",
			),
		doseAndRate: z
			.any()
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
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
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
		_patientInstruction: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patientInstruction"),
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
		_sequence: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for sequence"),
		site: z
			.lazy(getCodeableConceptSchema)
			.optional()
			.describe("Body site to administer to."),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe("Free text dosage instructions e.g. SIG."),
		_text: z.lazy(getElementSchema).optional().describe("Extensions for text"),
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

export const DosageSchema: z.ZodType<Dosage> = DosageSchemaInternal;
