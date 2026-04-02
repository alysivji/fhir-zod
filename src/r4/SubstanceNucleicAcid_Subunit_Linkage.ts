// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** The linkages between sugar residues will also be captured. */
export interface SubstanceNucleicAcid_Subunit_Linkage extends BackboneElement {
	/** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified. */
	connectivity?: string;
	/** Extensions for connectivity */
	_connectivity?: Element;
	/** Each linkage will be registered as a fragment and have an ID. */
	identifier?: Identifier;
	/** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Residues shall be captured as described in 5.3.6.8.3. */
	residueSite?: string;
	/** Extensions for residueSite */
	_residueSite?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const SubstanceNucleicAcid_Subunit_LinkageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		connectivity: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_connectivity: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		name: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_name: z.lazy(getElementSchema).optional(),
		residueSite: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_residueSite: z.lazy(getElementSchema).optional(),
	}).strict();

export const SubstanceNucleicAcid_Subunit_LinkageSchema =
	SubstanceNucleicAcid_Subunit_LinkageSchemaInternal as z.ZodType<SubstanceNucleicAcid_Subunit_Linkage>;
