// Profile: http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirDateTime } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** How this product was collected. */
export interface BiologicallyDerivedProduct_Collection extends BackboneElement {
	/** Time of product collection. */
	collectedDateTime?: string;
	/** Extensions for collectedDateTime */
	_collectedDateTime?: Element;
	/** Time of product collection. */
	collectedPeriod?: Period;
	/** Healthcare professional who is performing the collection. */
	collector?: Reference;
	/** The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product. */
	source?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const BiologicallyDerivedProduct_CollectionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		collectedDateTime: fhirDateTime().optional(),
		_collectedDateTime: z.lazy(getElementSchema).optional(),
		collectedPeriod: z.lazy(getPeriodSchema).optional(),
		collector: z.lazy(getReferenceSchema).optional(),
		source: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const collected_x_Present = [
				"collectedDateTime",
				"collectedPeriod",
			].filter((field) => record[field] !== undefined);
			if (collected_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of collectedDateTime, collectedPeriod may be present for collected[x]",
					path: [collected_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.collector,
				"collector",
				[
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Practitioner", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.source,
				"source",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
				],
				["Organization", "Patient"],
				ctx,
			);
		});

export const BiologicallyDerivedProduct_CollectionSchema =
	BiologicallyDerivedProduct_CollectionSchemaInternal as z.ZodType<BiologicallyDerivedProduct_Collection>;
