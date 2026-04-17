// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import {
  fhirCanonical,
  fhirDateTime,
  fhirString,
  fhirUri,
} from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ExampleScenario_Actor } from "./ExampleScenario_Actor";
import { ExampleScenario_ActorSchemaInternal } from "./ExampleScenario_Actor";
import type { ExampleScenario_Instance } from "./ExampleScenario_Instance";
import { ExampleScenario_InstanceSchemaInternal } from "./ExampleScenario_Instance";
import type { ExampleScenario_Process } from "./ExampleScenario_Process";
import { ExampleScenario_ProcessSchemaInternal } from "./ExampleScenario_Process";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** Example of workflow instance. */
export interface ExampleScenario extends DomainResource {
  /** Actor participating in the resource. */
  actor?: Array<ExampleScenario_Actor>;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** A copyright statement relating to the example scenario and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the example scenario. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** The date  (and optionally time) when the example scenario was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the example scenario changes. (e.g. the 'content logical definition'). */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A Boolean value to indicate that this example scenario is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** A formal identifier that is used to identify this example scenario when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** Each resource and each version that is present in the workflow. */
  instance?: Array<ExampleScenario_Instance>;
  /** A legal or geographic region in which the example scenario is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** A natural language name identifying the example scenario. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Each major process - a group of operations. */
  process?: Array<ExampleScenario_Process>;
  /** The name of the organization or individual that published the example scenario. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** What the example scenario resource is created for. This should not be used to show the business purpose of the scenario itself, but the purpose of documenting a scenario. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** This is a ExampleScenario resource. */
  resourceType: "ExampleScenario";
  /** The status of this example scenario. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** An absolute URI that is used to identify this example scenario when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this example scenario is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the example scenario is stored on different servers. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate example scenario instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the example scenario when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the example scenario author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
  /** Another nested workflow. */
  workflow?: Array<string | null>;
  /** Extensions for workflow */
  _workflow?: Array<Element | null>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExampleScenario_ActorSchema = (): z.ZodType<ExampleScenario_Actor> =>
  ExampleScenario_ActorSchemaInternal as z.ZodType<ExampleScenario_Actor>;
const getExampleScenario_InstanceSchema =
  (): z.ZodType<ExampleScenario_Instance> =>
    ExampleScenario_InstanceSchemaInternal as z.ZodType<ExampleScenario_Instance>;
const getExampleScenario_ProcessSchema =
  (): z.ZodType<ExampleScenario_Process> =>
    ExampleScenario_ProcessSchemaInternal as z.ZodType<ExampleScenario_Process>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const ExampleScenarioSchemaInternal =
  DomainResourceSchemaInternal.extend({
    actor: z.lazy(getExampleScenario_ActorSchema).array().optional(),
    contact: z.lazy(getContactDetailSchema).array().optional(),
    copyright: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    instance: z.lazy(getExampleScenario_InstanceSchema).array().optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    process: z.lazy(getExampleScenario_ProcessSchema).array().optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("ExampleScenario"),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    url: fhirUri().optional(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
    workflow: fhirCanonical().nullable().array().optional(),
    _workflow: z.lazy(getElementSchema).nullable().array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.workflow,
        record._workflow,
        "workflow",
        "_workflow",
        ctx,
      );
    });

export const ExampleScenarioSchema =
  ExampleScenarioSchemaInternal as z.ZodType<ExampleScenario>;
