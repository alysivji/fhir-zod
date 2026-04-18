import { resolve } from "node:path";
import * as r5Schemas from "fhir-zod/r5";
import { mergeGeneratedVersionSchemas } from "./helpers/generated-version-schemas.ts";
import { describeOfficialExamplesSuite } from "./helpers/official-examples-suite.ts";
import { r5ExampleExpectedFailures } from "./r5-example-expected-failures.ts";

const r5FolderModules = import.meta.glob("../src/r5/*/index.ts", {
	eager: true,
});

describeOfficialExamplesSuite({
	expectedFailures: r5ExampleExpectedFailures,
	fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "r5"),
	label: "R5",
	schemas: mergeGeneratedVersionSchemas(r5Schemas, r5FolderModules),
});
