// Release: STU3
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import type { Account } from "./Account";
import type { ActivityDefinition } from "./ActivityDefinition";
import type { AdverseEvent } from "./AdverseEvent";
import type { AllergyIntolerance } from "./AllergyIntolerance";
import type { Appointment } from "./Appointment";
import type { AppointmentResponse } from "./AppointmentResponse";
import type { AuditEvent } from "./AuditEvent";
import type { Basic } from "./Basic";
import type { Binary } from "./Binary";
import type { BodySite } from "./BodySite";
import type { Bundle } from "./Bundle";
import type { CapabilityStatement } from "./CapabilityStatement";
import type { CarePlan } from "./CarePlan";
import type { CareTeam } from "./CareTeam";
import type { ChargeItem } from "./ChargeItem";
import type { Claim } from "./Claim";
import type { ClaimResponse } from "./ClaimResponse";
import type { ClinicalImpression } from "./ClinicalImpression";
import type { CodeSystem } from "./CodeSystem";
import type { Communication } from "./Communication";
import type { CommunicationRequest } from "./CommunicationRequest";
import type { CompartmentDefinition } from "./CompartmentDefinition";
import type { Composition } from "./Composition";
import type { ConceptMap } from "./ConceptMap";
import type { Condition } from "./Condition";
import type { Consent } from "./Consent";
import type { Contract } from "./Contract";
import type { Coverage } from "./Coverage";
import type { DataElement } from "./DataElement";
import type { DetectedIssue } from "./DetectedIssue";
import type { Device } from "./Device";
import type { DeviceComponent } from "./DeviceComponent";
import type { DeviceMetric } from "./DeviceMetric";
import type { DeviceRequest } from "./DeviceRequest";
import type { DeviceUseStatement } from "./DeviceUseStatement";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentManifest } from "./DocumentManifest";
import type { DocumentReference } from "./DocumentReference";
import type { EligibilityRequest } from "./EligibilityRequest";
import type { EligibilityResponse } from "./EligibilityResponse";
import type { Encounter } from "./Encounter";
import type { Endpoint } from "./Endpoint";
import type { EnrollmentRequest } from "./EnrollmentRequest";
import type { EnrollmentResponse } from "./EnrollmentResponse";
import type { EpisodeOfCare } from "./EpisodeOfCare";
import type { ExpansionProfile } from "./ExpansionProfile";
import type { ExplanationOfBenefit } from "./ExplanationOfBenefit";
import type { FamilyMemberHistory } from "./FamilyMemberHistory";
import type { Flag } from "./Flag";
import type { Goal } from "./Goal";
import type { GraphDefinition } from "./GraphDefinition";
import type { Group } from "./Group";
import type { GuidanceResponse } from "./GuidanceResponse";
import type { HealthcareService } from "./HealthcareService";
import type { ImagingManifest } from "./ImagingManifest";
import type { ImagingStudy } from "./ImagingStudy";
import type { Immunization } from "./Immunization";
import type { ImmunizationRecommendation } from "./ImmunizationRecommendation";
import type { ImplementationGuide } from "./ImplementationGuide";
import type { Library } from "./Library";
import type { Linkage } from "./Linkage";
import type { List } from "./List";
import type { Location } from "./Location";
import type { Measure } from "./Measure";
import type { MeasureReport } from "./MeasureReport";
import type { Media } from "./Media";
import type { Medication } from "./Medication";
import type { MedicationAdministration } from "./MedicationAdministration";
import type { MedicationDispense } from "./MedicationDispense";
import type { MedicationRequest } from "./MedicationRequest";
import type { MedicationStatement } from "./MedicationStatement";
import type { MessageDefinition } from "./MessageDefinition";
import type { MessageHeader } from "./MessageHeader";
import type { NamingSystem } from "./NamingSystem";
import type { NutritionOrder } from "./NutritionOrder";
import type { Observation } from "./Observation";
import type { OperationDefinition } from "./OperationDefinition";
import type { OperationOutcome } from "./OperationOutcome";
import type { Organization } from "./Organization";
import type { Parameters } from "./Parameters";
import type { Patient } from "./Patient";
import type { PaymentNotice } from "./PaymentNotice";
import type { PaymentReconciliation } from "./PaymentReconciliation";
import type { Person } from "./Person";
import type { PlanDefinition } from "./PlanDefinition";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { ProcedureRequest } from "./ProcedureRequest";
import type { ProcessRequest } from "./ProcessRequest";
import type { ProcessResponse } from "./ProcessResponse";
import type { Provenance } from "./Provenance";
import type { Questionnaire } from "./Questionnaire";
import type { QuestionnaireResponse } from "./QuestionnaireResponse";
import type { ReferralRequest } from "./ReferralRequest";
import type { RelatedPerson } from "./RelatedPerson";
import type { RequestGroup } from "./RequestGroup";
import type { ResearchStudy } from "./ResearchStudy";
import type { ResearchSubject } from "./ResearchSubject";
import type { RiskAssessment } from "./RiskAssessment";
import type { Schedule } from "./Schedule";
import type { SearchParameter } from "./SearchParameter";
import type { Sequence } from "./Sequence";
import type { ServiceDefinition } from "./ServiceDefinition";
import type { Slot } from "./Slot";
import type { Specimen } from "./Specimen";
import type { StructureDefinition } from "./StructureDefinition";
import type { StructureMap } from "./StructureMap";
import type { Subscription } from "./Subscription";
import type { Substance } from "./Substance";
import type { SupplyDelivery } from "./SupplyDelivery";
import type { SupplyRequest } from "./SupplyRequest";
import type { Task } from "./Task";
import type { TestReport } from "./TestReport";
import type { TestScript } from "./TestScript";
import type { ValueSet } from "./ValueSet";
import type { VisionPrescription } from "./VisionPrescription";

