// Profile: http://hl7.org/fhir/StructureDefinition/Attachment
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import {
	fhirBase64Binary,
	fhirCode,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Attachment Type */
export interface Attachment extends Element {
	/** Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate. */
	contentType?: string;
	/** Extensions for contentType */
	_contentType?: Element;
	/** The date that the attachment was first created. */
	creation?: string;
	/** Extensions for creation */
	_creation?: Element;
	/** The actual data of the attachment - a sequence of bytes. In XML, represented using base64. */
	data?: string;
	/** Extensions for data */
	_data?: Element;
	/** The calculated hash of the data using SHA-1. Represented using base64. */
	hash?: string;
	/** Extensions for hash */
	_hash?: Element;
	/** The human language of the content. The value can be any valid value according to BCP 47. */
	language?: string;
	/** Extensions for language */
	_language?: Element;
	/** The number of bytes of data that make up this attachment (before base64 encoding, if that is done). */
	size?: number;
	/** Extensions for size */
	_size?: Element;
	/** A label or set of text to display in place of the data. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** An alternative location where the data can be accessed. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const AttachmentSchemaInternal = z
	.object({
		contentType: fhirCode().optional(),
		_contentType: z.lazy(getElementSchema).optional(),
		creation: fhirDateTime().optional(),
		_creation: z.lazy(getElementSchema).optional(),
		data: fhirBase64Binary().optional(),
		_data: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		hash: fhirBase64Binary().optional(),
		_hash: z.lazy(getElementSchema).optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		language: fhirCode().optional(),
		_language: z.lazy(getElementSchema).optional(),
		size: z.number().int().nonnegative().optional(),
		_size: z.lazy(getElementSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const AttachmentSchema =
	AttachmentSchemaInternal as z.ZodType<Attachment>;
