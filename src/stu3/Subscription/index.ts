// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Subscription } from "./Subscription";
export { SubscriptionSchema } from "./Subscription";
export type { Subscription_Channel } from "./Subscription_Channel";
export { Subscription_ChannelSchema } from "./Subscription_Channel";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { SubscriptionSchemaInternal } from "./Subscription";

_registerFhirResourceSchemas({
	Subscription: SubscriptionSchemaInternal,
});
