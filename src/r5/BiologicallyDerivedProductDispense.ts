// Profile: http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProductDispense
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BiologicallyDerivedProductDispense_Performer } from "./BiologicallyDerivedProductDispense_Performer";
import { BiologicallyDerivedProductDispense_PerformerSchemaInternal } from "./BiologicallyDerivedProductDispense_Performer";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A record of dispensation of a biologically derived product. */
export interface BiologicallyDerivedProductDispense extends DomainResource {
	/** The order or request that the dispense is fulfilling. This is a reference to a ServiceRequest resource. */
	basedOn?: Array<Reference>;
	/** Link to a resource identifying the physical location that the product was dispatched to. */
	destination?: Reference;
	/** Unique instance identifiers assigned to a biologically derived product dispense. Note: This is a business identifier, not a resource identifier. */
	identifier?: Array<Identifier>;
	/** The physical location where the dispense was performed. */
	location?: Reference;
	/** Indicates the type of matching associated with the dispense. */
	matchStatus?: CodeableConcept;
	/** Additional notes. */
	note?: Array<Annotation>;
	/** Indicates the relationship between the donor of the biologically derived product and the intended recipient. */
	originRelationshipType?: CodeableConcept;
	/** A larger event of which this particular event is a component. */
	partOf?: Array<Reference>;
	/** A link to a resource representing the patient that the product is dispensed for. */
	patient: Reference;
	/** Indicates who or what performed an action. */
	performer?: Array<BiologicallyDerivedProductDispense_Performer>;
	/** When the product was selected/ matched. */
	preparedDate?: string;
	/** Extensions for preparedDate */
	_preparedDate?: Element;
	/** A link to a resource identifying the biologically derived product that is being dispensed. */
	product: Reference;
	/** The amount of product in the dispense. Quantity will depend on the product being dispensed. Examples are: volume; cell count; concentration. */
	quantity?: Quantity;
	/** This is a BiologicallyDerivedProductDispense resource. */
	resourceType: "BiologicallyDerivedProductDispense";
	/** A code specifying the state of the dispense event. */
	status:
		| "allocated"
		| "entered-in-error"
		| "in-progress"
		| "issued"
		| "preparation"
		| "returned"
		| "unfulfilled"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Specific instructions for use. */
	usageInstruction?: string;
	/** Extensions for usageInstruction */
	_usageInstruction?: Element;
	/** When the product was dispatched for clinical use. */
	whenHandedOver?: string;
	/** Extensions for whenHandedOver */
	_whenHandedOver?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getBiologicallyDerivedProductDispense_PerformerSchema =
	(): z.ZodType<BiologicallyDerivedProductDispense_Performer> =>
		BiologicallyDerivedProductDispense_PerformerSchemaInternal as z.ZodType<BiologicallyDerivedProductDispense_Performer>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const BiologicallyDerivedProductDispenseSchemaInternal =
	DomainResourceSchemaInternal.extend({
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		destination: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		location: z.lazy(getReferenceSchema).optional(),
		matchStatus: z.lazy(getCodeableConceptSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		originRelationshipType: z.lazy(getCodeableConceptSchema).optional(),
		partOf: z.lazy(getReferenceSchema).array().optional(),
		patient: z.lazy(getReferenceSchema),
		performer: z
			.lazy(getBiologicallyDerivedProductDispense_PerformerSchema)
			.array()
			.optional(),
		preparedDate: fhirDateTime().optional(),
		_preparedDate: z.lazy(getElementSchema).optional(),
		product: z.lazy(getReferenceSchema),
		quantity: z.lazy(getQuantitySchema).optional(),
		resourceType: z.literal("BiologicallyDerivedProductDispense"),
		status: z.enum([
			"allocated",
			"entered-in-error",
			"in-progress",
			"issued",
			"preparation",
			"returned",
			"unfulfilled",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		usageInstruction: fhirString().optional(),
		_usageInstruction: z.lazy(getElementSchema).optional(),
		whenHandedOver: fhirDateTime().optional(),
		_whenHandedOver: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.basedOn,
				"basedOn",
				["http://hl7.org/fhir/StructureDefinition/ServiceRequest"],
				["ServiceRequest"],
				ctx,
			);
			validateReferenceTarget(
				record.destination,
				"destination",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
			validateReferenceTarget(
				record.location,
				"location",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
			validateReferenceTarget(
				record.partOf,
				"partOf",
				[
					"http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProductDispense",
				],
				["BiologicallyDerivedProductDispense"],
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
				record.product,
				"product",
				["http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct"],
				["BiologicallyDerivedProduct"],
				ctx,
			);
		});

export const BiologicallyDerivedProductDispenseSchema =
	BiologicallyDerivedProductDispenseSchemaInternal as z.ZodType<BiologicallyDerivedProductDispense>;
