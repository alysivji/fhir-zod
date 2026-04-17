// Profile: http://hl7.org/fhir/StructureDefinition/SubstancePolymer
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { SubstancePolymer_MonomerSet } from "./SubstancePolymer_MonomerSet";
import { SubstancePolymer_MonomerSetSchemaInternal } from "./SubstancePolymer_MonomerSet";
import type { SubstancePolymer_Repeat } from "./SubstancePolymer_Repeat";
import { SubstancePolymer_RepeatSchemaInternal } from "./SubstancePolymer_Repeat";

/** Properties of a substance specific to it being a polymer. */
export interface SubstancePolymer extends DomainResource {
  /** Overall type of the polymer. */
  class?: CodeableConcept;
  /** Descrtibes the copolymer sequence type (polymer connectivity). */
  copolymerConnectivity?: Array<CodeableConcept>;
  /** Polymer geometry, e.g. linear, branched, cross-linked, network or dendritic. */
  geometry?: CodeableConcept;
  /** A business idenfier for this polymer, but typically this is handled by a SubstanceDefinition identifier. */
  identifier?: Identifier;
  /** Todo - this is intended to connect to a repeating full modification structure, also used by Protein and Nucleic Acid . String is just a placeholder. */
  modification?: string;
  /** Extensions for modification */
  _modification?: Element;
  /** Todo. */
  monomerSet?: Array<SubstancePolymer_MonomerSet>;
  /** Specifies and quantifies the repeated units and their configuration. */
  repeat?: Array<SubstancePolymer_Repeat>;
  /** This is a SubstancePolymer resource. */
  resourceType: "SubstancePolymer";
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getSubstancePolymer_MonomerSetSchema =
  (): z.ZodType<SubstancePolymer_MonomerSet> =>
    SubstancePolymer_MonomerSetSchemaInternal as z.ZodType<SubstancePolymer_MonomerSet>;
const getSubstancePolymer_RepeatSchema =
  (): z.ZodType<SubstancePolymer_Repeat> =>
    SubstancePolymer_RepeatSchemaInternal as z.ZodType<SubstancePolymer_Repeat>;

/** @internal */
export const SubstancePolymerSchemaInternal =
  DomainResourceSchemaInternal.extend({
    class: z.lazy(getCodeableConceptSchema).optional(),
    copolymerConnectivity: z.lazy(getCodeableConceptSchema).array().optional(),
    geometry: z.lazy(getCodeableConceptSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    modification: fhirString().optional(),
    _modification: z.lazy(getElementSchema).optional(),
    monomerSet: z.lazy(getSubstancePolymer_MonomerSetSchema).array().optional(),
    repeat: z.lazy(getSubstancePolymer_RepeatSchema).array().optional(),
    resourceType: z.literal("SubstancePolymer"),
  }).strict();

export const SubstancePolymerSchema =
  SubstancePolymerSchemaInternal as z.ZodType<SubstancePolymer>;
