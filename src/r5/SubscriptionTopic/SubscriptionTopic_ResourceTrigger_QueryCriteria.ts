// Profile: http://hl7.org/fhir/StructureDefinition/SubscriptionTopic
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

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
	/** If set to `true`, both the `current` and `previous` query criteria must evaluate `true` to trigger a notification for this topic.  If set to `false` or not present, a notification for this topic will be triggered if either the `current` or `previous` tests evaluate to `true`. */
	requireBoth?: boolean;
	/** Extensions for requireBoth */
	_requireBoth?: Element;
	/** For `create` interactions, should the `previous` criteria count as an automatic pass or an automatic fail. If not present, the testing behavior during `create` interactions is unspecified (server discretion). */
	resultForCreate?: "test-fails" | "test-passes";
	/** Extensions for resultForCreate */
	_resultForCreate?: Element;
	/** For 'delete' interactions, should the 'current' query criteria count as an automatic pass or an automatic fail. If not present, the testing behavior during `delete` interactions is unspecified (server discretion). */
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
