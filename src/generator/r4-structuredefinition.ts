import { resolve } from "node:path";
import { writeNormalizedZodDefinitions } from "./compare/emit-zod.ts";
import { buildOpenApiR4Definitions } from "./compare/openapi-r4.ts";
import { buildStructureDefinitionR4Definitions } from "./compare/structuredefinition-r4.ts";
import { generateR4 } from "./r4.ts";
import { repoRoot } from "./shared.ts";

type GenerationResult = {
	files: string[];
};

export function generateR4StructureDefinition(): GenerationResult {
	return generateR4();
}

export function generateR4StructureDefinitionSnapshot(): GenerationResult {
	const openApiDefinitions = buildOpenApiR4Definitions();
	const structureDefinitionResult = buildStructureDefinitionR4Definitions(
		openApiDefinitions.keys(),
	);
	const outputDir = resolve(repoRoot, "src", "r4-structuredefinition");
	const files = writeNormalizedZodDefinitions({
		definitions: structureDefinitionResult.definitions,
		generatedBy: "scripts/generate-r4-structuredefinition.ts",
		outputDir,
		primitivePatterns: structureDefinitionResult.primitivePatterns,
	});

	return {
		files,
	};
}
