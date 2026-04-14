// Profile: http://hl7.org/fhir/StructureDefinition/GraphDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirCanonical, fhirId, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Potential target for the link. */
export interface GraphDefinition_Node extends BackboneElement {
	/** Information about why this node is of interest in this graph definition. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Internal ID of node - target for link references. */
	nodeId: string;
	/** Extensions for nodeId */
	_nodeId?: Element;
	/** Profile for the target resource. */
	profile?: string;
	/** Extensions for profile */
	_profile?: Element;
	/** Type of resource this link refers to. */
	type:
		| "BodySite"
		| "CatalogEntry"
		| "Conformance"
		| "DataElement"
		| "DeviceComponent"
		| "DeviceUseRequest"
		| "DeviceUseStatement"
		| "DiagnosticOrder"
		| "DocumentManifest"
		| "EffectEvidenceSynthesis"
		| "EligibilityRequest"
		| "EligibilityResponse"
		| "ExpansionProfile"
		| "ImagingManifest"
		| "ImagingObjectSelection"
		| "Media"
		| "MedicationOrder"
		| "MedicationUsage"
		| "MedicinalProduct"
		| "MedicinalProductAuthorization"
		| "MedicinalProductContraindication"
		| "MedicinalProductIndication"
		| "MedicinalProductIngredient"
		| "MedicinalProductInteraction"
		| "MedicinalProductManufactured"
		| "MedicinalProductPackaged"
		| "MedicinalProductPharmaceutical"
		| "MedicinalProductUndesirableEffect"
		| "Order"
		| "OrderResponse"
		| "ProcedureRequest"
		| "ProcessRequest"
		| "ProcessResponse"
		| "ReferralRequest"
		| "RequestGroup"
		| "ResearchDefinition"
		| "ResearchElementDefinition"
		| "RiskEvidenceSynthesis"
		| "Sequence"
		| "ServiceDefinition"
		| "SubstanceSpecification";
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const GraphDefinition_NodeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		nodeId: fhirId(),
		_nodeId: z.lazy(getElementSchema).optional(),
		profile: fhirCanonical().optional(),
		_profile: z.lazy(getElementSchema).optional(),
		type: z.enum([
			"BodySite",
			"CatalogEntry",
			"Conformance",
			"DataElement",
			"DeviceComponent",
			"DeviceUseRequest",
			"DeviceUseStatement",
			"DiagnosticOrder",
			"DocumentManifest",
			"EffectEvidenceSynthesis",
			"EligibilityRequest",
			"EligibilityResponse",
			"ExpansionProfile",
			"ImagingManifest",
			"ImagingObjectSelection",
			"Media",
			"MedicationOrder",
			"MedicationUsage",
			"MedicinalProduct",
			"MedicinalProductAuthorization",
			"MedicinalProductContraindication",
			"MedicinalProductIndication",
			"MedicinalProductIngredient",
			"MedicinalProductInteraction",
			"MedicinalProductManufactured",
			"MedicinalProductPackaged",
			"MedicinalProductPharmaceutical",
			"MedicinalProductUndesirableEffect",
			"Order",
			"OrderResponse",
			"ProcedureRequest",
			"ProcessRequest",
			"ProcessResponse",
			"ReferralRequest",
			"RequestGroup",
			"ResearchDefinition",
			"ResearchElementDefinition",
			"RiskEvidenceSynthesis",
			"Sequence",
			"ServiceDefinition",
			"SubstanceSpecification",
		]),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const GraphDefinition_NodeSchema =
	GraphDefinition_NodeSchemaInternal as z.ZodType<GraphDefinition_Node>;
