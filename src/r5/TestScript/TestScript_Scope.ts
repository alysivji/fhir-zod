// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirCanonical } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** The scope indicates a conformance artifact that is tested by the test(s) within this test case and the expectation of the test outcome(s) as well as the intended test phase inclusion. */
export interface TestScript_Scope extends BackboneElement {
	/** The specific conformance artifact being tested. The canonical reference can be version-specific. */
	artifact: string;
	/** Extensions for artifact */
	_artifact?: Element;
	/** The expectation of whether the test must pass for the system to be considered conformant with the artifact: required - all tests are expected to pass, optional - all test are expected to pass but non-pass status may be allowed, strict - all tests are expected to pass and warnings are treated as a failure. */
	conformance?: CodeableConcept;
	/** The phase of testing for this artifact: unit - development / implementation phase, integration - internal system to system phase, production - live system to system phase (Note, this may involve pii/phi data). */
	phase?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestScript_ScopeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		artifact: fhirCanonical(),
		_artifact: z.lazy(getElementSchema).optional(),
		conformance: z.lazy(getCodeableConceptSchema).optional(),
		phase: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const TestScript_ScopeSchema =
	TestScript_ScopeSchemaInternal as z.ZodType<TestScript_Scope>;
