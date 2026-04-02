// Profile: http://hl7.org/fhir/StructureDefinition/Provenance
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
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
	what: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Provenance_EntitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		agent: z.unknown().array().optional(),
		role: z.enum(["derivation", "quotation", "removal", "revision", "source"]),
		_role: z.lazy(getElementSchema).optional(),
		what: z.lazy(getReferenceSchema),
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

export const Provenance_EntitySchema =
	Provenance_EntitySchemaInternal as z.ZodType<Provenance_Entity>;
