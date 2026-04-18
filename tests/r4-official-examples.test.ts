import { resolve } from "node:path";
import * as r4Schemas from "fhir-zod/r4";
import { describeOfficialExamplesSuite } from "./helpers/official-examples-suite.ts";
import { r4ExampleExpectedFailures } from "./r4-example-expected-failures.ts";

const r4FolderModules = import.meta.glob("../src/r4/*/index.ts", {
	eager: true,
});
const r4ResourceSchemas = Object.assign({}, ...Object.values(r4FolderModules));

describeOfficialExamplesSuite({
	expectedFailures: r4ExampleExpectedFailures,
	fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "r4"),
	label: "R4",
	schemas: { ...r4Schemas, ...r4ResourceSchemas },
});
