import * as z from "zod";

function withPattern(pattern: RegExp): z.ZodString {
	return z.string().regex(pattern);
}

export const fhirBase64BinaryPattern = /(\s*([0-9a-zA-Z+/=]){4}\s*)+/;
export const fhirCanonicalPattern = /\S*/;
export const fhirCodePattern = /[^\s]+(\s[^\s]+)*/;
export const fhirDatePattern =
	/^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/;
export const fhirDateTimePattern =
	/^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/;
export const fhirIdPattern = /^[A-Za-z0-9\-.]{1,64}$/;
export const fhirInstantPattern =
	/^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/;
export const fhirInteger64Pattern = /[0]|[-+]?[1-9][0-9]*/;
export const fhirOidPattern = /urn:oid:[0-2](\.(0|[1-9][0-9]*))+/;
export const fhirStringPattern = /[ \r\n\t\S]+/;
export const fhirTimePattern =
	/^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/;
export const fhirUriPattern = /\S*/;
export const fhirUrlPattern = /\S*/;
export const fhirUuidPattern =
	/^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export function fhirBase64Binary(): z.ZodString {
	return withPattern(fhirBase64BinaryPattern);
}

export function fhirCanonical(): z.ZodString {
	return withPattern(fhirCanonicalPattern);
}

export function fhirCode(): z.ZodString {
	return withPattern(fhirCodePattern);
}

export function fhirId(): z.ZodString {
	return withPattern(fhirIdPattern);
}

export function fhirDate(): z.ZodString {
	return withPattern(fhirDatePattern);
}

export function fhirDateTime(): z.ZodString {
	return withPattern(fhirDateTimePattern);
}

export function fhirInstant(): z.ZodString {
	return withPattern(fhirInstantPattern);
}

export function fhirInteger64(): z.ZodString {
	return withPattern(fhirInteger64Pattern);
}

export function fhirOid(): z.ZodString {
	return withPattern(fhirOidPattern);
}

export function fhirString(): z.ZodString {
	return withPattern(fhirStringPattern);
}

export function fhirTime(): z.ZodString {
	return withPattern(fhirTimePattern);
}

export function fhirUri(): z.ZodString {
	return withPattern(fhirUriPattern);
}

export function fhirUrl(): z.ZodString {
	return withPattern(fhirUrlPattern);
}

export function fhirUuid(): z.ZodString {
	return withPattern(fhirUuidPattern);
}
