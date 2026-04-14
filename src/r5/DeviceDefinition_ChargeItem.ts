// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** Billing code or reference associated with the device. */
export interface DeviceDefinition_ChargeItem extends BackboneElement {
	/** The code or reference for the charge item. */
	chargeItemCode: CodeableReference;
	/** Coefficient applicable to the billing code. */
	count: Quantity;
	/** A specific time period in which this charge item applies. */
	effectivePeriod?: Period;
	/** The context to which this charge item applies. */
	useContext?: Array<UsageContext>;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const DeviceDefinition_ChargeItemSchemaInternal =
	BackboneElementSchemaInternal.extend({
		chargeItemCode: z.lazy(getCodeableReferenceSchema),
		count: z.lazy(getQuantitySchema),
		effectivePeriod: z.lazy(getPeriodSchema).optional(),
		useContext: z.lazy(getUsageContextSchema).array().optional(),
	}).strict();

export const DeviceDefinition_ChargeItemSchema =
	DeviceDefinition_ChargeItemSchemaInternal as z.ZodType<DeviceDefinition_ChargeItem>;
