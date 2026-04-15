// Profile: http://hl7.org/fhir/StructureDefinition/DocumentReference
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Related identifiers or resources associated with the DocumentReference. */
export interface DocumentReference_Context_Related extends BackboneElement {
	/** Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing. */
	identifier?: Identifier;
	/** Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing. */
	ref?: Reference;
}

const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DocumentReference_Context_RelatedSchemaInternal =
	BackboneElementSchemaInternal.extend({
		identifier: z.lazy(getIdentifierSchema).optional(),
		ref: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.ref,
				"ref",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const DocumentReference_Context_RelatedSchema =
	DocumentReference_Context_RelatedSchemaInternal as z.ZodType<DocumentReference_Context_Related>;
