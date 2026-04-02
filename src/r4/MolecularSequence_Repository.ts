// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq. */
export interface MolecularSequence_Repository extends BackboneElement {
	/** Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository. */
	datasetId?: string;
	/** Extensions for datasetId */
	_datasetId?: Element;
	/** URI of an external repository which contains further details about the genetics data. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Id of the read in this external repository. */
	readsetId?: string;
	/** Extensions for readsetId */
	_readsetId?: Element;
	/** Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource. */
	type: "directlink" | "login" | "oauth" | "openapi" | "other";
	/** Extensions for type */
	_type?: Element;
	/** URI of an external repository which contains further details about the genetics data. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository. */
	variantsetId?: string;
	/** Extensions for variantsetId */
	_variantsetId?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MolecularSequence_RepositorySchemaInternal =
	BackboneElementSchemaInternal.extend({
		datasetId: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_datasetId: z.lazy(getElementSchema).optional(),
		name: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_name: z.lazy(getElementSchema).optional(),
		readsetId: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_readsetId: z.lazy(getElementSchema).optional(),
		type: z.enum(["directlink", "login", "oauth", "openapi", "other"]),
		_type: z.lazy(getElementSchema).optional(),
		url: z.string().regex(/\S*/).optional(),
		_url: z.lazy(getElementSchema).optional(),
		variantsetId: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_variantsetId: z.lazy(getElementSchema).optional(),
	}).strict();

export const MolecularSequence_RepositorySchema =
	MolecularSequence_RepositorySchemaInternal as z.ZodType<MolecularSequence_Repository>;
