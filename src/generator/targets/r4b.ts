import {
	fhirReleases,
	type TargetCategory,
	type TargetEntry,
	type TargetSummary,
} from "../versions.ts";

export type R4BTargetCategory = TargetCategory;
export type R4BTargetEntry = TargetEntry;

const release = fhirReleases.r4b;

export const r4bAbstractTargetNames = release.abstractTargetNames;

export function loadR4BTargetEntries(): R4BTargetEntry[] {
	return release.loadTargetEntries();
}

export function listR4BCoreResourceNames(): string[] {
	return release.listCoreResourceNames();
}

export function listR4BGenerationTargetNames(): string[] {
	return release.listGenerationTargetNames();
}

export function summarizeR4BTargets(entries?: R4BTargetEntry[]): TargetSummary {
	return release.summarizeTargets(entries);
}
