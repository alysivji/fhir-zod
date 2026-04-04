// Profile: http://hl7.org/fhir/StructureDefinition/Endpoint
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T20:28:54.953Z

import * as z from "zod";
import { fhirCode, fhirString, fhirUrl } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
export interface Endpoint extends DomainResource {
	/** The uri that describes the actual end-point to connect to. */
	address: string;
	/** Extensions for address */
	_address?: Element;
	/** A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook). */
	connectionType: Coding;
	/** Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting. */
	contact?: Array<ContactPoint>;
	/** Additional headers / information to send as part of the notification. */
	header?: Array<string>;
	/** Extensions for header */
	_header?: Array<Element>;
	/** Identifier for the organization that is used to identify the endpoint across multiple disparate systems. */
	identifier?: Array<Identifier>;
	/** The organization that manages this endpoint (even if technically another organization is hosting this in the cloud, it is the organization associated with the data). */
	managingOrganization?: Reference;
	/** A friendly name that this endpoint can be referred to with. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType). */
	payloadMimeType?: Array<string>;
	/** Extensions for payloadMimeType */
	_payloadMimeType?: Array<Element>;
	/** The payload type describes the acceptable content that can be communicated on the endpoint. */
	payloadType: Array<CodeableConcept>;
	/** The interval during which the endpoint is expected to be operational. */
	period?: Period;
	/** This is a Endpoint resource. */
	resourceType: "Endpoint";
	/** active | suspended | error | off | test. */
	status:
		| "active"
		| "entered-in-error"
		| "error"
		| "off"
		| "suspended"
		| "test";
	/** Extensions for status */
	_status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
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
	connectionType: z.lazy(getCodingSchema),
	contact: z.lazy(getContactPointSchema).array().optional(),
	header: fhirString().array().optional(),
	_header: z.lazy(getElementSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	managingOrganization: z.lazy(getReferenceSchema).optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	payloadMimeType: fhirCode().array().optional(),
	_payloadMimeType: z.lazy(getElementSchema).array().optional(),
	payloadType: z.lazy(getCodeableConceptSchema).array(),
	period: z.lazy(getPeriodSchema).optional(),
	resourceType: z.literal("Endpoint"),
	status: z.enum([
		"active",
		"entered-in-error",
		"error",
		"off",
		"suspended",
		"test",
	]),
	_status: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.managingOrganization,
			"managingOrganization",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export const EndpointSchema = EndpointSchemaInternal as z.ZodType<Endpoint>;
