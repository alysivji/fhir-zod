import { resolve } from "node:path";
import { writeNormalizedZodDefinitions } from "./emit/zod.ts";
import { repoRoot } from "./shared.ts";
import { buildOpenApiR4Definitions } from "./sources/openapi-r4.ts";
import { buildStructureDefinitionR4Definitions } from "./sources/structuredefinition-r4.ts";

type GenerationResult = {
	files: string[];
};

export function generateR4(): GenerationResult {
	const openApiDefinitions = buildOpenApiR4Definitions();
	const structureDefinitionResult = buildStructureDefinitionR4Definitions(
		openApiDefinitions.keys(),
	);
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
