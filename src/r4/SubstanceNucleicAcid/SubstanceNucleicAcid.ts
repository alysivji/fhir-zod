// Source: https://hl7.org/fhir/R4/substancenucleicacid.html
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

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
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { SubstanceNucleicAcid_Subunit } from "./SubstanceNucleicAcid_Subunit";
import { SubstanceNucleicAcid_SubunitSchemaInternal } from "./SubstanceNucleicAcid_Subunit";

/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export interface SubstanceNucleicAcid extends DomainResource {
  /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue”. */
  areaOfHybridisation?: string;
  /** Extensions for areaOfHybridisation */
  _areaOfHybridisation?: Element;
  /** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit. */
  numberOfSubunits?: number;
  /** Extensions for numberOfSubunits */
  _numberOfSubunits?: Element;
  /** (TBC). */
  oligoNucleotideType?: CodeableConcept;
  /** This is a SubstanceNucleicAcid resource. */
  resourceType: "SubstanceNucleicAcid";
  /** The type of the sequence shall be specified based on a controlled vocabulary. */
  sequenceType?: CodeableConcept;
  /** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times. */
  subunit?: Array<SubstanceNucleicAcid_Subunit>;
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
const getSubstanceNucleicAcid_SubunitSchema =
  (): z.ZodType<SubstanceNucleicAcid_Subunit> =>
    SubstanceNucleicAcid_SubunitSchemaInternal as z.ZodType<SubstanceNucleicAcid_Subunit>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const SubstanceNucleicAcidSchemaInternal = z
  .object({
    areaOfHybridisation: fhirString().optional(),
    _areaOfHybridisation: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
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
    oligoNucleotideType: z.lazy(getCodeableConceptSchema).optional(),
    resourceType: z.literal("SubstanceNucleicAcid"),
    sequenceType: z.lazy(getCodeableConceptSchema).optional(),
    subunit: z.lazy(getSubstanceNucleicAcid_SubunitSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict();

export const SubstanceNucleicAcidSchema =
  SubstanceNucleicAcidSchemaInternal as z.ZodType<SubstanceNucleicAcid>;
