// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ClaimResponse_Item_Detail_SubDetail } from "./ClaimResponse_Item_Detail_SubDetail";
import { ClaimResponse_Item_Detail_SubDetailSchemaInternal } from "./ClaimResponse_Item_Detail_SubDetail";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items. */
export interface ClaimResponse_Item_Detail extends BackboneElement {
	/** The adjudication results. */
	adjudication: Array<unknown>;
	/** A number to uniquely reference the claim detail entry. */
	detailSequence: number;
	/** Extensions for detailSequence */
	_detailSequence?: Element;
	/** The numbers associated with notes below which apply to the adjudication of this item. */
	noteNumber?: Array<number | null>;
	/** Extensions for noteNumber */
	_noteNumber?: Array<Element | null>;
	/** A sub-detail adjudication of a simple product or service. */
	subDetail?: Array<ClaimResponse_Item_Detail_SubDetail>;
}

const getClaimResponse_Item_Detail_SubDetailSchema =
	(): z.ZodType<ClaimResponse_Item_Detail_SubDetail> =>
		ClaimResponse_Item_Detail_SubDetailSchemaInternal as z.ZodType<ClaimResponse_Item_Detail_SubDetail>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ClaimResponse_Item_DetailSchemaInternal =
	BackboneElementSchemaInternal.extend({
		adjudication: z.custom<unknown>((value) => value !== undefined).array(),
		detailSequence: z.number().int().positive(),
		_detailSequence: z.lazy(getElementSchema).optional(),
		noteNumber: z.number().int().positive().nullable().array().optional(),
		_noteNumber: z.lazy(getElementSchema).nullable().array().optional(),
		subDetail: z
			.lazy(getClaimResponse_Item_Detail_SubDetailSchema)
			.array()
			.optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.noteNumber,
				record._noteNumber,
				"noteNumber",
				"_noteNumber",
				ctx,
			);
		});

export const ClaimResponse_Item_DetailSchema =
	ClaimResponse_Item_DetailSchemaInternal as z.ZodType<ClaimResponse_Item_Detail>;
