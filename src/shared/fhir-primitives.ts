import * as z from "zod";

export {
	configureFhirString,
	type FhirStringConfiguration,
	fhirBase64BinaryPattern,
	fhirCanonicalPattern,
	fhirCodePattern,
	fhirDatePattern,
	fhirDateTimePattern,
	fhirIdPattern,
	fhirInstantPattern,
	fhirInteger64Pattern,
	fhirOidPattern,
	fhirStringAllowEmptyPattern,
	fhirStringPattern,
	fhirTimePattern,
	fhirUriPattern,
	fhirUrlPattern,
	fhirUuidPattern,
} from "./fhir-primitives-core.ts";

import {
	fhirCanonicalPattern,
	fhirCodePattern,
	fhirDatePattern,
	fhirDateTimePattern,
	fhirIdPattern,
	fhirInstantPattern,
	fhirInteger64Pattern,
	fhirOidPattern,
	fhirStringPatternForConfiguration,
	fhirTimePattern,
	fhirUriPattern,
	fhirUrlPattern,
	fhirUuidPattern,
	isFhirBase64Binary,
} from "./fhir-primitives-core.ts";

function withPattern(pattern: RegExp): z.ZodString {
	return z.string().regex(pattern);
}

export function fhirBase64Binary(): z.ZodType<string> {
	return z.string().refine(isFhirBase64Binary);
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

export function fhirString() {
	return z.string().superRefine((value, context) => {
		if (!fhirStringPatternForConfiguration().test(value)) {
			context.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Invalid FHIR string",
			});
		}
	});
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
