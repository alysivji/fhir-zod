import { compareR4 } from "../src/generator/compare/report.ts";

const result = compareR4();

console.log(
	`compared ${result.report.summary.comparedDefinitionCount} definitions`,
);
console.log(
	`definitions with diffs: ${result.report.summary.definitionsWithDiffs}`,
);
console.log(`generated ${result.generatedFiles.length} experimental files`);
console.log(`json report: ${result.reportPaths.json}`);
console.log(`markdown report: ${result.reportPaths.markdown}`);
