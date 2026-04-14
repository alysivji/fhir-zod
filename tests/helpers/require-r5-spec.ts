import {
	MissingSpecPackageError,
	resolveRequiredSpecPackageRoot,
} from "../../src/spec/spec-cache.ts";

export function getR5SpecAvailability(): {
	available: boolean;
	reason: string | null;
} {
	try {
		resolveRequiredSpecPackageRoot("r5");

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
