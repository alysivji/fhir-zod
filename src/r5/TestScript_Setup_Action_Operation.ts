// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirString,
  fhirUri,
} from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { TestScript_Setup_Action_Operation_RequestHeader } from "./TestScript_Setup_Action_Operation_RequestHeader";
import { TestScript_Setup_Action_Operation_RequestHeaderSchemaInternal } from "./TestScript_Setup_Action_Operation_RequestHeader";

/** The operation to perform. */
export interface TestScript_Setup_Action_Operation extends BackboneElement {
  /** The mime-type to use for RESTful operation in the 'Accept' header. */
  accept?: string;
  /** Extensions for accept */
  _accept?: Element;
  /** The mime-type to use for RESTful operation in the 'Content-Type' header. */
  contentType?: string;
  /** Extensions for contentType */
  _contentType?: Element;
  /** The description would be used by test engines for tracking and reporting purposes. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The server where the request message is destined for.  Must be one of the server numbers listed in TestScript.destination section. */
  destination?: number;
  /** Extensions for destination */
  _destination?: Element;
  /** Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths. */
  encodeRequestUrl: boolean;
  /** Extensions for encodeRequestUrl */
  _encodeRequestUrl?: Element;
  /** The label would be used for tracking/logging purposes by test engines. */
  label?: string;
  /** Extensions for label */
  _label?: Element;
  /** The HTTP method the test engine MUST use for this operation regardless of any other operation details. */
  method?: "delete" | "get" | "head" | "options" | "patch" | "post" | "put";
  /** Extensions for method */
  _method?: Element;
  /** The server where the request message originates from.  Must be one of the server numbers listed in TestScript.origin section. */
  origin?: number;
  /** Extensions for origin */
  _origin?: Element;
  /** Path plus parameters after [type].  Used to set parts of the request URL explicitly. */
  params?: string;
  /** Extensions for params */
  _params?: Element;
  /** Header elements would be used to set HTTP headers. */
  requestHeader?: Array<TestScript_Setup_Action_Operation_RequestHeader>;
  /** The fixture id (maybe new) to map to the request. */
  requestId?: string;
  /** Extensions for requestId */
  _requestId?: Element;
  /** The type of the FHIR resource. See the [resource list](resourcelist.html). Data type of uri is needed when non-HL7 artifacts are identified. */
  resource?: string;
  /** Extensions for resource */
  _resource?: Element;
  /** The fixture id (maybe new) to map to the response. */
  responseId?: string;
  /** Extensions for responseId */
  _responseId?: Element;
  /** The id of the fixture used as the body of a PUT or POST request. */
  sourceId?: string;
  /** Extensions for sourceId */
  _sourceId?: Element;
  /** Id of fixture used for extracting the [id],  [type], and [vid] for GET requests. */
  targetId?: string;
  /** Extensions for targetId */
  _targetId?: Element;
  /** Server interaction or operation type. */
  type?: Coding;
  /** Complete request URL. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getTestScript_Setup_Action_Operation_RequestHeaderSchema =
  (): z.ZodType<TestScript_Setup_Action_Operation_RequestHeader> =>
    TestScript_Setup_Action_Operation_RequestHeaderSchemaInternal as z.ZodType<TestScript_Setup_Action_Operation_RequestHeader>;

/** @internal */
export const TestScript_Setup_Action_OperationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    accept: fhirCode().optional(),
    _accept: z.lazy(getElementSchema).optional(),
    contentType: fhirCode().optional(),
    _contentType: z.lazy(getElementSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    destination: z.number().int().optional(),
    _destination: z.lazy(getElementSchema).optional(),
    encodeRequestUrl: z.boolean(),
    _encodeRequestUrl: z.lazy(getElementSchema).optional(),
    label: fhirString().optional(),
    _label: z.lazy(getElementSchema).optional(),
    method: z
      .enum(["delete", "get", "head", "options", "patch", "post", "put"])
      .optional(),
    _method: z.lazy(getElementSchema).optional(),
    origin: z.number().int().optional(),
    _origin: z.lazy(getElementSchema).optional(),
    params: fhirString().optional(),
    _params: z.lazy(getElementSchema).optional(),
    requestHeader: z
      .lazy(getTestScript_Setup_Action_Operation_RequestHeaderSchema)
      .array()
      .optional(),
    requestId: fhirId().optional(),
    _requestId: z.lazy(getElementSchema).optional(),
    resource: fhirUri().optional(),
    _resource: z.lazy(getElementSchema).optional(),
    responseId: fhirId().optional(),
    _responseId: z.lazy(getElementSchema).optional(),
    sourceId: fhirId().optional(),
    _sourceId: z.lazy(getElementSchema).optional(),
    targetId: fhirId().optional(),
    _targetId: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodingSchema).optional(),
    url: fhirString().optional(),
    _url: z.lazy(getElementSchema).optional(),
  }).strict();

export const TestScript_Setup_Action_OperationSchema =
  TestScript_Setup_Action_OperationSchemaInternal as z.ZodType<TestScript_Setup_Action_Operation>;
