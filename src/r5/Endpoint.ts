// Profile: http://hl7.org/fhir/StructureDefinition/Endpoint
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T00:02:33.197Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString, fhirUrl } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Endpoint_Payload } from "./Endpoint_Payload";
import { Endpoint_PayloadSchemaInternal } from "./Endpoint_Payload";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server, or a s/Mime email address. This may include any security context information. */
export interface Endpoint extends DomainResource {
	/** The uri that describes the actual end-point to connect to. */
	address: string;
	/** Extensions for address */
	_address?: Element;
	/** A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook). */
	connectionType: Array<CodeableConcept>;
	/** Contact details for a human to contact about the endpoint. The primary use of this for system administrator troubleshooting. */
	contact?: Array<ContactPoint>;
	/** The description of the endpoint and what it is for (typically used as supplemental information in an endpoint directory describing its usage/purpose). */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The type of environment(s) exposed at this endpoint (dev, prod, test, etc.). */
	environmentType?: Array<CodeableConcept>;
	/** Additional headers / information to send as part of the notification. */
	header?: Array<string | null>;
	/** Extensions for header */
	_header?: Array<Element | null>;
	/** Identifier for the organization that is used to identify the endpoint across multiple disparate systems. */
	identifier?: Array<Identifier>;
	/** The organization that manages this endpoint (even if technically another organization is hosting this in the cloud, it is the organization associated with the data). */
	managingOrganization?: Reference;
	/** A friendly name that this endpoint can be referred to with. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The set of payloads that are provided/available at this endpoint. */
	payload?: Array<Endpoint_Payload>;
	/** The interval during which the endpoint is expected to be operational. */
	period?: Period;
	/** This is a Endpoint resource. */
	resourceType: "Endpoint";
	/** The endpoint status represents the general expected availability of an endpoint. */
	status: "active" | "entered-in-error" | "error" | "off" | "suspended";
	/** Extensions for status */
	_status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getEndpoint_PayloadSchema = (): z.ZodType<Endpoint_Payload> =>
	Endpoint_PayloadSchemaInternal as z.ZodType<Endpoint_Payload>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EndpointSchemaInternal = DomainResourceSchemaInternal.extend({
	address: fhirUrl(),
	_address: z.lazy(getElementSchema).optional(),
	connectionType: z.lazy(getCodeableConceptSchema).array(),
	contact: z.lazy(getContactPointSchema).array().optional(),
	description: fhirString().optional(),
	_description: z.lazy(getElementSchema).optional(),
	environmentType: z.lazy(getCodeableConceptSchema).array().optional(),
	header: fhirString().nullable().array().optional(),
	_header: z.lazy(getElementSchema).nullable().array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	managingOrganization: z.lazy(getReferenceSchema).optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	payload: z.lazy(getEndpoint_PayloadSchema).array().optional(),
	period: z.lazy(getPeriodSchema).optional(),
	resourceType: z.literal("Endpoint"),
	status: z.enum(["active", "entered-in-error", "error", "off", "suspended"]),
	_status: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validatePrimitiveArrayPair(
			record.header,
			record._header,
			"header",
			"_header",
			ctx,
		);
		validateReferenceTarget(
			record.managingOrganization,
			"managingOrganization",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export const EndpointSchema = EndpointSchemaInternal as z.ZodType<Endpoint>;
