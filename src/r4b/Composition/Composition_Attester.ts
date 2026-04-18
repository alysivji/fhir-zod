// Profile: http://hl7.org/fhir/StructureDefinition/Composition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A participant who has attested to the accuracy of the composition/document. */
export interface Composition_Attester extends BackboneElement {
  /** The type of attestation the authenticator offers. */
  mode: "legal" | "official" | "personal" | "professional";
  /** Extensions for mode */
  _mode?: Element;
  /** Who attested the composition in the specified way. */
  party?: Reference;
  /** When the composition was attested by the party. */
  time?: string;
  /** Extensions for time */
  _time?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Composition_AttesterSchemaInternal =
  BackboneElementSchemaInternal.extend({
    mode: z.enum(["legal", "official", "personal", "professional"]),
    _mode: z.lazy(getElementSchema).optional(),
    party: z.lazy(getReferenceSchema).optional(),
    time: fhirDateTime().optional(),
    _time: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.party,
        "party",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
    });

export const Composition_AttesterSchema =
  Composition_AttesterSchemaInternal as z.ZodType<Composition_Attester>;
