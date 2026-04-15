// Profile: http://hl7.org/fhir/StructureDefinition/Group
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Group_Characteristic } from "./Group_Characteristic";
import { Group_CharacteristicSchemaInternal } from "./Group_Characteristic";
import type { Group_Member } from "./Group_Member";
import { Group_MemberSchemaInternal } from "./Group_Member";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** Base StructureDefinition for Group Resource */
export interface Group extends DomainResource {
	/** Indicates whether the record for the group is available for use or is merely being retained for historical purposes. */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals. */
	actual: boolean;
	/** Extensions for actual */
	_actual?: Element;
	/** Identifies the traits shared by members of the group. */
	characteristic?: Array<Group_Characteristic>;
	/** Provides a specific type of resource the group includes; e.g. "cow", "syringe", etc. */
	code?: CodeableConcept;
	/** A unique business identifier for this group. */
	identifier?: Array<Identifier>;
	/** Identifies the resource instances that are members of the group. */
	member?: Array<Group_Member>;
	/** A label assigned to the group for human identification and communication. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** A count of the number of resource instances that are part of the group. */
	quantity?: number;
	/** Extensions for quantity */
	_quantity?: Element;
	/** This is a Group resource. */
	resourceType: "Group";
	/** Identifies the broad classification of the kind of resources the group includes. */
	type:
		| "animal"
		| "device"
		| "medication"
		| "person"
		| "practitioner"
		| "substance";
	/** Extensions for type */
	_type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getGroup_CharacteristicSchema = (): z.ZodType<Group_Characteristic> =>
	Group_CharacteristicSchemaInternal as z.ZodType<Group_Characteristic>;
const getGroup_MemberSchema = (): z.ZodType<Group_Member> =>
	Group_MemberSchemaInternal as z.ZodType<Group_Member>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const GroupSchemaInternal = DomainResourceSchemaInternal.extend({
	active: z.boolean().optional(),
	_active: z.lazy(getElementSchema).optional(),
	actual: z.boolean(),
	_actual: z.lazy(getElementSchema).optional(),
	characteristic: z.lazy(getGroup_CharacteristicSchema).array().optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	member: z.lazy(getGroup_MemberSchema).array().optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	quantity: z.number().int().nonnegative().optional(),
	_quantity: z.lazy(getElementSchema).optional(),
	resourceType: z.literal("Group"),
	type: z.enum([
		"animal",
		"device",
		"medication",
		"person",
		"practitioner",
		"substance",
	]),
	_type: z.lazy(getElementSchema).optional(),
}).strict();

export const GroupSchema = GroupSchemaInternal as z.ZodType<Group>;
