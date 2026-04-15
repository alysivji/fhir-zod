// Profile: http://hl7.org/fhir/StructureDefinition/AdverseEvent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Describes the entity that is suspected to have caused the adverse event. */
export interface AdverseEvent_SuspectEntity extends BackboneElement {
	/** causality1 | causality2. */
	causality?: "causality1" | "causality2";
	/** Extensions for causality */
	_causality?: Element;
	/** assess1 | assess2. */
	causalityAssessment?: CodeableConcept;
	/** AdverseEvent.suspectEntity.causalityAuthor. */
	causalityAuthor?: Reference;
	/** method1 | method2. */
	causalityMethod?: CodeableConcept;
	/** AdverseEvent.suspectEntity.causalityProductRelatedness. */
	causalityProductRelatedness?: string;
	/** Extensions for causalityProductRelatedness */
	_causalityProductRelatedness?: Element;
	/** result1 | result2. */
	causalityResult?: CodeableConcept;
	/** Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device. */
	instance: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AdverseEvent_SuspectEntitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		causality: z.enum(["causality1", "causality2"]).optional(),
		_causality: z.lazy(getElementSchema).optional(),
		causalityAssessment: z.lazy(getCodeableConceptSchema).optional(),
		causalityAuthor: z.lazy(getReferenceSchema).optional(),
		causalityMethod: z.lazy(getCodeableConceptSchema).optional(),
		causalityProductRelatedness: fhirString().optional(),
		_causalityProductRelatedness: z.lazy(getElementSchema).optional(),
		causalityResult: z.lazy(getCodeableConceptSchema).optional(),
		instance: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.causalityAuthor,
				"causalityAuthor",
				[
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Practitioner", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.instance,
				"instance",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Medication",
					"http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
					"http://hl7.org/fhir/StructureDefinition/MedicationStatement",
					"http://hl7.org/fhir/StructureDefinition/Substance",
				],
				[
					"Device",
					"Medication",
					"MedicationAdministration",
					"MedicationStatement",
					"Substance",
				],
				ctx,
			);
		});

export const AdverseEvent_SuspectEntitySchema =
	AdverseEvent_SuspectEntitySchemaInternal as z.ZodType<AdverseEvent_SuspectEntity>;
