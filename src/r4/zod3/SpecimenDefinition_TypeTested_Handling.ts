// Profile: http://hl7.org/fhir/StructureDefinition/SpecimenDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process. */
export interface SpecimenDefinition_TypeTested_Handling
	extends BackboneElement {
	/** Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'. */
	instruction?: string;
	/** Extensions for instruction */
	_instruction?: Element;
	/** The maximum time interval of preservation of the specimen with these conditions. */
	maxDuration?: Duration;
	/** It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element. */
	temperatureQualifier?: CodeableConcept;
	/** The temperature interval for this set of handling instructions. */
	temperatureRange?: Range;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const SpecimenDefinition_TypeTested_HandlingSchemaInternal =
	BackboneElementSchemaInternal.extend({
		instruction: fhirString().optional(),
		_instruction: z.lazy(getElementSchema).optional(),
		maxDuration: z.lazy(getDurationSchema).optional(),
		temperatureQualifier: z.lazy(getCodeableConceptSchema).optional(),
		temperatureRange: z.lazy(getRangeSchema).optional(),
	}).strict();

export const SpecimenDefinition_TypeTested_HandlingSchema =
	SpecimenDefinition_TypeTested_HandlingSchemaInternal as z.ZodType<SpecimenDefinition_TypeTested_Handling>;
