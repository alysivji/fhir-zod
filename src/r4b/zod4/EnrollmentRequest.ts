// Profile: http://hl7.org/fhir/StructureDefinition/EnrollmentRequest
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirDateTime } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
export interface EnrollmentRequest extends DomainResource {
	/** Patient Resource. */
	candidate?: Reference;
	/** Reference to the program or plan identification, underwriter or payor. */
	coverage?: Reference;
	/** The date when this resource was created. */
	created?: string;
	/** Extensions for created */
	_created?: Element;
	/** The Response business identifier. */
	identifier?: Array<Identifier>;
	/** The Insurer who is target  of the request. */
	insurer?: Reference;
	/** The practitioner who is responsible for the services rendered to the patient. */
	provider?: Reference;
	/** This is a EnrollmentRequest resource. */
	resourceType: "EnrollmentRequest";
	/** The status of the resource instance. */
	status?: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EnrollmentRequestSchemaInternal =
	DomainResourceSchemaInternal.extend({
		candidate: z.lazy(getReferenceSchema).optional(),
		coverage: z.lazy(getReferenceSchema).optional(),
		created: fhirDateTime().optional(),
		_created: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		insurer: z.lazy(getReferenceSchema).optional(),
		provider: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("EnrollmentRequest"),
		status: z
			.enum(["active", "cancelled", "draft", "entered-in-error"])
			.optional(),
		_status: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.candidate,
				"candidate",
				["http://hl7.org/fhir/StructureDefinition/Patient"],
				["Patient"],
				ctx,
			);
			validateReferenceTarget(
				record.coverage,
				"coverage",
				["http://hl7.org/fhir/StructureDefinition/Coverage"],
				["Coverage"],
				ctx,
			);
			validateReferenceTarget(
				record.insurer,
				"insurer",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.provider,
				"provider",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
		});

export const EnrollmentRequestSchema =
	EnrollmentRequestSchemaInternal as z.ZodType<EnrollmentRequest>;
