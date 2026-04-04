// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T20:28:54.953Z

import * as z from "zod";
import { fhirBase64Binary, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { AuditEvent_Entity_Detail } from "./AuditEvent_Entity_Detail";
import { AuditEvent_Entity_DetailSchemaInternal } from "./AuditEvent_Entity_Detail";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Specific instances of data or objects that have been accessed. */
export interface AuditEvent_Entity extends BackboneElement {
	/** Text that describes the entity in more detail. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Tagged value pairs for conveying additional information about the entity. */
	detail?: Array<AuditEvent_Entity_Detail>;
	/** Identifier for the data life-cycle stage for the entity. */
	lifecycle?: Coding;
	/** A name of the entity in the audit event. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The query parameters for a query-type entities. */
	query?: string;
	/** Extensions for query */
	_query?: Element;
	/** Code representing the role the entity played in the event being audited. */
	role?: Coding;
	/** Security labels for the identified entity. */
	securityLabel?: Array<Coding>;
	/** The type of the object that was involved in this audit event. */
	type?: Coding;
	/** Identifies a specific instance of the entity. The reference should be version specific. */
	what?: Reference;
}

const getAuditEvent_Entity_DetailSchema =
	(): z.ZodType<AuditEvent_Entity_Detail> =>
		AuditEvent_Entity_DetailSchemaInternal as z.ZodType<AuditEvent_Entity_Detail>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AuditEvent_EntitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		detail: z.lazy(getAuditEvent_Entity_DetailSchema).array().optional(),
		lifecycle: z.lazy(getCodingSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		query: fhirBase64Binary().optional(),
		_query: z.lazy(getElementSchema).optional(),
		role: z.lazy(getCodingSchema).optional(),
		securityLabel: z.lazy(getCodingSchema).array().optional(),
		type: z.lazy(getCodingSchema).optional(),
		what: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.what,
				"what",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const AuditEvent_EntitySchema =
	AuditEvent_EntitySchemaInternal as z.ZodType<AuditEvent_Entity>;
