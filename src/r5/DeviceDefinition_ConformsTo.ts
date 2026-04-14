// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { RelatedArtifact } from "./RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";

/** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device. The device may be certified as conformant to these specifications e.g., communication, performance, process, measurement, or specialization standards. */
export interface DeviceDefinition_ConformsTo extends BackboneElement {
	/** Describes the type of the standard, specification, or formal guidance. */
	category?: CodeableConcept;
	/** Standard, regulation, certification, or guidance website, document, or other publication, or similar, supporting the conformance. */
	source?: Array<RelatedArtifact>;
	/** Code that identifies the specific standard, specification, protocol, formal guidance, regulation, legislation, or certification scheme to which the device adheres. */
	specification: CodeableConcept;
	/** Identifies the specific form or variant of the standard, specification, or formal guidance. This may be a 'version number', release, document edition, publication year, or other label. */
	version?: Array<string>;
	/** Extensions for version */
	_version?: Array<Element>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;

/** @internal */
export const DeviceDefinition_ConformsToSchemaInternal =
	BackboneElementSchemaInternal.extend({
		category: z.lazy(getCodeableConceptSchema).optional(),
		source: z.lazy(getRelatedArtifactSchema).array().optional(),
		specification: z.lazy(getCodeableConceptSchema),
		version: fhirString().array().optional(),
		_version: z.lazy(getElementSchema).array().optional(),
	}).strict();

export const DeviceDefinition_ConformsToSchema =
	DeviceDefinition_ConformsToSchemaInternal as z.ZodType<DeviceDefinition_ConformsTo>;
