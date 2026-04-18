// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { PaymentReconciliation } from "./PaymentReconciliation";
export { PaymentReconciliationSchema } from "./PaymentReconciliation";
export type { PaymentReconciliation_Detail } from "./PaymentReconciliation_Detail";
export { PaymentReconciliation_DetailSchema } from "./PaymentReconciliation_Detail";
export type { PaymentReconciliation_ProcessNote } from "./PaymentReconciliation_ProcessNote";
export { PaymentReconciliation_ProcessNoteSchema } from "./PaymentReconciliation_ProcessNote";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { PaymentReconciliationSchemaInternal } from "./PaymentReconciliation";

_registerFhirResourceSchemas({
	PaymentReconciliation: PaymentReconciliationSchemaInternal,
});
