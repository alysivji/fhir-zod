import { getSpecAvailability } from "./spec-availability.ts";

export function getR5SpecAvailability(): {
	available: boolean;
	reason: string | null;
} {
	return getSpecAvailability("r5");
}
