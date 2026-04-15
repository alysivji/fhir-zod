// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** List of Computable Policy Rule Language Representations of this Contract. */
export interface Contract_Rule extends BackboneElement {
	/** Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal). */
	contentAttachment?: Attachment;
	/** Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal). */
	contentReference?: Reference;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Contract_RuleSchemaInternal = BackboneElementSchemaInternal.extend(
	{
		contentAttachment: z.lazy(getAttachmentSchema).optional(),
		contentReference: z.lazy(getReferenceSchema).optional(),
	},
)
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const content_x_Present = ["contentAttachment", "contentReference"].filter(
			(field) => record[field] !== undefined,
		);
		if (content_x_Present.length === 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"One of contentAttachment, contentReference must be present for content[x]",
				path: ["contentAttachment"],
			});
		}
		if (content_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of contentAttachment, contentReference may be present for content[x]",
				path: [content_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.contentReference,
			"contentReference",
			["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
			["DocumentReference"],
			ctx,
		);
	});

export const Contract_RuleSchema =
	Contract_RuleSchemaInternal as z.ZodType<Contract_Rule>;
