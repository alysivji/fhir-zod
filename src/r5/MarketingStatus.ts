// Profile: http://hl7.org/fhir/StructureDefinition/MarketingStatus
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import type { BackboneType } from "./BackboneType";
import { BackboneTypeSchemaInternal } from "./BackboneType";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** MarketingStatus Type: The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
export interface MarketingStatus extends BackboneType {
  /** The country in which the marketing authorization has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements. */
  country?: CodeableConcept;
  /** The date when the Medicinal Product is placed on the market by the Marketing Authorization Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain. */
  dateRange?: Period;
  /** Where a Medicines Regulatory Agency has granted a marketing authorization for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified. */
  jurisdiction?: CodeableConcept;
  /** The date when the Medicinal Product is placed on the market by the Marketing Authorization Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain. */
  restoreDate?: string;
  /** Extensions for restoreDate */
  _restoreDate?: Element;
  /** This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples. */
  status: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const MarketingStatusSchemaInternal = BackboneTypeSchemaInternal.extend({
  country: z.lazy(getCodeableConceptSchema).optional(),
  dateRange: z.lazy(getPeriodSchema).optional(),
  jurisdiction: z.lazy(getCodeableConceptSchema).optional(),
  restoreDate: fhirDateTime().optional(),
  _restoreDate: z.lazy(getElementSchema).optional(),
  status: z.lazy(getCodeableConceptSchema),
}).strict();

export const MarketingStatusSchema =
  MarketingStatusSchemaInternal as z.ZodType<MarketingStatus>;
