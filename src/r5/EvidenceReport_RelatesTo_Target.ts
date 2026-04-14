// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The target composition/document of this relationship. */
export interface EvidenceReport_RelatesTo_Target extends BackboneElement {
	/** Target of the relationship Display. */
	display?: string;
	/** Extensions for display */
	_display?: Element;
	/** Target of the relationship Identifier. */
	identifier?: Identifier;
	/** Target of the relationship Resource reference. */
	resource?: Reference;
	/** Target of the relationship URL. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EvidenceReport_RelatesTo_TargetSchemaInternal =
	BackboneElementSchemaInternal.extend({
		display: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_display: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		resource: z.lazy(getReferenceSchema).optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.resource,
				"resource",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const EvidenceReport_RelatesTo_TargetSchema =
	EvidenceReport_RelatesTo_TargetSchemaInternal as z.ZodType<EvidenceReport_RelatesTo_Target>;
