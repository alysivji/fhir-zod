import {
	ElementDefinitionSchema,
	ExtensionSchema,
	MetaSchema,
	QuantitySchema,
} from "fhir-zod/r5";
import { AccountSchema } from "fhir-zod/r5/Account";
import { BundleSchema } from "fhir-zod/r5/Bundle";
import { EncounterSchema } from "fhir-zod/r5/Encounter";
import { ObservationSchema } from "fhir-zod/r5/Observation";
import { Parameters_ParameterSchema } from "fhir-zod/r5/Parameters";
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
		accountStatusRequired: true,
		encounterClassRequired: false,
		encounterReferenceField: "encounter",
		encounterStatus: "completed",
		focusAcceptsResourceTarget: true,
		label: "R5",
		referenceTypeSupported: true,
	},
);
