import { resolve } from "node:path";
import { writeNormalizedZodDefinitions } from "./emit/zod.ts";
import { repoRoot } from "./shared.ts";
import { buildStructureDefinitionR4Definitions } from "./sources/structuredefinition-r4.ts";
import { listR4GenerationTargetNames } from "./targets/r4.ts";

type GenerationResult = {
	files: string[];
};

export type GenerateR4Options = {
	generatedAt?: string;
	outputDir?: string;
	prune?: boolean;
	scopeNames?: Iterable<string>;
};

export function generateR4(options: GenerateR4Options = {}): GenerationResult {
	const structureDefinitionResult = buildStructureDefinitionR4Definitions(
		options.scopeNames ?? listR4GenerationTargetNames(),
	);
	const outputDir = options.outputDir ?? resolve(repoRoot, "src", "r4");
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
