// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The third tier service adjudications for submitted services. */
export interface ClaimResponse_Item_Detail_SubDetail extends BackboneElement {
	/** The adjudications results. */
	adjudication?: Array<unknown>;
	/** A list of note references to the notes provided below. */
	noteNumber?: Array<number | null>;
	/** Extensions for noteNumber */
	_noteNumber?: Array<Element | null>;
	/** A service line number. */
	sequenceLinkId: number;
	/** Extensions for sequenceLinkId */
	_sequenceLinkId?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ClaimResponse_Item_Detail_SubDetailSchemaInternal =
	BackboneElementSchemaInternal.extend({
		adjudication: z.unknown().array().optional(),
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

export const ClaimResponse_Item_Detail_SubDetailSchema =
	ClaimResponse_Item_Detail_SubDetailSchemaInternal as z.ZodType<ClaimResponse_Item_Detail_SubDetail>;
