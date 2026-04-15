// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSpecification
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Molecular structural representation. */
export interface SubstanceSpecification_Structure_Representation
	extends BackboneElement {
	/** An attached file with the structural representation. */
	attachment?: Attachment;
	/** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX. */
	representation?: string;
	/** Extensions for representation */
	_representation?: Element;
	/** The type of structure (e.g. Full, Partial, Representative). */
	type?: CodeableConcept;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubstanceSpecification_Structure_RepresentationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		attachment: z.lazy(getAttachmentSchema).optional(),
		representation: fhirString().optional(),
		_representation: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstanceSpecification_Structure_RepresentationSchema =
	SubstanceSpecification_Structure_RepresentationSchemaInternal as z.ZodType<SubstanceSpecification_Structure_Representation>;
