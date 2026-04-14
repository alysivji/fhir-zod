// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Contract_Term_Asset_Context } from "./Contract_Term_Asset_Context";
import { Contract_Term_Asset_ContextSchemaInternal } from "./Contract_Term_Asset_Context";
import type { Contract_Term_Asset_ValuedItem } from "./Contract_Term_Asset_ValuedItem";
import { Contract_Term_Asset_ValuedItemSchemaInternal } from "./Contract_Term_Asset_ValuedItem";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Contract Term Asset List. */
export interface Contract_Term_Asset extends BackboneElement {
	/** Response to assets. */
	answer?: Array<unknown>;
	/** Description of the quality and completeness of the asset that imay be a factor in its valuation. */
	condition?: string;
	/** Extensions for condition */
	_condition?: Element;
	/** Circumstance of the asset. */
	context?: Array<Contract_Term_Asset_Context>;
	/** Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse. */
	linkId?: Array<string>;
	/** Extensions for linkId */
	_linkId?: Array<Element>;
	/** Asset relevant contractual time period. */
	period?: Array<Period>;
	/** Type of Asset availability for use or ownership. */
	periodType?: Array<CodeableConcept>;
	/** Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree. */
	relationship?: Coding;
	/** Differentiates the kind of the asset . */
	scope?: CodeableConcept;
	/** Security labels that protects the asset. */
	securityLabelNumber?: Array<number>;
	/** Extensions for securityLabelNumber */
	_securityLabelNumber?: Array<Element>;
	/** May be a subtype or part of an offered asset. */
	subtype?: Array<CodeableConcept>;
	/** Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract. */
	text?: string;
	/** Extensions for text */
	_text?: Element;
	/** Target entity type about which the term may be concerned. */
	type?: Array<CodeableConcept>;
	/** Associated entities. */
	typeReference?: Array<Reference>;
	/** Time period of asset use. */
	usePeriod?: Array<Period>;
	/** Contract Valued Item List. */
	valuedItem?: Array<Contract_Term_Asset_ValuedItem>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getContract_Term_Asset_ContextSchema =
	(): z.ZodType<Contract_Term_Asset_Context> =>
		Contract_Term_Asset_ContextSchemaInternal as z.ZodType<Contract_Term_Asset_Context>;
const getContract_Term_Asset_ValuedItemSchema =
	(): z.ZodType<Contract_Term_Asset_ValuedItem> =>
		Contract_Term_Asset_ValuedItemSchemaInternal as z.ZodType<Contract_Term_Asset_ValuedItem>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Contract_Term_AssetSchemaInternal =
	BackboneElementSchemaInternal.extend({
		answer: z.unknown().array().optional(),
		condition: fhirString().optional(),
		_condition: z.lazy(getElementSchema).optional(),
		context: z.lazy(getContract_Term_Asset_ContextSchema).array().optional(),
		linkId: fhirString().array().optional(),
		_linkId: z.lazy(getElementSchema).array().optional(),
		period: z.lazy(getPeriodSchema).array().optional(),
		periodType: z.lazy(getCodeableConceptSchema).array().optional(),
		relationship: z.lazy(getCodingSchema).optional(),
		scope: z.lazy(getCodeableConceptSchema).optional(),
		securityLabelNumber: z.number().int().nonnegative().array().optional(),
		_securityLabelNumber: z.lazy(getElementSchema).array().optional(),
		subtype: z.lazy(getCodeableConceptSchema).array().optional(),
		text: fhirString().optional(),
		_text: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).array().optional(),
		typeReference: z.lazy(getReferenceSchema).array().optional(),
		usePeriod: z.lazy(getPeriodSchema).array().optional(),
		valuedItem: z
			.lazy(getContract_Term_Asset_ValuedItemSchema)
			.array()
			.optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.typeReference,
				"typeReference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const Contract_Term_AssetSchema =
	Contract_Term_AssetSchemaInternal as z.ZodType<Contract_Term_Asset>;
