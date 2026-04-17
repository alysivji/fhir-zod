// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductContraindication
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { MedicinalProductContraindication_OtherTherapy } from "./MedicinalProductContraindication_OtherTherapy";
import { MedicinalProductContraindication_OtherTherapySchemaInternal } from "./MedicinalProductContraindication_OtherTherapy";
import type { Population } from "./Population";
import { PopulationSchemaInternal } from "./Population";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
export interface MedicinalProductContraindication extends DomainResource {
  /** A comorbidity (concurrent condition) or coinfection. */
  comorbidity?: Array<CodeableConcept>;
  /** The disease, symptom or procedure for the contraindication. */
  disease?: CodeableConcept;
  /** The status of the disease or symptom for the contraindication. */
  diseaseStatus?: CodeableConcept;
  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication. */
  otherTherapy?: Array<MedicinalProductContraindication_OtherTherapy>;
  /** The population group to which this applies. */
  population?: Array<Population>;
  /** This is a MedicinalProductContraindication resource. */
  resourceType: "MedicinalProductContraindication";
  /** The medication for which this is an indication. */
  subject?: Array<Reference>;
  /** Information about the use of the medicinal product in relation to other therapies as part of the indication. */
  therapeuticIndication?: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMedicinalProductContraindication_OtherTherapySchema =
  (): z.ZodType<MedicinalProductContraindication_OtherTherapy> =>
    MedicinalProductContraindication_OtherTherapySchemaInternal as z.ZodType<MedicinalProductContraindication_OtherTherapy>;
const getPopulationSchema = (): z.ZodType<Population> =>
  PopulationSchemaInternal as z.ZodType<Population>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProductContraindicationSchemaInternal =
  DomainResourceSchemaInternal.extend({
    comorbidity: z.lazy(getCodeableConceptSchema).array().optional(),
    disease: z.lazy(getCodeableConceptSchema).optional(),
    diseaseStatus: z.lazy(getCodeableConceptSchema).optional(),
    otherTherapy: z
      .lazy(getMedicinalProductContraindication_OtherTherapySchema)
      .array()
      .optional(),
    population: z.lazy(getPopulationSchema).array().optional(),
    resourceType: z.literal("MedicinalProductContraindication"),
    subject: z.lazy(getReferenceSchema).array().optional(),
    therapeuticIndication: z.lazy(getReferenceSchema).array().optional(),
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
        ],
        ["Medication", "MedicinalProduct"],
        ctx,
      );
      validateReferenceTarget(
        record.therapeuticIndication,
        "therapeuticIndication",
        ["http://hl7.org/fhir/StructureDefinition/MedicinalProductIndication"],
        ["MedicinalProductIndication"],
        ctx,
      );
    });

export const MedicinalProductContraindicationSchema =
  MedicinalProductContraindicationSchemaInternal as z.ZodType<MedicinalProductContraindication>;
