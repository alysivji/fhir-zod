// Profile: http://hl7.org/fhir/StructureDefinition/Bundle
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirUri } from "../shared/fhir-primitives";
import type { FhirResource } from "./_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "./_fhirResourceSchema";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Bundle_Entry_Request } from "./Bundle_Entry_Request";
import { Bundle_Entry_RequestSchemaInternal } from "./Bundle_Entry_Request";
import type { Bundle_Entry_Response } from "./Bundle_Entry_Response";
import { Bundle_Entry_ResponseSchemaInternal } from "./Bundle_Entry_Response";
import type { Bundle_Entry_Search } from "./Bundle_Entry_Search";
import { Bundle_Entry_SearchSchemaInternal } from "./Bundle_Entry_Search";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only). */
export interface Bundle_Entry extends BackboneElement {
  /**
   * The Absolute URL for the resource.  The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that:
   * * fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle)
   * * Results from operations might involve resources that are not identified.
   */
  fullUrl?: string;
  /** Extensions for fullUrl */
  _fullUrl?: Element;
  /** A series of links that provide context to this entry. */
  link?: Array<unknown>;
  /** Additional information about how this entry should be processed as part of a transaction. */
  request?: Bundle_Entry_Request;
  /** The Resources for the entry. */
  resource?: FhirResource;
  /** Additional information about how this entry should be processed as part of a transaction. */
  response?: Bundle_Entry_Response;
  /** Information about the search process that lead to the creation of this entry. */
  search?: Bundle_Entry_Search;
}

const getBundle_Entry_RequestSchema = (): z.ZodType<Bundle_Entry_Request> =>
  Bundle_Entry_RequestSchemaInternal as z.ZodType<Bundle_Entry_Request>;
const getBundle_Entry_ResponseSchema = (): z.ZodType<Bundle_Entry_Response> =>
  Bundle_Entry_ResponseSchemaInternal as z.ZodType<Bundle_Entry_Response>;
const getBundle_Entry_SearchSchema = (): z.ZodType<Bundle_Entry_Search> =>
  Bundle_Entry_SearchSchemaInternal as z.ZodType<Bundle_Entry_Search>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const Bundle_EntrySchemaInternal = BackboneElementSchemaInternal.extend({
  fullUrl: fhirUri().optional(),
  _fullUrl: z.lazy(getElementSchema).optional(),
  link: z.unknown().array().optional(),
  request: z.lazy(getBundle_Entry_RequestSchema).optional(),
  resource: z.lazy(getFhirResourceSchema).optional(),
  response: z.lazy(getBundle_Entry_ResponseSchema).optional(),
  search: z.lazy(getBundle_Entry_SearchSchema).optional(),
}).strict();

export const Bundle_EntrySchema =
  Bundle_EntrySchemaInternal as z.ZodType<Bundle_Entry>;
