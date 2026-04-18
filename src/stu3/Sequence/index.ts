// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Sequence } from "./Sequence";
export { SequenceSchema } from "./Sequence";
export type { Sequence_Quality } from "./Sequence_Quality";
export { Sequence_QualitySchema } from "./Sequence_Quality";
export type { Sequence_ReferenceSeq } from "./Sequence_ReferenceSeq";
export { Sequence_ReferenceSeqSchema } from "./Sequence_ReferenceSeq";
export type { Sequence_Repository } from "./Sequence_Repository";
export { Sequence_RepositorySchema } from "./Sequence_Repository";
export type { Sequence_Variant } from "./Sequence_Variant";
export { Sequence_VariantSchema } from "./Sequence_Variant";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { SequenceSchemaInternal } from "./Sequence";

_registerFhirResourceSchemas({
	Sequence: SequenceSchemaInternal,
});
