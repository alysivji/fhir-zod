// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { MedicationKnowledge_AdministrationGuidelines } from "./MedicationKnowledge_AdministrationGuidelines";
import { MedicationKnowledge_AdministrationGuidelinesSchemaInternal } from "./MedicationKnowledge_AdministrationGuidelines";
import type { MedicationKnowledge_Cost } from "./MedicationKnowledge_Cost";
import { MedicationKnowledge_CostSchemaInternal } from "./MedicationKnowledge_Cost";
import type { MedicationKnowledge_DrugCharacteristic } from "./MedicationKnowledge_DrugCharacteristic";
import { MedicationKnowledge_DrugCharacteristicSchemaInternal } from "./MedicationKnowledge_DrugCharacteristic";
import type { MedicationKnowledge_Ingredient } from "./MedicationKnowledge_Ingredient";
import { MedicationKnowledge_IngredientSchemaInternal } from "./MedicationKnowledge_Ingredient";
import type { MedicationKnowledge_Kinetics } from "./MedicationKnowledge_Kinetics";
import { MedicationKnowledge_KineticsSchemaInternal } from "./MedicationKnowledge_Kinetics";
import type { MedicationKnowledge_MedicineClassification } from "./MedicationKnowledge_MedicineClassification";
import { MedicationKnowledge_MedicineClassificationSchemaInternal } from "./MedicationKnowledge_MedicineClassification";
import type { MedicationKnowledge_MonitoringProgram } from "./MedicationKnowledge_MonitoringProgram";
import { MedicationKnowledge_MonitoringProgramSchemaInternal } from "./MedicationKnowledge_MonitoringProgram";
import type { MedicationKnowledge_Monograph } from "./MedicationKnowledge_Monograph";
import { MedicationKnowledge_MonographSchemaInternal } from "./MedicationKnowledge_Monograph";
import type { MedicationKnowledge_Packaging } from "./MedicationKnowledge_Packaging";
import { MedicationKnowledge_PackagingSchemaInternal } from "./MedicationKnowledge_Packaging";
import type { MedicationKnowledge_Regulatory } from "./MedicationKnowledge_Regulatory";
import { MedicationKnowledge_RegulatorySchemaInternal } from "./MedicationKnowledge_Regulatory";
import type { MedicationKnowledge_RelatedMedicationKnowledge } from "./MedicationKnowledge_RelatedMedicationKnowledge";
import { MedicationKnowledge_RelatedMedicationKnowledgeSchemaInternal } from "./MedicationKnowledge_RelatedMedicationKnowledge";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledge extends DomainResource {
	/** Guidelines for the administration of the medication. */
	administrationGuidelines?: Array<MedicationKnowledge_AdministrationGuidelines>;
	/** Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.). */
	amount?: Quantity;
	/** Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor). */
	associatedMedication?: Array<Reference>;
	/** A code that specifies this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems. */
	code?: CodeableConcept;
	/** Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.). */
	contraindication?: Array<Reference>;
	/** The price of the medication. */
	cost?: Array<MedicationKnowledge_Cost>;
	/** Describes the form of the item.  Powder; tablets; capsule. */
	doseForm?: CodeableConcept;
	/** Specifies descriptive properties of the medicine, such as color, shape, imprints, etc. */
	drugCharacteristic?: Array<MedicationKnowledge_DrugCharacteristic>;
	/** Identifies a particular constituent of interest in the product. */
	ingredient?: Array<MedicationKnowledge_Ingredient>;
	/** The intended or approved route of administration. */
	intendedRoute?: Array<CodeableConcept>;
	/** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body. */
	kinetics?: Array<MedicationKnowledge_Kinetics>;
	/** Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product. */
	manufacturer?: Reference;
	/** Categorization of the medication within a formulary or classification system. */
	medicineClassification?: Array<MedicationKnowledge_MedicineClassification>;
	/** The program under which the medication is reviewed. */
	monitoringProgram?: Array<MedicationKnowledge_MonitoringProgram>;
	/** Associated documentation about the medication. */
	monograph?: Array<MedicationKnowledge_Monograph>;
	/** Information that only applies to packages (not products). */
	packaging?: MedicationKnowledge_Packaging;
	/** The instructions for preparing the medication. */
	preparationInstruction?: string;
	/** Extensions for preparationInstruction */
	_preparationInstruction?: Element;
	/** Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.). */
	productType?: Array<CodeableConcept>;
	/** Regulatory information about a medication. */
	regulatory?: Array<MedicationKnowledge_Regulatory>;
	/** Associated or related knowledge about a medication. */
	relatedMedicationKnowledge?: Array<MedicationKnowledge_RelatedMedicationKnowledge>;
	/** This is a MedicationKnowledge resource. */
	resourceType: "MedicationKnowledge";
	/** A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties. */
	status?: "active" | "entered-in-error" | "inactive";
	/** Extensions for status */
	_status?: Element;
	/** Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol. */
	synonym?: Array<string | null>;
	/** Extensions for synonym */
	_synonym?: Array<Element | null>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMedicationKnowledge_AdministrationGuidelinesSchema =
	(): z.ZodType<MedicationKnowledge_AdministrationGuidelines> =>
		MedicationKnowledge_AdministrationGuidelinesSchemaInternal as z.ZodType<MedicationKnowledge_AdministrationGuidelines>;
const getMedicationKnowledge_CostSchema =
	(): z.ZodType<MedicationKnowledge_Cost> =>
		MedicationKnowledge_CostSchemaInternal as z.ZodType<MedicationKnowledge_Cost>;
const getMedicationKnowledge_DrugCharacteristicSchema =
	(): z.ZodType<MedicationKnowledge_DrugCharacteristic> =>
		MedicationKnowledge_DrugCharacteristicSchemaInternal as z.ZodType<MedicationKnowledge_DrugCharacteristic>;
const getMedicationKnowledge_IngredientSchema =
	(): z.ZodType<MedicationKnowledge_Ingredient> =>
		MedicationKnowledge_IngredientSchemaInternal as z.ZodType<MedicationKnowledge_Ingredient>;
const getMedicationKnowledge_KineticsSchema =
	(): z.ZodType<MedicationKnowledge_Kinetics> =>
		MedicationKnowledge_KineticsSchemaInternal as z.ZodType<MedicationKnowledge_Kinetics>;
const getMedicationKnowledge_MedicineClassificationSchema =
	(): z.ZodType<MedicationKnowledge_MedicineClassification> =>
		MedicationKnowledge_MedicineClassificationSchemaInternal as z.ZodType<MedicationKnowledge_MedicineClassification>;
const getMedicationKnowledge_MonitoringProgramSchema =
	(): z.ZodType<MedicationKnowledge_MonitoringProgram> =>
		MedicationKnowledge_MonitoringProgramSchemaInternal as z.ZodType<MedicationKnowledge_MonitoringProgram>;
const getMedicationKnowledge_MonographSchema =
	(): z.ZodType<MedicationKnowledge_Monograph> =>
		MedicationKnowledge_MonographSchemaInternal as z.ZodType<MedicationKnowledge_Monograph>;
const getMedicationKnowledge_PackagingSchema =
	(): z.ZodType<MedicationKnowledge_Packaging> =>
		MedicationKnowledge_PackagingSchemaInternal as z.ZodType<MedicationKnowledge_Packaging>;
const getMedicationKnowledge_RegulatorySchema =
	(): z.ZodType<MedicationKnowledge_Regulatory> =>
		MedicationKnowledge_RegulatorySchemaInternal as z.ZodType<MedicationKnowledge_Regulatory>;
const getMedicationKnowledge_RelatedMedicationKnowledgeSchema =
	(): z.ZodType<MedicationKnowledge_RelatedMedicationKnowledge> =>
		MedicationKnowledge_RelatedMedicationKnowledgeSchemaInternal as z.ZodType<MedicationKnowledge_RelatedMedicationKnowledge>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationKnowledgeSchemaInternal =
	DomainResourceSchemaInternal.extend({
		administrationGuidelines: z
			.lazy(getMedicationKnowledge_AdministrationGuidelinesSchema)
			.array()
			.optional(),
		amount: z.lazy(getQuantitySchema).optional(),
		associatedMedication: z.lazy(getReferenceSchema).array().optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		contraindication: z.lazy(getReferenceSchema).array().optional(),
		cost: z.lazy(getMedicationKnowledge_CostSchema).array().optional(),
		doseForm: z.lazy(getCodeableConceptSchema).optional(),
		drugCharacteristic: z
			.lazy(getMedicationKnowledge_DrugCharacteristicSchema)
			.array()
			.optional(),
		ingredient: z
			.lazy(getMedicationKnowledge_IngredientSchema)
			.array()
			.optional(),
		intendedRoute: z.lazy(getCodeableConceptSchema).array().optional(),
		kinetics: z.lazy(getMedicationKnowledge_KineticsSchema).array().optional(),
		manufacturer: z.lazy(getReferenceSchema).optional(),
		medicineClassification: z
			.lazy(getMedicationKnowledge_MedicineClassificationSchema)
			.array()
			.optional(),
		monitoringProgram: z
			.lazy(getMedicationKnowledge_MonitoringProgramSchema)
			.array()
			.optional(),
		monograph: z
			.lazy(getMedicationKnowledge_MonographSchema)
			.array()
			.optional(),
		packaging: z.lazy(getMedicationKnowledge_PackagingSchema).optional(),
		preparationInstruction: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_preparationInstruction: z.lazy(getElementSchema).optional(),
		productType: z.lazy(getCodeableConceptSchema).array().optional(),
		regulatory: z
			.lazy(getMedicationKnowledge_RegulatorySchema)
			.array()
			.optional(),
		relatedMedicationKnowledge: z
			.lazy(getMedicationKnowledge_RelatedMedicationKnowledgeSchema)
			.array()
			.optional(),
		resourceType: z.literal("MedicationKnowledge"),
		status: z.enum(["active", "entered-in-error", "inactive"]).optional(),
		_status: z.lazy(getElementSchema).optional(),
		synonym: fhirString().nullable().array().optional(),
		_synonym: z.lazy(getElementSchema).nullable().array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.synonym,
				record._synonym,
				"synonym",
				"_synonym",
				ctx,
			);
			validateReferenceTarget(
				record.associatedMedication,
				"associatedMedication",
				["http://hl7.org/fhir/StructureDefinition/Medication"],
				["Medication"],
				ctx,
			);
			validateReferenceTarget(
				record.contraindication,
				"contraindication",
				["http://hl7.org/fhir/StructureDefinition/DetectedIssue"],
				["DetectedIssue"],
				ctx,
			);
			validateReferenceTarget(
				record.manufacturer,
				"manufacturer",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const MedicationKnowledgeSchema =
	MedicationKnowledgeSchemaInternal as z.ZodType<MedicationKnowledge>;
