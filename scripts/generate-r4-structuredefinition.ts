import { generateR4StructureDefinition } from "../src/generator/r4-structuredefinition.ts";

const result = generateR4StructureDefinition();

for (const file of result.files) {
	console.log(`generated ${file}`);
}
