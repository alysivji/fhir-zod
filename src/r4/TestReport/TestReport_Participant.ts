// Source: https://hl7.org/fhir/R4/testreport-definitions.html#TestReport.participant
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { fhirString, fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A participant in the test execution, either the execution engine, a client, or a server. */
export interface TestReport_Participant extends BackboneElement {
  /** The display name of the participant. */
  display?: string;
  /** Extensions for display */
  _display?: Element;
  /** The type of participant. */
  type: "client" | "server" | "test-engine";
  /** Extensions for type */
  _type?: Element;
  /** The uri of the participant. An absolute URL is preferred. */
  uri: string;
  /** Extensions for uri */
  _uri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestReport_ParticipantSchemaInternal =
  BackboneElementSchemaInternal.extend({
    display: fhirString().optional(),
    _display: z.lazy(getElementSchema).optional(),
    type: z.enum(["client", "server", "test-engine"]),
    _type: z.lazy(getElementSchema).optional(),
    uri: fhirUri(),
    _uri: z.lazy(getElementSchema).optional(),
  }).strict();

export const TestReport_ParticipantSchema =
  TestReport_ParticipantSchemaInternal as z.ZodType<TestReport_Participant>;
