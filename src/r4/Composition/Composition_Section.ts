// Profile: http://hl7.org/fhir/StructureDefinition/Composition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The root of the sections that make up the composition. */
export interface Composition_Section extends BackboneElement {
  /** Identifies who is responsible for the information in this section, not necessarily who typed it in. */
  author?: Array<Reference>;
  /** A code identifying the kind of content contained within the section. This must be consistent with the section title. */
  code?: CodeableConcept;
  /** If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason. */
  emptyReason?: CodeableConcept;
  /** A reference to the actual resource from which the narrative in the section is derived. */
  entry?: Array<Reference>;
  /** The actual focus of the section when it is not the subject of the composition, but instead represents something or someone associated with the subject such as (for a patient subject) a spouse, parent, fetus, or donor. If not focus is specified, the focus is assumed to be focus of the parent section, or, for a section in the Composition itself, the subject of the composition. Sections with a focus SHALL only include resources where the logical subject (patient, subject, focus, etc.) matches the section focus, or the resources have no logical subject (few resources). */
  focus?: Reference;
  /** How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted. */
  mode?: "changes" | "snapshot" | "working";
  /** Extensions for mode */
  _mode?: Element;
  /** Specifies the order applied to the items in the section entries. */
  orderedBy?: CodeableConcept;
  /** A nested sub-section within this section. */
  section?: Array<unknown>;
  /** A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. */
  text?: Narrative;
  /** The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Composition_SectionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    author: z.lazy(getReferenceSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema).optional(),
    emptyReason: z.lazy(getCodeableConceptSchema).optional(),
    entry: z.lazy(getReferenceSchema).array().optional(),
    focus: z.lazy(getReferenceSchema).optional(),
    mode: z.enum(["changes", "snapshot", "working"]).optional(),
    _mode: z.lazy(getElementSchema).optional(),
    orderedBy: z.lazy(getCodeableConceptSchema).optional(),
    section: z.unknown().array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.author,
        "author",
        [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "Device",
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
      validateReferenceTarget(
        record.entry,
        "entry",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
      validateReferenceTarget(
        record.focus,
        "focus",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const Composition_SectionSchema =
  Composition_SectionSchemaInternal as z.ZodType<Composition_Section>;
