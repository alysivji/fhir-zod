import { describe, it } from "vitest";
import { r4ExampleExpectedFailures } from "./r4-example-expected-failures.ts";
import { r4bExampleExpectedFailures } from "./r4b-example-expected-failures.ts";
import { r5ExampleExpectedFailures } from "./r5-example-expected-failures.ts";

const expectedFailureGroups = [
	["R4", r4ExampleExpectedFailures],
	["R4B", r4bExampleExpectedFailures],
	["R5", r5ExampleExpectedFailures],
] as const;

describe("official example expected failures needing investigation", () => {
	for (const [version, expectedFailures] of expectedFailureGroups) {
		for (const [fixtureKey, reason] of expectedFailures) {
			it.skip(`${version} ${fixtureKey}: ${reason}`, () => {
				// Tracked as a skipped test so expected-failure debt stays visible in
				// test summaries while the real fixture validation still runs under
				// it.fails in the version-specific official-example suite.
			});
		}
	}
});
