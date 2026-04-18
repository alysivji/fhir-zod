// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Each interaction or action. */
export interface ExampleScenario_Process_Step_Operation
	extends BackboneElement {
	/** A comment to be inserted in the diagram. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Who starts the transaction. */
	initiator?: string;
	/** Extensions for initiator */
	_initiator?: Element;
	/** Whether the initiator is deactivated right after the transaction. */
	initiatorActive?: boolean;
	/** Extensions for initiatorActive */
	_initiatorActive?: Element;
	/** The human-friendly name of the interaction. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The sequential number of the interaction, e.g. 1.2.5. */
	number: string;
	/** Extensions for number */
	_number?: Element;
	/** Who receives the transaction. */
	receiver?: string;
	/** Extensions for receiver */
	_receiver?: Element;
	/** Whether the receiver is deactivated right after the transaction. */
	receiverActive?: boolean;
	/** Extensions for receiverActive */
	_receiverActive?: Element;
	/** Each resource instance used by the initiator. */
	request?: unknown;
	/** Each resource instance used by the responder. */
	response?: unknown;
	/** The type of operation - CRUD. */
	type?: string;
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExampleScenario_Process_Step_OperationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		initiator: fhirString().optional(),
		_initiator: z.lazy(getElementSchema).optional(),
		initiatorActive: z.boolean().optional(),
		_initiatorActive: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		number: fhirString(),
		_number: z.lazy(getElementSchema).optional(),
		receiver: fhirString().optional(),
		_receiver: z.lazy(getElementSchema).optional(),
		receiverActive: z.boolean().optional(),
		_receiverActive: z.lazy(getElementSchema).optional(),
		request: z.unknown().optional(),
		response: z.unknown().optional(),
		type: fhirString().optional(),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const ExampleScenario_Process_Step_OperationSchema =
	ExampleScenario_Process_Step_OperationSchemaInternal as z.ZodType<ExampleScenario_Process_Step_Operation>;
