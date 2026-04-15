// Profile: http://hl7.org/fhir/StructureDefinition/GenomicStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import {
	fhirCanonical,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { GenomicStudy_Analysis_Device } from "./GenomicStudy_Analysis_Device";
import { GenomicStudy_Analysis_DeviceSchemaInternal } from "./GenomicStudy_Analysis_Device";
import type { GenomicStudy_Analysis_Input } from "./GenomicStudy_Analysis_Input";
import { GenomicStudy_Analysis_InputSchemaInternal } from "./GenomicStudy_Analysis_Input";
import type { GenomicStudy_Analysis_Output } from "./GenomicStudy_Analysis_Output";
import { GenomicStudy_Analysis_OutputSchemaInternal } from "./GenomicStudy_Analysis_Output";
import type { GenomicStudy_Analysis_Performer } from "./GenomicStudy_Analysis_Performer";
import { GenomicStudy_Analysis_PerformerSchemaInternal } from "./GenomicStudy_Analysis_Performer";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The details about a specific analysis that was performed in this GenomicStudy. */
export interface GenomicStudy_Analysis extends BackboneElement {
	/** Type of the genomic changes studied in the analysis, e.g., DNA, RNA, or amino acid change. */
	changeType?: Array<CodeableConcept>;
	/** The date of the analysis event. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Devices used for the analysis (e.g., instruments, software), with settings and parameters. */
	device?: Array<GenomicStudy_Analysis_Device>;
	/** The focus of a genomic analysis when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, child, or sibling. For example, in trio testing, the GenomicStudy.subject would be the child (proband) and the GenomicStudy.analysis.focus of a specific analysis would be the parent. */
	focus?: Array<Reference>;
	/** The reference genome build that is used in this analysis. */
	genomeBuild?: CodeableConcept;
	/** Identifiers for the analysis event. */
	identifier?: Array<Identifier>;
	/** Inputs for the analysis event. */
	input?: Array<GenomicStudy_Analysis_Input>;
	/** The defined protocol that describes the analysis. */
	instantiatesCanonical?: string;
	/** Extensions for instantiatesCanonical */
	_instantiatesCanonical?: Element;
	/** The URL pointing to an externally maintained protocol that describes the analysis. */
	instantiatesUri?: string;
	/** Extensions for instantiatesUri */
	_instantiatesUri?: Element;
	/** Type of the methods used in the analysis, e.g., Fluorescence in situ hybridization (FISH), Karyotyping, or Microsatellite instability testing (MSI). */
	methodType?: Array<CodeableConcept>;
	/** Any notes capture with the analysis event. */
	note?: Array<Annotation>;
	/** Outputs for the analysis event. */
	output?: Array<GenomicStudy_Analysis_Output>;
	/** Performer for the analysis event. */
	performer?: Array<GenomicStudy_Analysis_Performer>;
	/** The protocol that was performed for the analysis event. */
	protocolPerformed?: Reference;
	/** Genomic regions actually called in the analysis event (BED file). */
	regionsCalled?: Array<Reference>;
	/** The genomic regions to be studied in the analysis (BED file). */
	regionsStudied?: Array<Reference>;
	/** The specimen used in the analysis event. */
	specimen?: Array<Reference>;
	/** Name of the analysis event (human friendly). */
	title?: string;
	/** Extensions for title */
	_title?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getGenomicStudy_Analysis_DeviceSchema =
	(): z.ZodType<GenomicStudy_Analysis_Device> =>
		GenomicStudy_Analysis_DeviceSchemaInternal as z.ZodType<GenomicStudy_Analysis_Device>;
const getGenomicStudy_Analysis_InputSchema =
	(): z.ZodType<GenomicStudy_Analysis_Input> =>
		GenomicStudy_Analysis_InputSchemaInternal as z.ZodType<GenomicStudy_Analysis_Input>;
const getGenomicStudy_Analysis_OutputSchema =
	(): z.ZodType<GenomicStudy_Analysis_Output> =>
		GenomicStudy_Analysis_OutputSchemaInternal as z.ZodType<GenomicStudy_Analysis_Output>;
const getGenomicStudy_Analysis_PerformerSchema =
	(): z.ZodType<GenomicStudy_Analysis_Performer> =>
		GenomicStudy_Analysis_PerformerSchemaInternal as z.ZodType<GenomicStudy_Analysis_Performer>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const GenomicStudy_AnalysisSchemaInternal =
	BackboneElementSchemaInternal.extend({
		changeType: z.lazy(getCodeableConceptSchema).array().optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		device: z.lazy(getGenomicStudy_Analysis_DeviceSchema).array().optional(),
		focus: z.lazy(getReferenceSchema).array().optional(),
		genomeBuild: z.lazy(getCodeableConceptSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		input: z.lazy(getGenomicStudy_Analysis_InputSchema).array().optional(),
		instantiatesCanonical: fhirCanonical().optional(),
		_instantiatesCanonical: z.lazy(getElementSchema).optional(),
		instantiatesUri: fhirUri().optional(),
		_instantiatesUri: z.lazy(getElementSchema).optional(),
		methodType: z.lazy(getCodeableConceptSchema).array().optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		output: z.lazy(getGenomicStudy_Analysis_OutputSchema).array().optional(),
		performer: z
			.lazy(getGenomicStudy_Analysis_PerformerSchema)
			.array()
			.optional(),
		protocolPerformed: z.lazy(getReferenceSchema).optional(),
		regionsCalled: z.lazy(getReferenceSchema).array().optional(),
		regionsStudied: z.lazy(getReferenceSchema).array().optional(),
		specimen: z.lazy(getReferenceSchema).array().optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.focus,
				"focus",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.protocolPerformed,
				"protocolPerformed",
				[
					"http://hl7.org/fhir/StructureDefinition/Procedure",
					"http://hl7.org/fhir/StructureDefinition/Task",
				],
				["Procedure", "Task"],
				ctx,
			);
			validateReferenceTarget(
				record.regionsCalled,
				"regionsCalled",
				[
					"http://hl7.org/fhir/StructureDefinition/DocumentReference",
					"http://hl7.org/fhir/StructureDefinition/Observation",
				],
				["DocumentReference", "Observation"],
				ctx,
			);
			validateReferenceTarget(
				record.regionsStudied,
				"regionsStudied",
				[
					"http://hl7.org/fhir/StructureDefinition/DocumentReference",
					"http://hl7.org/fhir/StructureDefinition/Observation",
				],
				["DocumentReference", "Observation"],
				ctx,
			);
			validateReferenceTarget(
				record.specimen,
				"specimen",
				["http://hl7.org/fhir/StructureDefinition/Specimen"],
				["Specimen"],
				ctx,
			);
		});

export const GenomicStudy_AnalysisSchema =
	GenomicStudy_AnalysisSchemaInternal as z.ZodType<GenomicStudy_Analysis>;
