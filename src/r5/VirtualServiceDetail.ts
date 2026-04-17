// Profile: http://hl7.org/fhir/StructureDefinition/VirtualServiceDetail
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString, fhirUrl } from "../shared/fhir-primitives";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { DataType } from "./DataType";
import { DataTypeSchemaInternal } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ExtendedContactDetail } from "./ExtendedContactDetail";
import { ExtendedContactDetailSchemaInternal } from "./ExtendedContactDetail";

/** VirtualServiceDetail Type: Virtual Service Contact Details. */
export interface VirtualServiceDetail extends DataType {
  /** Address to see alternative connection details. */
  additionalInfo?: Array<string | null>;
  /** Extensions for additionalInfo */
  _additionalInfo?: Array<Element | null>;
  /** What address or number needs to be used for a user to connect to the virtual service to join. The channelType informs as to which datatype is appropriate to use (requires knowledge of the specific type). */
  addressContactPoint?: ContactPoint;
  /** What address or number needs to be used for a user to connect to the virtual service to join. The channelType informs as to which datatype is appropriate to use (requires knowledge of the specific type). */
  addressExtendedContactDetail?: ExtendedContactDetail;
  /** What address or number needs to be used for a user to connect to the virtual service to join. The channelType informs as to which datatype is appropriate to use (requires knowledge of the specific type). */
  addressString?: string;
  /** Extensions for addressString */
  _addressString?: Element;
  /** What address or number needs to be used for a user to connect to the virtual service to join. The channelType informs as to which datatype is appropriate to use (requires knowledge of the specific type). */
  addressUrl?: string;
  /** Extensions for addressUrl */
  _addressUrl?: Element;
  /** The type of virtual service to connect to (i.e. Teams, Zoom, Specific VMR technology, WhatsApp). */
  channelType?: Coding;
  /** Maximum number of participants supported by the virtual service. */
  maxParticipants?: number;
  /** Extensions for maxParticipants */
  _maxParticipants?: Element;
  /** Session Key required by the virtual service. */
  sessionKey?: string;
  /** Extensions for sessionKey */
  _sessionKey?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
  ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtendedContactDetailSchema = (): z.ZodType<ExtendedContactDetail> =>
  ExtendedContactDetailSchemaInternal as z.ZodType<ExtendedContactDetail>;

/** @internal */
export const VirtualServiceDetailSchemaInternal = DataTypeSchemaInternal.extend(
  {
    additionalInfo: fhirUrl().nullable().array().optional(),
    _additionalInfo: z.lazy(getElementSchema).nullable().array().optional(),
    addressContactPoint: z.lazy(getContactPointSchema).optional(),
    addressExtendedContactDetail: z
      .lazy(getExtendedContactDetailSchema)
      .optional(),
    addressString: fhirString().optional(),
    _addressString: z.lazy(getElementSchema).optional(),
    addressUrl: fhirUrl().optional(),
    _addressUrl: z.lazy(getElementSchema).optional(),
    channelType: z.lazy(getCodingSchema).optional(),
    maxParticipants: z.number().int().positive().optional(),
    _maxParticipants: z.lazy(getElementSchema).optional(),
    sessionKey: fhirString().optional(),
    _sessionKey: z.lazy(getElementSchema).optional(),
  },
)
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const address_x_Present = [
      "addressContactPoint",
      "addressExtendedContactDetail",
      "addressString",
      "addressUrl",
    ].filter((field) => record[field] !== undefined);
    if (address_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of addressContactPoint, addressExtendedContactDetail, addressString, addressUrl may be present for address[x]",
        path: [address_x_Present[0]],
      });
    }
    validatePrimitiveArrayPair(
      record.additionalInfo,
      record._additionalInfo,
      "additionalInfo",
      "_additionalInfo",
      ctx,
    );
  });

export const VirtualServiceDetailSchema =
  VirtualServiceDetailSchemaInternal as z.ZodType<VirtualServiceDetail>;
