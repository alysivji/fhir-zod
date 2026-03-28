import * as z from "zod";

export const Patient = z.object({
	resourceType: z.literal("Patient"),
	id: z.string().optional(),
});
