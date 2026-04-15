import { resolve } from "node:path";
import { writeNormalizedZodDefinitions } from "./emit/zod.ts";
import { repoRoot } from "./shared.ts";
import { buildStructureDefinitionR4BDefinitions } from "./sources/structuredefinition-r4b.ts";

type GenerationResult = {
	files: string[];
};

export type GenerateR4BOptions = {
	generatedAt?: string;
	outputDir?: string;
	prune?: boolean;
	scopeNames?: Iterable<string>;
};

export function generateR4B(
	options: GenerateR4BOptions = {},
): GenerationResult {
	const structureDefinitionResult = buildStructureDefinitionR4BDefinitions(
		options.scopeNames,
	);
	const outputDir = options.outputDir ?? resolve(repoRoot, "src", "r4b");
	const generatedAt = options.generatedAt ?? new Date().toISOString();
	const files = writeNormalizedZodDefinitions({
		definitions: structureDefinitionResult.definitions,
		generatedAt,
		outputDir,
		prune: options.prune ?? true,
		primitivePatterns: structureDefinitionResult.primitivePatterns,
	});

	return {
		files,
	};
}
