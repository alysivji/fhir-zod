// Profile: http://hl7.org/fhir/StructureDefinition/GenomicStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Devices used for the analysis (e.g., instruments, software), with settings and parameters. */
export interface GenomicStudy_Analysis_Device extends BackboneElement {
	/** Device used for the analysis. */
	device?: Reference;
	/** Specific function for the device used for the analysis. */
	function?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const GenomicStudy_Analysis_DeviceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		device: z.lazy(getReferenceSchema).optional(),
		function: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.device,
				"device",
				["http://hl7.org/fhir/StructureDefinition/Device"],
				["Device"],
				ctx,
			);
		});

export const GenomicStudy_Analysis_DeviceSchema =
	GenomicStudy_Analysis_DeviceSchemaInternal as z.ZodType<GenomicStudy_Analysis_Device>;
