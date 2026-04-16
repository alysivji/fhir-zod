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
} from "fhir-zod/r5";
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
