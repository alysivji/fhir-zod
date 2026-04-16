import {
	AccountSchema,
	BundleSchema,
	ElementDefinitionSchema,
	EncounterSchema,
	ExtensionSchema,
	MetaSchema,
	ObservationSchema,
	Parameters_ParameterSchema,
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
