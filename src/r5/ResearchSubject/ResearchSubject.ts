// Profile: http://hl7.org/fhir/StructureDefinition/ResearchSubject
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirId } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
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
import type { ResearchSubject_Progress } from "./ResearchSubject_Progress";
import { ResearchSubject_ProgressSchemaInternal } from "./ResearchSubject_Progress";

/** A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study. */
export interface ResearchSubject extends DomainResource {
	/** The name of the arm in the study the subject actually followed as part of this study. */
	actualComparisonGroup?: string;
	/** Extensions for actualComparisonGroup */
	_actualComparisonGroup?: Element;
	/** The name of the arm in the study the subject is expected to follow as part of this study. */
	assignedComparisonGroup?: string;
	/** Extensions for assignedComparisonGroup */
	_assignedComparisonGroup?: Element;
	/** A record of the patient's informed agreement to participate in the study. */
	consent?: Array<Reference>;
	/** Identifiers assigned to this research subject for a study. */
	identifier?: Array<Identifier>;
	/** The dates the subject began and ended their participation in the study. */
	period?: Period;
	/** The current state (status) of the subject and resons for status change where appropriate. */
	progress?: Array<ResearchSubject_Progress>;
	/** This is a ResearchSubject resource. */
	resourceType: "ResearchSubject";
	/** The publication state of the resource (not of the subject). */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Reference to the study the subject is participating in. */
	study: Reference;
	/** The record of the person, animal or other entity involved in the study. */
	subject: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getResearchSubject_ProgressSchema =
	(): z.ZodType<ResearchSubject_Progress> =>
		ResearchSubject_ProgressSchemaInternal as z.ZodType<ResearchSubject_Progress>;

/** @internal */
export const ResearchSubjectSchemaInternal =
	DomainResourceSchemaInternal.extend({
		actualComparisonGroup: fhirId().optional(),
		_actualComparisonGroup: z.lazy(getElementSchema).optional(),
		assignedComparisonGroup: fhirId().optional(),
		_assignedComparisonGroup: z.lazy(getElementSchema).optional(),
		consent: z.lazy(getReferenceSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		period: z.lazy(getPeriodSchema).optional(),
		progress: z.lazy(getResearchSubject_ProgressSchema).array().optional(),
		resourceType: z.literal("ResearchSubject"),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		study: z.lazy(getReferenceSchema),
		subject: z.lazy(getReferenceSchema),
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
				record.study,
				"study",
				["http://hl7.org/fhir/StructureDefinition/ResearchStudy"],
				["ResearchStudy"],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/Medication",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Specimen",
					"http://hl7.org/fhir/StructureDefinition/Substance",
				],
				[
					"BiologicallyDerivedProduct",
					"Device",
					"Group",
					"Medication",
					"Patient",
					"Specimen",
					"Substance",
				],
				ctx,
			);
		});

export const ResearchSubjectSchema =
	ResearchSubjectSchemaInternal as z.ZodType<ResearchSubject>;
