// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ClaimResponse_Item_Adjudication } from "./ClaimResponse_Item_Adjudication";
import { ClaimResponse_Item_AdjudicationSchemaInternal } from "./ClaimResponse_Item_Adjudication";
import type { ClaimResponse_Item_Detail } from "./ClaimResponse_Item_Detail";
import { ClaimResponse_Item_DetailSchemaInternal } from "./ClaimResponse_Item_Detail";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The first tier service adjudications for submitted services. */
export interface ClaimResponse_Item extends BackboneElement {
	/** The adjudication results. */
	adjudication?: Array<ClaimResponse_Item_Adjudication>;
	/** The second tier service adjudications for submitted services. */
	detail?: Array<ClaimResponse_Item_Detail>;
	/** A list of note references to the notes provided below. */
	noteNumber?: Array<number | null>;
	/** Extensions for noteNumber */
	_noteNumber?: Array<Element | null>;
	/** A service line number. */
	sequenceLinkId: number;
	/** Extensions for sequenceLinkId */
	_sequenceLinkId?: Element;
}

const getClaimResponse_Item_AdjudicationSchema =
	(): z.ZodType<ClaimResponse_Item_Adjudication> =>
		ClaimResponse_Item_AdjudicationSchemaInternal as z.ZodType<ClaimResponse_Item_Adjudication>;
const getClaimResponse_Item_DetailSchema =
	(): z.ZodType<ClaimResponse_Item_Detail> =>
		ClaimResponse_Item_DetailSchemaInternal as z.ZodType<ClaimResponse_Item_Detail>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ClaimResponse_ItemSchemaInternal =
	BackboneElementSchemaInternal.extend({
		adjudication: z
			.lazy(getClaimResponse_Item_AdjudicationSchema)
			.array()
			.optional(),
		detail: z.lazy(getClaimResponse_Item_DetailSchema).array().optional(),
		noteNumber: z.number().int().positive().nullable().array().optional(),
		_noteNumber: z.lazy(getElementSchema).nullable().array().optional(),
		sequenceLinkId: z.number().int().positive(),
		_sequenceLinkId: z.lazy(getElementSchema).optional(),
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

export const ClaimResponse_ItemSchema =
	ClaimResponse_ItemSchemaInternal as z.ZodType<ClaimResponse_Item>;
