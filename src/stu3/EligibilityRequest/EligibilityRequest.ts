// Profile: http://hl7.org/fhir/StructureDefinition/EligibilityRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import {
	fhirDate,
	fhirDateTime,
	fhirString,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Base StructureDefinition for EligibilityRequest Resource */
export interface EligibilityRequest extends DomainResource {
	/** Dental, Vision, Medical, Pharmacy, Rehab etc. */
	benefitCategory?: CodeableConcept;
	/** Dental: basic, major, ortho; Vision exam, glasses, contacts; etc. */
	benefitSubCategory?: CodeableConcept;
	/** The contract number of a business agreement which describes the terms and conditions. */
	businessArrangement?: string;
	/** Extensions for businessArrangement */
	_businessArrangement?: Element;
	/** Financial instrument by which payment information for health care. */
	coverage?: Reference;
	/** The date when this resource was created. */
	created?: string;
	/** Extensions for created */
	_created?: Element;
	/** Person who created the invoice/claim/pre-determination or pre-authorization. */
	enterer?: Reference;
	/** Facility where the services were provided. */
	facility?: Reference;
	/** The Response business identifier. */
	identifier?: Array<Identifier>;
	/** The Insurer who is target  of the request. */
	insurer?: Reference;
	/** The organization which is responsible for the services rendered to the patient. */
	organization?: Reference;
	/** Patient Resource. */
	patient?: Reference;
	/** Immediate (STAT), best effort (NORMAL), deferred (DEFER). */
	priority?: CodeableConcept;
	/** The practitioner who is responsible for the services rendered to the patient. */
	provider?: Reference;
	/** This is a EligibilityRequest resource. */
	resourceType: "EligibilityRequest";
	/** The date or dates when the enclosed suite of services were performed or completed. */
	servicedDate?: string;
	/** Extensions for servicedDate */
	_servicedDate?: Element;
	/** The date or dates when the enclosed suite of services were performed or completed. */
	servicedPeriod?: Period;
	/** The status of the resource instance. */
	status?: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EligibilityRequestSchemaInternal =
	DomainResourceSchemaInternal.extend({
		benefitCategory: z.lazy(getCodeableConceptSchema).optional(),
		benefitSubCategory: z.lazy(getCodeableConceptSchema).optional(),
		businessArrangement: fhirString().optional(),
		_businessArrangement: z.lazy(getElementSchema).optional(),
		coverage: z.lazy(getReferenceSchema).optional(),
		created: fhirDateTime().optional(),
		_created: z.lazy(getElementSchema).optional(),
		enterer: z.lazy(getReferenceSchema).optional(),
		facility: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		insurer: z.lazy(getReferenceSchema).optional(),
		organization: z.lazy(getReferenceSchema).optional(),
		patient: z.lazy(getReferenceSchema).optional(),
		priority: z.lazy(getCodeableConceptSchema).optional(),
		provider: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("EligibilityRequest"),
		servicedDate: fhirDate().optional(),
		_servicedDate: z.lazy(getElementSchema).optional(),
		servicedPeriod: z.lazy(getPeriodSchema).optional(),
		status: z
			.enum(["active", "cancelled", "draft", "entered-in-error"])
			.optional(),
		_status: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const serviced_x_Present = ["servicedDate", "servicedPeriod"].filter(
				(field) => record[field] !== undefined,
			);
			if (serviced_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of servicedDate, servicedPeriod may be present for serviced[x]",
					path: [serviced_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.coverage,
				"coverage",
				["http://hl7.org/fhir/StructureDefinition/Coverage"],
				["Coverage"],
				ctx,
			);
			validateReferenceTarget(
				record.enterer,
				"enterer",
				["http://hl7.org/fhir/StructureDefinition/Practitioner"],
				["Practitioner"],
				ctx,
			);
			validateReferenceTarget(
				record.facility,
				"facility",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
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
				record.organization,
				"organization",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.patient,
				"patient",
				["http://hl7.org/fhir/StructureDefinition/Patient"],
				["Patient"],
				ctx,
			);
			validateReferenceTarget(
				record.provider,
				"provider",
				["http://hl7.org/fhir/StructureDefinition/Practitioner"],
				["Practitioner"],
				ctx,
			);
		});

export const EligibilityRequestSchema =
	EligibilityRequestSchemaInternal as z.ZodType<EligibilityRequest>;
