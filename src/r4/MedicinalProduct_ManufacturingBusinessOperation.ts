// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProduct
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An operation applied to the product, for manufacturing or adminsitrative purpose. */
export interface MedicinalProduct_ManufacturingBusinessOperation
  extends BackboneElement {
  /** Regulatory authorization reference number. */
  authorisationReferenceNumber?: Identifier;
  /** To indicate if this proces is commercially confidential. */
  confidentialityIndicator?: CodeableConcept;
  /** Regulatory authorization date. */
  effectiveDate?: string;
  /** Extensions for effectiveDate */
  _effectiveDate?: Element;
  /** The manufacturer or establishment associated with the process. */
  manufacturer?: Array<Reference>;
  /** The type of manufacturing operation. */
  operationType?: CodeableConcept;
  /** A regulator which oversees the operation. */
  regulator?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProduct_ManufacturingBusinessOperationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    authorisationReferenceNumber: z.lazy(getIdentifierSchema).optional(),
    confidentialityIndicator: z.lazy(getCodeableConceptSchema).optional(),
    effectiveDate: fhirDateTime().optional(),
    _effectiveDate: z.lazy(getElementSchema).optional(),
    manufacturer: z.lazy(getReferenceSchema).array().optional(),
    operationType: z.lazy(getCodeableConceptSchema).optional(),
    regulator: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.manufacturer,
        "manufacturer",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
      validateReferenceTarget(
        record.regulator,
        "regulator",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
    });

export const MedicinalProduct_ManufacturingBusinessOperationSchema =
  MedicinalProduct_ManufacturingBusinessOperationSchemaInternal as z.ZodType<MedicinalProduct_ManufacturingBusinessOperation>;
