// Source: https://hl7.org/fhir/R4/medicinalproduct-definitions.html#MedicinalProduct.specialDesignation
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease. */
export interface MedicinalProduct_SpecialDesignation extends BackboneElement {
  /** Date when the designation was granted. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** Identifier for the designation, or procedure number. */
  identifier?: Array<Identifier>;
  /** Condition for which the medicinal use applies. */
  indicationCodeableConcept?: CodeableConcept;
  /** Condition for which the medicinal use applies. */
  indicationReference?: Reference;
  /** The intended use of the product, e.g. prevention, treatment. */
  intendedUse?: CodeableConcept;
  /** Animal species for which this applies. */
  species?: CodeableConcept;
  /** For example granted, pending, expired or withdrawn. */
  status?: CodeableConcept;
  /** The type of special designation, e.g. orphan drug, minor use. */
  type?: CodeableConcept;
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
export const MedicinalProduct_SpecialDesignationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    indicationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    indicationReference: z.lazy(getReferenceSchema).optional(),
    intendedUse: z.lazy(getCodeableConceptSchema).optional(),
    species: z.lazy(getCodeableConceptSchema).optional(),
    status: z.lazy(getCodeableConceptSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const indication_x_Present = [
        "indicationCodeableConcept",
        "indicationReference",
      ].filter((field) => record[field] !== undefined);
      if (indication_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of indicationCodeableConcept, indicationReference may be present for indication[x]",
          path: [indication_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.indicationReference,
        "indicationReference",
        ["http://hl7.org/fhir/StructureDefinition/MedicinalProductIndication"],
        ["MedicinalProductIndication"],
        ctx,
      );
    });

export const MedicinalProduct_SpecialDesignationSchema =
  MedicinalProduct_SpecialDesignationSchemaInternal as z.ZodType<MedicinalProduct_SpecialDesignation>;
