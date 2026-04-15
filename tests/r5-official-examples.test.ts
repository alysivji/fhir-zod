import { resolve } from "node:path";
import * as r5Schemas from "fhir-zod/r5";
import { describeOfficialExamplesSuite } from "./helpers/official-examples-suite.ts";
import { r5ExampleExpectedFailures } from "./r5-example-expected-failures.ts";

describeOfficialExamplesSuite({
	expectedFailures: r5ExampleExpectedFailures,
	fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "r5"),
	label: "R5",
	schemas: r5Schemas,
});
