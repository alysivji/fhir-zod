// Profile: http://hl7.org/fhir/StructureDefinition/Communication
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Text, attachment(s), or resource(s) that was communicated to the recipient. */
export interface Communication_Payload extends BackboneElement {
	/** A communicated content (or for multi-part communications, one portion of the communication). */
	contentAttachment?: Attachment;
	/** A communicated content (or for multi-part communications, one portion of the communication). */
	contentCodeableConcept?: CodeableConcept;
	/** A communicated content (or for multi-part communications, one portion of the communication). */
	contentReference?: Reference;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Communication_PayloadSchemaInternal =
	BackboneElementSchemaInternal.extend({
		contentAttachment: z.lazy(getAttachmentSchema).optional(),
		contentCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		contentReference: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const content_x_Present = [
				"contentAttachment",
				"contentCodeableConcept",
				"contentReference",
			].filter((field) => record[field] !== undefined);
			if (content_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of contentAttachment, contentCodeableConcept, contentReference must be present for content[x]",
					path: ["contentAttachment"],
				});
			}
			if (content_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of contentAttachment, contentCodeableConcept, contentReference may be present for content[x]",
					path: [content_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.contentReference,
				"contentReference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const Communication_PayloadSchema =
	Communication_PayloadSchemaInternal as z.ZodType<Communication_Payload>;
