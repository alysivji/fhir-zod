import {
	fhirReleases,
	type GenerateVersionOptions,
	type GenerationResult,
} from "./versions.ts";

export type GenerateR5Options = GenerateVersionOptions;

export function generateR5(options: GenerateR5Options = {}): GenerationResult {
	return fhirReleases.r5.generate(options);
}
