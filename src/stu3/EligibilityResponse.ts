// Profile: http://hl7.org/fhir/StructureDefinition/EligibilityResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { EligibilityResponse_Error } from "./EligibilityResponse_Error";
import { EligibilityResponse_ErrorSchemaInternal } from "./EligibilityResponse_Error";
import type { EligibilityResponse_Insurance } from "./EligibilityResponse_Insurance";
import { EligibilityResponse_InsuranceSchemaInternal } from "./EligibilityResponse_Insurance";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for EligibilityResponse Resource */
export interface EligibilityResponse extends DomainResource {
  /** The date when the enclosed suite of services were performed or completed. */
  created?: string;
  /** Extensions for created */
  _created?: Element;
  /** A description of the status of the adjudication. */
  disposition?: string;
  /** Extensions for disposition */
  _disposition?: Element;
  /** Mutually exclusive with Services Provided (Item). */
  error?: Array<EligibilityResponse_Error>;
  /** The form to be used for printing the content. */
  form?: CodeableConcept;
  /** The Response business identifier. */
  identifier?: Array<Identifier>;
  /** Flag indicating if the coverage provided is inforce currently  if no service date(s) specified or for the whole duration of the service dates. */
  inforce?: boolean;
  /** Extensions for inforce */
  _inforce?: Element;
  /** The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer. */
  insurance?: Array<EligibilityResponse_Insurance>;
  /** The Insurer who produced this adjudicated response. */
  insurer?: Reference;
  /** Transaction status: error, complete. */
  outcome?: CodeableConcept;
  /** Original request resource reference. */
  request?: Reference;
  /** The organization which is responsible for the services rendered to the patient. */
  requestOrganization?: Reference;
  /** The practitioner who is responsible for the services rendered to the patient. */
  requestProvider?: Reference;
  /** This is a EligibilityResponse resource. */
  resourceType: "EligibilityResponse";
  /** The status of the resource instance. */
  status?: "active" | "cancelled" | "draft" | "entered-in-error";
  /** Extensions for status */
  _status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getEligibilityResponse_ErrorSchema =
  (): z.ZodType<EligibilityResponse_Error> =>
    EligibilityResponse_ErrorSchemaInternal as z.ZodType<EligibilityResponse_Error>;
const getEligibilityResponse_InsuranceSchema =
  (): z.ZodType<EligibilityResponse_Insurance> =>
    EligibilityResponse_InsuranceSchemaInternal as z.ZodType<EligibilityResponse_Insurance>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EligibilityResponseSchemaInternal =
  DomainResourceSchemaInternal.extend({
    created: fhirDateTime().optional(),
    _created: z.lazy(getElementSchema).optional(),
    disposition: fhirString().optional(),
    _disposition: z.lazy(getElementSchema).optional(),
    error: z.lazy(getEligibilityResponse_ErrorSchema).array().optional(),
    form: z.lazy(getCodeableConceptSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    inforce: z.boolean().optional(),
    _inforce: z.lazy(getElementSchema).optional(),
    insurance: z
      .lazy(getEligibilityResponse_InsuranceSchema)
      .array()
      .optional(),
    insurer: z.lazy(getReferenceSchema).optional(),
    outcome: z.lazy(getCodeableConceptSchema).optional(),
    request: z.lazy(getReferenceSchema).optional(),
    requestOrganization: z.lazy(getReferenceSchema).optional(),
    requestProvider: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("EligibilityResponse"),
    status: z
      .enum(["active", "cancelled", "draft", "entered-in-error"])
      .optional(),
    _status: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.insurer,
        "insurer",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
      validateReferenceTarget(
        record.request,
        "request",
        ["http://hl7.org/fhir/StructureDefinition/EligibilityRequest"],
        ["EligibilityRequest"],
        ctx,
      );
      validateReferenceTarget(
        record.requestOrganization,
        "requestOrganization",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
      validateReferenceTarget(
        record.requestProvider,
        "requestProvider",
        ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
        ["Practitioner"],
        ctx,
      );
    });

export const EligibilityResponseSchema =
  EligibilityResponseSchemaInternal as z.ZodType<EligibilityResponse>;
