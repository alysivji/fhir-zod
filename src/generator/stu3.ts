import {
	fhirReleases,
	type GenerateVersionOptions,
	type GenerationResult,
} from "./versions.ts";

export type GenerateSTU3Options = GenerateVersionOptions;

export function generateSTU3(
	options: GenerateSTU3Options = {},
): GenerationResult {
	return fhirReleases.stu3.generate(options);
}
