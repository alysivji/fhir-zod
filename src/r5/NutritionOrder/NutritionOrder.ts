// Source: https://hl7.org/fhir/R5/nutritionorder.html
// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCanonical,
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { NutritionOrder_EnteralFormula } from "./NutritionOrder_EnteralFormula";
import { NutritionOrder_EnteralFormulaSchemaInternal } from "./NutritionOrder_EnteralFormula";
import type { NutritionOrder_OralDiet } from "./NutritionOrder_OralDiet";
import { NutritionOrder_OralDietSchemaInternal } from "./NutritionOrder_OralDiet";
import type { NutritionOrder_Supplement } from "./NutritionOrder_Supplement";
import { NutritionOrder_SupplementSchemaInternal } from "./NutritionOrder_Supplement";

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrder extends DomainResource {
  /** A link to a record of allergies or intolerances  which should be included in the nutrition order. */
  allergyIntolerance?: Array<Reference>;
  /** A plan or request that is fulfilled in whole or in part by this nutrition order. */
  basedOn?: Array<Reference>;
  /** The date and time that this nutrition order was requested. */
  dateTime: string;
  /** Extensions for dateTime */
  _dateTime?: Element;
  /** An encounter that provides additional information about the healthcare context in which this request is made. */
  encounter?: Reference;
  /** Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity. */
  enteralFormula?: NutritionOrder_EnteralFormula;
  /** This modifier is used to convey Order-specific modifier about the type of oral food or oral fluids that should not be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings. */
  excludeFoodModifier?: Array<CodeableConcept>;
  /** This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings. */
  foodPreferenceModifier?: Array<CodeableConcept>;
  /** A shared identifier common to all nutrition orders that were authorized more or less simultaneously by a single author, representing the composite or group identifier. */
  groupIdentifier?: Identifier;
  /** Identifiers assigned to this order by the order sender or by the order receiver. */
  identifier?: Array<Identifier>;
  /** The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder. */
  instantiates?: Array<string | null>;
  /** Extensions for instantiates */
  _instantiates?: Array<Element | null>;
  /** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder. */
  instantiatesCanonical?: Array<string | null>;
  /** Extensions for instantiatesCanonical */
  _instantiatesCanonical?: Array<Element | null>;
  /** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder. */
  instantiatesUri?: Array<string | null>;
  /** Extensions for instantiatesUri */
  _instantiatesUri?: Array<Element | null>;
  /** Indicates the level of authority/intentionality associated with the NutrionOrder and where the request fits into the workflow chain. */
  intent:
    | "directive"
    | "filler-order"
    | "instance-order"
    | "option"
    | "order"
    | "original-order"
    | "plan"
    | "proposal"
    | "reflex-order";
  /** Extensions for intent */
  _intent?: Element;
  /** Comments made about the {{title}} by the requester, performer, subject or other participants. */
  note?: Array<Annotation>;
  /** Diet given orally in contrast to enteral (tube) feeding. */
  oralDiet?: NutritionOrder_OralDiet;
  /** The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings. */
  orderer?: Reference;
  /** This modifier is used to convey whether a food item is allowed to be brought in by the patient and/or family.  If set to true, indicates that the receiving system does not need to supply the food item. */
  outsideFoodAllowed?: boolean;
  /** Extensions for outsideFoodAllowed */
  _outsideFoodAllowed?: Element;
  /** The specified desired performer of the nutrition order. */
  performer?: Array<CodeableReference>;
  /** Indicates how quickly the Nutrition Order should be addressed with respect to other        requests. */
  priority?: "asap" | "routine" | "stat" | "urgent";
  /** Extensions for priority */
  _priority?: Element;
  /** This is a NutritionOrder resource. */
  resourceType: "NutritionOrder";
  /** The workflow status of the nutrition order/request. */
  status:
    | "active"
    | "completed"
    | "draft"
    | "entered-in-error"
    | "on-hold"
    | "revoked"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The person or set of individuals who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding. */
  subject: Reference;
  /** Oral nutritional products given in order to add further nutritional value to the patient's diet. */
  supplement?: Array<NutritionOrder_Supplement>;
  /** Information to support fulfilling (i.e. dispensing or administering) of the nutrition,        for example, patient height and weight). */
  supportingInformation?: Array<Reference>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getNutritionOrder_EnteralFormulaSchema =
  (): z.ZodType<NutritionOrder_EnteralFormula> =>
    NutritionOrder_EnteralFormulaSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula>;
const getNutritionOrder_OralDietSchema =
  (): z.ZodType<NutritionOrder_OralDiet> =>
    NutritionOrder_OralDietSchemaInternal as z.ZodType<NutritionOrder_OralDiet>;
const getNutritionOrder_SupplementSchema =
  (): z.ZodType<NutritionOrder_Supplement> =>
    NutritionOrder_SupplementSchemaInternal as z.ZodType<NutritionOrder_Supplement>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const NutritionOrderSchemaInternal = z
  .object({
    allergyIntolerance: z.lazy(getReferenceSchema).array().optional(),
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    dateTime: fhirDateTime(),
    _dateTime: z.lazy(getElementSchema).optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    enteralFormula: z.lazy(getNutritionOrder_EnteralFormulaSchema).optional(),
    excludeFoodModifier: z.lazy(getCodeableConceptSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    foodPreferenceModifier: z.lazy(getCodeableConceptSchema).array().optional(),
    groupIdentifier: z.lazy(getIdentifierSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    instantiates: fhirUri().nullable().array().optional(),
    _instantiates: z.lazy(getElementSchema).nullable().array().optional(),
    instantiatesCanonical: fhirCanonical().nullable().array().optional(),
    _instantiatesCanonical: z
      .lazy(getElementSchema)
      .nullable()
      .array()
      .optional(),
    instantiatesUri: fhirUri().nullable().array().optional(),
    _instantiatesUri: z.lazy(getElementSchema).nullable().array().optional(),
    intent: z.enum([
      "directive",
      "filler-order",
      "instance-order",
      "option",
      "order",
      "original-order",
      "plan",
      "proposal",
      "reflex-order",
    ]),
    _intent: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    oralDiet: z.lazy(getNutritionOrder_OralDietSchema).optional(),
    orderer: z.lazy(getReferenceSchema).optional(),
    outsideFoodAllowed: z.boolean().optional(),
    _outsideFoodAllowed: z.lazy(getElementSchema).optional(),
    performer: z.lazy(getCodeableReferenceSchema).array().optional(),
    priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
    _priority: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("NutritionOrder"),
    status: z.enum([
      "active",
      "completed",
      "draft",
      "entered-in-error",
      "on-hold",
      "revoked",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema),
    supplement: z.lazy(getNutritionOrder_SupplementSchema).array().optional(),
    supportingInformation: z.lazy(getReferenceSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validatePrimitiveArrayPair(
      record.instantiates,
      record._instantiates,
      "instantiates",
      "_instantiates",
      ctx,
    );
    validatePrimitiveArrayPair(
      record.instantiatesCanonical,
      record._instantiatesCanonical,
      "instantiatesCanonical",
      "_instantiatesCanonical",
      ctx,
    );
    validatePrimitiveArrayPair(
      record.instantiatesUri,
      record._instantiatesUri,
      "instantiatesUri",
      "_instantiatesUri",
      ctx,
    );
    validateReferenceTarget(
      record.allergyIntolerance,
      "allergyIntolerance",
      ["http://hl7.org/fhir/StructureDefinition/AllergyIntolerance"],
      ["AllergyIntolerance"],
      ctx,
    );
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      [
        "http://hl7.org/fhir/StructureDefinition/CarePlan",
        "http://hl7.org/fhir/StructureDefinition/NutritionOrder",
        "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
      ],
      ["CarePlan", "NutritionOrder", "ServiceRequest"],
      ctx,
    );
    validateReferenceTarget(
      record.encounter,
      "encounter",
      ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      ["Encounter"],
      ctx,
    );
    validateReferenceTarget(
      record.orderer,
      "orderer",
      [
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Practitioner", "PractitionerRole"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Patient",
      ],
      ["Group", "Patient"],
      ctx,
    );
    validateReferenceTarget(
      record.supportingInformation,
      "supportingInformation",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const NutritionOrderSchema =
  NutritionOrderSchemaInternal as z.ZodType<NutritionOrder>;
