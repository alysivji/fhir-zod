// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ImplementationGuide_Definition_Grouping } from "./ImplementationGuide_Definition_Grouping";
import { ImplementationGuide_Definition_GroupingSchemaInternal } from "./ImplementationGuide_Definition_Grouping";
import type { ImplementationGuide_Definition_Page } from "./ImplementationGuide_Definition_Page";
import { ImplementationGuide_Definition_PageSchemaInternal } from "./ImplementationGuide_Definition_Page";
import type { ImplementationGuide_Definition_Parameter } from "./ImplementationGuide_Definition_Parameter";
import { ImplementationGuide_Definition_ParameterSchemaInternal } from "./ImplementationGuide_Definition_Parameter";
import type { ImplementationGuide_Definition_Resource } from "./ImplementationGuide_Definition_Resource";
import { ImplementationGuide_Definition_ResourceSchemaInternal } from "./ImplementationGuide_Definition_Resource";
import type { ImplementationGuide_Definition_Template } from "./ImplementationGuide_Definition_Template";
import { ImplementationGuide_Definition_TemplateSchemaInternal } from "./ImplementationGuide_Definition_Template";

/** The information needed by an IG publisher tool to publish the whole implementation guide. */
export interface ImplementationGuide_Definition extends BackboneElement {
	/** A logical group of resources. Logical groups can be used when building pages. */
	grouping?: Array<ImplementationGuide_Definition_Grouping>;
	/** A page / section in the implementation guide. The root page is the implementation guide home page. */
	page?: ImplementationGuide_Definition_Page;
	/** A set of parameters that defines how the implementation guide is built. The parameters are defined by the relevant tools that build the implementation guides. */
	parameter?: Array<ImplementationGuide_Definition_Parameter>;
	/** A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource. */
	resource?: Array<ImplementationGuide_Definition_Resource>;
	/** A template for building resources. */
	template?: Array<ImplementationGuide_Definition_Template>;
}

const getImplementationGuide_Definition_GroupingSchema =
	(): z.ZodType<ImplementationGuide_Definition_Grouping> =>
		ImplementationGuide_Definition_GroupingSchemaInternal as z.ZodType<ImplementationGuide_Definition_Grouping>;
const getImplementationGuide_Definition_PageSchema =
	(): z.ZodType<ImplementationGuide_Definition_Page> =>
		ImplementationGuide_Definition_PageSchemaInternal as z.ZodType<ImplementationGuide_Definition_Page>;
const getImplementationGuide_Definition_ParameterSchema =
	(): z.ZodType<ImplementationGuide_Definition_Parameter> =>
		ImplementationGuide_Definition_ParameterSchemaInternal as z.ZodType<ImplementationGuide_Definition_Parameter>;
const getImplementationGuide_Definition_ResourceSchema =
	(): z.ZodType<ImplementationGuide_Definition_Resource> =>
		ImplementationGuide_Definition_ResourceSchemaInternal as z.ZodType<ImplementationGuide_Definition_Resource>;
const getImplementationGuide_Definition_TemplateSchema =
	(): z.ZodType<ImplementationGuide_Definition_Template> =>
		ImplementationGuide_Definition_TemplateSchemaInternal as z.ZodType<ImplementationGuide_Definition_Template>;

/** @internal */
export const ImplementationGuide_DefinitionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		grouping: z
			.lazy(getImplementationGuide_Definition_GroupingSchema)
			.array()
			.optional(),
		page: z.lazy(getImplementationGuide_Definition_PageSchema).optional(),
		parameter: z
			.lazy(getImplementationGuide_Definition_ParameterSchema)
			.array()
			.optional(),
		resource: z
			.lazy(getImplementationGuide_Definition_ResourceSchema)
			.array()
			.optional(),
		template: z
			.lazy(getImplementationGuide_Definition_TemplateSchema)
			.array()
			.optional(),
	}).strict();

export const ImplementationGuide_DefinitionSchema =
	ImplementationGuide_DefinitionSchemaInternal as z.ZodType<ImplementationGuide_Definition>;
