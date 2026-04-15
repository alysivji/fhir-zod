// Profile: http://hl7.org/fhir/StructureDefinition/DeviceComponent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirInstant } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DeviceComponent_ProductionSpecification } from "./DeviceComponent_ProductionSpecification";
import { DeviceComponent_ProductionSpecificationSchemaInternal } from "./DeviceComponent_ProductionSpecification";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for DeviceComponent Resource */
export interface DeviceComponent extends DomainResource {
	/** The locally assigned unique identification by the software. For example: handle ID. */
	identifier: Identifier;
	/** The language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US. */
	languageCode?: CodeableConcept;
	/** The timestamp for the most recent system change which includes device configuration or setting change. */
	lastSystemChange?: string;
	/** Extensions for lastSystemChange */
	_lastSystemChange?: Element;
	/** The physical principle of the measurement. For example: thermal, chemical, acoustical, etc. */
	measurementPrinciple?:
		| "acoustical"
		| "biological"
		| "chemical"
		| "electrical"
		| "impedance"
		| "manual"
		| "mechanical"
		| "nuclear"
		| "optical"
		| "other"
		| "thermal";
	/** Extensions for measurementPrinciple */
	_measurementPrinciple?: Element;
	/** The current operational status of the device. For example: On, Off, Standby, etc. */
	operationalStatus?: Array<CodeableConcept>;
	/** The parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular. */
	parameterGroup?: CodeableConcept;
	/** The link to the parent resource. For example: Channel is linked to its VMD parent. */
	parent?: Reference;
	/** The production specification such as component revision, serial number, etc. */
	productionSpecification?: Array<DeviceComponent_ProductionSpecification>;
	/** This is a DeviceComponent resource. */
	resourceType: "DeviceComponent";
	/** The link to the source Device that contains administrative device information such as manufacture, serial number, etc. */
	source?: Reference;
	/** The component type as defined in the object-oriented or metric nomenclature partition. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDeviceComponent_ProductionSpecificationSchema =
	(): z.ZodType<DeviceComponent_ProductionSpecification> =>
		DeviceComponent_ProductionSpecificationSchemaInternal as z.ZodType<DeviceComponent_ProductionSpecification>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DeviceComponentSchemaInternal =
	DomainResourceSchemaInternal.extend({
		identifier: z.lazy(getIdentifierSchema),
		languageCode: z.lazy(getCodeableConceptSchema).optional(),
		lastSystemChange: fhirInstant().optional(),
		_lastSystemChange: z.lazy(getElementSchema).optional(),
		measurementPrinciple: z
			.enum([
				"acoustical",
				"biological",
				"chemical",
				"electrical",
				"impedance",
				"manual",
				"mechanical",
				"nuclear",
				"optical",
				"other",
				"thermal",
			])
			.optional(),
		_measurementPrinciple: z.lazy(getElementSchema).optional(),
		operationalStatus: z.lazy(getCodeableConceptSchema).array().optional(),
		parameterGroup: z.lazy(getCodeableConceptSchema).optional(),
		parent: z.lazy(getReferenceSchema).optional(),
		productionSpecification: z
			.lazy(getDeviceComponent_ProductionSpecificationSchema)
			.array()
			.optional(),
		resourceType: z.literal("DeviceComponent"),
		source: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.parent,
				"parent",
				["http://hl7.org/fhir/StructureDefinition/DeviceComponent"],
				["DeviceComponent"],
				ctx,
			);
			validateReferenceTarget(
				record.source,
				"source",
				["http://hl7.org/fhir/StructureDefinition/Device"],
				["Device"],
				ctx,
			);
		});

export const DeviceComponentSchema =
	DeviceComponentSchemaInternal as z.ZodType<DeviceComponent>;
