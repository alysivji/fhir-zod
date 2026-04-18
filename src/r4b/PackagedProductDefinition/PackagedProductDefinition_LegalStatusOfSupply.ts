// Profile: http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";

/** The legal status of supply of the packaged item as classified by the regulator. */
export interface PackagedProductDefinition_LegalStatusOfSupply
	extends BackboneElement {
	/** The actual status of supply. Conveys in what situation this package type may be supplied for use. */
	code?: CodeableConcept;
	/** The place where the legal status of supply applies. When not specified, this indicates it is unknown in this context. */
	jurisdiction?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const PackagedProductDefinition_LegalStatusOfSupplySchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const PackagedProductDefinition_LegalStatusOfSupplySchema =
	PackagedProductDefinition_LegalStatusOfSupplySchemaInternal as z.ZodType<PackagedProductDefinition_LegalStatusOfSupply>;
