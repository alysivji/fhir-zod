// Source: https://hl7.org/fhir/R5/substancepolymer.html
// Profile: http://hl7.org/fhir/StructureDefinition/SubstancePolymer
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
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
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getSubstancePolymer_MonomerSetSchema =
  (): z.ZodType<SubstancePolymer_MonomerSet> =>
    SubstancePolymer_MonomerSetSchemaInternal as z.ZodType<SubstancePolymer_MonomerSet>;
const getSubstancePolymer_RepeatSchema =
  (): z.ZodType<SubstancePolymer_Repeat> =>
    SubstancePolymer_RepeatSchemaInternal as z.ZodType<SubstancePolymer_Repeat>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const SubstancePolymerSchemaInternal = z
  .object({
    class: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    copolymerConnectivity: z.lazy(getCodeableConceptSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    geometry: z.lazy(getCodeableConceptSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modification: fhirString().optional(),
    _modification: z.lazy(getElementSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    monomerSet: z.lazy(getSubstancePolymer_MonomerSetSchema).array().optional(),
    repeat: z.lazy(getSubstancePolymer_RepeatSchema).array().optional(),
    resourceType: z.literal("SubstancePolymer"),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict();

export const SubstancePolymerSchema =
  SubstancePolymerSchemaInternal as z.ZodType<SubstancePolymer>;
