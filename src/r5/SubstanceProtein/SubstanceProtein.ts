// Source: https://hl7.org/fhir/R5/substanceprotein.html
// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceProtein
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
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
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { SubstanceProtein_Subunit } from "./SubstanceProtein_Subunit";
import { SubstanceProtein_SubunitSchemaInternal } from "./SubstanceProtein_Subunit";

/** A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators. */
export interface SubstanceProtein extends DomainResource {
  /** The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions. */
  disulfideLinkage?: Array<string | null>;
  /** Extensions for disulfideLinkage */
  _disulfideLinkage?: Array<Element | null>;
  /** Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable. */
  numberOfSubunits?: number;
  /** Extensions for numberOfSubunits */
  _numberOfSubunits?: Element;
  /** This is a SubstanceProtein resource. */
  resourceType: "SubstanceProtein";
  /** The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence. */
  sequenceType?: CodeableConcept;
  /** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times. */
  subunit?: Array<SubstanceProtein_Subunit>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getSubstanceProtein_SubunitSchema =
  (): z.ZodType<SubstanceProtein_Subunit> =>
    SubstanceProtein_SubunitSchemaInternal as z.ZodType<SubstanceProtein_Subunit>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const SubstanceProteinSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    disulfideLinkage: fhirString().nullable().array().optional(),
    _disulfideLinkage: z.lazy(getElementSchema).nullable().array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    numberOfSubunits: z.number().int().optional(),
    _numberOfSubunits: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("SubstanceProtein"),
    sequenceType: z.lazy(getCodeableConceptSchema).optional(),
    subunit: z.lazy(getSubstanceProtein_SubunitSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validatePrimitiveArrayPair(
      record.disulfideLinkage,
      record._disulfideLinkage,
      "disulfideLinkage",
      "_disulfideLinkage",
      ctx,
    );
  });

export const SubstanceProteinSchema =
  SubstanceProteinSchemaInternal as z.ZodType<SubstanceProtein>;
