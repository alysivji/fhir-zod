import type { FhirVersionId } from "../../src/generator/versions.ts";
import {
	MissingSpecPackageError,
	resolveRequiredSpecPackageRoot,
} from "../../src/spec/spec-cache.ts";

export type SpecAvailability = {
	available: boolean;
	reason: string | null;
};

export function getSpecAvailability(version: FhirVersionId): SpecAvailability {
	try {
		resolveRequiredSpecPackageRoot(version);

		return {
			available: true,
			reason: null,
		};
	} catch (error) {
		if (error instanceof MissingSpecPackageError) {
			return {
				available: false,
				reason: error.message,
			};
		}

		throw error;
	}
}
