// Profile: http://hl7.org/fhir/StructureDefinition/Coverage
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan. */
export interface Coverage_Grouping extends BackboneElement {
	/** Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage such as a level of deductables or co-payment. */
	class?: string;
	/** Extensions for class */
	_class?: Element;
	/** A short description for the class. */
	classDisplay?: string;
	/** Extensions for classDisplay */
	_classDisplay?: Element;
	/** Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify an employer group. May also be referred to as a Policy or Group ID. */
	group?: string;
	/** Extensions for group */
	_group?: Element;
	/** A short description for the group. */
	groupDisplay?: string;
	/** Extensions for groupDisplay */
	_groupDisplay?: Element;
	/** Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a collection of benefits provided to employees. May be referred to as a Section or Division ID. */
	plan?: string;
	/** Extensions for plan */
	_plan?: Element;
	/** A short description for the plan. */
	planDisplay?: string;
	/** Extensions for planDisplay */
	_planDisplay?: Element;
	/** Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a subclass of coverage such as a sub-level of deductables or co-payment. */
	subClass?: string;
	/** Extensions for subClass */
	_subClass?: Element;
	/** A short description for the subclass. */
	subClassDisplay?: string;
	/** Extensions for subClassDisplay */
	_subClassDisplay?: Element;
	/** Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a subset of an employer group. */
	subGroup?: string;
	/** Extensions for subGroup */
	_subGroup?: Element;
	/** A short description for the subgroup. */
	subGroupDisplay?: string;
	/** Extensions for subGroupDisplay */
	_subGroupDisplay?: Element;
	/** Identifies a sub-style or sub-collective of coverage issued by the underwriter, for example may be used to identify a subset of a collection of benefits provided to employees. */
	subPlan?: string;
	/** Extensions for subPlan */
	_subPlan?: Element;
	/** A short description for the subplan. */
	subPlanDisplay?: string;
	/** Extensions for subPlanDisplay */
	_subPlanDisplay?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Coverage_GroupingSchemaInternal =
	BackboneElementSchemaInternal.extend({
		class: fhirString().optional(),
		_class: z.lazy(getElementSchema).optional(),
		classDisplay: fhirString().optional(),
		_classDisplay: z.lazy(getElementSchema).optional(),
		group: fhirString().optional(),
		_group: z.lazy(getElementSchema).optional(),
		groupDisplay: fhirString().optional(),
		_groupDisplay: z.lazy(getElementSchema).optional(),
		plan: fhirString().optional(),
		_plan: z.lazy(getElementSchema).optional(),
		planDisplay: fhirString().optional(),
		_planDisplay: z.lazy(getElementSchema).optional(),
		subClass: fhirString().optional(),
		_subClass: z.lazy(getElementSchema).optional(),
		subClassDisplay: fhirString().optional(),
		_subClassDisplay: z.lazy(getElementSchema).optional(),
		subGroup: fhirString().optional(),
		_subGroup: z.lazy(getElementSchema).optional(),
		subGroupDisplay: fhirString().optional(),
		_subGroupDisplay: z.lazy(getElementSchema).optional(),
		subPlan: fhirString().optional(),
		_subPlan: z.lazy(getElementSchema).optional(),
		subPlanDisplay: fhirString().optional(),
		_subPlanDisplay: z.lazy(getElementSchema).optional(),
	}).strict();

export const Coverage_GroupingSchema =
	Coverage_GroupingSchemaInternal as z.ZodType<Coverage_Grouping>;
