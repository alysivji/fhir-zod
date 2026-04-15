// Profile: http://hl7.org/fhir/StructureDefinition/Medication
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Medication_Package_Batch } from "./Medication_Package_Batch";
import { Medication_Package_BatchSchemaInternal } from "./Medication_Package_Batch";
import type { Medication_Package_Content } from "./Medication_Package_Content";
import { Medication_Package_ContentSchemaInternal } from "./Medication_Package_Content";

/** Information that only applies to packages (not products). */
export interface Medication_Package extends BackboneElement {
	/** Information about a group of medication produced or packaged from one production run. */
	batch?: Array<Medication_Package_Batch>;
	/** The kind of container that this package comes as. */
	container?: CodeableConcept;
	/** A set of components that go to make up the described item. */
	content?: Array<Medication_Package_Content>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMedication_Package_BatchSchema =
	(): z.ZodType<Medication_Package_Batch> =>
		Medication_Package_BatchSchemaInternal as z.ZodType<Medication_Package_Batch>;
const getMedication_Package_ContentSchema =
	(): z.ZodType<Medication_Package_Content> =>
		Medication_Package_ContentSchemaInternal as z.ZodType<Medication_Package_Content>;

/** @internal */
export const Medication_PackageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		batch: z.lazy(getMedication_Package_BatchSchema).array().optional(),
		container: z.lazy(getCodeableConceptSchema).optional(),
		content: z.lazy(getMedication_Package_ContentSchema).array().optional(),
	}).strict();

export const Medication_PackageSchema =
	Medication_PackageSchemaInternal as z.ZodType<Medication_Package>;
