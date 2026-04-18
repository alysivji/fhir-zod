import { AccountSchema } from "fhir-zod/r4/Account";
import { BundleSchema } from "fhir-zod/r4/Bundle";
import { EncounterSchema } from "fhir-zod/r4/Encounter";
import { ObservationSchema } from "fhir-zod/r4/Observation";
import { Parameters_ParameterSchema } from "fhir-zod/r4/Parameters";
import {
	ElementDefinitionSchema,
	ExtensionSchema,
	MetaSchema,
	QuantitySchema,
} from "fhir-zod/r4";
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
		encounterClassRequired: true,
		encounterReferenceField: "encounter",
		encounterStatus: "finished",
		focusAcceptsResourceTarget: true,
		label: "R4",
		referenceTypeSupported: true,
	},
);
