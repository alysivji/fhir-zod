// Source: https://hl7.org/fhir/R5/medicinalproductdefinition-definitions.html#MedicinalProductDefinition.crossReference
// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";

/** Reference to another product, e.g. for linking authorised to investigational product, or a virtual product. */
export interface MedicinalProductDefinition_CrossReference
  extends BackboneElement {
  /** Reference to another product, e.g. for linking authorised to investigational product. */
  product: CodeableReference;
  /** The type of relationship, for instance branded to generic, virtual to actual product, product to development product (investigational), parallel import version. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;

/** @internal */
export const MedicinalProductDefinition_CrossReferenceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    product: z.lazy(getCodeableReferenceSchema),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const MedicinalProductDefinition_CrossReferenceSchema =
  MedicinalProductDefinition_CrossReferenceSchemaInternal as z.ZodType<MedicinalProductDefinition_CrossReference>;
