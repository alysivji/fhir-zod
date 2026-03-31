import { resolve } from "node:path";
import { writeNormalizedZodDefinitions } from "./compare/emit-zod.ts";
import { buildOpenApiR4Definitions } from "./compare/openapi-r4.ts";
import { buildStructureDefinitionR4Definitions } from "./compare/structuredefinition-r4.ts";
import { repoRoot } from "./shared.ts";

type GenerationResult = {
	files: string[];
};

export function generateR4(): GenerationResult {
	const openApiDefinitions = buildOpenApiR4Definitions();
	const structureDefinitionResult = buildStructureDefinitionR4Definitions(
		openApiDefinitions.keys(),
	);
	const outputDir = resolve(repoRoot, "src", "r4");
	const files = writeNormalizedZodDefinitions({
		definitions: structureDefinitionResult.definitions,
		generatedBy: "scripts/generate.ts",
		outputDir,
		primitivePatterns: structureDefinitionResult.primitivePatterns,
	});

	return {
		files,
	};
}
