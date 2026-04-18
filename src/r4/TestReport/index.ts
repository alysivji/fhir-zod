// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { TestReport } from "./TestReport";
export { TestReportSchema } from "./TestReport";
export type { TestReport_Participant } from "./TestReport_Participant";
export { TestReport_ParticipantSchema } from "./TestReport_Participant";
export type { TestReport_Setup } from "./TestReport_Setup";
export { TestReport_SetupSchema } from "./TestReport_Setup";
export type { TestReport_Setup_Action } from "./TestReport_Setup_Action";
export { TestReport_Setup_ActionSchema } from "./TestReport_Setup_Action";
export type { TestReport_Setup_Action_Assert } from "./TestReport_Setup_Action_Assert";
export { TestReport_Setup_Action_AssertSchema } from "./TestReport_Setup_Action_Assert";
export type { TestReport_Setup_Action_Operation } from "./TestReport_Setup_Action_Operation";
export { TestReport_Setup_Action_OperationSchema } from "./TestReport_Setup_Action_Operation";
export type { TestReport_Teardown } from "./TestReport_Teardown";
export { TestReport_TeardownSchema } from "./TestReport_Teardown";
export type { TestReport_Teardown_Action } from "./TestReport_Teardown_Action";
export { TestReport_Teardown_ActionSchema } from "./TestReport_Teardown_Action";
export type { TestReport_Test } from "./TestReport_Test";
export { TestReport_TestSchema } from "./TestReport_Test";
export type { TestReport_Test_Action } from "./TestReport_Test_Action";
export { TestReport_Test_ActionSchema } from "./TestReport_Test_Action";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { TestReportSchemaInternal } from "./TestReport";

_registerFhirResourceSchemas({
	TestReport: TestReportSchemaInternal,
});
