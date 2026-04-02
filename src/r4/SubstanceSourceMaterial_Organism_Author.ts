// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** 4.9.13.6.1 Author type (Conditional). */
export interface SubstanceSourceMaterial_Organism_Author
	extends BackboneElement {
	/** The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank). */
	authorDescription?: string;
	/** Extensions for authorDescription */
	_authorDescription?: Element;
	/** The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name. */
	authorType?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubstanceSourceMaterial_Organism_AuthorSchemaInternal =
	BackboneElementSchemaInternal.extend({
		authorDescription: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_authorDescription: z.lazy(getElementSchema).optional(),
		authorType: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstanceSourceMaterial_Organism_AuthorSchema =
	SubstanceSourceMaterial_Organism_AuthorSchemaInternal as z.ZodType<SubstanceSourceMaterial_Organism_Author>;
