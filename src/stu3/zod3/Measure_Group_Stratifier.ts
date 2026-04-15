// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library, or a valid FHIR Resource Path. */
export interface Measure_Group_Stratifier extends BackboneElement {
	/** The criteria for the stratifier. This must be the name of an expression defined within a referenced library. */
	criteria?: string;
	/** Extensions for criteria */
	_criteria?: Element;
	/** The identifier for the stratifier used to coordinate the reported data back to this stratifier. */
	identifier?: Identifier;
	/** The path to an element that defines the stratifier, specified as a valid FHIR resource path. */
	path?: string;
	/** Extensions for path */
	_path?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const Measure_Group_StratifierSchemaInternal =
	BackboneElementSchemaInternal.extend({
		criteria: fhirString().optional(),
		_criteria: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		path: fhirString().optional(),
		_path: z.lazy(getElementSchema).optional(),
	}).strict();

export const Measure_Group_StratifierSchema =
	Measure_Group_StratifierSchemaInternal as z.ZodType<Measure_Group_Stratifier>;
