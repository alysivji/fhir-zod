// Profile: http://hl7.org/fhir/StructureDefinition/Coding
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import {
	fhirCode,
	fhirId,
	fhirString,
	fhirUri,
} from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Coding Type: A reference to a code defined by a terminology system. */
export interface Coding extends Element {
	/** A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination). */
	code?: string;
	/** Extensions for code */
	_code?: Element;
	/** A representation of the meaning of the code in the system, following the rules of the system. */
	display?: string;
	/** Extensions for display */
	_display?: Element;
	/** The identification of the code system that defines the meaning of the symbol in the code. */
	system?: string;
	/** Extensions for system */
	_system?: Element;
	/** Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays). */
	userSelected?: boolean;
	/** Extensions for userSelected */
	_userSelected?: Element;
	/** The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const CodingSchemaInternal = z
	.object({
		code: fhirCode().optional(),
		_code: z.lazy(getElementSchema).optional(),
		display: fhirString().optional(),
		_display: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		system: fhirUri().optional(),
		_system: z.lazy(getElementSchema).optional(),
		userSelected: z.boolean().optional(),
		_userSelected: z.lazy(getElementSchema).optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const CodingSchema = CodingSchemaInternal as z.ZodType<Coding>;
