// Profile: http://hl7.org/fhir/StructureDefinition/DeviceAssociation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The details about the device when it is in use to describe its operation. */
export interface DeviceAssociation_Operation extends BackboneElement {
	/** The individual performing the action enabled by the device. */
	operator?: Array<Reference>;
	/** Begin and end dates and times for the device's operation. */
	period?: Period;
	/** Device operational condition corresponding to the association. */
	status: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DeviceAssociation_OperationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		operator: z.lazy(getReferenceSchema).array().optional(),
		period: z.lazy(getPeriodSchema).optional(),
		status: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.operator,
				"operator",
				[
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Patient", "Practitioner", "RelatedPerson"],
				ctx,
			);
		});

export const DeviceAssociation_OperationSchema =
	DeviceAssociation_OperationSchemaInternal as z.ZodType<DeviceAssociation_Operation>;
