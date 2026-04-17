// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Country and jurisdiction where the name applies, and associated language. */
export interface MedicinalProductDefinition_Name_Usage extends BackboneElement {
  /** Country code for where this name applies. */
  country: CodeableConcept;
  /** Jurisdiction code for where this name applies. A jurisdiction may be a sub- or supra-national entity (e.g. a state or a geographic region). */
  jurisdiction?: CodeableConcept;
  /** Language code for this name. */
  language: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const MedicinalProductDefinition_Name_UsageSchemaInternal =
  BackboneElementSchemaInternal.extend({
    country: z.lazy(getCodeableConceptSchema),
    jurisdiction: z.lazy(getCodeableConceptSchema).optional(),
    language: z.lazy(getCodeableConceptSchema),
  }).strict();

export const MedicinalProductDefinition_Name_UsageSchema =
  MedicinalProductDefinition_Name_UsageSchemaInternal as z.ZodType<MedicinalProductDefinition_Name_Usage>;
