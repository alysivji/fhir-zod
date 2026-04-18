import { resolve } from "node:path";
import * as stu3Schemas from "fhir-zod/stu3";
import { describeOfficialExamplesSuite } from "./helpers/official-examples-suite.ts";
import { stu3ExampleExpectedFailures } from "./stu3-example-expected-failures.ts";

const stu3FolderModules = import.meta.glob("../src/stu3/*/index.ts", {
	eager: true,
});
const stu3ResourceSchemas = Object.assign(
	{},
	...Object.values(stu3FolderModules),
);

describeOfficialExamplesSuite({
	expectedFailures: stu3ExampleExpectedFailures,
	fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "stu3"),
	label: "STU3",
	schemas: { ...stu3Schemas, ...stu3ResourceSchemas },
});
