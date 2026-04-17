// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceProtein
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times. */
export interface SubstanceProtein_Subunit extends BackboneElement {
  /** The modification at the C-terminal shall be specified. */
  cTerminalModification?: string;
  /** Extensions for cTerminalModification */
  _cTerminalModification?: Element;
  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID. */
  cTerminalModificationId?: Identifier;
  /** Length of linear sequences of amino acids contained in the subunit. */
  length?: number;
  /** Extensions for length */
  _length?: Element;
  /** The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified. */
  nTerminalModification?: string;
  /** Extensions for nTerminalModification */
  _nTerminalModification?: Element;
  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID. */
  nTerminalModificationId?: Identifier;
  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence. */
  sequence?: string;
  /** Extensions for sequence */
  _sequence?: Element;
  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence. */
  sequenceAttachment?: Attachment;
  /** Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts. */
  subunit?: number;
  /** Extensions for subunit */
  _subunit?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const SubstanceProtein_SubunitSchemaInternal =
  BackboneElementSchemaInternal.extend({
    cTerminalModification: fhirString().optional(),
    _cTerminalModification: z.lazy(getElementSchema).optional(),
    cTerminalModificationId: z.lazy(getIdentifierSchema).optional(),
    length: z.number().int().optional(),
    _length: z.lazy(getElementSchema).optional(),
    nTerminalModification: fhirString().optional(),
    _nTerminalModification: z.lazy(getElementSchema).optional(),
    nTerminalModificationId: z.lazy(getIdentifierSchema).optional(),
    sequence: fhirString().optional(),
    _sequence: z.lazy(getElementSchema).optional(),
    sequenceAttachment: z.lazy(getAttachmentSchema).optional(),
    subunit: z.number().int().optional(),
    _subunit: z.lazy(getElementSchema).optional(),
  }).strict();

export const SubstanceProtein_SubunitSchema =
  SubstanceProtein_SubunitSchemaInternal as z.ZodType<SubstanceProtein_Subunit>;
