// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The step represents a single operation invoked on receiver by sender. */
export interface ExampleScenario_Process_Step_Operation
  extends BackboneElement {
  /** An explanation of what the operation represents and what it does. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The system that invokes the action/transmits the data. */
  initiator?: string;
  /** Extensions for initiator */
  _initiator?: Element;
  /** If false, the initiator is deactivated right after the operation. */
  initiatorActive?: boolean;
  /** Extensions for initiatorActive */
  _initiatorActive?: Element;
  /** The system on which the action is invoked/receives the data. */
  receiver?: string;
  /** Extensions for receiver */
  _receiver?: Element;
  /** If false, the receiver is deactivated right after the operation. */
  receiverActive?: boolean;
  /** Extensions for receiverActive */
  _receiverActive?: Element;
  /** A reference to the instance that is transmitted from requester to receiver as part of the invocation of the operation. */
  request?: unknown;
  /** A reference to the instance that is transmitted from receiver to requester as part of the operation's synchronous response (if any). */
  response?: unknown;
  /** A short descriptive label the step to be used in tables or diagrams. */
  title: string;
  /** Extensions for title */
  _title?: Element;
  /** The standardized type of action (FHIR or otherwise). */
  type?: Coding;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExampleScenario_Process_Step_OperationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    initiator: fhirString().optional(),
    _initiator: z.lazy(getElementSchema).optional(),
    initiatorActive: z.boolean().optional(),
    _initiatorActive: z.lazy(getElementSchema).optional(),
    receiver: fhirString().optional(),
    _receiver: z.lazy(getElementSchema).optional(),
    receiverActive: z.boolean().optional(),
    _receiverActive: z.lazy(getElementSchema).optional(),
    request: z.unknown().optional(),
    response: z.unknown().optional(),
    title: fhirString(),
    _title: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodingSchema).optional(),
  }).strict();

export const ExampleScenario_Process_Step_OperationSchema =
  ExampleScenario_Process_Step_OperationSchemaInternal as z.ZodType<ExampleScenario_Process_Step_Operation>;
