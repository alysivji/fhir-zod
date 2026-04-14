// Profile: http://hl7.org/fhir/StructureDefinition/InventoryItem
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Organization(s) responsible for the product. */
export interface InventoryItem_ResponsibleOrganization extends BackboneElement {
	/** An organization that has an association with the item, e.g. manufacturer, distributor, responsible, etc. */
	organization: Reference;
	/** The role of the organization e.g. manufacturer, distributor, etc. */
	role: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const InventoryItem_ResponsibleOrganizationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		organization: z.lazy(getReferenceSchema),
		role: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.organization,
				"organization",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const InventoryItem_ResponsibleOrganizationSchema =
	InventoryItem_ResponsibleOrganizationSchemaInternal as z.ZodType<InventoryItem_ResponsibleOrganization>;
