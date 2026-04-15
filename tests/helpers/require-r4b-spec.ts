import { getSpecAvailability } from "./spec-availability.ts";

export function getR4BSpecAvailability(): {
	available: boolean;
	reason: string | null;
} {
	return getSpecAvailability("r4b");
}
