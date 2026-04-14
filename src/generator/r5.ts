import { resolve } from "node:path";
import { writeNormalizedZodDefinitions } from "./emit/zod.ts";
import { repoRoot } from "./shared.ts";
import { buildStructureDefinitionR5Definitions } from "./sources/structuredefinition-r5.ts";

type GenerationResult = {
	files: string[];
};

export type GenerateR5Options = {
	generatedAt?: string;
	outputDir?: string;
	prune?: boolean;
	scopeNames?: Iterable<string>;
};

export function generateR5(options: GenerateR5Options = {}): GenerationResult {
	const structureDefinitionResult = buildStructureDefinitionR5Definitions(
		options.scopeNames ?? ["Patient"],
	);
	const outputDir = options.outputDir ?? resolve(repoRoot, "src", "r5");
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
