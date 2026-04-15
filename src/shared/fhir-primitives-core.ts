export const fhirBase64BinaryPattern =
	/^(?=\s*[0-9A-Za-z+/])(?:\s*[0-9A-Za-z+/]{4}\s*)*(?:\s*(?:[0-9A-Za-z+/]{2}==|[0-9A-Za-z+/]{3}=)\s*)?$/;
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
export const fhirStringAllowEmptyPattern = /^$|[ \r\n\t\S]+/;
export const fhirTimePattern =
	/^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/;
export const fhirUriPattern = /\S*/;
export const fhirUrlPattern = /\S*/;
export const fhirUuidPattern =
	/^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export interface FhirStringConfiguration {
	allowEmpty: boolean;
}

let fhirStringConfiguration: FhirStringConfiguration = {
	allowEmpty: false,
};

export function configureFhirString(
	configuration: FhirStringConfiguration,
): void {
	fhirStringConfiguration = { ...configuration };
}

export function fhirStringPatternForConfiguration(): RegExp {
	return fhirStringConfiguration.allowEmpty
		? fhirStringAllowEmptyPattern
		: fhirStringPattern;
}

function isBase64Character(value: string): boolean {
	return (
		(value >= "A" && value <= "Z") ||
		(value >= "a" && value <= "z") ||
		(value >= "0" && value <= "9") ||
		value === "+" ||
		value === "/"
	);
}

function isWhitespace(value: string): boolean {
	return value === " " || value === "\r" || value === "\n" || value === "\t";
}

export function isFhirBase64Binary(value: string): boolean {
	let length = 0;
	let padding = 0;
	let seenPadding = false;

	for (const character of value) {
		if (isWhitespace(character)) {
			continue;
		}

		if (character === "=") {
			seenPadding = true;
			padding += 1;
			length += 1;

			if (padding > 2) {
				return false;
			}

			continue;
		}

		if (seenPadding || !isBase64Character(character)) {
			return false;
		}

		length += 1;
	}

	return length > 0 && length % 4 === 0;
}
