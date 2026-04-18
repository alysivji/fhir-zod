// Profile: http://hl7.org/fhir/StructureDefinition/SubstancePolymer
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A graphical structure for this SRU. */
export interface SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation
	extends BackboneElement {
	/** An attached file with the structural representation. */
	attachment?: Attachment;
	/** The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF. */
	format?: CodeableConcept;
	/** The structural representation as text string in a standard format e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF. */
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
export const SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		attachment: z.lazy(getAttachmentSchema).optional(),
		format: z.lazy(getCodeableConceptSchema).optional(),
		representation: fhirString().optional(),
		_representation: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchema =
	SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchemaInternal as z.ZodType<SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation>;
