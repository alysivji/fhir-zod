// Profile: http://hl7.org/fhir/StructureDefinition/DeviceComponent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** The production specification such as component revision, serial number, etc. */
export interface DeviceComponent_ProductionSpecification
	extends BackboneElement {
	/** The internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacturer can make use of. */
	componentId?: Identifier;
	/** The printable string defining the component. */
	productionSpec?: string;
	/** Extensions for productionSpec */
	_productionSpec?: Element;
	/** The specification type, such as, serial number, part number, hardware revision, software revision, etc. */
	specType?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const DeviceComponent_ProductionSpecificationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		componentId: z.lazy(getIdentifierSchema).optional(),
		productionSpec: fhirString().optional(),
		_productionSpec: z.lazy(getElementSchema).optional(),
		specType: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const DeviceComponent_ProductionSpecificationSchema =
	DeviceComponent_ProductionSpecificationSchemaInternal as z.ZodType<DeviceComponent_ProductionSpecification>;
