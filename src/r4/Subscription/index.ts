// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Subscription } from "./Subscription";
export { SubscriptionSchema } from "./Subscription";
export type { Subscription_Channel } from "./Subscription_Channel";
export { Subscription_ChannelSchema } from "./Subscription_Channel";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { SubscriptionSchemaInternal } from "./Subscription";

_registerFhirResourceSchemas({
  Subscription: SubscriptionSchemaInternal,
});
