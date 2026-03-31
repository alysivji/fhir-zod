import { generateR4OpenApi } from "../src/generator/r4-openapi.ts";

const result = generateR4OpenApi();

for (const file of result.files) {
	console.log(`generated ${file}`);
}
