// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceVariable
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirCanonical, fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { EvidenceVariable_Characteristic_DefinitionByCombination } from "./EvidenceVariable_Characteristic_DefinitionByCombination";
import { EvidenceVariable_Characteristic_DefinitionByCombinationSchemaInternal } from "./EvidenceVariable_Characteristic_DefinitionByCombination";
import type { EvidenceVariable_Characteristic_DefinitionByTypeAndValue } from "./EvidenceVariable_Characteristic_DefinitionByTypeAndValue";
import { EvidenceVariable_Characteristic_DefinitionByTypeAndValueSchemaInternal } from "./EvidenceVariable_Characteristic_DefinitionByTypeAndValue";
import type { EvidenceVariable_Characteristic_TimeFromEvent } from "./EvidenceVariable_Characteristic_TimeFromEvent";
import { EvidenceVariable_Characteristic_TimeFromEventSchemaInternal } from "./EvidenceVariable_Characteristic_TimeFromEvent";
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A defining factor of the EvidenceVariable. Multiple characteristics are applied with "and" semantics. */
export interface EvidenceVariable_Characteristic extends BackboneElement {
	/** Defines the characteristic as a combination of two or more characteristics. */
	definitionByCombination?: EvidenceVariable_Characteristic_DefinitionByCombination;
	/** Defines the characteristic using both a type and value[x] elements. */
	definitionByTypeAndValue?: EvidenceVariable_Characteristic_DefinitionByTypeAndValue;
	/** Defines the characteristic using Canonical. */
	definitionCanonical?: string;
	/** Extensions for definitionCanonical */
	_definitionCanonical?: Element;
	/** Defines the characteristic using CodeableConcept. */
	definitionCodeableConcept?: CodeableConcept;
	/** Defines the characteristic using Expression. */
	definitionExpression?: Expression;
	/** Defines the characteristic using id. */
	definitionId?: string;
	/** Extensions for definitionId */
	_definitionId?: Element;
	/** Defines the characteristic using a Reference. */
	definitionReference?: Reference;
	/** A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Length of time in which the characteristic is met. */
	durationQuantity?: Quantity;
	/** Length of time in which the characteristic is met. */
	durationRange?: Range;
	/** When true, this characteristic is an exclusion criterion. In other words, not matching this characteristic definition is equivalent to meeting this criterion. */
	exclude?: boolean;
	/** Extensions for exclude */
	_exclude?: Element;
	/** Number of occurrences meeting the characteristic. */
	instancesQuantity?: Quantity;
	/** Number of occurrences meeting the characteristic. */
	instancesRange?: Range;
	/** Label used for when a characteristic refers to another characteristic. */
	linkId?: string;
	/** Extensions for linkId */
	_linkId?: Element;
	/** A human-readable string to clarify or explain concepts about the characteristic. */
	note?: Array<Annotation>;
	/** Timing in which the characteristic is determined. */
	timeFromEvent?: Array<EvidenceVariable_Characteristic_TimeFromEvent>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getEvidenceVariable_Characteristic_DefinitionByCombinationSchema =
	(): z.ZodType<EvidenceVariable_Characteristic_DefinitionByCombination> =>
		EvidenceVariable_Characteristic_DefinitionByCombinationSchemaInternal as z.ZodType<EvidenceVariable_Characteristic_DefinitionByCombination>;
const getEvidenceVariable_Characteristic_DefinitionByTypeAndValueSchema =
	(): z.ZodType<EvidenceVariable_Characteristic_DefinitionByTypeAndValue> =>
		EvidenceVariable_Characteristic_DefinitionByTypeAndValueSchemaInternal as z.ZodType<EvidenceVariable_Characteristic_DefinitionByTypeAndValue>;
const getEvidenceVariable_Characteristic_TimeFromEventSchema =
	(): z.ZodType<EvidenceVariable_Characteristic_TimeFromEvent> =>
		EvidenceVariable_Characteristic_TimeFromEventSchemaInternal as z.ZodType<EvidenceVariable_Characteristic_TimeFromEvent>;
const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EvidenceVariable_CharacteristicSchemaInternal =
	BackboneElementSchemaInternal.extend({
		definitionByCombination: z
			.lazy(getEvidenceVariable_Characteristic_DefinitionByCombinationSchema)
			.optional(),
		definitionByTypeAndValue: z
			.lazy(getEvidenceVariable_Characteristic_DefinitionByTypeAndValueSchema)
			.optional(),
		definitionCanonical: fhirCanonical().optional(),
		_definitionCanonical: z.lazy(getElementSchema).optional(),
		definitionCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		definitionExpression: z.lazy(getExpressionSchema).optional(),
		definitionId: fhirId().optional(),
		_definitionId: z.lazy(getElementSchema).optional(),
		definitionReference: z.lazy(getReferenceSchema).optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		durationQuantity: z.lazy(getQuantitySchema).optional(),
		durationRange: z.lazy(getRangeSchema).optional(),
		exclude: z.boolean().optional(),
		_exclude: z.lazy(getElementSchema).optional(),
		instancesQuantity: z.lazy(getQuantitySchema).optional(),
		instancesRange: z.lazy(getRangeSchema).optional(),
		linkId: fhirId().optional(),
		_linkId: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		timeFromEvent: z
			.lazy(getEvidenceVariable_Characteristic_TimeFromEventSchema)
			.array()
			.optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const duration_x_Present = ["durationQuantity", "durationRange"].filter(
				(field) => record[field] !== undefined,
			);
			if (duration_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of durationQuantity, durationRange may be present for duration[x]",
					path: [duration_x_Present[0]],
				});
			}
			const instances_x_Present = [
				"instancesQuantity",
				"instancesRange",
			].filter((field) => record[field] !== undefined);
			if (instances_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of instancesQuantity, instancesRange may be present for instances[x]",
					path: [instances_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.definitionReference,
				"definitionReference",
				[
					"http://hl7.org/fhir/StructureDefinition/Evidence",
					"http://hl7.org/fhir/StructureDefinition/EvidenceVariable",
					"http://hl7.org/fhir/StructureDefinition/Group",
				],
				["Evidence", "EvidenceVariable", "Group"],
				ctx,
			);
		});

export const EvidenceVariable_CharacteristicSchema =
	EvidenceVariable_CharacteristicSchemaInternal as z.ZodType<EvidenceVariable_Characteristic>;
