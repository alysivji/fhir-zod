// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { SubstanceReferenceInformation_Classification } from "./SubstanceReferenceInformation_Classification";
import { SubstanceReferenceInformation_ClassificationSchemaInternal } from "./SubstanceReferenceInformation_Classification";
import type { SubstanceReferenceInformation_Gene } from "./SubstanceReferenceInformation_Gene";
import { SubstanceReferenceInformation_GeneSchemaInternal } from "./SubstanceReferenceInformation_Gene";
import type { SubstanceReferenceInformation_GeneElement } from "./SubstanceReferenceInformation_GeneElement";
import { SubstanceReferenceInformation_GeneElementSchemaInternal } from "./SubstanceReferenceInformation_GeneElement";
import type { SubstanceReferenceInformation_Target } from "./SubstanceReferenceInformation_Target";
import { SubstanceReferenceInformation_TargetSchemaInternal } from "./SubstanceReferenceInformation_Target";

/** Todo. */
export interface SubstanceReferenceInformation extends DomainResource {
	/** Todo. */
	classification?: Array<SubstanceReferenceInformation_Classification>;
	/** Todo. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** Todo. */
	gene?: Array<SubstanceReferenceInformation_Gene>;
	/** Todo. */
	geneElement?: Array<SubstanceReferenceInformation_GeneElement>;
	/** This is a SubstanceReferenceInformation resource. */
	resourceType: "SubstanceReferenceInformation";
	/** Todo. */
	target?: Array<SubstanceReferenceInformation_Target>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getSubstanceReferenceInformation_ClassificationSchema =
	(): z.ZodType<SubstanceReferenceInformation_Classification> =>
		SubstanceReferenceInformation_ClassificationSchemaInternal as z.ZodType<SubstanceReferenceInformation_Classification>;
const getSubstanceReferenceInformation_GeneSchema =
	(): z.ZodType<SubstanceReferenceInformation_Gene> =>
		SubstanceReferenceInformation_GeneSchemaInternal as z.ZodType<SubstanceReferenceInformation_Gene>;
const getSubstanceReferenceInformation_GeneElementSchema =
	(): z.ZodType<SubstanceReferenceInformation_GeneElement> =>
		SubstanceReferenceInformation_GeneElementSchemaInternal as z.ZodType<SubstanceReferenceInformation_GeneElement>;
const getSubstanceReferenceInformation_TargetSchema =
	(): z.ZodType<SubstanceReferenceInformation_Target> =>
		SubstanceReferenceInformation_TargetSchemaInternal as z.ZodType<SubstanceReferenceInformation_Target>;

/** @internal */
export const SubstanceReferenceInformationSchemaInternal =
	DomainResourceSchemaInternal.extend({
		classification: z
			.lazy(getSubstanceReferenceInformation_ClassificationSchema)
			.array()
			.optional(),
		comment: fhirString().optional(),
		_comment: z.lazy(getElementSchema).optional(),
		gene: z
			.lazy(getSubstanceReferenceInformation_GeneSchema)
			.array()
			.optional(),
		geneElement: z
			.lazy(getSubstanceReferenceInformation_GeneElementSchema)
			.array()
			.optional(),
		resourceType: z.literal("SubstanceReferenceInformation"),
		target: z
			.lazy(getSubstanceReferenceInformation_TargetSchema)
			.array()
			.optional(),
	}).strict();

export const SubstanceReferenceInformationSchema =
	SubstanceReferenceInformationSchemaInternal as z.ZodType<SubstanceReferenceInformation>;
