// Profile: http://hl7.org/fhir/StructureDefinition/SpecimenDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { SpecimenDefinition_TypeTested } from "./SpecimenDefinition_TypeTested";
import { SpecimenDefinition_TypeTestedSchemaInternal } from "./SpecimenDefinition_TypeTested";

/** A kind of specimen with associated set of requirements. */
export interface SpecimenDefinition extends DomainResource {
	/** The action to be performed for collecting the specimen. */
	collection?: Array<CodeableConcept>;
	/** A business identifier associated with the kind of specimen. */
	identifier?: Identifier;
	/** Preparation of the patient for specimen collection. */
	patientPreparation?: Array<CodeableConcept>;
	/** This is a SpecimenDefinition resource. */
	resourceType: "SpecimenDefinition";
	/** Time aspect of specimen collection (duration or offset). */
	timeAspect?: string;
	/** Extensions for timeAspect */
	_timeAspect?: Element;
	/** The kind of material to be collected. */
	typeCollected?: CodeableConcept;
	/** Specimen conditioned in a container as expected by the testing laboratory. */
	typeTested?: Array<SpecimenDefinition_TypeTested>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getSpecimenDefinition_TypeTestedSchema =
	(): z.ZodType<SpecimenDefinition_TypeTested> =>
		SpecimenDefinition_TypeTestedSchemaInternal as z.ZodType<SpecimenDefinition_TypeTested>;

/** @internal */
export const SpecimenDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		collection: z.lazy(getCodeableConceptSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		patientPreparation: z.lazy(getCodeableConceptSchema).array().optional(),
		resourceType: z.literal("SpecimenDefinition"),
		timeAspect: fhirString().optional(),
		_timeAspect: z.lazy(getElementSchema).optional(),
		typeCollected: z.lazy(getCodeableConceptSchema).optional(),
		typeTested: z
			.lazy(getSpecimenDefinition_TypeTestedSchema)
			.array()
			.optional(),
	}).strict();

export const SpecimenDefinitionSchema =
	SpecimenDefinitionSchemaInternal as z.ZodType<SpecimenDefinition>;
