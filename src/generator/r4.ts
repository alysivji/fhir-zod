import { resolve } from "node:path";
import { writeNormalizedZodDefinitions } from "./emit/zod.ts";
import { repoRoot } from "./shared.ts";
import { buildStructureDefinitionR4Definitions } from "./sources/structuredefinition-r4.ts";

type GenerationResult = {
	files: string[];
};

export function generateR4(): GenerationResult {
	const structureDefinitionResult = buildStructureDefinitionR4Definitions();
	const outputDir = resolve(repoRoot, "src", "r4");
	const generatedAt = new Date().toISOString();
	const files = writeNormalizedZodDefinitions({
		definitions: structureDefinitionResult.definitions,
		generatedAt,
		outputDir,
		primitivePatterns: structureDefinitionResult.primitivePatterns,
	});

	return {
		files,
	};
}
