import { generateR4StructureDefinitionSnapshot } from "../src/generator/r4-structuredefinition.ts";

const result = generateR4StructureDefinitionSnapshot();

for (const file of result.files) {
	console.log(`generated ${file}`);
}
