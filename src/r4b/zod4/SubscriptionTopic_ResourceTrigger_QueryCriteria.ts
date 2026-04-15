// Profile: http://hl7.org/fhir/StructureDefinition/SubscriptionTopic
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The FHIR query based rules that the server should use to determine when to trigger a notification for this subscription topic. */
export interface SubscriptionTopic_ResourceTrigger_QueryCriteria
	extends BackboneElement {
	/** The FHIR query based rules are applied to the current resource state (e.g., state after an update). */
	current?: string;
	/** Extensions for current */
	_current?: Element;
	/** The FHIR query based rules are applied to the previous resource state (e.g., state before an update). */
	previous?: string;
	/** Extensions for previous */
	_previous?: Element;
	/** If set to true, both current and previous criteria must evaluate true to  trigger a notification for this topic.  Otherwise a notification for this topic will be triggered if either one evaluates to true. */
	requireBoth?: boolean;
	/** Extensions for requireBoth */
	_requireBoth?: Element;
	/** For "create" interactions, should the "previous" criteria count as an automatic pass or an automatic fail. */
	resultForCreate?: "test-fails" | "test-passes";
	/** Extensions for resultForCreate */
	_resultForCreate?: Element;
	/** For "delete" interactions, should the "current" criteria count as an automatic pass or an automatic fail. */
	resultForDelete?: "test-fails" | "test-passes";
	/** Extensions for resultForDelete */
	_resultForDelete?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubscriptionTopic_ResourceTrigger_QueryCriteriaSchemaInternal =
	BackboneElementSchemaInternal.extend({
		current: fhirString().optional(),
		_current: z.lazy(getElementSchema).optional(),
		previous: fhirString().optional(),
		_previous: z.lazy(getElementSchema).optional(),
		requireBoth: z.boolean().optional(),
		_requireBoth: z.lazy(getElementSchema).optional(),
		resultForCreate: z.enum(["test-fails", "test-passes"]).optional(),
		_resultForCreate: z.lazy(getElementSchema).optional(),
		resultForDelete: z.enum(["test-fails", "test-passes"]).optional(),
		_resultForDelete: z.lazy(getElementSchema).optional(),
	}).strict();

export const SubscriptionTopic_ResourceTrigger_QueryCriteriaSchema =
	SubscriptionTopic_ResourceTrigger_QueryCriteriaSchemaInternal as z.ZodType<SubscriptionTopic_ResourceTrigger_QueryCriteria>;
