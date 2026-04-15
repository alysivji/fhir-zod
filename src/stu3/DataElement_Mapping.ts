// Profile: http://hl7.org/fhir/StructureDefinition/DataElement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirId, fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with. */
export interface DataElement_Mapping extends BackboneElement {
	/** Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** An internal id that is used to identify this mapping set when specific mappings are made on a per-element basis. */
	identity: string;
	/** Extensions for identity */
	_identity?: Element;
	/** A name for the specification that is being mapped to. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** An absolute URI that identifies the specification that this mapping is expressed to. */
	uri?: string;
	/** Extensions for uri */
	_uri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const DataElement_MappingSchemaInternal =
	BackboneElementSchemaInternal.extend({
		comment: fhirString().optional(),
		_comment: z.lazy(getElementSchema).optional(),
		identity: fhirId(),
		_identity: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		uri: fhirUri().optional(),
		_uri: z.lazy(getElementSchema).optional(),
	}).strict();

export const DataElement_MappingSchema =
	DataElement_MappingSchemaInternal as z.ZodType<DataElement_Mapping>;
