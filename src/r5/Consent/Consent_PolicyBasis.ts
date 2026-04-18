// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirUrl } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A Reference or URL used to uniquely identify the policy the organization will enforce for this Consent. This Reference or URL should be specific to the version of the policy and should be dereferencable to a computable policy of some form. */
export interface Consent_PolicyBasis extends BackboneElement {
	/** A Reference that identifies the policy the organization will enforce for this Consent. */
	reference?: Reference;
	/** A URL that links to a computable version of the policy the organization will enforce for this Consent. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Consent_PolicyBasisSchemaInternal =
	BackboneElementSchemaInternal.extend({
		reference: z.lazy(getReferenceSchema).optional(),
		url: fhirUrl().optional(),
		_url: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.reference,
				"reference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const Consent_PolicyBasisSchema =
	Consent_PolicyBasisSchemaInternal as z.ZodType<Consent_PolicyBasis>;
