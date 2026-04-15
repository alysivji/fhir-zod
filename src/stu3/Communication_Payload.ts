// Profile: http://hl7.org/fhir/StructureDefinition/Communication
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Text, attachment(s), or resource(s) that was communicated to the recipient. */
export interface Communication_Payload extends BackboneElement {
	/** A communicated content (or for multi-part communications, one portion of the communication). */
	contentAttachment?: Attachment;
	/** A communicated content (or for multi-part communications, one portion of the communication). */
	contentReference?: Reference;
	/** A communicated content (or for multi-part communications, one portion of the communication). */
	contentString?: string;
	/** Extensions for contentString */
	_contentString?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Communication_PayloadSchemaInternal =
	BackboneElementSchemaInternal.extend({
		contentAttachment: z.lazy(getAttachmentSchema).optional(),
		contentReference: z.lazy(getReferenceSchema).optional(),
		contentString: fhirString().optional(),
		_contentString: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const content_x_Present = [
				"contentAttachment",
				"contentReference",
				"contentString",
			].filter((field) => record[field] !== undefined);
			if (content_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of contentAttachment, contentReference, contentString must be present for content[x]",
					path: ["contentAttachment"],
				});
			}
			if (content_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of contentAttachment, contentReference, contentString may be present for content[x]",
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
