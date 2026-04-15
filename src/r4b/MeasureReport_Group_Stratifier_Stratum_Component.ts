// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** A stratifier component value. */
export interface MeasureReport_Group_Stratifier_Stratum_Component
	extends BackboneElement {
	/** The code for the stratum component value. */
	code: CodeableConcept;
	/** The stratum component value. */
	value: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const MeasureReport_Group_Stratifier_Stratum_ComponentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		value: z.lazy(getCodeableConceptSchema),
	}).strict();

export const MeasureReport_Group_Stratifier_Stratum_ComponentSchema =
	MeasureReport_Group_Stratifier_Stratum_ComponentSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum_Component>;
