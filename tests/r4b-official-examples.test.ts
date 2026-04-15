import { resolve } from "node:path";
import * as r4bSchemas from "fhir-zod/r4b";
import { describeOfficialExamplesSuite } from "./helpers/official-examples-suite.ts";
import { r4bExampleExpectedFailures } from "./r4b-example-expected-failures.ts";

describeOfficialExamplesSuite({
	expectedFailures: r4bExampleExpectedFailures,
	fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "r4b"),
	label: "R4B",
	schemas: r4bSchemas,
});
