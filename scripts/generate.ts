import {
	getFhirRelease,
	supportedFhirVersions,
} from "../src/generator/versions.ts";

const requestedVersions = process.argv.slice(2);
const versions = requestedVersions.length > 0 ? requestedVersions : ["r4"];

for (const version of versions) {
	const release = getFhirRelease(version);

	if (!release) {
		throw new Error(
			`Unknown generation target "${version}". Supported versions: ${supportedFhirVersions.join(", ")}.`,
		);
	}

	const result = release.generate();

	for (const file of result.files) {
		console.log(`generated ${file}`);
	}
}
