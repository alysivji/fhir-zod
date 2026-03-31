import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { writeNormalizedZodDefinitions } from "./compare/emit-zod.ts";
import { buildOpenApiR4Definitions } from "./compare/openapi-r4.ts";
import { buildStructureDefinitionR4Definitions } from "./compare/structuredefinition-r4.ts";

type GenerationResult = {
	files: string[];
};

const moduleDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(moduleDir, "../..");

export function generateR4StructureDefinition(): GenerationResult {
	const openApiDefinitions = buildOpenApiR4Definitions();
	const structureDefinitionResult = buildStructureDefinitionR4Definitions(
		openApiDefinitions.keys(),
	);
	const outputDir = resolve(repoRoot, "src", "r4-structuredefinition");
	const files = writeNormalizedZodDefinitions({
		definitions: structureDefinitionResult.definitions,
		outputDir,
		primitivePatterns: structureDefinitionResult.primitivePatterns,
	});

	return {
		files,
	};
}
