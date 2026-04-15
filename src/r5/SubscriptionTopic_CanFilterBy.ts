// Profile: http://hl7.org/fhir/StructureDefinition/SubscriptionTopic
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T00:02:33.197Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** List of properties by which Subscriptions on the SubscriptionTopic can be filtered. May be defined Search Parameters (e.g., Encounter.patient) or parameters defined within this SubscriptionTopic context (e.g., hub.event). */
export interface SubscriptionTopic_CanFilterBy extends BackboneElement {
	/** Comparators allowed for the filter parameter. */
	comparator?: Array<
		"ap" | "eb" | "eq" | "ge" | "gt" | "le" | "lt" | "ne" | "sa" | null
	>;
	/** Extensions for comparator */
	_comparator?: Array<Element | null>;
	/** Description of how this filtering parameter is intended to be used. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Either the canonical URL to a search parameter (like "http://hl7.org/fhir/SearchParameter/encounter-patient") or the officially-defined URI for a shared filter concept (like "http://example.org/concepts/shared-common-event"). */
	filterDefinition?: string;
	/** Extensions for filterDefinition */
	_filterDefinition?: Element;
	/** Either the canonical URL to a search parameter (like "http://hl7.org/fhir/SearchParameter/encounter-patient") or topic-defined parameter (like "hub.event") which is a label for the filter. */
	filterParameter: string;
	/** Extensions for filterParameter */
	_filterParameter?: Element;
	/** Modifiers allowed for the filter parameter. */
	modifier?: Array<
		| "above"
		| "below"
		| "code-text"
		| "contains"
		| "exact"
		| "identifier"
		| "in"
		| "iterate"
		| "missing"
		| "not"
		| "not-in"
		| "of-type"
		| "text"
		| "text-advanced"
		| "type"
		| null
	>;
	/** Extensions for modifier */
	_modifier?: Array<Element | null>;
	/** URL of the Resource that is the type used in this filter. This is the "focus" of the topic (or one of them if there are more than one). It will be the same, a generality, or a specificity of SubscriptionTopic.resourceTrigger.resource or SubscriptionTopic.eventTrigger.resource when they are present. */
	resource?: string;
	/** Extensions for resource */
	_resource?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubscriptionTopic_CanFilterBySchemaInternal =
	BackboneElementSchemaInternal.extend({
		comparator: z
			.enum(["ap", "eb", "eq", "ge", "gt", "le", "lt", "ne", "sa"])
			.nullable()
			.array()
			.optional(),
		_comparator: z.lazy(getElementSchema).nullable().array().optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		filterDefinition: fhirUri().optional(),
		_filterDefinition: z.lazy(getElementSchema).optional(),
		filterParameter: fhirString(),
		_filterParameter: z.lazy(getElementSchema).optional(),
		modifier: z
			.enum([
				"above",
				"below",
				"code-text",
				"contains",
				"exact",
				"identifier",
				"in",
				"iterate",
				"missing",
				"not",
				"not-in",
				"of-type",
				"text",
				"text-advanced",
				"type",
			])
			.nullable()
			.array()
			.optional(),
		_modifier: z.lazy(getElementSchema).nullable().array().optional(),
		resource: fhirUri().optional(),
		_resource: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.comparator,
				record._comparator,
				"comparator",
				"_comparator",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.modifier,
				record._modifier,
				"modifier",
				"_modifier",
				ctx,
			);
		});

export const SubscriptionTopic_CanFilterBySchema =
	SubscriptionTopic_CanFilterBySchemaInternal as z.ZodType<SubscriptionTopic_CanFilterBy>;
