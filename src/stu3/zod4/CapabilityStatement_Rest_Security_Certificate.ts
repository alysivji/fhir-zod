// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirBase64Binary, fhirCode } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Certificates associated with security profiles. */
export interface CapabilityStatement_Rest_Security_Certificate
	extends BackboneElement {
	/** Actual certificate. */
	blob?: string;
	/** Extensions for blob */
	_blob?: Element;
	/** Mime type for a certificate. */
	type?: string;
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_Rest_Security_CertificateSchemaInternal =
	BackboneElementSchemaInternal.extend({
		blob: fhirBase64Binary().optional(),
		_blob: z.lazy(getElementSchema).optional(),
		type: fhirCode().optional(),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const CapabilityStatement_Rest_Security_CertificateSchema =
	CapabilityStatement_Rest_Security_CertificateSchemaInternal as z.ZodType<CapabilityStatement_Rest_Security_Certificate>;
