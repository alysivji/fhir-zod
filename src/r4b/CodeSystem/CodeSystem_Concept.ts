// Profile: http://hl7.org/fhir/StructureDefinition/CodeSystem
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { fhirCode, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { CodeSystem_Concept_Designation } from "./CodeSystem_Concept_Designation";
import { CodeSystem_Concept_DesignationSchemaInternal } from "./CodeSystem_Concept_Designation";
import type { CodeSystem_Concept_Property } from "./CodeSystem_Concept_Property";
import { CodeSystem_Concept_PropertySchemaInternal } from "./CodeSystem_Concept_Property";

/** Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meanings of the hierarchical relationships are. */
export interface CodeSystem_Concept extends BackboneElement {
	/** A code - a text symbol - that uniquely identifies the concept within the code system. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning. */
	concept?: Array<unknown>;
	/** The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept. */
	definition?: string;
	/** Extensions for definition */
	_definition?: Element;
	/** Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc. */
	designation?: Array<CodeSystem_Concept_Designation>;
	/** A human readable string that is the recommended default way to present this concept to a user. */
	display?: string;
	/** Extensions for display */
	_display?: Element;
	/** A property value for this concept. */
	property?: Array<CodeSystem_Concept_Property>;
}

const getCodeSystem_Concept_DesignationSchema =
	(): z.ZodType<CodeSystem_Concept_Designation> =>
		CodeSystem_Concept_DesignationSchemaInternal as z.ZodType<CodeSystem_Concept_Designation>;
const getCodeSystem_Concept_PropertySchema =
	(): z.ZodType<CodeSystem_Concept_Property> =>
		CodeSystem_Concept_PropertySchemaInternal as z.ZodType<CodeSystem_Concept_Property>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CodeSystem_ConceptSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode(),
		_code: z.lazy(getElementSchema).optional(),
		concept: z.unknown().array().optional(),
		definition: fhirString().optional(),
		_definition: z.lazy(getElementSchema).optional(),
		designation: z
			.lazy(getCodeSystem_Concept_DesignationSchema)
			.array()
			.optional(),
		display: fhirString().optional(),
		_display: z.lazy(getElementSchema).optional(),
		property: z.lazy(getCodeSystem_Concept_PropertySchema).array().optional(),
	}).strict();

export const CodeSystem_ConceptSchema =
	CodeSystem_ConceptSchemaInternal as z.ZodType<CodeSystem_Concept>;
