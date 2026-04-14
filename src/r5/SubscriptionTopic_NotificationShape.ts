// Profile: http://hl7.org/fhir/StructureDefinition/SubscriptionTopic
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** List of properties to describe the shape (e.g., resources) included in notifications from this Subscription Topic. */
export interface SubscriptionTopic_NotificationShape extends BackboneElement {
	/** Search-style _include directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them. */
	include?: Array<string>;
	/** Extensions for include */
	_include?: Array<Element>;
	/** URL of the Resource that is the type used in this shape. This is the 'focus' resource of the topic (or one of them if there are more than one) and the root resource for this shape definition. It will be the same, a generality, or a specificity of SubscriptionTopic.resourceTrigger.resource or SubscriptionTopic.eventTrigger.resource when they are present. */
	resource: string;
	/** Extensions for resource */
	_resource?: Element;
	/** Search-style _revinclude directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them. */
	revInclude?: Array<string>;
	/** Extensions for revInclude */
	_revInclude?: Array<Element>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubscriptionTopic_NotificationShapeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		include: fhirString().array().optional(),
		_include: z.lazy(getElementSchema).array().optional(),
		resource: fhirUri(),
		_resource: z.lazy(getElementSchema).optional(),
		revInclude: fhirString().array().optional(),
		_revInclude: z.lazy(getElementSchema).array().optional(),
	}).strict();

export const SubscriptionTopic_NotificationShapeSchema =
	SubscriptionTopic_NotificationShapeSchemaInternal as z.ZodType<SubscriptionTopic_NotificationShape>;
