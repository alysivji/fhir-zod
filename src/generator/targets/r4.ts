import {
	fhirReleases,
	type TargetCategory,
	type TargetEntry,
	type TargetSummary,
} from "../versions.ts";

export type R4TargetCategory = TargetCategory;
export type R4TargetEntry = TargetEntry;

const release = fhirReleases.r4;

export const r4AbstractTargetNames = release.abstractTargetNames;

export function loadR4TargetEntries(): R4TargetEntry[] {
	return release.loadTargetEntries();
}

export function listR4CoreResourceNames(): string[] {
	return release.listCoreResourceNames();
}

export function listR4GenerationTargetNames(): string[] {
	return release.listGenerationTargetNames();
}

export function summarizeR4Targets(entries?: R4TargetEntry[]): TargetSummary {
	return release.summarizeTargets(entries);
}
