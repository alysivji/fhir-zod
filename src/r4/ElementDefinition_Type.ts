// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const ElementDefinition_Type = z
	.object({
		_aggregation: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for aggregation"),
		_code: z.lazy(getElementSchema).optional().describe("Extensions for code"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_profile: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for profile"),
		_targetProfile: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for targetProfile"),
		_versioning: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for versioning"),
		aggregation: z
			.enum(["bundled", "contained", "referenced"])
			.array()
			.optional()
			.describe(
				"If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.",
			),
		code: z
			.string()
			.regex(/\S*/)
			.describe(
				'URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.',
			),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		profile: z
			.string()
			.regex(/\S*/)
			.array()
			.optional()
			.describe(
				"Identifies a profile structure or implementation Guide that applies to the datatype this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the type SHALL conform to at least one profile defined in the implementation guide.",
			),
		targetProfile: z
			.string()
			.regex(/\S*/)
			.array()
			.optional()
			.describe(
				'Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.',
			),
		versioning: z
			.enum(["either", "independent", "specific"])
			.optional()
			.describe(
				"Whether this reference needs to be version specific or version independent, or whether either can be used.",
			),
	})
	.strict();

export type ElementDefinition_Type = z.output<typeof ElementDefinition_Type>;
