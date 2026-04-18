// Profile: http://hl7.org/fhir/StructureDefinition/DocumentManifest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Related identifiers or resources associated with the DocumentManifest. */
export interface DocumentManifest_Related extends BackboneElement {
	/** Related identifier to this DocumentManifest.  For example, Order numbers, accession numbers, XDW workflow numbers. */
	identifier?: Identifier;
	/** Related Resource to this DocumentManifest. For example, Order, ProcedureRequest,  Procedure, EligibilityRequest, etc. */
	ref?: Reference;
}

const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DocumentManifest_RelatedSchemaInternal =
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

export const DocumentManifest_RelatedSchema =
	DocumentManifest_RelatedSchemaInternal as z.ZodType<DocumentManifest_Related>;
