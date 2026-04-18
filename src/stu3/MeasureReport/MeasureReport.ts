// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
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
import type { MeasureReport_Group } from "./MeasureReport_Group";
import { MeasureReport_GroupSchemaInternal } from "./MeasureReport_Group";

/** Base StructureDefinition for MeasureReport Resource */
export interface MeasureReport extends DomainResource {
	/** The date this measure report was generated. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A reference to a Bundle containing the Resources that were used in the evaluation of this report. */
	evaluatedResources?: Reference;
	/** The results of the calculation, one for each population group in the measure. */
	group?: Array<MeasureReport_Group>;
	/** A formal identifier that is used to identify this report when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Identifier;
	/** A reference to the Measure that was evaluated to produce this report. */
	measure: Reference;
	/** Optional Patient if the report was requested for a single patient. */
	patient?: Reference;
	/** The reporting period for which the report was calculated. */
	period: Period;
	/** Reporting Organization. */
	reportingOrganization?: Reference;
	/** This is a MeasureReport resource. */
	resourceType: "MeasureReport";
	/** The report status. No data will be available until the report status is complete. */
	status: "complete" | "error" | "pending";
	/** Extensions for status */
	_status?: Element;
	/** The type of measure report. This may be an individual report, which provides a single patient's score for the measure; a patient listing, which returns the list of patients that meet the various criteria in the measure; or a summary report, which returns a population count for each of the criteria in the measure. */
	type: "individual" | "patient-list" | "summary";
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMeasureReport_GroupSchema = (): z.ZodType<MeasureReport_Group> =>
	MeasureReport_GroupSchemaInternal as z.ZodType<MeasureReport_Group>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MeasureReportSchemaInternal = DomainResourceSchemaInternal.extend({
	date: fhirDateTime().optional(),
	_date: z.lazy(getElementSchema).optional(),
	evaluatedResources: z.lazy(getReferenceSchema).optional(),
	group: z.lazy(getMeasureReport_GroupSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).optional(),
	measure: z.lazy(getReferenceSchema),
	patient: z.lazy(getReferenceSchema).optional(),
	period: z.lazy(getPeriodSchema),
	reportingOrganization: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("MeasureReport"),
	status: z.enum(["complete", "error", "pending"]),
	_status: z.lazy(getElementSchema).optional(),
	type: z.enum(["individual", "patient-list", "summary"]),
	_type: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.evaluatedResources,
			"evaluatedResources",
			["http://hl7.org/fhir/StructureDefinition/Bundle"],
			["Bundle"],
			ctx,
		);
		validateReferenceTarget(
			record.measure,
			"measure",
			["http://hl7.org/fhir/StructureDefinition/Measure"],
			["Measure"],
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
			record.reportingOrganization,
			"reportingOrganization",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export const MeasureReportSchema =
	MeasureReportSchemaInternal as z.ZodType<MeasureReport>;
