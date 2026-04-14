// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement. */
export interface Contract_Friendly extends BackboneElement {
	/** Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability. */
	contentAttachment?: Attachment;
	/** Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability. */
	contentReference?: Reference;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Contract_FriendlySchemaInternal =
	BackboneElementSchemaInternal.extend({
		contentAttachment: z.lazy(getAttachmentSchema).optional(),
		contentReference: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const content_x_Present = [
				"contentAttachment",
				"contentReference",
			].filter((field) => record[field] !== undefined);
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
				[
					"http://hl7.org/fhir/StructureDefinition/Composition",
					"http://hl7.org/fhir/StructureDefinition/DocumentReference",
					"http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
				],
				["Composition", "DocumentReference", "QuestionnaireResponse"],
				ctx,
			);
		});

export const Contract_FriendlySchema =
	Contract_FriendlySchemaInternal as z.ZodType<Contract_Friendly>;
