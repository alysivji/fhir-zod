// Profile: http://hl7.org/fhir/StructureDefinition/Medication
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Information that only applies to packages (not products). */
export interface Medication_Batch extends BackboneElement {
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
export const Medication_BatchSchemaInternal =
	BackboneElementSchemaInternal.extend({
		expirationDate: fhirDateTime().optional(),
		_expirationDate: z.lazy(getElementSchema).optional(),
		lotNumber: fhirString().optional(),
		_lotNumber: z.lazy(getElementSchema).optional(),
	}).strict();

export const Medication_BatchSchema =
	Medication_BatchSchemaInternal as z.ZodType<Medication_Batch>;
