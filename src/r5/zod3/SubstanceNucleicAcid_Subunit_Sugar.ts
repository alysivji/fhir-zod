// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** 5.3.6.8.1 Sugar ID (Mandatory). */
export interface SubstanceNucleicAcid_Subunit_Sugar extends BackboneElement {
	/** The Substance ID of the sugar or sugar-like component that make up the nucleotide. */
	identifier?: Identifier;
	/** The name of the sugar or sugar-like component that make up the nucleotide. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above. */
	residueSite?: string;
	/** Extensions for residueSite */
	_residueSite?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const SubstanceNucleicAcid_Subunit_SugarSchemaInternal =
	BackboneElementSchemaInternal.extend({
		identifier: z.lazy(getIdentifierSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		residueSite: fhirString().optional(),
		_residueSite: z.lazy(getElementSchema).optional(),
	}).strict();

export const SubstanceNucleicAcid_Subunit_SugarSchema =
	SubstanceNucleicAcid_Subunit_SugarSchemaInternal as z.ZodType<SubstanceNucleicAcid_Subunit_Sugar>;
