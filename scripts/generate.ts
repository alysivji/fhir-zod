import { pathToFileURL } from "node:url";
import {
	type FhirRelease,
	getFhirRelease,
	supportedFhirVersions,
} from "../src/generator/versions.ts";

export function runGenerateCli(
	argv = process.argv.slice(2),
	options: {
		getRelease?: (version: string) => FhirRelease | null;
		log?: (message: string) => void;
	} = {},
): void {
	const getRelease = options.getRelease ?? getFhirRelease;
	const log = options.log ?? console.log;
	const versions = argv.length > 0 ? argv : ["r4"];

	for (const version of versions) {
		const release = getRelease(version);

		if (!release) {
			throw new Error(
				`Unknown generation target "${version}". Supported versions: ${supportedFhirVersions.join(", ")}.`,
			);
		}

		const result = release.generate();

		for (const file of result.files) {
			log(`generated ${file}`);
		}
	}
}

if (
	process.argv[1] &&
	import.meta.url === pathToFileURL(process.argv[1]).href
) {
	runGenerateCli();
}
