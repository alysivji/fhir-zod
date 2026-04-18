// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductInteraction
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:03:58.798Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { MedicinalProductInteraction_Interactant } from "./MedicinalProductInteraction_Interactant";
import { MedicinalProductInteraction_InteractantSchemaInternal } from "./MedicinalProductInteraction_Interactant";

/** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
export interface MedicinalProductInteraction extends DomainResource {
  /** The interaction described. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The effect of the interaction, for example "reduced gastric absorption of primary medication". */
  effect?: CodeableConcept;
  /** The incidence of the interaction, e.g. theoretical, observed. */
  incidence?: CodeableConcept;
  /** The specific medication, food or laboratory test that interacts. */
  interactant?: Array<MedicinalProductInteraction_Interactant>;
  /** Actions for managing the interaction. */
  management?: CodeableConcept;
  /** This is a MedicinalProductInteraction resource. */
  resourceType: "MedicinalProductInteraction";
  /** The medication for which this is a described interaction. */
  subject?: Array<Reference>;
  /** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMedicinalProductInteraction_InteractantSchema =
  (): z.ZodType<MedicinalProductInteraction_Interactant> =>
    MedicinalProductInteraction_InteractantSchemaInternal as z.ZodType<MedicinalProductInteraction_Interactant>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicinalProductInteractionSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    effect: z.lazy(getCodeableConceptSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    incidence: z.lazy(getCodeableConceptSchema).optional(),
    interactant: z
      .lazy(getMedicinalProductInteraction_InteractantSchema)
      .array()
      .optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    management: z.lazy(getCodeableConceptSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    resourceType: z.literal("MedicinalProductInteraction"),
    subject: z.lazy(getReferenceSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Medication",
        "http://hl7.org/fhir/StructureDefinition/MedicinalProduct",
        "http://hl7.org/fhir/StructureDefinition/Substance",
      ],
      ["Medication", "MedicinalProduct", "Substance"],
      ctx,
    );
  });

export const MedicinalProductInteractionSchema =
  MedicinalProductInteractionSchemaInternal as z.ZodType<MedicinalProductInteraction>;
