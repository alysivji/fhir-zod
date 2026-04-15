import {
	fhirReleases,
	type GenerateVersionOptions,
	type GenerationResult,
} from "./versions.ts";

export type GenerateR4BOptions = GenerateVersionOptions;

export function generateR4B(
	options: GenerateR4BOptions = {},
): GenerationResult {
	return fhirReleases.r4b.generate(options);
}
