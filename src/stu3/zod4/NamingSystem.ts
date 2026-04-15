// Profile: http://hl7.org/fhir/StructureDefinition/NamingSystem
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { NamingSystem_UniqueId } from "./NamingSystem_UniqueId";
import { NamingSystem_UniqueIdSchemaInternal } from "./NamingSystem_UniqueId";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** Base StructureDefinition for NamingSystem Resource */
export interface NamingSystem extends DomainResource {
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** The date  (and optionally time) when the naming system was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the naming system changes. */
	date: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the naming system from a consumer's perspective. Details about what the namespace identifies including scope, granularity, version labeling, etc. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A legal or geographic region in which the naming system is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** Indicates the purpose for the naming system - what kinds of things does it make unique? */
	kind: "codesystem" | "identifier" | "root";
	/** Extensions for kind */
	_kind?: Element;
	/** A natural language name identifying the naming system. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** The name of the individual or organization that published the naming system. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** For naming systems that are retired, indicates the naming system that should be used in their place (if any). */
	replacedBy?: Reference;
	/** This is a NamingSystem resource. */
	resourceType: "NamingSystem";
	/** The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision. */
	responsible?: string;
	/** Extensions for responsible */
	_responsible?: Element;
	/** The status of this naming system. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Categorizes a naming system for easier search by grouping related naming systems. */
	type?: CodeableConcept;
	/** Indicates how the system may be identified when referenced in electronic exchange. */
	uniqueId: Array<NamingSystem_UniqueId>;
	/** Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc. */
	usage?: string;
	/** Extensions for usage */
	_usage?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate naming system instances. */
	useContext?: Array<UsageContext>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getNamingSystem_UniqueIdSchema = (): z.ZodType<NamingSystem_UniqueId> =>
	NamingSystem_UniqueIdSchemaInternal as z.ZodType<NamingSystem_UniqueId>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const NamingSystemSchemaInternal = DomainResourceSchemaInternal.extend({
	contact: z.lazy(getContactDetailSchema).array().optional(),
	date: fhirDateTime(),
	_date: z.lazy(getElementSchema).optional(),
	description: z.string().optional(),
	_description: z.lazy(getElementSchema).optional(),
	jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
	kind: z.enum(["codesystem", "identifier", "root"]),
	_kind: z.lazy(getElementSchema).optional(),
	name: fhirString(),
	_name: z.lazy(getElementSchema).optional(),
	publisher: fhirString().optional(),
	_publisher: z.lazy(getElementSchema).optional(),
	replacedBy: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("NamingSystem"),
	responsible: fhirString().optional(),
	_responsible: z.lazy(getElementSchema).optional(),
	status: z.enum(["active", "draft", "retired", "unknown"]),
	_status: z.lazy(getElementSchema).optional(),
	type: z.lazy(getCodeableConceptSchema).optional(),
	uniqueId: z.lazy(getNamingSystem_UniqueIdSchema).array(),
	usage: fhirString().optional(),
	_usage: z.lazy(getElementSchema).optional(),
	useContext: z.lazy(getUsageContextSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.replacedBy,
			"replacedBy",
			["http://hl7.org/fhir/StructureDefinition/NamingSystem"],
			["NamingSystem"],
			ctx,
		);
	});

export const NamingSystemSchema =
	NamingSystemSchemaInternal as z.ZodType<NamingSystem>;
