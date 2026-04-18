// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceReport
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Relationships that this composition has with other compositions or documents that already exist. */
export interface EvidenceReport_RelatesTo extends BackboneElement {
	/** The type of relationship that this composition has with anther composition or document. */
	code:
		| "amendedWith"
		| "amends"
		| "appendedWith"
		| "appends"
		| "replacedWith"
		| "replaces"
		| "transformedWith"
		| "transforms";
	/** Extensions for code */
	_code?: Element;
	/** The target composition/document of this relationship. */
	targetIdentifier?: Identifier;
	/** The target composition/document of this relationship. */
	targetReference?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EvidenceReport_RelatesToSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.enum([
			"amendedWith",
			"amends",
			"appendedWith",
			"appends",
			"replacedWith",
			"replaces",
			"transformedWith",
			"transforms",
		]),
		_code: z.lazy(getElementSchema).optional(),
		targetIdentifier: z.lazy(getIdentifierSchema).optional(),
		targetReference: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const target_x_Present = ["targetIdentifier", "targetReference"].filter(
				(field) => record[field] !== undefined,
			);
			if (target_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of targetIdentifier, targetReference must be present for target[x]",
					path: ["targetIdentifier"],
				});
			}
			if (target_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of targetIdentifier, targetReference may be present for target[x]",
					path: [target_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.targetReference,
				"targetReference",
				["http://hl7.org/fhir/StructureDefinition/EvidenceReport"],
				["EvidenceReport"],
				ctx,
			);
		});

export const EvidenceReport_RelatesToSchema =
	EvidenceReport_RelatesToSchemaInternal as z.ZodType<EvidenceReport_RelatesTo>;
