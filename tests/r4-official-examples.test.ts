import { resolve } from "node:path";
import * as r4Schemas from "fhir-zod/r4";
import * as r4PatientSchemas from "fhir-zod/r4/Patient";
import { describeOfficialExamplesSuite } from "./helpers/official-examples-suite.ts";
import { r4ExampleExpectedFailures } from "./r4-example-expected-failures.ts";

describeOfficialExamplesSuite({
	expectedFailures: r4ExampleExpectedFailures,
	fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "r4"),
	label: "R4",
	schemas: { ...r4Schemas, ...r4PatientSchemas },
});
