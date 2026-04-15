// Profile: http://hl7.org/fhir/StructureDefinition/Evidence
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Evidence_Statistic_ModelCharacteristic_Variable } from "./Evidence_Statistic_ModelCharacteristic_Variable";
import { Evidence_Statistic_ModelCharacteristic_VariableSchemaInternal } from "./Evidence_Statistic_ModelCharacteristic_Variable";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** A component of the method to generate the statistic. */
export interface Evidence_Statistic_ModelCharacteristic
	extends BackboneElement {
	/** An attribute of the statistic used as a model characteristic. */
	attributeEstimate?: Array<unknown>;
	/** Description of a component of the method to generate the statistic. */
	code: CodeableConcept;
	/** Further specification of the quantified value of the component of the method to generate the statistic. */
	value?: Quantity;
	/** A variable adjusted for in the adjusted analysis. */
	variable?: Array<Evidence_Statistic_ModelCharacteristic_Variable>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getEvidence_Statistic_ModelCharacteristic_VariableSchema =
	(): z.ZodType<Evidence_Statistic_ModelCharacteristic_Variable> =>
		Evidence_Statistic_ModelCharacteristic_VariableSchemaInternal as z.ZodType<Evidence_Statistic_ModelCharacteristic_Variable>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const Evidence_Statistic_ModelCharacteristicSchemaInternal =
	BackboneElementSchemaInternal.extend({
		attributeEstimate: z.unknown().array().optional(),
		code: z.lazy(getCodeableConceptSchema),
		value: z.lazy(getQuantitySchema).optional(),
		variable: z
			.lazy(getEvidence_Statistic_ModelCharacteristic_VariableSchema)
			.array()
			.optional(),
	}).strict();

export const Evidence_Statistic_ModelCharacteristicSchema =
	Evidence_Statistic_ModelCharacteristicSchemaInternal as z.ZodType<Evidence_Statistic_ModelCharacteristic>;
