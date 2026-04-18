// Profile: http://hl7.org/fhir/StructureDefinition/Bundle
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirInstant, fhirString, fhirUri } from "../../shared/fhir-primitives";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history. */
export interface Bundle_Entry_Response extends BackboneElement {
  /** The Etag for the resource, if the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)). */
  etag?: string;
  /** Extensions for etag */
  _etag?: Element;
  /** The date/time that the resource was modified on the server. */
  lastModified?: string;
  /** Extensions for lastModified */
  _lastModified?: Element;
  /** The location header created by processing this operation, populated if the operation returns a location. */
  location?: string;
  /** Extensions for location */
  _location?: Element;
  /** An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction. */
  outcome?: FhirResource;
  /** The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code. */
  status: string;
  /** Extensions for status */
  _status?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const Bundle_Entry_ResponseSchemaInternal =
  BackboneElementSchemaInternal.extend({
    etag: fhirString().optional(),
    _etag: z.lazy(getElementSchema).optional(),
    lastModified: fhirInstant().optional(),
    _lastModified: z.lazy(getElementSchema).optional(),
    location: fhirUri().optional(),
    _location: z.lazy(getElementSchema).optional(),
    outcome: z.lazy(getFhirResourceSchema).optional(),
    status: fhirString(),
    _status: z.lazy(getElementSchema).optional(),
  }).strict();

export const Bundle_Entry_ResponseSchema =
  Bundle_Entry_ResponseSchemaInternal as z.ZodType<Bundle_Entry_Response>;
