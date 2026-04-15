import {
	fhirReleases,
	type TargetCategory,
	type TargetEntry,
	type TargetSummary,
} from "../versions.ts";

export type STU3TargetCategory = TargetCategory;
export type STU3TargetEntry = TargetEntry;

const release = fhirReleases.stu3;

export const stu3AbstractTargetNames = release.abstractTargetNames;

export function loadSTU3TargetEntries(): STU3TargetEntry[] {
	return release.loadTargetEntries();
}

export function listSTU3CoreResourceNames(): string[] {
	return release.listCoreResourceNames();
}

export function listSTU3GenerationTargetNames(): string[] {
	return release.listGenerationTargetNames();
}

export function summarizeSTU3Targets(
	entries?: STU3TargetEntry[],
): TargetSummary {
	return release.summarizeTargets(entries);
}
