// Profile: http://hl7.org/fhir/StructureDefinition/DocumentReference
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DocumentReference_Context_Related } from "./DocumentReference_Context_Related";
import { DocumentReference_Context_RelatedSchemaInternal } from "./DocumentReference_Context_Related";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The clinical context in which the document was prepared. */
export interface DocumentReference_Context extends BackboneElement {
	/** Describes the clinical encounter or type of care that the document content is associated with. */
	encounter?: Reference;
	/** This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act. */
	event?: Array<CodeableConcept>;
	/** The kind of facility where the patient was seen. */
	facilityType?: CodeableConcept;
	/** The time period over which the service that is described by the document was provided. */
	period?: Period;
	/** This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty. */
	practiceSetting?: CodeableConcept;
	/** Related identifiers or resources associated with the DocumentReference. */
	related?: Array<DocumentReference_Context_Related>;
	/** The Patient Information as known when the document was published. May be a reference to a version specific, or contained. */
	sourcePatientInfo?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDocumentReference_Context_RelatedSchema =
	(): z.ZodType<DocumentReference_Context_Related> =>
		DocumentReference_Context_RelatedSchemaInternal as z.ZodType<DocumentReference_Context_Related>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DocumentReference_ContextSchemaInternal =
	BackboneElementSchemaInternal.extend({
		encounter: z.lazy(getReferenceSchema).optional(),
		event: z.lazy(getCodeableConceptSchema).array().optional(),
		facilityType: z.lazy(getCodeableConceptSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		practiceSetting: z.lazy(getCodeableConceptSchema).optional(),
		related: z
			.lazy(getDocumentReference_Context_RelatedSchema)
			.array()
			.optional(),
		sourcePatientInfo: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.encounter,
				"encounter",
				["http://hl7.org/fhir/StructureDefinition/Encounter"],
				["Encounter"],
				ctx,
			);
			validateReferenceTarget(
				record.sourcePatientInfo,
				"sourcePatientInfo",
				["http://hl7.org/fhir/StructureDefinition/Patient"],
				["Patient"],
				ctx,
			);
		});

export const DocumentReference_ContextSchema =
	DocumentReference_ContextSchemaInternal as z.ZodType<DocumentReference_Context>;
