import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("generated Zod flavor surfaces", () => {
	it("imports the expected Zod package and shared primitive helpers", () => {
		const autoPatient = readFileSync(join("src", "r4", "Patient.ts"), "utf8");
		const zod3Patient = readFileSync(
			join("src", "r4", "zod3", "Patient.ts"),
			"utf8",
		);
		const zod4Patient = readFileSync(
			join("src", "r4", "zod4", "Patient.ts"),
			"utf8",
		);

		expect(autoPatient).toContain('import * as z from "zod";');
		expect(autoPatient).toContain(
			'import { fhirDate, fhirDateTime } from "../shared/fhir-primitives";',
		);
		expect(zod3Patient).toContain('import * as z from "zod/v3";');
		expect(zod3Patient).toContain(
			'import { fhirDate, fhirDateTime } from "../../shared/fhir-primitives-zod3";',
		);
		expect(zod4Patient).toContain('import * as z from "zod/v4";');
		expect(zod4Patient).toContain(
			'import { fhirDate, fhirDateTime } from "../../shared/fhir-primitives-zod4";',
		);
	});
});
