// Profile: http://hl7.org/fhir/StructureDefinition/RegulatedAuthorization
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirDateTime } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { RegulatedAuthorization_Case } from "./RegulatedAuthorization_Case";
import { RegulatedAuthorization_CaseSchemaInternal } from "./RegulatedAuthorization_Case";

/** Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product. */
export interface RegulatedAuthorization extends DomainResource {
	/** The legal or regulatory framework against which this authorization is granted, or other reasons for it. */
	basis?: Array<CodeableConcept>;
	/** The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page). */
	case?: RegulatedAuthorization_Case;
	/** General textual supporting information. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The organization that has been granted this authorization, by some authoritative body (the 'regulator'). */
	holder?: Reference;
	/** Business identifier for the authorization, typically assigned by the authorizing body. */
	identifier?: Array<Identifier>;
	/** Condition for which the use of the regulated product applies. */
	indication?: CodeableReference;
	/** The intended use of the product, e.g. prevention, treatment, diagnosis. */
	intendedUse?: CodeableConcept;
	/** The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted. */
	region?: Array<CodeableConcept>;
	/** The regulatory authority or authorizing body granting the authorization. For example, European Medicines Agency (EMA), Food and Drug Administration (FDA), Health Canada (HC), etc. */
	regulator?: Reference;
	/** This is a RegulatedAuthorization resource. */
	resourceType: "RegulatedAuthorization";
	/** The status that is authorised e.g. approved. Intermediate states and actions can be tracked with cases and applications. */
	status?: CodeableConcept;
	/** The date at which the current status was assigned. */
	statusDate?: string;
	/** Extensions for statusDate */
	_statusDate?: Element;
	/** The product type, treatment, facility or activity that is being authorized. */
	subject?: Array<Reference>;
	/** Overall type of this authorization, for example drug marketing approval, orphan drug designation. */
	type?: CodeableConcept;
	/** The time period in which the regulatory approval, clearance or licencing is in effect. As an example, a Marketing Authorization includes the date of authorization and/or an expiration date. */
	validityPeriod?: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getRegulatedAuthorization_CaseSchema =
	(): z.ZodType<RegulatedAuthorization_Case> =>
		RegulatedAuthorization_CaseSchemaInternal as z.ZodType<RegulatedAuthorization_Case>;

/** @internal */
export const RegulatedAuthorizationSchemaInternal =
	DomainResourceSchemaInternal.extend({
		basis: z.lazy(getCodeableConceptSchema).array().optional(),
		case: z.lazy(getRegulatedAuthorization_CaseSchema).optional(),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		holder: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		indication: z.lazy(getCodeableReferenceSchema).optional(),
		intendedUse: z.lazy(getCodeableConceptSchema).optional(),
		region: z.lazy(getCodeableConceptSchema).array().optional(),
		regulator: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("RegulatedAuthorization"),
		status: z.lazy(getCodeableConceptSchema).optional(),
		statusDate: fhirDateTime().optional(),
		_statusDate: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		validityPeriod: z.lazy(getPeriodSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.holder,
				"holder",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.regulator,
				"regulator",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
					"http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
					"http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
					"http://hl7.org/fhir/StructureDefinition/Location",
					"http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
					"http://hl7.org/fhir/StructureDefinition/NutritionProduct",
					"http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition",
					"http://hl7.org/fhir/StructureDefinition/PlanDefinition",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/ResearchStudy",
					"http://hl7.org/fhir/StructureDefinition/SubstanceDefinition",
				],
				[
					"ActivityDefinition",
					"BiologicallyDerivedProduct",
					"DeviceDefinition",
					"Location",
					"MedicinalProductDefinition",
					"NutritionProduct",
					"ObservationDefinition",
					"Organization",
					"PackagedProductDefinition",
					"PlanDefinition",
					"Practitioner",
					"ResearchStudy",
					"SubstanceDefinition",
				],
				ctx,
			);
		});

export const RegulatedAuthorizationSchema =
	RegulatedAuthorizationSchemaInternal as z.ZodType<RegulatedAuthorization>;
