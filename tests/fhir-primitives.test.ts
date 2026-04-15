import { configureFhirString } from "fhir-zod";
import * as r4Schemas from "fhir-zod/r4";
import * as r4bSchemas from "fhir-zod/r4b";
import { afterEach, describe, expect, it } from "vitest";
import {
	fhirBase64Binary,
	fhirCanonical,
	fhirCode,
	fhirDate,
	fhirDateTime,
	fhirId,
	fhirInstant,
	fhirOid,
	fhirString,
	fhirTime,
	fhirUri,
	fhirUrl,
	fhirUuid,
} from "../src/shared/fhir-primitives.ts";
import {
	fhirBase64Binary as fhirBase64BinaryZod3,
	fhirDate as fhirDateZod3,
	fhirString as fhirStringZod3,
} from "../src/shared/fhir-primitives-zod3.ts";
import {
	fhirBase64Binary as fhirBase64BinaryZod4,
	fhirDate as fhirDateZod4,
	fhirString as fhirStringZod4,
} from "../src/shared/fhir-primitives-zod4.ts";

describe("FHIR primitives", () => {
	afterEach(() => {
		configureFhirString({ allowEmpty: false });
	});

	describe("fhirId", () => {
		it("accepts valid FHIR id values", () => {
			const schema = fhirId();

			expect(schema.safeParse("abc").success).toBe(true);
			expect(schema.safeParse("Patient-123.456").success).toBe(true);
		});

		it("rejects invalid FHIR id values", () => {
			const schema = fhirId();

			expect(schema.safeParse("").success).toBe(false);
			expect(schema.safeParse("contains space").success).toBe(false);
			expect(schema.safeParse("x".repeat(65)).success).toBe(false);
		});
	});

	describe("fhirDate", () => {
		it("accepts reduced-precision FHIR date values", () => {
			const schema = fhirDate();

			expect(schema.safeParse("1980").success).toBe(true);
			expect(schema.safeParse("1980-01").success).toBe(true);
			expect(schema.safeParse("1980-01-01").success).toBe(true);
		});

		it("rejects invalid FHIR date values", () => {
			const schema = fhirDate();

			expect(schema.safeParse("1980-13").success).toBe(false);
			expect(schema.safeParse("1980-01-01T12:00:00Z").success).toBe(false);
		});
	});

	describe("fhirDateTime", () => {
		it("accepts reduced-precision FHIR dateTime values", () => {
			const schema = fhirDateTime();

			expect(schema.safeParse("1980").success).toBe(true);
			expect(schema.safeParse("1980-01").success).toBe(true);
			expect(schema.safeParse("1980-01-01").success).toBe(true);
			expect(schema.safeParse("1980-01-01T12:34:56Z").success).toBe(true);
			expect(schema.safeParse("1980-01-01T12:34:56+05:00").success).toBe(true);
		});

		it("rejects invalid FHIR dateTime values", () => {
			const schema = fhirDateTime();

			expect(schema.safeParse("1980-01-01T12:34:56").success).toBe(false);
			expect(schema.safeParse("1980-13-01T12:34:56Z").success).toBe(false);
		});
	});

	describe("fhirInstant", () => {
		it("accepts leap-second FHIR instant values", () => {
			const schema = fhirInstant();

			expect(schema.safeParse("2016-12-31T23:59:60Z").success).toBe(true);
			expect(schema.safeParse("2016-12-31T23:59:60+00:00").success).toBe(true);
		});

		it("rejects invalid FHIR instant values", () => {
			const schema = fhirInstant();

			expect(schema.safeParse("1980").success).toBe(false);
			expect(schema.safeParse("2016-12-31T23:59:60").success).toBe(false);
		});
	});

	describe("fhirTime", () => {
		it("accepts leap-second FHIR time values", () => {
			const schema = fhirTime();

			expect(schema.safeParse("23:59:60").success).toBe(true);
			expect(schema.safeParse("23:59:60.123").success).toBe(true);
		});

		it("rejects invalid FHIR time values", () => {
			const schema = fhirTime();

			expect(schema.safeParse("24:00:00").success).toBe(false);
			expect(schema.safeParse("23:59").success).toBe(false);
		});
	});

	describe("regex-backed string primitives", () => {
		it("accepts valid values for shared string primitive helpers", () => {
			expect(fhirBase64Binary().safeParse("Zm9v").success).toBe(true);
			expect(fhirBase64Binary().safeParse("Zg==").success).toBe(true);
			expect(
				fhirCanonical().safeParse("http://example.com/ValueSet/foo").success,
			).toBe(true);
			expect(fhirCode().safeParse("final").success).toBe(true);
			expect(fhirOid().safeParse("urn:oid:1.2.840.10008").success).toBe(true);
			expect(fhirString().safeParse("hello\nworld").success).toBe(true);
			expect(fhirUri().safeParse("urn:test:abc").success).toBe(true);
			expect(fhirUrl().safeParse("https://example.com").success).toBe(true);
			expect(
				fhirUuid().safeParse("urn:uuid:123e4567-e89b-12d3-a456-426614174000")
					.success,
			).toBe(true);
		});

		it("rejects invalid values for shared string primitive helpers", () => {
			expect(fhirBase64Binary().safeParse("*").success).toBe(false);
			expect(fhirBase64Binary().safeParse("Zm9v=").success).toBe(false);
			expect(fhirCode().safeParse(" ").success).toBe(false);
			expect(fhirOid().safeParse("1.2.840.10008").success).toBe(false);
			expect(fhirString().safeParse("").success).toBe(false);
			expect(fhirString().safeParse("\v").success).toBe(false);
			expect(
				fhirUuid().safeParse("urn:uuid:123E4567-E89B-12D3-A456-426614174000")
					.success,
			).toBe(false);
		});

		it("validates large base64Binary payloads without overflowing", () => {
			const payload = "Zm9v".repeat(200_000);

			expect(fhirBase64Binary().safeParse(payload).success).toBe(true);
		});
	});

	describe("explicit Zod flavor primitive helpers", () => {
		it("keeps regex and base64 behavior aligned across Zod surfaces", () => {
			const helperSets = [
				[fhirBase64Binary, fhirDate, fhirString],
				[fhirBase64BinaryZod3, fhirDateZod3, fhirStringZod3],
				[fhirBase64BinaryZod4, fhirDateZod4, fhirStringZod4],
			] as const;

			for (const [base64, date, string] of helperSets) {
				expect(base64().safeParse("Zm9v").success).toBe(true);
				expect(base64().safeParse("*").success).toBe(false);
				expect(date().safeParse("1980-01-01").success).toBe(true);
				expect(date().safeParse("1980-13").success).toBe(false);
				expect(string().safeParse("hello").success).toBe(true);
				expect(string().safeParse("").success).toBe(false);
			}
		});
	});

	describe("fhirString empty-string configuration", () => {
		it("rejects empty strings by default", () => {
			expect(fhirString().safeParse("").success).toBe(false);
		});

		it("allows empty strings for newly constructed fhirString schemas after configuration", () => {
			const strictSchema = fhirString();

			configureFhirString({ allowEmpty: true });

			expect(strictSchema.safeParse("").success).toBe(false);
			expect(fhirString().safeParse("").success).toBe(true);
		});

		it("does not allow empty strings for other primitives", () => {
			configureFhirString({ allowEmpty: true });

			expect(fhirDate().safeParse("").success).toBe(false);
		});

		it("still rejects non-empty invalid fhirString values", () => {
			configureFhirString({ allowEmpty: true });

			expect(fhirString().safeParse("\v").success).toBe(false);
		});
	});

	describe("ElementDefinition.id", () => {
		it("accepts legal element path identifiers used in StructureDefinition examples", () => {
			const result = r4Schemas.ElementDefinitionSchema.safeParse({
				id: "Extension.value[x]",
				path: "Extension.value[x]",
			});

			expect(result.success).toBe(true);
		});

		it("still rejects invalid resource ids", () => {
			expect(
				r4Schemas.PatientSchema.safeParse({
					resourceType: "Patient",
					id: "contains space",
				}).success,
			).toBe(false);
		});
	});

	describe("generated markdown primitives", () => {
		it("rejects empty R4 and R4B markdown values", () => {
			expect(r4Schemas.AnnotationSchema.safeParse({ text: "" }).success).toBe(
				false,
			);
			expect(r4bSchemas.AnnotationSchema.safeParse({ text: "" }).success).toBe(
				false,
			);
		});

		it("accepts non-empty R4 and R4B markdown values", () => {
			expect(
				r4Schemas.AnnotationSchema.safeParse({ text: "clinical note" }).success,
			).toBe(true);
			expect(
				r4bSchemas.AnnotationSchema.safeParse({ text: "clinical note" })
					.success,
			).toBe(true);
		});
	});
});
