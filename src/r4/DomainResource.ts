// Profile: http://hl7.org/fhir/StructureDefinition/DomainResource
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:33:06.145Z

import * as z from "zod";
import type { Extension } from "./Extension";
import type { Narrative } from "./Narrative";
import type { Resource } from "./Resource";
import { ExtensionSchemaInternal } from "./Extension";
import { NarrativeSchemaInternal } from "./Narrative";
import { ResourceSchemaInternal } from "./Resource";

export interface DomainResource extends Resource {
	contained?: Array<Resource>;
	extension?: Array<Extension>;
	modifierExtension?: Array<Extension>;
	text?: Narrative;
}

const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getNarrativeSchema = (): z.ZodType<Narrative> => NarrativeSchemaInternal;
const getResourceSchema = (): z.ZodType<Resource> => ResourceSchemaInternal;

/** @internal */
export const DomainResourceSchemaInternal = ResourceSchemaInternal.extend({
	contained: z
		.lazy(getResourceSchema)
		.array()
		.optional()
		.describe(
			"These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.",
		),
	extension: z
		.lazy(getExtensionSchema)
		.array()
		.optional()
		.describe(
			"May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
		),
	modifierExtension: z
		.lazy(getExtensionSchema)
		.array()
		.optional()
		.describe(
			"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		),
	text: z
		.lazy(getNarrativeSchema)
		.optional()
		.describe(
			'A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.',
		),
}).strict();

export const DomainResourceSchema: z.ZodType<DomainResource> =
	DomainResourceSchemaInternal;
