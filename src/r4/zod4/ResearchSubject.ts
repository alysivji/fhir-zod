// Profile: http://hl7.org/fhir/StructureDefinition/ResearchSubject
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
export interface ResearchSubject extends DomainResource {
	/** The name of the arm in the study the subject actually followed as part of this study. */
	actualArm?: string;
	/** Extensions for actualArm */
	_actualArm?: Element;
	/** The name of the arm in the study the subject is expected to follow as part of this study. */
	assignedArm?: string;
	/** Extensions for assignedArm */
	_assignedArm?: Element;
	/** A record of the patient's informed agreement to participate in the study. */
	consent?: Reference;
	/** Identifiers assigned to this research subject for a study. */
	identifier?: Array<Identifier>;
	/** The record of the person or animal who is involved in the study. */
	individual: Reference;
	/** The dates the subject began and ended their participation in the study. */
	period?: Period;
	/** This is a ResearchSubject resource. */
	resourceType: "ResearchSubject";
	/** The current state of the subject. */
	status:
		| "candidate"
		| "eligible"
		| "follow-up"
		| "ineligible"
		| "not-registered"
		| "off-study"
		| "on-study"
		| "on-study-intervention"
		| "on-study-observation"
		| "pending-on-study"
		| "potential-candidate"
		| "screening"
		| "withdrawn";
	/** Extensions for status */
	_status?: Element;
	/** Reference to the study the subject is participating in. */
	study: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ResearchSubjectSchemaInternal =
	DomainResourceSchemaInternal.extend({
		actualArm: fhirString().optional(),
		_actualArm: z.lazy(getElementSchema).optional(),
		assignedArm: fhirString().optional(),
		_assignedArm: z.lazy(getElementSchema).optional(),
		consent: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		individual: z.lazy(getReferenceSchema),
		period: z.lazy(getPeriodSchema).optional(),
		resourceType: z.literal("ResearchSubject"),
		status: z.enum([
			"candidate",
			"eligible",
			"follow-up",
			"ineligible",
			"not-registered",
			"off-study",
			"on-study",
			"on-study-intervention",
			"on-study-observation",
			"pending-on-study",
			"potential-candidate",
			"screening",
			"withdrawn",
		]),
		_status: z.lazy(getElementSchema).optional(),
		study: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.consent,
				"consent",
				["http://hl7.org/fhir/StructureDefinition/Consent"],
				["Consent"],
				ctx,
			);
			validateReferenceTarget(
				record.individual,
				"individual",
				["http://hl7.org/fhir/StructureDefinition/Patient"],
				["Patient"],
				ctx,
			);
			validateReferenceTarget(
				record.study,
				"study",
				["http://hl7.org/fhir/StructureDefinition/ResearchStudy"],
				["ResearchStudy"],
				ctx,
			);
		});

export const ResearchSubjectSchema =
	ResearchSubjectSchemaInternal as z.ZodType<ResearchSubject>;