export type FhirResource =
	| Account
	| ActivityDefinition
	| AdverseEvent
	| AllergyIntolerance
	| Appointment
	| AppointmentResponse
	| AuditEvent
	| Basic
	| Binary
	| BodySite
	| Bundle
	| CapabilityStatement
	| CarePlan
	| CareTeam
	| ChargeItem
	| Claim
	| ClaimResponse
	| ClinicalImpression
	| CodeSystem
	| Communication
	| CommunicationRequest
	| CompartmentDefinition
	| Composition
	| ConceptMap
	| Condition
	| Consent
	| Contract
	| Coverage
	| DataElement
	| DetectedIssue
	| Device
	| DeviceComponent
	| DeviceMetric
	| DeviceRequest
	| DeviceUseStatement
	| DiagnosticReport
	| DocumentManifest
	| DocumentReference
	| EligibilityRequest
	| EligibilityResponse
	| Encounter
	| Endpoint
	| EnrollmentRequest
	| EnrollmentResponse
	| EpisodeOfCare
	| ExpansionProfile
	| ExplanationOfBenefit
	| FamilyMemberHistory
	| Flag
	| Goal
	| GraphDefinition
	| Group
	| GuidanceResponse
	| HealthcareService
	| ImagingManifest
	| ImagingStudy
	| Immunization
	| ImmunizationRecommendation
	| ImplementationGuide
	| Library
	| Linkage
	| List
	| Location
	| Measure
	| MeasureReport
	| Media
	| Medication
	| MedicationAdministration
	| MedicationDispense
	| MedicationRequest
	| MedicationStatement
	| MessageDefinition
	| MessageHeader
	| NamingSystem
	| NutritionOrder
	| Observation
	| OperationDefinition
	| OperationOutcome
	| Organization
	| Parameters
	| Patient
	| PaymentNotice
	| PaymentReconciliation
	| Person
	| PlanDefinition
	| Practitioner
	| PractitionerRole
	| Procedure
	| ProcedureRequest
	| ProcessRequest
	| ProcessResponse
	| Provenance
	| Questionnaire
	| QuestionnaireResponse
	| ReferralRequest
	| RelatedPerson
	| RequestGroup
	| ResearchStudy
	| ResearchSubject
	| RiskAssessment
	| Schedule
	| SearchParameter
	| Sequence
	| ServiceDefinition
	| Slot
	| Specimen
	| StructureDefinition
	| StructureMap
	| Subscription
	| Substance
	| SupplyDelivery
	| SupplyRequest
	| Task
	| TestReport
	| TestScript
	| ValueSet
	| VisionPrescription;

const registry = new Map<string, z.ZodTypeAny>();

/** @internal */
export function _registerFhirResourceSchemas(
	entries: Readonly<Record<string, z.ZodTypeAny>>,
): void {
	for (const [resourceType, schema] of Object.entries(entries)) {
		registry.set(resourceType, schema);
	}
}

/** @internal */
export const FhirResourceSchemaInternal = z.lazy(
	(): z.ZodType<FhirResource> =>
		z.any().superRefine((value, ctx) => {
			if (typeof value !== "object" || value === null) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Expected a FHIR resource object",
				});
				return;
			}
			const resourceType = (value as { resourceType?: unknown }).resourceType;
			if (typeof resourceType !== "string") {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Missing or non-string resourceType",
					path: ["resourceType"],
				});
				return;
			}
			const schema = registry.get(resourceType);
			if (!schema) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: `Unknown FHIR resourceType: ${resourceType}`,
					path: ["resourceType"],
				});
				return;
			}
			const result = schema.safeParse(value);
			if (!result.success) {
				for (const issue of result.error.issues) {
					ctx.addIssue(issue as never);
				}
			}
		}) as unknown as z.ZodType<FhirResource>,
);
