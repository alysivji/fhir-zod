// Profile: http://hl7.org/fhir/StructureDefinition/Provenance
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirUri } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An entity used in this activity. */
export interface Provenance_Entity extends BackboneElement {
	/** The entity is attributed to an agent to express the agent's responsibility for that entity, possibly along with other agents. This description can be understood as shorthand for saying that the agent was responsible for the activity which generated the entity. */
	agent?: Array<unknown>;
	/** How the entity was used during the activity. */
	role: "derivation" | "quotation" | "removal" | "revision" | "source";
	/** Extensions for role */
	_role?: Element;
	/** Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative. */
	whatIdentifier?: Identifier;
	/** Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative. */
	whatReference?: Reference;
	/** Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative. */
	whatUri?: string;
	/** Extensions for whatUri */
	_whatUri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Provenance_EntitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		agent: z.unknown().array().optional(),
		role: z.enum(["derivation", "quotation", "removal", "revision", "source"]),
		_role: z.lazy(getElementSchema).optional(),
		whatIdentifier: z.lazy(getIdentifierSchema).optional(),
		whatReference: z.lazy(getReferenceSchema).optional(),
		whatUri: fhirUri().optional(),
		_whatUri: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const what_x_Present = [
				"whatIdentifier",
				"whatReference",
				"whatUri",
			].filter((field) => record[field] !== undefined);
			if (what_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of whatIdentifier, whatReference, whatUri must be present for what[x]",
					path: ["whatIdentifier"],
				});
			}
			if (what_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of whatIdentifier, whatReference, whatUri may be present for what[x]",
					path: [what_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.whatReference,
				"whatReference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const Provenance_EntitySchema =
	Provenance_EntitySchemaInternal as z.ZodType<Provenance_Entity>;
