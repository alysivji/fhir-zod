import * as z from "zod";

export function fhirDate(): z.ZodString {
	const fhirDatePattern =
		/^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/;
	return z.string().regex(fhirDatePattern);
}

export function fhirDateTime(): z.ZodString {
	const fhirDateTimePattern =
		/^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/;
	return z.string().regex(fhirDateTimePattern);
}

export function fhirInstant(): z.ZodString {
	const fhirInstantPattern =
		/^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/;
	return z.string().regex(fhirInstantPattern);
}

export function fhirTime(): z.ZodString {
	const fhirTimePattern =
		/^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/;
	return z.string().regex(fhirTimePattern);
}
