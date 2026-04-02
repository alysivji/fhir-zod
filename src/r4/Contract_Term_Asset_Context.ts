// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Circumstance of the asset. */
export interface Contract_Term_Asset_Context extends BackboneElement {
	/** Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location. */
	code?: Array<CodeableConcept>;
	/** Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction. */
	reference?: Reference;
	/** Context description. */
	text?: string;
	/** Extensions for text */
	_text?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Contract_Term_Asset_ContextSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).array().optional(),
		reference: z.lazy(getReferenceSchema).optional(),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_text: z.lazy(getElementSchema).optional(),
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

export const Contract_Term_Asset_ContextSchema =
	Contract_Term_Asset_ContextSchemaInternal as z.ZodType<Contract_Term_Asset_Context>;
