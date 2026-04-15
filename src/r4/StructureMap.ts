// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T00:02:07.682Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { StructureMap_Group } from "./StructureMap_Group";
import { StructureMap_GroupSchemaInternal } from "./StructureMap_Group";
import type { StructureMap_Structure } from "./StructureMap_Structure";
import { StructureMap_StructureSchemaInternal } from "./StructureMap_Structure";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface StructureMap extends DomainResource {
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** The date  (and optionally time) when the structure map was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure map changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the structure map from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A Boolean value to indicate that this structure map is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** Organizes the mapping into manageable chunks for human review/ease of maintenance. */
	group: Array<StructureMap_Group>;
	/** A formal identifier that is used to identify this structure map when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** Other maps used by this map (canonical URLs). */
	import?: Array<string | null>;
	/** Extensions for import */
	_import?: Array<Element | null>;
	/** A legal or geographic region in which the structure map is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** A natural language name identifying the structure map. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** The name of the organization or individual that published the structure map. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this structure map is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** This is a StructureMap resource. */
	resourceType: "StructureMap";
	/** The status of this structure map. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A structure definition used by this map. The structure definition may describe instances that are converted, or the instances that are produced. */
	structure?: Array<StructureMap_Structure>;
	/** A short, descriptive, user-friendly title for the structure map. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** An absolute URI that is used to identify this structure map when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this structure map is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the structure map is stored on different servers. */
	url: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate structure map instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the structure map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure map author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getStructureMap_GroupSchema = (): z.ZodType<StructureMap_Group> =>
	StructureMap_GroupSchemaInternal as z.ZodType<StructureMap_Group>;
const getStructureMap_StructureSchema = (): z.ZodType<StructureMap_Structure> =>
	StructureMap_StructureSchemaInternal as z.ZodType<StructureMap_Structure>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const StructureMapSchemaInternal = DomainResourceSchemaInternal.extend({
	contact: z.lazy(getContactDetailSchema).array().optional(),
	copyright: z.string().optional(),
	_copyright: z.lazy(getElementSchema).optional(),
	date: fhirDateTime().optional(),
	_date: z.lazy(getElementSchema).optional(),
	description: z.string().optional(),
	_description: z.lazy(getElementSchema).optional(),
	experimental: z.boolean().optional(),
	_experimental: z.lazy(getElementSchema).optional(),
	group: z.lazy(getStructureMap_GroupSchema).array(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	import: fhirCanonical().nullable().array().optional(),
	_import: z.lazy(getElementSchema).nullable().array().optional(),
	jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
	name: fhirString(),
	_name: z.lazy(getElementSchema).optional(),
	publisher: fhirString().optional(),
	_publisher: z.lazy(getElementSchema).optional(),
	purpose: z.string().optional(),
	_purpose: z.lazy(getElementSchema).optional(),
	resourceType: z.literal("StructureMap"),
	status: z.enum(["active", "draft", "retired", "unknown"]),
	_status: z.lazy(getElementSchema).optional(),
	structure: z.lazy(getStructureMap_StructureSchema).array().optional(),
	title: fhirString().optional(),
	_title: z.lazy(getElementSchema).optional(),
	url: fhirUri(),
	_url: z.lazy(getElementSchema).optional(),
	useContext: z.lazy(getUsageContextSchema).array().optional(),
	version: fhirString().optional(),
	_version: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validatePrimitiveArrayPair(
			record.import,
			record._import,
			"import",
			"_import",
			ctx,
		);
	});

export const StructureMapSchema =
	StructureMapSchemaInternal as z.ZodType<StructureMap>;
