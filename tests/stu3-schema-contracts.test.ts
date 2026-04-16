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
} from "fhir-zod/stu3";
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
