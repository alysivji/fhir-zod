// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { MessageHeader } from "./MessageHeader";
export { MessageHeaderSchema } from "./MessageHeader";
export type { MessageHeader_Destination } from "./MessageHeader_Destination";
export { MessageHeader_DestinationSchema } from "./MessageHeader_Destination";
export type { MessageHeader_Response } from "./MessageHeader_Response";
export { MessageHeader_ResponseSchema } from "./MessageHeader_Response";
export type { MessageHeader_Source } from "./MessageHeader_Source";
export { MessageHeader_SourceSchema } from "./MessageHeader_Source";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { MessageHeaderSchemaInternal } from "./MessageHeader";

_registerFhirResourceSchemas({
	MessageHeader: MessageHeaderSchemaInternal,
});
