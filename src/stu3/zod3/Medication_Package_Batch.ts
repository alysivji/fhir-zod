// Profile: http://hl7.org/fhir/StructureDefinition/Medication
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Information about a group of medication produced or packaged from one production run. */
export interface Medication_Package_Batch extends BackboneElement {
	/** When this specific batch of product will expire. */
	expirationDate?: string;
	/** Extensions for expirationDate */
	_expirationDate?: Element;
	/** The assigned lot number of a batch of the specified product. */
	lotNumber?: string;
	/** Extensions for lotNumber */
	_lotNumber?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Medication_Package_BatchSchemaInternal =
	BackboneElementSchemaInternal.extend({
		expirationDate: fhirDateTime().optional(),
		_expirationDate: z.lazy(getElementSchema).optional(),
		lotNumber: fhirString().optional(),
		_lotNumber: z.lazy(getElementSchema).optional(),
	}).strict();

export const Medication_Package_BatchSchema =
	Medication_Package_BatchSchemaInternal as z.ZodType<Medication_Package_Batch>;
