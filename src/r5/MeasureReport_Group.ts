// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { MeasureReport_Group_Population } from "./MeasureReport_Group_Population";
import { MeasureReport_Group_PopulationSchemaInternal } from "./MeasureReport_Group_Population";
import type { MeasureReport_Group_Stratifier } from "./MeasureReport_Group_Stratifier";
import { MeasureReport_Group_StratifierSchemaInternal } from "./MeasureReport_Group_Stratifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The results of the calculation, one for each population group in the measure. */
export interface MeasureReport_Group extends BackboneElement {
	/** The meaning of the population group as defined in the measure definition. */
	code?: CodeableConcept;
	/** The group from the Measure that corresponds to this group in the MeasureReport resource. */
	linkId?: string;
	/** Extensions for linkId */
	_linkId?: Element;
	/** The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group. */
	measureScoreCodeableConcept?: CodeableConcept;
	/** The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group. */
	measureScoreDateTime?: string;
	/** Extensions for measureScoreDateTime */
	_measureScoreDateTime?: Element;
	/** The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group. */
	measureScoreDuration?: Duration;
	/** The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group. */
	measureScorePeriod?: Period;
	/** The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group. */
	measureScoreQuantity?: Quantity;
	/** The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group. */
	measureScoreRange?: Range;
	/** The populations that make up the population group, one for each type of population appropriate for the measure. */
	population?: Array<MeasureReport_Group_Population>;
	/** When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure. */
	stratifier?: Array<MeasureReport_Group_Stratifier>;
	/** Optional subject identifying the individual or individuals the report is for. */
	subject?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMeasureReport_Group_PopulationSchema =
	(): z.ZodType<MeasureReport_Group_Population> =>
		MeasureReport_Group_PopulationSchemaInternal as z.ZodType<MeasureReport_Group_Population>;
const getMeasureReport_Group_StratifierSchema =
	(): z.ZodType<MeasureReport_Group_Stratifier> =>
		MeasureReport_Group_StratifierSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MeasureReport_GroupSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		linkId: fhirString().optional(),
		_linkId: z.lazy(getElementSchema).optional(),
		measureScoreCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		measureScoreDateTime: fhirDateTime().optional(),
		_measureScoreDateTime: z.lazy(getElementSchema).optional(),
		measureScoreDuration: z.lazy(getDurationSchema).optional(),
		measureScorePeriod: z.lazy(getPeriodSchema).optional(),
		measureScoreQuantity: z.lazy(getQuantitySchema).optional(),
		measureScoreRange: z.lazy(getRangeSchema).optional(),
		population: z
			.lazy(getMeasureReport_Group_PopulationSchema)
			.array()
			.optional(),
		stratifier: z
			.lazy(getMeasureReport_Group_StratifierSchema)
			.array()
			.optional(),
		subject: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const measureScore_x_Present = [
				"measureScoreCodeableConcept",
				"measureScoreDateTime",
				"measureScoreDuration",
				"measureScorePeriod",
				"measureScoreQuantity",
				"measureScoreRange",
			].filter((field) => record[field] !== undefined);
			if (measureScore_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of measureScoreCodeableConcept, measureScoreDateTime, measureScoreDuration, measureScorePeriod, measureScoreQuantity, measureScoreRange may be present for measureScore[x]",
					path: [measureScore_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/HealthcareService",
					"http://hl7.org/fhir/StructureDefinition/Location",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"CareTeam",
					"Device",
					"Group",
					"HealthcareService",
					"Location",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
		});

export const MeasureReport_GroupSchema =
	MeasureReport_GroupSchemaInternal as z.ZodType<MeasureReport_Group>;
