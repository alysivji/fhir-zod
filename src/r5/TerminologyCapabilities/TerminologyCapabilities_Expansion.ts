// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { TerminologyCapabilities_Expansion_Parameter } from "./TerminologyCapabilities_Expansion_Parameter";
import { TerminologyCapabilities_Expansion_ParameterSchemaInternal } from "./TerminologyCapabilities_Expansion_Parameter";

/** Information about the [ValueSet/$expand](valueset-operation-expand.html) operation. */
export interface TerminologyCapabilities_Expansion extends BackboneElement {
	/** Whether the server can return nested value sets. */
	hierarchical?: boolean;
	/** Extensions for hierarchical */
	_hierarchical?: Element;
	/** True if requests for incomplete expansions are allowed. */
	incomplete?: boolean;
	/** Extensions for incomplete */
	_incomplete?: Element;
	/** Whether the server supports paging on expansion. */
	paging?: boolean;
	/** Extensions for paging */
	_paging?: Element;
	/** Supported expansion parameter. */
	parameter?: Array<TerminologyCapabilities_Expansion_Parameter>;
	/** Documentation about text searching works. */
	textFilter?: string;
	/** Extensions for textFilter */
	_textFilter?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getTerminologyCapabilities_Expansion_ParameterSchema =
	(): z.ZodType<TerminologyCapabilities_Expansion_Parameter> =>
		TerminologyCapabilities_Expansion_ParameterSchemaInternal as z.ZodType<TerminologyCapabilities_Expansion_Parameter>;

/** @internal */
export const TerminologyCapabilities_ExpansionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		hierarchical: z.boolean().optional(),
		_hierarchical: z.lazy(getElementSchema).optional(),
		incomplete: z.boolean().optional(),
		_incomplete: z.lazy(getElementSchema).optional(),
		paging: z.boolean().optional(),
		_paging: z.lazy(getElementSchema).optional(),
		parameter: z
			.lazy(getTerminologyCapabilities_Expansion_ParameterSchema)
			.array()
			.optional(),
		textFilter: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_textFilter: z.lazy(getElementSchema).optional(),
	}).strict();

export const TerminologyCapabilities_ExpansionSchema =
	TerminologyCapabilities_ExpansionSchemaInternal as z.ZodType<TerminologyCapabilities_Expansion>;
