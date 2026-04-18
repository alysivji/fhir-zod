// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Composition } from "./Composition";
export { CompositionSchema } from "./Composition";
export type { Composition_Attester } from "./Composition_Attester";
export { Composition_AttesterSchema } from "./Composition_Attester";
export type { Composition_Event } from "./Composition_Event";
export { Composition_EventSchema } from "./Composition_Event";
export type { Composition_RelatesTo } from "./Composition_RelatesTo";
export { Composition_RelatesToSchema } from "./Composition_RelatesTo";
export type { Composition_Section } from "./Composition_Section";
export { Composition_SectionSchema } from "./Composition_Section";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CompositionSchemaInternal } from "./Composition";

_registerFhirResourceSchemas({
	Composition: CompositionSchemaInternal,
});
