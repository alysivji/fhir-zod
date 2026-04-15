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
import type { SubscriptionTopic_ResourceTrigger_QueryCriteria } from "./SubscriptionTopic_ResourceTrigger_QueryCriteria";
import { SubscriptionTopic_ResourceTrigger_QueryCriteriaSchemaInternal } from "./SubscriptionTopic_ResourceTrigger_QueryCriteria";

/** A definition of a resource-based event that triggers a notification based on the SubscriptionTopic. The criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression. Multiple triggers are considered OR joined (e.g., a resource update matching ANY of the definitions will trigger a notification). */
export interface SubscriptionTopic_ResourceTrigger extends BackboneElement {
	/** The human readable description of this resource trigger for the SubscriptionTopic -  for example, "An Encounter enters the 'in-progress' state". */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The FHIRPath based rules that the server should use to determine when to trigger a notification for this topic. */
	fhirPathCriteria?: string;
	/** Extensions for fhirPathCriteria */
	_fhirPathCriteria?: Element;
	/** The FHIR query based rules that the server should use to determine when to trigger a notification for this subscription topic. */
	queryCriteria?: SubscriptionTopic_ResourceTrigger_QueryCriteria;
	/** URL of the Resource that is the type used in this resource trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see <a href="elementdefinition-definitions.html#ElementDefinition.type.code">ElementDefinition.type.code</a>. */
	resource: string;
	/** Extensions for resource */
	_resource?: Element;
	/** The FHIR RESTful interaction which can be used to trigger a notification for the SubscriptionTopic. Multiple values are considered OR joined (e.g., CREATE or UPDATE). If not present, all supported interactions are assumed. */
	supportedInteraction?: Array<
		| "batch"
		| "capabilities"
		| "create"
		| "delete"
		| "history"
		| "history-instance"
		| "history-system"
		| "history-type"
		| "operation"
		| "patch"
		| "read"
		| "search"
		| "search-compartment"
		| "search-system"
		| "search-type"
		| "transaction"
		| "update"
		| "vread"
		| null
	>;
	/** Extensions for supportedInteraction */
	_supportedInteraction?: Array<Element | null>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getSubscriptionTopic_ResourceTrigger_QueryCriteriaSchema =
	(): z.ZodType<SubscriptionTopic_ResourceTrigger_QueryCriteria> =>
		SubscriptionTopic_ResourceTrigger_QueryCriteriaSchemaInternal as z.ZodType<SubscriptionTopic_ResourceTrigger_QueryCriteria>;

/** @internal */
export const SubscriptionTopic_ResourceTriggerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		fhirPathCriteria: fhirString().optional(),
		_fhirPathCriteria: z.lazy(getElementSchema).optional(),
		queryCriteria: z
			.lazy(getSubscriptionTopic_ResourceTrigger_QueryCriteriaSchema)
			.optional(),
		resource: fhirUri(),
		_resource: z.lazy(getElementSchema).optional(),
		supportedInteraction: z
			.enum([
				"batch",
				"capabilities",
				"create",
				"delete",
				"history",
				"history-instance",
				"history-system",
				"history-type",
				"operation",
				"patch",
				"read",
				"search",
				"search-compartment",
				"search-system",
				"search-type",
				"transaction",
				"update",
				"vread",
			])
			.nullable()
			.array()
			.optional(),
		_supportedInteraction: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.supportedInteraction,
				record._supportedInteraction,
				"supportedInteraction",
				"_supportedInteraction",
				ctx,
			);
		});

export const SubscriptionTopic_ResourceTriggerSchema =
	SubscriptionTopic_ResourceTriggerSchemaInternal as z.ZodType<SubscriptionTopic_ResourceTrigger>;
