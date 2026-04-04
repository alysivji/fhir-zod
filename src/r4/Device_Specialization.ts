// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T20:28:54.953Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication. */
export interface Device_Specialization extends BackboneElement {
	/** The standard that is used to operate and communicate. */
	systemType: CodeableConcept;
	/** The version of the standard that is used to operate and communicate. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Device_SpecializationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		systemType: z.lazy(getCodeableConceptSchema),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const Device_SpecializationSchema =
	Device_SpecializationSchemaInternal as z.ZodType<Device_Specialization>;
