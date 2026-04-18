// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSpecification
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Ratio } from "../Ratio";
import { RatioSchemaInternal } from "../Ratio";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A link between this substance and another, with details of the relationship. */
export interface SubstanceSpecification_Relationship extends BackboneElement {
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other. */
  amountQuantity?: Quantity;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other. */
  amountRange?: Range;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other. */
  amountRatio?: Ratio;
  /** For use when the numeric. */
  amountRatioLowLimit?: Ratio;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other. */
  amountString?: string;
  /** Extensions for amountString */
  _amountString?: Element;
  /** An operator for the amount, for example "average", "approximately", "less than". */
  amountType?: CodeableConcept;
  /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships. */
  isDefining?: boolean;
  /** Extensions for isDefining */
  _isDefining?: Element;
  /** For example "salt to parent", "active moiety", "starting material". */
  relationship?: CodeableConcept;
  /** Supporting literature. */
  source?: Array<Reference>;
  /** A pointer to another substance, as a resource or just a representational code. */
  substanceCodeableConcept?: CodeableConcept;
  /** A pointer to another substance, as a resource or just a representational code. */
  substanceReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
  RatioSchemaInternal as z.ZodType<Ratio>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SubstanceSpecification_RelationshipSchemaInternal =
  BackboneElementSchemaInternal.extend({
    amountQuantity: z.lazy(getQuantitySchema).optional(),
    amountRange: z.lazy(getRangeSchema).optional(),
    amountRatio: z.lazy(getRatioSchema).optional(),
    amountRatioLowLimit: z.lazy(getRatioSchema).optional(),
    amountString: fhirString().optional(),
    _amountString: z.lazy(getElementSchema).optional(),
    amountType: z.lazy(getCodeableConceptSchema).optional(),
    isDefining: z.boolean().optional(),
    _isDefining: z.lazy(getElementSchema).optional(),
    relationship: z.lazy(getCodeableConceptSchema).optional(),
    source: z.lazy(getReferenceSchema).array().optional(),
    substanceCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    substanceReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const amount_x_Present = [
        "amountQuantity",
        "amountRange",
        "amountRatio",
        "amountString",
      ].filter((field) => record[field] !== undefined);
      if (amount_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of amountQuantity, amountRange, amountRatio, amountString may be present for amount[x]",
          path: [amount_x_Present[0]],
        });
      }
      const substance_x_Present = [
        "substanceCodeableConcept",
        "substanceReference",
      ].filter((field) => record[field] !== undefined);
      if (substance_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of substanceCodeableConcept, substanceReference may be present for substance[x]",
          path: [substance_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.source,
        "source",
        ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
        ["DocumentReference"],
        ctx,
      );
      validateReferenceTarget(
        record.substanceReference,
        "substanceReference",
        ["http://hl7.org/fhir/StructureDefinition/SubstanceSpecification"],
        ["SubstanceSpecification"],
        ctx,
      );
    });

export const SubstanceSpecification_RelationshipSchema =
  SubstanceSpecification_RelationshipSchemaInternal as z.ZodType<SubstanceSpecification_Relationship>;
