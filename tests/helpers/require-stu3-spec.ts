import { getSpecAvailability } from "./spec-availability.ts";

export function getSTU3SpecAvailability(): {
	available: boolean;
	reason: string | null;
} {
	return getSpecAvailability("stu3");
}
