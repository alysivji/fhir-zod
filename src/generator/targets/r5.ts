import {
	fhirReleases,
	type TargetCategory,
	type TargetEntry,
	type TargetSummary,
} from "../versions.ts";

export type R5TargetCategory = TargetCategory;
export type R5TargetEntry = TargetEntry;

const release = fhirReleases.r5;

export const r5AbstractTargetNames = release.abstractTargetNames;

export function loadR5TargetEntries(): R5TargetEntry[] {
	return release.loadTargetEntries();
}

export function listR5CoreResourceNames(): string[] {
	return release.listCoreResourceNames();
}

export function listR5GenerationTargetNames(): string[] {
	return release.listGenerationTargetNames();
}

export function summarizeR5Targets(entries?: R5TargetEntry[]): TargetSummary {
	return release.summarizeTargets(entries);
}
