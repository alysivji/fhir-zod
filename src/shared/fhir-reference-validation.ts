import * as z from "zod";

export function normalizeReferenceCanonicalUrl(targetProfile: string): string {
	return targetProfile.split("|")[0] ?? targetProfile;
}

export function targetProfileToResourceType(
	targetProfile: string,
): string | null {
	const canonical = normalizeReferenceCanonicalUrl(targetProfile);
	const resourceType = canonical.split("/").at(-1) ?? null;
	return resourceType && /^[A-Z][A-Za-z0-9]+$/.test(resourceType)
		? resourceType
		: null;
}

export function validateReferenceTarget(
	value: unknown,
	field: string,
	allowedCanonicalTypes: string[],
	allowedResourceTypes: string[],
	ctx: z.RefinementCtx,
): void {
	const references = Array.isArray(value) ? value : [value];

	for (const [index, referenceValue] of references.entries()) {
		if (!referenceValue || typeof referenceValue !== "object") {
			continue;
		}

		const referenceObject = referenceValue as {
			reference?: unknown;
			type?: unknown;
		};
		const reference =
			typeof referenceObject.reference === "string"
				? referenceObject.reference
				: null;
		const normalizedType =
			typeof referenceObject.type === "string"
				? normalizeReferenceCanonicalUrl(referenceObject.type)
				: null;
		const inferredType = inferReferenceResourceType(reference);

		if (normalizedType && !allowedCanonicalTypes.includes(normalizedType)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: `Expected ${field}.type to be one of: ${allowedResourceTypes.join(", ")}; got ${normalizedType}`,
				path: referenceIssuePath(value, field, index, "type"),
			});
		}

		if (
			normalizedType &&
			inferredType &&
			targetProfileToResourceType(normalizedType) !== inferredType
		) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: `Reference.type and reference disagree for ${field}: type=${normalizedType}, reference=${reference}`,
				path: referenceIssuePath(value, field, index, "reference"),
			});
		}

		if (inferredType && !allowedResourceTypes.includes(inferredType)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: `Expected ${field} to reference one of: ${allowedResourceTypes.join(", ")}; got ${inferredType} from reference=${reference}`,
				path: referenceIssuePath(value, field, index, "reference"),
			});
		}
	}
}

export function inferReferenceResourceType(
	reference: string | null,
): string | null {
	if (!reference || reference.startsWith("#")) {
		return null;
	}

	if (reference.startsWith("urn:")) {
		return null;
	}

	if (reference.includes("://")) {
		try {
			const url = new URL(reference);
			return inferResourceTypeFromPathSegments(
				url.pathname.split("/").filter((segment) => segment.length > 0),
			);
		} catch {
			return null;
		}
	}

	return inferResourceTypeFromPathSegments(
		reference.split("/").filter((segment) => segment.length > 0),
	);
}

export function inferResourceTypeFromPathSegments(
	segments: string[],
): string | null {
	for (let index = 0; index < segments.length - 1; index += 1) {
		const segment = segments[index];
		const nextSegment = segments[index + 1];

		if (
			isResourceTypeName(segment) &&
			nextSegment &&
			nextSegment !== "_history"
		) {
			return segment;
		}
	}

	return null;
}

export function isResourceTypeName(segment: string): boolean {
	return /^[A-Z][A-Za-z0-9]+$/.test(segment);
}

export function referenceIssuePath(
	value: unknown,
	field: string,
	index: number,
	nestedField: "reference" | "type",
): (string | number)[] {
	return Array.isArray(value)
		? [field, index, nestedField]
		: [field, nestedField];
}
