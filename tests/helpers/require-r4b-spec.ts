import {
	MissingSpecPackageError,
	resolveRequiredSpecPackageRoot,
} from "../../src/spec/spec-cache.ts";

export function getR4BSpecAvailability(): {
	available: boolean;
	reason: string | null;
} {
	try {
		resolveRequiredSpecPackageRoot("r4b");

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
