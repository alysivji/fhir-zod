// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirCanonical, fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Capabilities that must exist and are assumed to function correctly on the FHIR server being tested. */
export interface TestScript_Metadata_Capability extends BackboneElement {
	/** Minimum capabilities required of server for test script to execute successfully.   If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped. */
	capabilities: string;
	/** Extensions for capabilities */
	_capabilities?: Element;
	/** Description of the capabilities that this test script is requiring the server to support. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Which server these requirements apply to. */
	destination?: number;
	/** Extensions for destination */
	_destination?: Element;
	/** Links to the FHIR specification that describes this interaction and the resources involved in more detail. */
	link?: Array<string>;
	/** Extensions for link */
	_link?: Array<Element>;
	/** Which origin server these requirements apply to. */
	origin?: Array<number>;
	/** Extensions for origin */
	_origin?: Array<Element>;
	/** Whether or not the test execution will require the given capabilities of the server in order for this test script to execute. */
	required: boolean;
	/** Extensions for required */
	_required?: Element;
	/** Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute. */
	validated: boolean;
	/** Extensions for validated */
	_validated?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestScript_Metadata_CapabilitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		capabilities: fhirCanonical(),
		_capabilities: z.lazy(getElementSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		destination: z.number().int().optional(),
		_destination: z.lazy(getElementSchema).optional(),
		link: fhirUri().array().optional(),
		_link: z.lazy(getElementSchema).array().optional(),
		origin: z.number().int().array().optional(),
		_origin: z.lazy(getElementSchema).array().optional(),
		required: z.boolean(),
		_required: z.lazy(getElementSchema).optional(),
		validated: z.boolean(),
		_validated: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestScript_Metadata_CapabilitySchema =
	TestScript_Metadata_CapabilitySchemaInternal as z.ZodType<TestScript_Metadata_Capability>;
