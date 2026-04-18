// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProduct
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Coding words or phrases of the name. */
export interface MedicinalProduct_Name_NamePart extends BackboneElement {
	/** A fragment of a product name. */
	part: string;
	/** Extensions for part */
	_part?: Element;
	/** Idenifying type for this part of the name (e.g. strength part). */
	type: Coding;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MedicinalProduct_Name_NamePartSchemaInternal =
	BackboneElementSchemaInternal.extend({
		part: fhirString(),
		_part: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodingSchema),
	}).strict();

export const MedicinalProduct_Name_NamePartSchema =
	MedicinalProduct_Name_NamePartSchemaInternal as z.ZodType<MedicinalProduct_Name_NamePart>;
