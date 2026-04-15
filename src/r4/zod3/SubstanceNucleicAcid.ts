// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
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
const getSubstanceNucleicAcid_SubunitSchema =
	(): z.ZodType<SubstanceNucleicAcid_Subunit> =>
		SubstanceNucleicAcid_SubunitSchemaInternal as z.ZodType<SubstanceNucleicAcid_Subunit>;

/** @internal */
export const SubstanceNucleicAcidSchemaInternal =
	DomainResourceSchemaInternal.extend({
		areaOfHybridisation: fhirString().optional(),
		_areaOfHybridisation: z.lazy(getElementSchema).optional(),
		numberOfSubunits: z.number().int().optional(),
		_numberOfSubunits: z.lazy(getElementSchema).optional(),
		oligoNucleotideType: z.lazy(getCodeableConceptSchema).optional(),
		resourceType: z.literal("SubstanceNucleicAcid"),
		sequenceType: z.lazy(getCodeableConceptSchema).optional(),
		subunit: z.lazy(getSubstanceNucleicAcid_SubunitSchema).array().optional(),
	}).strict();

export const SubstanceNucleicAcidSchema =
	SubstanceNucleicAcidSchemaInternal as z.ZodType<SubstanceNucleicAcid>;
