import { describe, expect, it } from "vitest";
import {
	fhirDate,
	fhirDateTime,
	fhirInstant,
	fhirTime,
} from "../src/shared/fhir-primitives.ts";

describe("FHIR temporal primitives", () => {
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
});
