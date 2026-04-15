// Keep this empty unless a specific official STU3 example is confirmed to be
// incompatible with the current structural validation scope.
//
// Expected failures are still executed with Vitest's it.fails. If one starts
// passing unexpectedly, remove it from this map and investigate whether the
// schema behavior changed intentionally.
// Each entry is also surfaced as a skipped tracking test in
// official-example-expected-failures.test.ts so this investigation debt remains
// visible in test summaries.
export const stu3ExampleExpectedFailures = new Map<string, string>();
