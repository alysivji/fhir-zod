import { getSpecAvailability } from "./spec-availability.ts";

export function getR4SpecAvailability(): {
	available: boolean;
	reason: string | null;
} {
	return getSpecAvailability("r4");
}
