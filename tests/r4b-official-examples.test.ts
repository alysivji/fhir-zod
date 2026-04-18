import { resolve } from "node:path";
import * as r4bSchemas from "fhir-zod/r4b";
import { mergeGeneratedVersionSchemas } from "./helpers/generated-version-schemas.ts";
import { describeOfficialExamplesSuite } from "./helpers/official-examples-suite.ts";
import { r4bExampleExpectedFailures } from "./r4b-example-expected-failures.ts";

const r4bFolderModules = import.meta.glob("../src/r4b/*/index.ts", {
	eager: true,
});

describeOfficialExamplesSuite({
	expectedFailures: r4bExampleExpectedFailures,
	fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "r4b"),
	label: "R4B",
	schemas: mergeGeneratedVersionSchemas(r4bSchemas, r4bFolderModules),
});
