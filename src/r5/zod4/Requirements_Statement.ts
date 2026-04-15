// Profile: http://hl7.org/fhir/StructureDefinition/Requirements
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirId, fhirString, fhirUrl } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The actual statement of requirement, in markdown format. */
export interface Requirements_Statement extends BackboneElement {
	/** This boolean flag is set to true of the text of the requirement is conditional on something e.g. it includes lanauage like 'if x then y'. This conditionality flag is introduced for purposes of filtering and colour highlighting etc. */
	conditionality?: boolean;
	/** Extensions for conditionality */
	_conditionality?: Element;
	/** A short human usable label for this statement. */
	conformance?: Array<"MAY" | "SHALL" | "SHOULD" | "SHOULD-NOT" | null>;
	/** Extensions for conformance */
	_conformance?: Array<Element | null>;
	/** Another statement on one of the requirements that this requirement clarifies or restricts. */
	derivedFrom?: string;
	/** Extensions for derivedFrom */
	_derivedFrom?: Element;
	/** Key that identifies this statement (unique within this resource). */
	key: string;
	/** Extensions for key */
	_key?: Element;
	/** A short human usable label for this statement. */
	label?: string;
	/** Extensions for label */
	_label?: Element;
	/** A larger requirement that this requirement helps to refine and enable. */
	parent?: string;
	/** Extensions for parent */
	_parent?: Element;
	/** A reference to another artifact that created this requirement. This could be a Profile, etc., or external regulation, or business requirements expressed elsewhere. */
	reference?: Array<string | null>;
	/** Extensions for reference */
	_reference?: Array<Element | null>;
	/** The actual requirement for human consumption. */
	requirement: string;
	/** Extensions for requirement */
	_requirement?: Element;
	/** A reference to another artifact that satisfies this requirement. This could be a Profile, extension, or an element in one of those, or a CapabilityStatement, OperationDefinition, SearchParameter, CodeSystem(/code), ValueSet, Libary etc. */
	satisfiedBy?: Array<string | null>;
	/** Extensions for satisfiedBy */
	_satisfiedBy?: Array<Element | null>;
	/** Who asked for this statement to be a requirement. By default, it's assumed that the publisher knows who it is if it matters. */
	source?: Array<Reference>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Requirements_StatementSchemaInternal =
	BackboneElementSchemaInternal.extend({
		conditionality: z.boolean().optional(),
		_conditionality: z.lazy(getElementSchema).optional(),
		conformance: z
			.enum(["MAY", "SHALL", "SHOULD", "SHOULD-NOT"])
			.nullable()
			.array()
			.optional(),
		_conformance: z.lazy(getElementSchema).nullable().array().optional(),
		derivedFrom: fhirString().optional(),
		_derivedFrom: z.lazy(getElementSchema).optional(),
		key: fhirId(),
		_key: z.lazy(getElementSchema).optional(),
		label: fhirString().optional(),
		_label: z.lazy(getElementSchema).optional(),
		parent: fhirString().optional(),
		_parent: z.lazy(getElementSchema).optional(),
		reference: fhirUrl().nullable().array().optional(),
		_reference: z.lazy(getElementSchema).nullable().array().optional(),
		requirement: z.string().regex(/^[\s\S]+$/),
		_requirement: z.lazy(getElementSchema).optional(),
		satisfiedBy: fhirUrl().nullable().array().optional(),
		_satisfiedBy: z.lazy(getElementSchema).nullable().array().optional(),
		source: z.lazy(getReferenceSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.conformance,
				record._conformance,
				"conformance",
				"_conformance",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.reference,
				record._reference,
				"reference",
				"_reference",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.satisfiedBy,
				record._satisfiedBy,
				"satisfiedBy",
				"_satisfiedBy",
				ctx,
			);
			validateReferenceTarget(
				record.source,
				"source",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/HealthcareService",
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
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
		});

export const Requirements_StatementSchema =
	Requirements_StatementSchemaInternal as z.ZodType<Requirements_Statement>;
