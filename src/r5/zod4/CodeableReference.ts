// Profile: http://hl7.org/fhir/StructureDefinition/CodeableReference
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirId } from "../../shared/fhir-primitives-zod4";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DataType } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** CodeableReference Type: A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class). */
export interface CodeableReference extends DataType {
	/** A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology. */
	concept?: CodeableConcept;
	/** A reference to a resource the provides exact details about the information being referenced. */
	reference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CodeableReferenceSchemaInternal = z
	.object({
		concept: z.lazy(getCodeableConceptSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		reference: z.lazy(getReferenceSchema).optional(),
	})
	.strict();

export const CodeableReferenceSchema =
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
