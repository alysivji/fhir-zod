// Profile: http://hl7.org/fhir/StructureDefinition/Subscription
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The filter properties to be applied to narrow the subscription topic stream.  When multiple filters are applied, evaluates to true if all the conditions applicable to that resource are met; otherwise it returns false (i.e., logical AND). */
export interface Subscription_FilterBy extends BackboneElement {
	/** Comparator applied to this filter parameter. */
	comparator?: "ap" | "eb" | "eq" | "ge" | "gt" | "le" | "lt" | "ne" | "sa";
	/** Extensions for comparator */
	_comparator?: Element;
	/** The filter as defined in the `SubscriptionTopic.canFilterBy.filterParameter` element. */
	filterParameter: string;
	/** Extensions for filterParameter */
	_filterParameter?: Element;
	/** Modifier applied to this filter parameter. */
	modifier?:
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
		| "type";
	/** Extensions for modifier */
	_modifier?: Element;
	/** A resource listed in the `SubscriptionTopic` this `Subscription` references (`SubscriptionTopic.canFilterBy.resource`). This element can be used to differentiate filters for topics that include more than one resource type. */
	resourceType?: string;
	/** Extensions for resourceType */
	_resourceType?: Element;
	/** The literal value or resource path as is legal in search - for example, `Patient/123` or `le1950`. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Subscription_FilterBySchemaInternal =
	BackboneElementSchemaInternal.extend({
		comparator: z
			.enum(["ap", "eb", "eq", "ge", "gt", "le", "lt", "ne", "sa"])
			.optional(),
		_comparator: z.lazy(getElementSchema).optional(),
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
			.optional(),
		_modifier: z.lazy(getElementSchema).optional(),
		resourceType: fhirUri().optional(),
		_resourceType: z.lazy(getElementSchema).optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const Subscription_FilterBySchema =
	Subscription_FilterBySchemaInternal as z.ZodType<Subscription_FilterBy>;
