import { resolve } from "node:path";
import { writeNormalizedZodDefinitions } from "./emit/zod.ts";
import { repoRoot } from "./shared.ts";
import { buildStructureDefinitionSTU3Definitions } from "./sources/structuredefinition-stu3.ts";

type GenerationResult = {
	files: string[];
};

export type GenerateSTU3Options = {
	generatedAt?: string;
	outputDir?: string;
	prune?: boolean;
	scopeNames?: Iterable<string>;
};

export function generateSTU3(
	options: GenerateSTU3Options = {},
): GenerationResult {
	const structureDefinitionResult = buildStructureDefinitionSTU3Definitions(
		options.scopeNames,
	);
	const outputDir = options.outputDir ?? resolve(repoRoot, "src", "stu3");
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
