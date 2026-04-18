// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Invoice } from "./Invoice";
export { InvoiceSchema } from "./Invoice";
export type { Invoice_LineItem } from "./Invoice_LineItem";
export { Invoice_LineItemSchema } from "./Invoice_LineItem";
export type { Invoice_Participant } from "./Invoice_Participant";
export { Invoice_ParticipantSchema } from "./Invoice_Participant";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { InvoiceSchemaInternal } from "./Invoice";

_registerFhirResourceSchemas({
	Invoice: InvoiceSchemaInternal,
});
