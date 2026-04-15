// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { MolecularSequence_StructureVariant_Inner } from "./MolecularSequence_StructureVariant_Inner";
import { MolecularSequence_StructureVariant_InnerSchemaInternal } from "./MolecularSequence_StructureVariant_Inner";
import type { MolecularSequence_StructureVariant_Outer } from "./MolecularSequence_StructureVariant_Outer";
import { MolecularSequence_StructureVariant_OuterSchemaInternal } from "./MolecularSequence_StructureVariant_Outer";

/** Information about chromosome structure variation. */
export interface MolecularSequence_StructureVariant extends BackboneElement {
	/** Used to indicate if the outer and inner start-end values have the same meaning. */
	exact?: boolean;
	/** Extensions for exact */
	_exact?: Element;
	/** Structural variant inner. */
	inner?: MolecularSequence_StructureVariant_Inner;
	/** Length of the variant chromosome. */
	length?: number;
	/** Extensions for length */
	_length?: Element;
	/** Structural variant outer. */
	outer?: MolecularSequence_StructureVariant_Outer;
	/** Information about chromosome structure variation DNA change type. */
	variantType?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMolecularSequence_StructureVariant_InnerSchema =
	(): z.ZodType<MolecularSequence_StructureVariant_Inner> =>
		MolecularSequence_StructureVariant_InnerSchemaInternal as z.ZodType<MolecularSequence_StructureVariant_Inner>;
const getMolecularSequence_StructureVariant_OuterSchema =
	(): z.ZodType<MolecularSequence_StructureVariant_Outer> =>
		MolecularSequence_StructureVariant_OuterSchemaInternal as z.ZodType<MolecularSequence_StructureVariant_Outer>;

/** @internal */
export const MolecularSequence_StructureVariantSchemaInternal =
	BackboneElementSchemaInternal.extend({
		exact: z.boolean().optional(),
		_exact: z.lazy(getElementSchema).optional(),
		inner: z.lazy(getMolecularSequence_StructureVariant_InnerSchema).optional(),
		length: z.number().int().optional(),
		_length: z.lazy(getElementSchema).optional(),
		outer: z.lazy(getMolecularSequence_StructureVariant_OuterSchema).optional(),
		variantType: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const MolecularSequence_StructureVariantSchema =
	MolecularSequence_StructureVariantSchemaInternal as z.ZodType<MolecularSequence_StructureVariant>;
