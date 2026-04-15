import { resolve } from "node:path";
import * as stu3Schemas from "@fhir-zod/core/stu3";
import { describeOfficialExamplesSuite } from "./helpers/official-examples-suite.ts";
import { stu3ExampleExpectedFailures } from "./stu3-example-expected-failures.ts";

describeOfficialExamplesSuite({
	expectedFailures: stu3ExampleExpectedFailures,
	fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "stu3"),
	label: "STU3",
	schemas: stu3Schemas,
});
