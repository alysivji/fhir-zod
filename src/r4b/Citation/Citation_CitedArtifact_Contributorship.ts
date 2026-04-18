// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Citation_CitedArtifact_Contributorship_Entry } from "./Citation_CitedArtifact_Contributorship_Entry";
import { Citation_CitedArtifact_Contributorship_EntrySchemaInternal } from "./Citation_CitedArtifact_Contributorship_Entry";
import type { Citation_CitedArtifact_Contributorship_Summary } from "./Citation_CitedArtifact_Contributorship_Summary";
import { Citation_CitedArtifact_Contributorship_SummarySchemaInternal } from "./Citation_CitedArtifact_Contributorship_Summary";

/** This element is used to list authors and other contributors, their contact information, specific contributions, and summary statements. */
export interface Citation_CitedArtifact_Contributorship
  extends BackboneElement {
  /** Indicates if the list includes all authors and/or contributors. */
  complete?: boolean;
  /** Extensions for complete */
  _complete?: Element;
  /** An individual entity named in the author list or contributor list. */
  entry?: Array<Citation_CitedArtifact_Contributorship_Entry>;
  /** Used to record a display of the author/contributor list without separate coding for each list member. */
  summary?: Array<Citation_CitedArtifact_Contributorship_Summary>;
}

const getCitation_CitedArtifact_Contributorship_EntrySchema =
  (): z.ZodType<Citation_CitedArtifact_Contributorship_Entry> =>
    Citation_CitedArtifact_Contributorship_EntrySchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship_Entry>;
const getCitation_CitedArtifact_Contributorship_SummarySchema =
  (): z.ZodType<Citation_CitedArtifact_Contributorship_Summary> =>
    Citation_CitedArtifact_Contributorship_SummarySchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship_Summary>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Citation_CitedArtifact_ContributorshipSchemaInternal =
  BackboneElementSchemaInternal.extend({
    complete: z.boolean().optional(),
    _complete: z.lazy(getElementSchema).optional(),
    entry: z
      .lazy(getCitation_CitedArtifact_Contributorship_EntrySchema)
      .array()
      .optional(),
    summary: z
      .lazy(getCitation_CitedArtifact_Contributorship_SummarySchema)
      .array()
      .optional(),
  }).strict();

export const Citation_CitedArtifact_ContributorshipSchema =
  Citation_CitedArtifact_ContributorshipSchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship>;
