import { generateR4 } from "../src/generator/r4.ts";
import { listR4GenerationTargetNames } from "../src/generator/targets/r4.ts";

const result = generateR4({
	scopeNames: listR4GenerationTargetNames(),
});

for (const file of result.files) {
	console.log(`generated ${file}`);
}
