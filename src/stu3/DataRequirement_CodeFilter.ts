// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirCode, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. */
export interface DataRequirement_CodeFilter extends Element {
	/** The code-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept. */
	path: string;
	/** Extensions for path */
	_path?: Element;
	/** The codes for the code filter. Only one of valueSet, valueCode, valueCoding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. */
	valueCode?: Array<string | null>;
	/** Extensions for valueCode */
	_valueCode?: Array<Element | null>;
	/** The CodeableConcepts for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified CodeableConcepts. */
	valueCodeableConcept?: Array<CodeableConcept>;
	/** The Codings for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified Codings. */
	valueCoding?: Array<Coding>;
	/** The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset. */
	valueSetReference?: Reference;
	/** The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset. */
	valueSetString?: string;
	/** Extensions for valueSetString */
	_valueSetString?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DataRequirement_CodeFilterSchemaInternal =
	ElementSchemaInternal.extend({
		path: fhirString(),
		_path: z.lazy(getElementSchema).optional(),
		valueCode: fhirCode().nullable().array().optional(),
		_valueCode: z.lazy(getElementSchema).nullable().array().optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).array().optional(),
		valueCoding: z.lazy(getCodingSchema).array().optional(),
		valueSetReference: z.lazy(getReferenceSchema).optional(),
		valueSetString: fhirString().optional(),
		_valueSetString: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const valueSet_x_Present = ["valueSetReference", "valueSetString"].filter(
				(field) => record[field] !== undefined,
			);
			if (valueSet_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueSetReference, valueSetString may be present for valueSet[x]",
					path: [valueSet_x_Present[0]],
				});
			}
			validatePrimitiveArrayPair(
				record.valueCode,
				record._valueCode,
				"valueCode",
				"_valueCode",
				ctx,
			);
			validateReferenceTarget(
				record.valueSetReference,
				"valueSetReference",
				["http://hl7.org/fhir/StructureDefinition/ValueSet"],
				["ValueSet"],
				ctx,
			);
		});

export const DataRequirement_CodeFilterSchema =
	DataRequirement_CodeFilterSchemaInternal as z.ZodType<DataRequirement_CodeFilter>;
