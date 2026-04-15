import {
	fhirReleases,
	type GenerateVersionOptions,
	type GenerationResult,
} from "./versions.ts";

export type GenerateR4Options = GenerateVersionOptions;

export function generateR4(options: GenerateR4Options = {}): GenerationResult {
	return fhirReleases.r4.generate(options);
}
