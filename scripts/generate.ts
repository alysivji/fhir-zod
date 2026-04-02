import { generateR4 } from "../src/generator/r4.ts";

const result = generateR4();

for (const file of result.files) {
	console.log(`generated ${file}`);
}
