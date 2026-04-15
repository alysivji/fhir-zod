import { HumanNameSchema, TimingSchema } from "fhir-zod/r4b";
import { describe, expect, it } from "vitest";

const primitiveArraySchemaSurfaces = [
	["auto", HumanNameSchema, TimingSchema],
] as const;

describe("FHIR primitive array JSON representation", () => {
	it("accepts null value slots when the matching primitive metadata slot has content", () => {
		const result = TimingSchema.safeParse({
			event: [null],
			_event: [
				{
					extension: [
						{
							url: "http://hl7.org/fhir/StructureDefinition/cqf-expression",
							valueExpression: {
								expression: "Now()",
								language: "text/cql",
							},
						},
					],
				},
			],
		});

		expect(result.success).toBe(true);
	});

	it("accepts underscored primitive array slots without an explicit value array", () => {
		const result = TimingSchema.safeParse({
			_event: [
				{
					extension: [
						{
							url: "http://example.test/fhir/StructureDefinition/event-note",
							valueString: "computed elsewhere",
						},
					],
				},
			],
		});

		expect(result.success).toBe(true);
	});

	it("accepts sparse primitive metadata slots that align with value slots", () => {
		const result = HumanNameSchema.safeParse({
			given: ["Jane", null, "Patient"],
			_given: [
				null,
				{
					extension: [
						{
							url: "http://example.test/fhir/StructureDefinition/missing-name",
							valueString: "withheld",
						},
					],
				},
				null,
			],
		});

		expect(result.success).toBe(true);
	});

	it("rejects null value slots without primitive metadata", () => {
		const result = TimingSchema.safeParse({
			event: [null],
		});

		expect(result.success).toBe(false);
		if (result.success) {
			throw new Error("Expected validation failure");
		}
		expect(result.error.issues).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					message: expect.stringContaining(
						"event[0] has neither a primitive value nor _event[0] metadata",
					),
					path: ["event", 0],
				}),
			]),
		);
	});

	it("rejects null value slots with empty primitive metadata", () => {
		const result = TimingSchema.safeParse({
			event: [null],
			_event: [{}],
		});

		expect(result.success).toBe(false);
	});

	it("keeps primitive value validation for non-null slots", () => {
		const result = TimingSchema.safeParse({
			event: ["not-a-date"],
		});

		expect(result.success).toBe(false);
	});

	it.each(primitiveArraySchemaSurfaces)(
		"%s validates primitive array value and metadata pairs",
		(_, humanNameSchema, timingSchema) => {
			expect(
				humanNameSchema.safeParse({
					given: ["Jane", null],
					_given: [
						null,
						{
							extension: [
								{
									url: "http://example.test/fhir/StructureDefinition/missing-name",
									valueString: "withheld",
								},
							],
						},
					],
				}).success,
			).toBe(true);

			const result = timingSchema.safeParse({
				event: [null],
			});

			expect(result.success).toBe(false);
			if (result.success) {
				throw new Error("Expected validation failure");
			}
			expect(result.error.issues).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						code: "custom",
						message: expect.stringContaining(
							"event[0] has neither a primitive value nor _event[0] metadata",
						),
						path: ["event", 0],
					}),
				]),
			);
		},
	);
});
