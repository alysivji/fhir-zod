// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { Group } from "./Group";
export { GroupSchema } from "./Group";
export type { Group_Characteristic } from "./Group_Characteristic";
export { Group_CharacteristicSchema } from "./Group_Characteristic";
export type { Group_Member } from "./Group_Member";
export { Group_MemberSchema } from "./Group_Member";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { GroupSchemaInternal } from "./Group";

_registerFhirResourceSchemas({
	Group: GroupSchemaInternal,
});
