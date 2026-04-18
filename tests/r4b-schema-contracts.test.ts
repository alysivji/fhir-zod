import {
	ElementDefinitionSchema,
	ExtensionSchema,
	MetaSchema,
	QuantitySchema,
} from "fhir-zod/r4b";
import { AccountSchema } from "fhir-zod/r4b/Account";
import { BundleSchema } from "fhir-zod/r4b/Bundle";
import { EncounterSchema } from "fhir-zod/r4b/Encounter";
import { ObservationSchema } from "fhir-zod/r4b/Observation";
import { Parameters_ParameterSchema } from "fhir-zod/r4b/Parameters";
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
		label: "R4B",
		referenceTypeSupported: true,
	},
);
