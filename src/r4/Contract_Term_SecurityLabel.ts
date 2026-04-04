// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:26:21.962Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Security labels that protect the handling of information about the term and its elements, which may be specifically identified.. */
export interface Contract_Term_SecurityLabel extends BackboneElement {
	/** Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements. */
	category?: Array<Coding>;
	/** Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements. */
	classification: Coding;
	/** Security label privacy tag that species the manner in which term and/or term elements are to be protected. */
	control?: Array<Coding>;
	/** Number used to link this term or term element to the applicable Security Label. */
	number?: Array<number>;
	/** Extensions for number */
	_number?: Array<Element>;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Contract_Term_SecurityLabelSchemaInternal =
	BackboneElementSchemaInternal.extend({
		category: z.lazy(getCodingSchema).array().optional(),
		classification: z.lazy(getCodingSchema),
		control: z.lazy(getCodingSchema).array().optional(),
		number: z.number().int().nonnegative().array().optional(),
		_number: z.lazy(getElementSchema).array().optional(),
	}).strict();

export const Contract_Term_SecurityLabelSchema =
	Contract_Term_SecurityLabelSchemaInternal as z.ZodType<Contract_Term_SecurityLabel>;
