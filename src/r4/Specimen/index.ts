// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Specimen } from "./Specimen";
export { SpecimenSchema } from "./Specimen";
export type { Specimen_Collection } from "./Specimen_Collection";
export { Specimen_CollectionSchema } from "./Specimen_Collection";
export type { Specimen_Container } from "./Specimen_Container";
export { Specimen_ContainerSchema } from "./Specimen_Container";
export type { Specimen_Processing } from "./Specimen_Processing";
export { Specimen_ProcessingSchema } from "./Specimen_Processing";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { SpecimenSchemaInternal } from "./Specimen";

_registerFhirResourceSchemas({
	Specimen: SpecimenSchemaInternal,
});
