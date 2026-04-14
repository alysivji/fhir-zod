import { generateR4 } from "../src/generator/r4.ts";
import { generateR5 } from "../src/generator/r5.ts";
import { listR4GenerationTargetNames } from "../src/generator/targets/r4.ts";

const requestedVersions = process.argv.slice(2);
const versions = requestedVersions.length > 0 ? requestedVersions : ["r4"];

for (const version of versions) {
	const result =
		version === "r4"
			? generateR4({
					scopeNames: listR4GenerationTargetNames(),
				})
			: version === "r5"
				? generateR5()
				: null;

	if (!result) {
		throw new Error(
			`Unknown generation target "${version}". Supported versions: r4, r5.`,
		);
	}

	for (const file of result.files) {
		console.log(`generated ${file}`);
	}
}
