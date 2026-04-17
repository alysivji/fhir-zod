// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** Organization affiliated with the entity. */
export interface Citation_CitedArtifact_Contributorship_Entry_AffiliationInfo
  extends BackboneElement {
  /** Display for the organization. */
  affiliation?: string;
  /** Extensions for affiliation */
  _affiliation?: Element;
  /** Identifier for the organization. */
  identifier?: Array<Identifier>;
  /** Role within the organization, such as professional title. */
  role?: string;
  /** Extensions for role */
  _role?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const Citation_CitedArtifact_Contributorship_Entry_AffiliationInfoSchemaInternal =
  BackboneElementSchemaInternal.extend({
    affiliation: fhirString().optional(),
    _affiliation: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    role: fhirString().optional(),
    _role: z.lazy(getElementSchema).optional(),
  }).strict();

export const Citation_CitedArtifact_Contributorship_Entry_AffiliationInfoSchema =
  Citation_CitedArtifact_Contributorship_Entry_AffiliationInfoSchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship_Entry_AffiliationInfo>;
