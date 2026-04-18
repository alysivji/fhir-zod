// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Invoice } from "./Invoice";
export { InvoiceSchema } from "./Invoice";
export type { Invoice_LineItem } from "./Invoice_LineItem";
export { Invoice_LineItemSchema } from "./Invoice_LineItem";
export type { Invoice_LineItem_PriceComponent } from "./Invoice_LineItem_PriceComponent";
export { Invoice_LineItem_PriceComponentSchema } from "./Invoice_LineItem_PriceComponent";
export type { Invoice_Participant } from "./Invoice_Participant";
export { Invoice_ParticipantSchema } from "./Invoice_Participant";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { InvoiceSchemaInternal } from "./Invoice";

_registerFhirResourceSchemas({
	Invoice: InvoiceSchemaInternal,
});
