// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** Batch numbering. */
export interface MedicinalProductPackaged_BatchIdentifier
	extends BackboneElement {
	/** A number appearing on the immediate packaging (and not the outer packaging). */
	immediatePackaging?: Identifier;
	/** A number appearing on the outer packaging of a specific batch. */
	outerPackaging: Identifier;
}

const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const MedicinalProductPackaged_BatchIdentifierSchemaInternal =
	BackboneElementSchemaInternal.extend({
		immediatePackaging: z.lazy(getIdentifierSchema).optional(),
		outerPackaging: z.lazy(getIdentifierSchema),
	}).strict();

export const MedicinalProductPackaged_BatchIdentifierSchema =
	MedicinalProductPackaged_BatchIdentifierSchemaInternal as z.ZodType<MedicinalProductPackaged_BatchIdentifier>;
