import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("generated Zod schema surface", () => {
	it("imports bare Zod and shared primitive helpers", () => {
		const autoPatient = readFileSync(join("src", "r4", "Patient.ts"), "utf8");

		expect(autoPatient).toContain('import * as z from "zod";');
		expect(autoPatient).toContain(
			'import { fhirDate, fhirDateTime } from "../shared/fhir-primitives";',
		);
	});
});
