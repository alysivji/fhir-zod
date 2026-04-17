// Profile: http://hl7.org/fhir/StructureDefinition/DomainResource
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import type { FhirResource } from "./_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "./_fhirResourceSchema";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Narrative } from "./Narrative";
import { NarrativeSchemaInternal } from "./Narrative";
import type { Resource } from "./Resource";
import { ResourceSchemaInternal } from "./Resource";

/** A resource that includes narrative, extensions, and contained resources. */
export interface DomainResource extends Resource {
  /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
  contained?: Array<FhirResource>;
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Array<Extension>;
  /**
   * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<Extension>;
  /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
  text?: Narrative;
}

const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const DomainResourceSchemaInternal = ResourceSchemaInternal.extend({
  contained: z.lazy(getFhirResourceSchema).array().optional(),
  extension: z.lazy(getExtensionSchema).array().optional(),
  modifierExtension: z.lazy(getExtensionSchema).array().optional(),
  text: z.lazy(getNarrativeSchema).optional(),
}).strict();

export const DomainResourceSchema =
  DomainResourceSchemaInternal as z.ZodType<DomainResource>;
