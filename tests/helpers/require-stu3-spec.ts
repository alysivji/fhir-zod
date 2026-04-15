import {
	MissingSpecPackageError,
	resolveRequiredSpecPackageRoot,
} from "../../src/spec/spec-cache.ts";

export function getSTU3SpecAvailability(): {
	available: boolean;
	reason: string | null;
} {
	try {
		resolveRequiredSpecPackageRoot("stu3");

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
