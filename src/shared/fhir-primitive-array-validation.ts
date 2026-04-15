import * as z from "zod";

function hasPrimitiveMetadata(value: unknown): boolean {
	return (
		typeof value === "object" &&
		value !== null &&
		Object.keys(value as Record<string, unknown>).length > 0
	);
}

export function validatePrimitiveArrayPair(
	valueArray: unknown,
	elementArray: unknown,
	valueField: string,
	elementField: string,
	ctx: z.RefinementCtx,
): void {
	const values = Array.isArray(valueArray) ? valueArray : undefined;
	const elements = Array.isArray(elementArray) ? elementArray : undefined;

	if (!values && !elements) {
		return;
	}

	const length = Math.max(values?.length ?? 0, elements?.length ?? 0);

	for (let index = 0; index < length; index += 1) {
		const value = values?.[index] ?? null;
		const element = elements?.[index] ?? null;

		if (value !== null || hasPrimitiveMetadata(element)) {
			continue;
		}

		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			message: `${valueField}[${index}] has neither a primitive value nor ${elementField}[${index}] metadata`,
			path: values ? [valueField, index] : [elementField, index],
		});
	}
}
