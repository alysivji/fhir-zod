import {
	ElementDefinitionSchema,
	ExtensionSchema,
	MetaSchema,
	QuantitySchema,
} from "fhir-zod/stu3";
import { AccountSchema } from "fhir-zod/stu3/Account";
import { BundleSchema } from "fhir-zod/stu3/Bundle";
import { EncounterSchema } from "fhir-zod/stu3/Encounter";
import { ObservationSchema } from "fhir-zod/stu3/Observation";
import { Parameters_ParameterSchema } from "fhir-zod/stu3/Parameters";
import { runVersionSchemaContracts } from "./helpers/version-contract-suites.ts";

runVersionSchemaContracts(
	{
		AccountSchema,
		BundleSchema,
		ElementDefinitionSchema,
		EncounterSchema,
		ExtensionSchema,
		MetaSchema,
		ObservationSchema,
		Parameters_ParameterSchema,
		QuantitySchema,
	},
	{
		accountStatusRequired: false,
		encounterClassRequired: false,
		encounterReferenceField: "context",
		encounterStatus: "finished",
		focusAcceptsResourceTarget: false,
		label: "STU3",
		referenceTypeSupported: false,
	},
);
