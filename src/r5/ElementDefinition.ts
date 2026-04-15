// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T00:02:33.197Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import {
	fhirBase64Binary,
	fhirCanonical,
	fhirCode,
	fhirDate,
	fhirDateTime,
	fhirId,
	fhirInstant,
	fhirInteger64,
	fhirOid,
	fhirString,
	fhirTime,
	fhirUri,
	fhirUrl,
	fhirUuid,
} from "../shared/fhir-primitives";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { Availability } from "./Availability";
import { AvailabilitySchemaInternal } from "./Availability";
import type { BackboneType } from "./BackboneType";
import { BackboneTypeSchemaInternal } from "./BackboneType";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { Count } from "./Count";
import { CountSchemaInternal } from "./Count";
import type { DataRequirement } from "./DataRequirement";
import { DataRequirementSchemaInternal } from "./DataRequirement";
import type { Distance } from "./Distance";
import { DistanceSchemaInternal } from "./Distance";
import type { Dosage } from "./Dosage";
import { DosageSchemaInternal } from "./Dosage";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ElementDefinition_Base } from "./ElementDefinition_Base";
import { ElementDefinition_BaseSchemaInternal } from "./ElementDefinition_Base";
import type { ElementDefinition_Binding } from "./ElementDefinition_Binding";
import { ElementDefinition_BindingSchemaInternal } from "./ElementDefinition_Binding";
import type { ElementDefinition_Constraint } from "./ElementDefinition_Constraint";
import { ElementDefinition_ConstraintSchemaInternal } from "./ElementDefinition_Constraint";
import type { ElementDefinition_Example } from "./ElementDefinition_Example";
import { ElementDefinition_ExampleSchemaInternal } from "./ElementDefinition_Example";
import type { ElementDefinition_Mapping } from "./ElementDefinition_Mapping";
import { ElementDefinition_MappingSchemaInternal } from "./ElementDefinition_Mapping";
import type { ElementDefinition_Slicing } from "./ElementDefinition_Slicing";
import { ElementDefinition_SlicingSchemaInternal } from "./ElementDefinition_Slicing";
import type { ElementDefinition_Type } from "./ElementDefinition_Type";
import { ElementDefinition_TypeSchemaInternal } from "./ElementDefinition_Type";
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";
import type { ExtendedContactDetail } from "./ExtendedContactDetail";
import { ExtendedContactDetailSchemaInternal } from "./ExtendedContactDetail";
import type { HumanName } from "./HumanName";
import { HumanNameSchemaInternal } from "./HumanName";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Meta } from "./Meta";
import { MetaSchemaInternal } from "./Meta";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { ParameterDefinition } from "./ParameterDefinition";
import { ParameterDefinitionSchemaInternal } from "./ParameterDefinition";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { RatioRange } from "./RatioRange";
import { RatioRangeSchemaInternal } from "./RatioRange";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";
import type { SampledData } from "./SampledData";
import { SampledDataSchemaInternal } from "./SampledData";
import type { Signature } from "./Signature";
import { SignatureSchemaInternal } from "./Signature";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";
import type { TriggerDefinition } from "./TriggerDefinition";
import { TriggerDefinitionSchemaInternal } from "./TriggerDefinition";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** ElementDefinition Type: Captures constraints on each element within the resource, profile, or extension. */
export interface ElementDefinition extends BackboneType {
	/** Identifies additional names by which this element might also be known. */
	alias?: Array<string | null>;
	/** Extensions for alias */
	_alias?: Array<Element | null>;
	/** Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. When the element definition is not the original definition of an element - e.g. either in a constraint on another type, or for elements from a super type in a snap shot - then the information in provided in the element definition may be different to the base definition. On the original definition of the element, it will be same. */
	base?: ElementDefinition_Base;
	/** Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri). */
	binding?: ElementDefinition_Binding;
	/** A code that has the same meaning as the element in a particular terminology. */
	code?: Array<Coding>;
	/** Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc. (Note: The text you are reading is specified in ElementDefinition.comment). */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** A reference to an invariant that may make additional statements about the cardinality or value in the instance. */
	condition?: Array<string | null>;
	/** Extensions for condition */
	_condition?: Array<Element | null>;
	/** Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance. */
	constraint?: Array<ElementDefinition_Constraint>;
	/** Identifies an element defined elsewhere in the definition whose content rules should be applied to the current element. ContentReferences bring across all the rules that are in the ElementDefinition for the element, including definitions, cardinality constraints, bindings, invariants etc. */
	contentReference?: string;
	/** Extensions for contentReference */
	_contentReference?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueAddress?: Address;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueAge?: Age;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueAnnotation?: Annotation;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueAttachment?: Attachment;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueAvailability?: Availability;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueBase64Binary?: string;
	/** Extensions for defaultValueBase64Binary */
	_defaultValueBase64Binary?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueBoolean?: boolean;
	/** Extensions for defaultValueBoolean */
	_defaultValueBoolean?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueCanonical?: string;
	/** Extensions for defaultValueCanonical */
	_defaultValueCanonical?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueCode?: string;
	/** Extensions for defaultValueCode */
	_defaultValueCode?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueCodeableConcept?: CodeableConcept;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueCodeableReference?: CodeableReference;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueCoding?: Coding;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueContactDetail?: ContactDetail;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueContactPoint?: ContactPoint;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueCount?: Count;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueDataRequirement?: DataRequirement;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueDate?: string;
	/** Extensions for defaultValueDate */
	_defaultValueDate?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueDateTime?: string;
	/** Extensions for defaultValueDateTime */
	_defaultValueDateTime?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueDecimal?: number;
	/** Extensions for defaultValueDecimal */
	_defaultValueDecimal?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueDistance?: Distance;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueDosage?: Dosage;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueDuration?: Duration;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueExpression?: Expression;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueExtendedContactDetail?: ExtendedContactDetail;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueHumanName?: HumanName;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueId?: string;
	/** Extensions for defaultValueId */
	_defaultValueId?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueIdentifier?: Identifier;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueInstant?: string;
	/** Extensions for defaultValueInstant */
	_defaultValueInstant?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueInteger?: number;
	/** Extensions for defaultValueInteger */
	_defaultValueInteger?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueInteger64?: string;
	/** Extensions for defaultValueInteger64 */
	_defaultValueInteger64?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueMarkdown?: string;
	/** Extensions for defaultValueMarkdown */
	_defaultValueMarkdown?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueMeta?: Meta;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueMoney?: Money;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueOid?: string;
	/** Extensions for defaultValueOid */
	_defaultValueOid?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueParameterDefinition?: ParameterDefinition;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValuePeriod?: Period;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValuePositiveInt?: number;
	/** Extensions for defaultValuePositiveInt */
	_defaultValuePositiveInt?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueQuantity?: Quantity;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueRange?: Range;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueRatio?: Ratio;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueRatioRange?: RatioRange;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueReference?: Reference;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueRelatedArtifact?: RelatedArtifact;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueSampledData?: SampledData;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueSignature?: Signature;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueString?: string;
	/** Extensions for defaultValueString */
	_defaultValueString?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueTime?: string;
	/** Extensions for defaultValueTime */
	_defaultValueTime?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueTiming?: Timing;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueTriggerDefinition?: TriggerDefinition;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueUnsignedInt?: number;
	/** Extensions for defaultValueUnsignedInt */
	_defaultValueUnsignedInt?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueUri?: string;
	/** Extensions for defaultValueUri */
	_defaultValueUri?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueUrl?: string;
	/** Extensions for defaultValueUrl */
	_defaultValueUrl?: Element;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueUsageContext?: UsageContext;
	/** The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false'). */
	defaultValueUuid?: string;
	/** Extensions for defaultValueUuid */
	_defaultValueUuid?: Element;
	/** Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource. (Note: The text you are reading is specified in ElementDefinition.definition). */
	definition?: string;
	/** Extensions for definition */
	_definition?: Element;
	/** A sample value for this element demonstrating the type of information that would typically be found in the element. */
	example?: Array<ElementDefinition_Example>;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedAddress?: Address;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedAge?: Age;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedAnnotation?: Annotation;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedAttachment?: Attachment;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedAvailability?: Availability;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedBase64Binary?: string;
	/** Extensions for fixedBase64Binary */
	_fixedBase64Binary?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedBoolean?: boolean;
	/** Extensions for fixedBoolean */
	_fixedBoolean?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedCanonical?: string;
	/** Extensions for fixedCanonical */
	_fixedCanonical?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedCode?: string;
	/** Extensions for fixedCode */
	_fixedCode?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedCodeableConcept?: CodeableConcept;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedCodeableReference?: CodeableReference;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedCoding?: Coding;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedContactDetail?: ContactDetail;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedContactPoint?: ContactPoint;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedCount?: Count;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedDataRequirement?: DataRequirement;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedDate?: string;
	/** Extensions for fixedDate */
	_fixedDate?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedDateTime?: string;
	/** Extensions for fixedDateTime */
	_fixedDateTime?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedDecimal?: number;
	/** Extensions for fixedDecimal */
	_fixedDecimal?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedDistance?: Distance;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedDosage?: Dosage;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedDuration?: Duration;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedExpression?: Expression;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedExtendedContactDetail?: ExtendedContactDetail;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedHumanName?: HumanName;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedId?: string;
	/** Extensions for fixedId */
	_fixedId?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedIdentifier?: Identifier;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedInstant?: string;
	/** Extensions for fixedInstant */
	_fixedInstant?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedInteger?: number;
	/** Extensions for fixedInteger */
	_fixedInteger?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedInteger64?: string;
	/** Extensions for fixedInteger64 */
	_fixedInteger64?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedMarkdown?: string;
	/** Extensions for fixedMarkdown */
	_fixedMarkdown?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedMeta?: Meta;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedMoney?: Money;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedOid?: string;
	/** Extensions for fixedOid */
	_fixedOid?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedParameterDefinition?: ParameterDefinition;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedPeriod?: Period;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedPositiveInt?: number;
	/** Extensions for fixedPositiveInt */
	_fixedPositiveInt?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedQuantity?: Quantity;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedRange?: Range;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedRatio?: Ratio;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedRatioRange?: RatioRange;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedReference?: Reference;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedRelatedArtifact?: RelatedArtifact;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedSampledData?: SampledData;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedSignature?: Signature;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedString?: string;
	/** Extensions for fixedString */
	_fixedString?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedTime?: string;
	/** Extensions for fixedTime */
	_fixedTime?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedTiming?: Timing;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedTriggerDefinition?: TriggerDefinition;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedUnsignedInt?: number;
	/** Extensions for fixedUnsignedInt */
	_fixedUnsignedInt?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedUri?: string;
	/** Extensions for fixedUri */
	_fixedUri?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedUrl?: string;
	/** Extensions for fixedUrl */
	_fixedUrl?: Element;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedUsageContext?: UsageContext;
	/** Specifies a value that SHALL be exactly the value  for this element in the instance, if present. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing. */
	fixedUuid?: string;
	/** Extensions for fixedUuid */
	_fixedUuid?: Element;
	/** If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system. When used on the root element in an extension definition, this indicates whether or not the extension is a modifier extension. */
	isModifier?: boolean;
	/** Extensions for isModifier */
	_isModifier?: Element;
	/** Explains how that element affects the interpretation of the resource or element that contains it. */
	isModifierReason?: string;
	/** Extensions for isModifierReason */
	_isModifierReason?: Element;
	/** Whether the element should be included if a client requests a search with the parameter _summary=true. */
	isSummary?: boolean;
	/** Extensions for isSummary */
	_isSummary?: Element;
	/** A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form. */
	label?: string;
	/** Extensions for label */
	_label?: Element;
	/** Identifies a concept from an external specification that roughly corresponds to this element. */
	mapping?: Array<ElementDefinition_Mapping>;
	/** The maximum number of times this element is permitted to appear in the instance. */
	max?: string;
	/** Extensions for max */
	_max?: Element;
	/** Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element. ```maxLength``` SHOULD only be used on primitive data types that have a string representation (see [http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics](http://hl7.org/fhir/extensions/StructureDefinition-structuredefinition-type-characteristics.html)). */
	maxLength?: number;
	/** Extensions for maxLength */
	_maxLength?: Element;
	/** The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	maxValueDate?: string;
	/** Extensions for maxValueDate */
	_maxValueDate?: Element;
	/** The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	maxValueDateTime?: string;
	/** Extensions for maxValueDateTime */
	_maxValueDateTime?: Element;
	/** The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	maxValueDecimal?: number;
	/** Extensions for maxValueDecimal */
	_maxValueDecimal?: Element;
	/** The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	maxValueInstant?: string;
	/** Extensions for maxValueInstant */
	_maxValueInstant?: Element;
	/** The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	maxValueInteger?: number;
	/** Extensions for maxValueInteger */
	_maxValueInteger?: Element;
	/** The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	maxValueInteger64?: string;
	/** Extensions for maxValueInteger64 */
	_maxValueInteger64?: Element;
	/** The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	maxValuePositiveInt?: number;
	/** Extensions for maxValuePositiveInt */
	_maxValuePositiveInt?: Element;
	/** The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	maxValueQuantity?: Quantity;
	/** The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	maxValueTime?: string;
	/** Extensions for maxValueTime */
	_maxValueTime?: Element;
	/** The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	maxValueUnsignedInt?: number;
	/** Extensions for maxValueUnsignedInt */
	_maxValueUnsignedInt?: Element;
	/** The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing'). */
	meaningWhenMissing?: string;
	/** Extensions for meaningWhenMissing */
	_meaningWhenMissing?: Element;
	/** The minimum number of times this element SHALL appear in the instance. */
	min?: number;
	/** Extensions for min */
	_min?: Element;
	/** The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	minValueDate?: string;
	/** Extensions for minValueDate */
	_minValueDate?: Element;
	/** The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	minValueDateTime?: string;
	/** Extensions for minValueDateTime */
	_minValueDateTime?: Element;
	/** The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	minValueDecimal?: number;
	/** Extensions for minValueDecimal */
	_minValueDecimal?: Element;
	/** The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	minValueInstant?: string;
	/** Extensions for minValueInstant */
	_minValueInstant?: Element;
	/** The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	minValueInteger?: number;
	/** Extensions for minValueInteger */
	_minValueInteger?: Element;
	/** The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	minValueInteger64?: string;
	/** Extensions for minValueInteger64 */
	_minValueInteger64?: Element;
	/** The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	minValuePositiveInt?: number;
	/** Extensions for minValuePositiveInt */
	_minValuePositiveInt?: Element;
	/** The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	minValueQuantity?: Quantity;
	/** The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	minValueTime?: string;
	/** Extensions for minValueTime */
	_minValueTime?: Element;
	/** The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity. */
	minValueUnsignedInt?: number;
	/** Extensions for minValueUnsignedInt */
	_minValueUnsignedInt?: Element;
	/** Specifies for a primitive data type that the value of the data type cannot be replaced by an extension. */
	mustHaveValue?: boolean;
	/** Extensions for mustHaveValue */
	_mustHaveValue?: Element;
	/** If true, implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way. Note that this is being phased out and replaced by obligations (see below).  If false, the element may be ignored and not supported. If false, whether to populate or use the data element in any way is at the discretion of the implementation. */
	mustSupport?: boolean;
	/** Extensions for mustSupport */
	_mustSupport?: Element;
	/** If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning. */
	orderMeaning?: string;
	/** Extensions for orderMeaning */
	_orderMeaning?: Element;
	/** The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension. */
	path: string;
	/** Extensions for path */
	_path?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternAddress?: Address;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternAge?: Age;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternAnnotation?: Annotation;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternAttachment?: Attachment;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternAvailability?: Availability;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternBase64Binary?: string;
	/** Extensions for patternBase64Binary */
	_patternBase64Binary?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternBoolean?: boolean;
	/** Extensions for patternBoolean */
	_patternBoolean?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternCanonical?: string;
	/** Extensions for patternCanonical */
	_patternCanonical?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternCode?: string;
	/** Extensions for patternCode */
	_patternCode?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternCodeableConcept?: CodeableConcept;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternCodeableReference?: CodeableReference;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternCoding?: Coding;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternContactDetail?: ContactDetail;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternContactPoint?: ContactPoint;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternCount?: Count;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternDataRequirement?: DataRequirement;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternDate?: string;
	/** Extensions for patternDate */
	_patternDate?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternDateTime?: string;
	/** Extensions for patternDateTime */
	_patternDateTime?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternDecimal?: number;
	/** Extensions for patternDecimal */
	_patternDecimal?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternDistance?: Distance;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternDosage?: Dosage;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternDuration?: Duration;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternExpression?: Expression;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternExtendedContactDetail?: ExtendedContactDetail;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternHumanName?: HumanName;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternId?: string;
	/** Extensions for patternId */
	_patternId?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternIdentifier?: Identifier;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternInstant?: string;
	/** Extensions for patternInstant */
	_patternInstant?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternInteger?: number;
	/** Extensions for patternInteger */
	_patternInteger?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternInteger64?: string;
	/** Extensions for patternInteger64 */
	_patternInteger64?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternMarkdown?: string;
	/** Extensions for patternMarkdown */
	_patternMarkdown?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternMeta?: Meta;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternMoney?: Money;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternOid?: string;
	/** Extensions for patternOid */
	_patternOid?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternParameterDefinition?: ParameterDefinition;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternPeriod?: Period;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternPositiveInt?: number;
	/** Extensions for patternPositiveInt */
	_patternPositiveInt?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternQuantity?: Quantity;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternRange?: Range;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternRatio?: Ratio;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternRatioRange?: RatioRange;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternReference?: Reference;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternRelatedArtifact?: RelatedArtifact;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternSampledData?: SampledData;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternSignature?: Signature;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternString?: string;
	/** Extensions for patternString */
	_patternString?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternTime?: string;
	/** Extensions for patternTime */
	_patternTime?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternTiming?: Timing;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternTriggerDefinition?: TriggerDefinition;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternUnsignedInt?: number;
	/** Extensions for patternUnsignedInt */
	_patternUnsignedInt?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternUri?: string;
	/** Extensions for patternUri */
	_patternUri?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternUrl?: string;
	/** Extensions for patternUrl */
	_patternUrl?: Element;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternUsageContext?: UsageContext;
	/**
	 * Specifies a value that each occurrence of the element in the instance SHALL follow - that is, any value in the pattern must be found in the instance, if the element has a value. Other additional values may be found too. This is effectively constraint by example.
	 *
	 * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
	 *
	 * When an element within a pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] must (recursively) match at least one element from the instance array.
	 *
	 * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
	 *
	 * 1. If primitive: it must match exactly the pattern value
	 * 2. If a complex object: it must match (recursively) the pattern value
	 * 3. If an array: it must match (recursively) the pattern value
	 *
	 * If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions.  If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [Examples of Patterns](elementdefinition-examples.html#pattern-examples) for examples of pattern usage and the effect it will have.
	 */
	patternUuid?: string;
	/** Extensions for patternUuid */
	_patternUuid?: Element;
	/** Codes that define how this element is represented in instances, when the deviation varies from the normal case. No extensions are allowed on elements with a representation of 'xmlAttr', no matter what FHIR serialization format is used. */
	representation?: Array<
		"cdaText" | "typeAttr" | "xhtml" | "xmlAttr" | "xmlText" | null
	>;
	/** Extensions for representation */
	_representation?: Array<Element | null>;
	/** This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element. */
	requirements?: string;
	/** Extensions for requirements */
	_requirements?: Element;
	/** A concise description of what this element means (e.g. for use in autogenerated summaries). */
	short?: string;
	/** Extensions for short */
	_short?: Element;
	/** If true, indicates that this slice definition is constraining a slice definition with the same name in an inherited profile. If false, the slice is not overriding any slice in an inherited profile. If missing, the slice might or might not be overriding a slice in an inherited profile, depending on the sliceName. */
	sliceIsConstraining?: boolean;
	/** Extensions for sliceIsConstraining */
	_sliceIsConstraining?: Element;
	/** The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element. */
	sliceName?: string;
	/** Extensions for sliceName */
	_sliceName?: Element;
	/** Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set). */
	slicing?: ElementDefinition_Slicing;
	/** The data type or resource that the value of this element is permitted to be. */
	type?: Array<ElementDefinition_Type>;
	/** Specifies a list of extensions that can appear in place of a primitive value. */
	valueAlternatives?: Array<string | null>;
	/** Extensions for valueAlternatives */
	_valueAlternatives?: Array<Element | null>;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getAvailabilitySchema = (): z.ZodType<Availability> =>
	AvailabilitySchemaInternal as z.ZodType<Availability>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getCountSchema = (): z.ZodType<Count> =>
	CountSchemaInternal as z.ZodType<Count>;
const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
	DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
const getDistanceSchema = (): z.ZodType<Distance> =>
	DistanceSchemaInternal as z.ZodType<Distance>;
const getDosageSchema = (): z.ZodType<Dosage> =>
	DosageSchemaInternal as z.ZodType<Dosage>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getElementDefinition_BaseSchema = (): z.ZodType<ElementDefinition_Base> =>
	ElementDefinition_BaseSchemaInternal as z.ZodType<ElementDefinition_Base>;
const getElementDefinition_BindingSchema =
	(): z.ZodType<ElementDefinition_Binding> =>
		ElementDefinition_BindingSchemaInternal as z.ZodType<ElementDefinition_Binding>;
const getElementDefinition_ConstraintSchema =
	(): z.ZodType<ElementDefinition_Constraint> =>
		ElementDefinition_ConstraintSchemaInternal as z.ZodType<ElementDefinition_Constraint>;
const getElementDefinition_ExampleSchema =
	(): z.ZodType<ElementDefinition_Example> =>
		ElementDefinition_ExampleSchemaInternal as z.ZodType<ElementDefinition_Example>;
const getElementDefinition_MappingSchema =
	(): z.ZodType<ElementDefinition_Mapping> =>
		ElementDefinition_MappingSchemaInternal as z.ZodType<ElementDefinition_Mapping>;
const getElementDefinition_SlicingSchema =
	(): z.ZodType<ElementDefinition_Slicing> =>
		ElementDefinition_SlicingSchemaInternal as z.ZodType<ElementDefinition_Slicing>;
const getElementDefinition_TypeSchema = (): z.ZodType<ElementDefinition_Type> =>
	ElementDefinition_TypeSchemaInternal as z.ZodType<ElementDefinition_Type>;
const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;
const getExtendedContactDetailSchema = (): z.ZodType<ExtendedContactDetail> =>
	ExtendedContactDetailSchemaInternal as z.ZodType<ExtendedContactDetail>;
const getHumanNameSchema = (): z.ZodType<HumanName> =>
	HumanNameSchemaInternal as z.ZodType<HumanName>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
	MetaSchemaInternal as z.ZodType<Meta>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getParameterDefinitionSchema = (): z.ZodType<ParameterDefinition> =>
	ParameterDefinitionSchemaInternal as z.ZodType<ParameterDefinition>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getRatioRangeSchema = (): z.ZodType<RatioRange> =>
	RatioRangeSchemaInternal as z.ZodType<RatioRange>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getSampledDataSchema = (): z.ZodType<SampledData> =>
	SampledDataSchemaInternal as z.ZodType<SampledData>;
const getSignatureSchema = (): z.ZodType<Signature> =>
	SignatureSchemaInternal as z.ZodType<Signature>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;
const getTriggerDefinitionSchema = (): z.ZodType<TriggerDefinition> =>
	TriggerDefinitionSchemaInternal as z.ZodType<TriggerDefinition>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const ElementDefinitionSchemaInternal =
	BackboneTypeSchemaInternal.extend({
		alias: fhirString().nullable().array().optional(),
		_alias: z.lazy(getElementSchema).nullable().array().optional(),
		base: z.lazy(getElementDefinition_BaseSchema).optional(),
		binding: z.lazy(getElementDefinition_BindingSchema).optional(),
		code: z.lazy(getCodingSchema).array().optional(),
		comment: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_comment: z.lazy(getElementSchema).optional(),
		condition: fhirId().nullable().array().optional(),
		_condition: z.lazy(getElementSchema).nullable().array().optional(),
		constraint: z
			.lazy(getElementDefinition_ConstraintSchema)
			.array()
			.optional(),
		contentReference: fhirUri().optional(),
		_contentReference: z.lazy(getElementSchema).optional(),
		defaultValueAddress: z.lazy(getAddressSchema).optional(),
		defaultValueAge: z.lazy(getAgeSchema).optional(),
		defaultValueAnnotation: z.lazy(getAnnotationSchema).optional(),
		defaultValueAttachment: z.lazy(getAttachmentSchema).optional(),
		defaultValueAvailability: z.lazy(getAvailabilitySchema).optional(),
		defaultValueBase64Binary: fhirBase64Binary().optional(),
		_defaultValueBase64Binary: z.lazy(getElementSchema).optional(),
		defaultValueBoolean: z.boolean().optional(),
		_defaultValueBoolean: z.lazy(getElementSchema).optional(),
		defaultValueCanonical: fhirCanonical().optional(),
		_defaultValueCanonical: z.lazy(getElementSchema).optional(),
		defaultValueCode: fhirCode().optional(),
		_defaultValueCode: z.lazy(getElementSchema).optional(),
		defaultValueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		defaultValueCodeableReference: z
			.lazy(getCodeableReferenceSchema)
			.optional(),
		defaultValueCoding: z.lazy(getCodingSchema).optional(),
		defaultValueContactDetail: z.lazy(getContactDetailSchema).optional(),
		defaultValueContactPoint: z.lazy(getContactPointSchema).optional(),
		defaultValueCount: z.lazy(getCountSchema).optional(),
		defaultValueDataRequirement: z.lazy(getDataRequirementSchema).optional(),
		defaultValueDate: fhirDate().optional(),
		_defaultValueDate: z.lazy(getElementSchema).optional(),
		defaultValueDateTime: fhirDateTime().optional(),
		_defaultValueDateTime: z.lazy(getElementSchema).optional(),
		defaultValueDecimal: z.number().optional(),
		_defaultValueDecimal: z.lazy(getElementSchema).optional(),
		defaultValueDistance: z.lazy(getDistanceSchema).optional(),
		defaultValueDosage: z.lazy(getDosageSchema).optional(),
		defaultValueDuration: z.lazy(getDurationSchema).optional(),
		defaultValueExpression: z.lazy(getExpressionSchema).optional(),
		defaultValueExtendedContactDetail: z
			.lazy(getExtendedContactDetailSchema)
			.optional(),
		defaultValueHumanName: z.lazy(getHumanNameSchema).optional(),
		defaultValueId: fhirId().optional(),
		_defaultValueId: z.lazy(getElementSchema).optional(),
		defaultValueIdentifier: z.lazy(getIdentifierSchema).optional(),
		defaultValueInstant: fhirInstant().optional(),
		_defaultValueInstant: z.lazy(getElementSchema).optional(),
		defaultValueInteger: z.number().int().optional(),
		_defaultValueInteger: z.lazy(getElementSchema).optional(),
		defaultValueInteger64: fhirInteger64().optional(),
		_defaultValueInteger64: z.lazy(getElementSchema).optional(),
		defaultValueMarkdown: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_defaultValueMarkdown: z.lazy(getElementSchema).optional(),
		defaultValueMeta: z.lazy(getMetaSchema).optional(),
		defaultValueMoney: z.lazy(getMoneySchema).optional(),
		defaultValueOid: fhirOid().optional(),
		_defaultValueOid: z.lazy(getElementSchema).optional(),
		defaultValueParameterDefinition: z
			.lazy(getParameterDefinitionSchema)
			.optional(),
		defaultValuePeriod: z.lazy(getPeriodSchema).optional(),
		defaultValuePositiveInt: z.number().int().positive().optional(),
		_defaultValuePositiveInt: z.lazy(getElementSchema).optional(),
		defaultValueQuantity: z.lazy(getQuantitySchema).optional(),
		defaultValueRange: z.lazy(getRangeSchema).optional(),
		defaultValueRatio: z.lazy(getRatioSchema).optional(),
		defaultValueRatioRange: z.lazy(getRatioRangeSchema).optional(),
		defaultValueReference: z.lazy(getReferenceSchema).optional(),
		defaultValueRelatedArtifact: z.lazy(getRelatedArtifactSchema).optional(),
		defaultValueSampledData: z.lazy(getSampledDataSchema).optional(),
		defaultValueSignature: z.lazy(getSignatureSchema).optional(),
		defaultValueString: fhirString().optional(),
		_defaultValueString: z.lazy(getElementSchema).optional(),
		defaultValueTime: fhirTime().optional(),
		_defaultValueTime: z.lazy(getElementSchema).optional(),
		defaultValueTiming: z.lazy(getTimingSchema).optional(),
		defaultValueTriggerDefinition: z
			.lazy(getTriggerDefinitionSchema)
			.optional(),
		defaultValueUnsignedInt: z.number().int().nonnegative().optional(),
		_defaultValueUnsignedInt: z.lazy(getElementSchema).optional(),
		defaultValueUri: fhirUri().optional(),
		_defaultValueUri: z.lazy(getElementSchema).optional(),
		defaultValueUrl: fhirUrl().optional(),
		_defaultValueUrl: z.lazy(getElementSchema).optional(),
		defaultValueUsageContext: z.lazy(getUsageContextSchema).optional(),
		defaultValueUuid: fhirUuid().optional(),
		_defaultValueUuid: z.lazy(getElementSchema).optional(),
		definition: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_definition: z.lazy(getElementSchema).optional(),
		example: z.lazy(getElementDefinition_ExampleSchema).array().optional(),
		fixedAddress: z.lazy(getAddressSchema).optional(),
		fixedAge: z.lazy(getAgeSchema).optional(),
		fixedAnnotation: z.lazy(getAnnotationSchema).optional(),
		fixedAttachment: z.lazy(getAttachmentSchema).optional(),
		fixedAvailability: z.lazy(getAvailabilitySchema).optional(),
		fixedBase64Binary: fhirBase64Binary().optional(),
		_fixedBase64Binary: z.lazy(getElementSchema).optional(),
		fixedBoolean: z.boolean().optional(),
		_fixedBoolean: z.lazy(getElementSchema).optional(),
		fixedCanonical: fhirCanonical().optional(),
		_fixedCanonical: z.lazy(getElementSchema).optional(),
		fixedCode: fhirCode().optional(),
		_fixedCode: z.lazy(getElementSchema).optional(),
		fixedCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		fixedCodeableReference: z.lazy(getCodeableReferenceSchema).optional(),
		fixedCoding: z.lazy(getCodingSchema).optional(),
		fixedContactDetail: z.lazy(getContactDetailSchema).optional(),
		fixedContactPoint: z.lazy(getContactPointSchema).optional(),
		fixedCount: z.lazy(getCountSchema).optional(),
		fixedDataRequirement: z.lazy(getDataRequirementSchema).optional(),
		fixedDate: fhirDate().optional(),
		_fixedDate: z.lazy(getElementSchema).optional(),
		fixedDateTime: fhirDateTime().optional(),
		_fixedDateTime: z.lazy(getElementSchema).optional(),
		fixedDecimal: z.number().optional(),
		_fixedDecimal: z.lazy(getElementSchema).optional(),
		fixedDistance: z.lazy(getDistanceSchema).optional(),
		fixedDosage: z.lazy(getDosageSchema).optional(),
		fixedDuration: z.lazy(getDurationSchema).optional(),
		fixedExpression: z.lazy(getExpressionSchema).optional(),
		fixedExtendedContactDetail: z
			.lazy(getExtendedContactDetailSchema)
			.optional(),
		fixedHumanName: z.lazy(getHumanNameSchema).optional(),
		fixedId: fhirId().optional(),
		_fixedId: z.lazy(getElementSchema).optional(),
		fixedIdentifier: z.lazy(getIdentifierSchema).optional(),
		fixedInstant: fhirInstant().optional(),
		_fixedInstant: z.lazy(getElementSchema).optional(),
		fixedInteger: z.number().int().optional(),
		_fixedInteger: z.lazy(getElementSchema).optional(),
		fixedInteger64: fhirInteger64().optional(),
		_fixedInteger64: z.lazy(getElementSchema).optional(),
		fixedMarkdown: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_fixedMarkdown: z.lazy(getElementSchema).optional(),
		fixedMeta: z.lazy(getMetaSchema).optional(),
		fixedMoney: z.lazy(getMoneySchema).optional(),
		fixedOid: fhirOid().optional(),
		_fixedOid: z.lazy(getElementSchema).optional(),
		fixedParameterDefinition: z.lazy(getParameterDefinitionSchema).optional(),
		fixedPeriod: z.lazy(getPeriodSchema).optional(),
		fixedPositiveInt: z.number().int().positive().optional(),
		_fixedPositiveInt: z.lazy(getElementSchema).optional(),
		fixedQuantity: z.lazy(getQuantitySchema).optional(),
		fixedRange: z.lazy(getRangeSchema).optional(),
		fixedRatio: z.lazy(getRatioSchema).optional(),
		fixedRatioRange: z.lazy(getRatioRangeSchema).optional(),
		fixedReference: z.lazy(getReferenceSchema).optional(),
		fixedRelatedArtifact: z.lazy(getRelatedArtifactSchema).optional(),
		fixedSampledData: z.lazy(getSampledDataSchema).optional(),
		fixedSignature: z.lazy(getSignatureSchema).optional(),
		fixedString: fhirString().optional(),
		_fixedString: z.lazy(getElementSchema).optional(),
		fixedTime: fhirTime().optional(),
		_fixedTime: z.lazy(getElementSchema).optional(),
		fixedTiming: z.lazy(getTimingSchema).optional(),
		fixedTriggerDefinition: z.lazy(getTriggerDefinitionSchema).optional(),
		fixedUnsignedInt: z.number().int().nonnegative().optional(),
		_fixedUnsignedInt: z.lazy(getElementSchema).optional(),
		fixedUri: fhirUri().optional(),
		_fixedUri: z.lazy(getElementSchema).optional(),
		fixedUrl: fhirUrl().optional(),
		_fixedUrl: z.lazy(getElementSchema).optional(),
		fixedUsageContext: z.lazy(getUsageContextSchema).optional(),
		fixedUuid: fhirUuid().optional(),
		_fixedUuid: z.lazy(getElementSchema).optional(),
		isModifier: z.boolean().optional(),
		_isModifier: z.lazy(getElementSchema).optional(),
		isModifierReason: fhirString().optional(),
		_isModifierReason: z.lazy(getElementSchema).optional(),
		isSummary: z.boolean().optional(),
		_isSummary: z.lazy(getElementSchema).optional(),
		label: fhirString().optional(),
		_label: z.lazy(getElementSchema).optional(),
		mapping: z.lazy(getElementDefinition_MappingSchema).array().optional(),
		max: fhirString().optional(),
		_max: z.lazy(getElementSchema).optional(),
		maxLength: z.number().int().optional(),
		_maxLength: z.lazy(getElementSchema).optional(),
		maxValueDate: fhirDate().optional(),
		_maxValueDate: z.lazy(getElementSchema).optional(),
		maxValueDateTime: fhirDateTime().optional(),
		_maxValueDateTime: z.lazy(getElementSchema).optional(),
		maxValueDecimal: z.number().optional(),
		_maxValueDecimal: z.lazy(getElementSchema).optional(),
		maxValueInstant: fhirInstant().optional(),
		_maxValueInstant: z.lazy(getElementSchema).optional(),
		maxValueInteger: z.number().int().optional(),
		_maxValueInteger: z.lazy(getElementSchema).optional(),
		maxValueInteger64: fhirInteger64().optional(),
		_maxValueInteger64: z.lazy(getElementSchema).optional(),
		maxValuePositiveInt: z.number().int().positive().optional(),
		_maxValuePositiveInt: z.lazy(getElementSchema).optional(),
		maxValueQuantity: z.lazy(getQuantitySchema).optional(),
		maxValueTime: fhirTime().optional(),
		_maxValueTime: z.lazy(getElementSchema).optional(),
		maxValueUnsignedInt: z.number().int().nonnegative().optional(),
		_maxValueUnsignedInt: z.lazy(getElementSchema).optional(),
		meaningWhenMissing: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_meaningWhenMissing: z.lazy(getElementSchema).optional(),
		min: z.number().int().nonnegative().optional(),
		_min: z.lazy(getElementSchema).optional(),
		minValueDate: fhirDate().optional(),
		_minValueDate: z.lazy(getElementSchema).optional(),
		minValueDateTime: fhirDateTime().optional(),
		_minValueDateTime: z.lazy(getElementSchema).optional(),
		minValueDecimal: z.number().optional(),
		_minValueDecimal: z.lazy(getElementSchema).optional(),
		minValueInstant: fhirInstant().optional(),
		_minValueInstant: z.lazy(getElementSchema).optional(),
		minValueInteger: z.number().int().optional(),
		_minValueInteger: z.lazy(getElementSchema).optional(),
		minValueInteger64: fhirInteger64().optional(),
		_minValueInteger64: z.lazy(getElementSchema).optional(),
		minValuePositiveInt: z.number().int().positive().optional(),
		_minValuePositiveInt: z.lazy(getElementSchema).optional(),
		minValueQuantity: z.lazy(getQuantitySchema).optional(),
		minValueTime: fhirTime().optional(),
		_minValueTime: z.lazy(getElementSchema).optional(),
		minValueUnsignedInt: z.number().int().nonnegative().optional(),
		_minValueUnsignedInt: z.lazy(getElementSchema).optional(),
		mustHaveValue: z.boolean().optional(),
		_mustHaveValue: z.lazy(getElementSchema).optional(),
		mustSupport: z.boolean().optional(),
		_mustSupport: z.lazy(getElementSchema).optional(),
		orderMeaning: fhirString().optional(),
		_orderMeaning: z.lazy(getElementSchema).optional(),
		path: fhirString(),
		_path: z.lazy(getElementSchema).optional(),
		patternAddress: z.lazy(getAddressSchema).optional(),
		patternAge: z.lazy(getAgeSchema).optional(),
		patternAnnotation: z.lazy(getAnnotationSchema).optional(),
		patternAttachment: z.lazy(getAttachmentSchema).optional(),
		patternAvailability: z.lazy(getAvailabilitySchema).optional(),
		patternBase64Binary: fhirBase64Binary().optional(),
		_patternBase64Binary: z.lazy(getElementSchema).optional(),
		patternBoolean: z.boolean().optional(),
		_patternBoolean: z.lazy(getElementSchema).optional(),
		patternCanonical: fhirCanonical().optional(),
		_patternCanonical: z.lazy(getElementSchema).optional(),
		patternCode: fhirCode().optional(),
		_patternCode: z.lazy(getElementSchema).optional(),
		patternCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		patternCodeableReference: z.lazy(getCodeableReferenceSchema).optional(),
		patternCoding: z.lazy(getCodingSchema).optional(),
		patternContactDetail: z.lazy(getContactDetailSchema).optional(),
		patternContactPoint: z.lazy(getContactPointSchema).optional(),
		patternCount: z.lazy(getCountSchema).optional(),
		patternDataRequirement: z.lazy(getDataRequirementSchema).optional(),
		patternDate: fhirDate().optional(),
		_patternDate: z.lazy(getElementSchema).optional(),
		patternDateTime: fhirDateTime().optional(),
		_patternDateTime: z.lazy(getElementSchema).optional(),
		patternDecimal: z.number().optional(),
		_patternDecimal: z.lazy(getElementSchema).optional(),
		patternDistance: z.lazy(getDistanceSchema).optional(),
		patternDosage: z.lazy(getDosageSchema).optional(),
		patternDuration: z.lazy(getDurationSchema).optional(),
		patternExpression: z.lazy(getExpressionSchema).optional(),
		patternExtendedContactDetail: z
			.lazy(getExtendedContactDetailSchema)
			.optional(),
		patternHumanName: z.lazy(getHumanNameSchema).optional(),
		patternId: fhirId().optional(),
		_patternId: z.lazy(getElementSchema).optional(),
		patternIdentifier: z.lazy(getIdentifierSchema).optional(),
		patternInstant: fhirInstant().optional(),
		_patternInstant: z.lazy(getElementSchema).optional(),
		patternInteger: z.number().int().optional(),
		_patternInteger: z.lazy(getElementSchema).optional(),
		patternInteger64: fhirInteger64().optional(),
		_patternInteger64: z.lazy(getElementSchema).optional(),
		patternMarkdown: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_patternMarkdown: z.lazy(getElementSchema).optional(),
		patternMeta: z.lazy(getMetaSchema).optional(),
		patternMoney: z.lazy(getMoneySchema).optional(),
		patternOid: fhirOid().optional(),
		_patternOid: z.lazy(getElementSchema).optional(),
		patternParameterDefinition: z.lazy(getParameterDefinitionSchema).optional(),
		patternPeriod: z.lazy(getPeriodSchema).optional(),
		patternPositiveInt: z.number().int().positive().optional(),
		_patternPositiveInt: z.lazy(getElementSchema).optional(),
		patternQuantity: z.lazy(getQuantitySchema).optional(),
		patternRange: z.lazy(getRangeSchema).optional(),
		patternRatio: z.lazy(getRatioSchema).optional(),
		patternRatioRange: z.lazy(getRatioRangeSchema).optional(),
		patternReference: z.lazy(getReferenceSchema).optional(),
		patternRelatedArtifact: z.lazy(getRelatedArtifactSchema).optional(),
		patternSampledData: z.lazy(getSampledDataSchema).optional(),
		patternSignature: z.lazy(getSignatureSchema).optional(),
		patternString: fhirString().optional(),
		_patternString: z.lazy(getElementSchema).optional(),
		patternTime: fhirTime().optional(),
		_patternTime: z.lazy(getElementSchema).optional(),
		patternTiming: z.lazy(getTimingSchema).optional(),
		patternTriggerDefinition: z.lazy(getTriggerDefinitionSchema).optional(),
		patternUnsignedInt: z.number().int().nonnegative().optional(),
		_patternUnsignedInt: z.lazy(getElementSchema).optional(),
		patternUri: fhirUri().optional(),
		_patternUri: z.lazy(getElementSchema).optional(),
		patternUrl: fhirUrl().optional(),
		_patternUrl: z.lazy(getElementSchema).optional(),
		patternUsageContext: z.lazy(getUsageContextSchema).optional(),
		patternUuid: fhirUuid().optional(),
		_patternUuid: z.lazy(getElementSchema).optional(),
		representation: z
			.enum(["cdaText", "typeAttr", "xhtml", "xmlAttr", "xmlText"])
			.nullable()
			.array()
			.optional(),
		_representation: z.lazy(getElementSchema).nullable().array().optional(),
		requirements: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_requirements: z.lazy(getElementSchema).optional(),
		short: fhirString().optional(),
		_short: z.lazy(getElementSchema).optional(),
		sliceIsConstraining: z.boolean().optional(),
		_sliceIsConstraining: z.lazy(getElementSchema).optional(),
		sliceName: fhirString().optional(),
		_sliceName: z.lazy(getElementSchema).optional(),
		slicing: z.lazy(getElementDefinition_SlicingSchema).optional(),
		type: z.lazy(getElementDefinition_TypeSchema).array().optional(),
		valueAlternatives: fhirCanonical().nullable().array().optional(),
		_valueAlternatives: z.lazy(getElementSchema).nullable().array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const defaultValue_x_Present = [
				"defaultValueAddress",
				"defaultValueAge",
				"defaultValueAnnotation",
				"defaultValueAttachment",
				"defaultValueAvailability",
				"defaultValueBase64Binary",
				"defaultValueBoolean",
				"defaultValueCanonical",
				"defaultValueCode",
				"defaultValueCodeableConcept",
				"defaultValueCodeableReference",
				"defaultValueCoding",
				"defaultValueContactDetail",
				"defaultValueContactPoint",
				"defaultValueCount",
				"defaultValueDataRequirement",
				"defaultValueDate",
				"defaultValueDateTime",
				"defaultValueDecimal",
				"defaultValueDistance",
				"defaultValueDosage",
				"defaultValueDuration",
				"defaultValueExpression",
				"defaultValueExtendedContactDetail",
				"defaultValueHumanName",
				"defaultValueId",
				"defaultValueIdentifier",
				"defaultValueInstant",
				"defaultValueInteger",
				"defaultValueInteger64",
				"defaultValueMarkdown",
				"defaultValueMeta",
				"defaultValueMoney",
				"defaultValueOid",
				"defaultValueParameterDefinition",
				"defaultValuePeriod",
				"defaultValuePositiveInt",
				"defaultValueQuantity",
				"defaultValueRange",
				"defaultValueRatio",
				"defaultValueRatioRange",
				"defaultValueReference",
				"defaultValueRelatedArtifact",
				"defaultValueSampledData",
				"defaultValueSignature",
				"defaultValueString",
				"defaultValueTime",
				"defaultValueTiming",
				"defaultValueTriggerDefinition",
				"defaultValueUnsignedInt",
				"defaultValueUri",
				"defaultValueUrl",
				"defaultValueUsageContext",
				"defaultValueUuid",
			].filter((field) => record[field] !== undefined);
			if (defaultValue_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of defaultValueAddress, defaultValueAge, defaultValueAnnotation, defaultValueAttachment, defaultValueAvailability, defaultValueBase64Binary, defaultValueBoolean, defaultValueCanonical, defaultValueCode, defaultValueCodeableConcept, defaultValueCodeableReference, defaultValueCoding, defaultValueContactDetail, defaultValueContactPoint, defaultValueCount, defaultValueDataRequirement, defaultValueDate, defaultValueDateTime, defaultValueDecimal, defaultValueDistance, defaultValueDosage, defaultValueDuration, defaultValueExpression, defaultValueExtendedContactDetail, defaultValueHumanName, defaultValueId, defaultValueIdentifier, defaultValueInstant, defaultValueInteger, defaultValueInteger64, defaultValueMarkdown, defaultValueMeta, defaultValueMoney, defaultValueOid, defaultValueParameterDefinition, defaultValuePeriod, defaultValuePositiveInt, defaultValueQuantity, defaultValueRange, defaultValueRatio, defaultValueRatioRange, defaultValueReference, defaultValueRelatedArtifact, defaultValueSampledData, defaultValueSignature, defaultValueString, defaultValueTime, defaultValueTiming, defaultValueTriggerDefinition, defaultValueUnsignedInt, defaultValueUri, defaultValueUrl, defaultValueUsageContext, defaultValueUuid may be present for defaultValue[x]",
					path: [defaultValue_x_Present[0]],
				});
			}
			const fixed_x_Present = [
				"fixedAddress",
				"fixedAge",
				"fixedAnnotation",
				"fixedAttachment",
				"fixedAvailability",
				"fixedBase64Binary",
				"fixedBoolean",
				"fixedCanonical",
				"fixedCode",
				"fixedCodeableConcept",
				"fixedCodeableReference",
				"fixedCoding",
				"fixedContactDetail",
				"fixedContactPoint",
				"fixedCount",
				"fixedDataRequirement",
				"fixedDate",
				"fixedDateTime",
				"fixedDecimal",
				"fixedDistance",
				"fixedDosage",
				"fixedDuration",
				"fixedExpression",
				"fixedExtendedContactDetail",
				"fixedHumanName",
				"fixedId",
				"fixedIdentifier",
				"fixedInstant",
				"fixedInteger",
				"fixedInteger64",
				"fixedMarkdown",
				"fixedMeta",
				"fixedMoney",
				"fixedOid",
				"fixedParameterDefinition",
				"fixedPeriod",
				"fixedPositiveInt",
				"fixedQuantity",
				"fixedRange",
				"fixedRatio",
				"fixedRatioRange",
				"fixedReference",
				"fixedRelatedArtifact",
				"fixedSampledData",
				"fixedSignature",
				"fixedString",
				"fixedTime",
				"fixedTiming",
				"fixedTriggerDefinition",
				"fixedUnsignedInt",
				"fixedUri",
				"fixedUrl",
				"fixedUsageContext",
				"fixedUuid",
			].filter((field) => record[field] !== undefined);
			if (fixed_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of fixedAddress, fixedAge, fixedAnnotation, fixedAttachment, fixedAvailability, fixedBase64Binary, fixedBoolean, fixedCanonical, fixedCode, fixedCodeableConcept, fixedCodeableReference, fixedCoding, fixedContactDetail, fixedContactPoint, fixedCount, fixedDataRequirement, fixedDate, fixedDateTime, fixedDecimal, fixedDistance, fixedDosage, fixedDuration, fixedExpression, fixedExtendedContactDetail, fixedHumanName, fixedId, fixedIdentifier, fixedInstant, fixedInteger, fixedInteger64, fixedMarkdown, fixedMeta, fixedMoney, fixedOid, fixedParameterDefinition, fixedPeriod, fixedPositiveInt, fixedQuantity, fixedRange, fixedRatio, fixedRatioRange, fixedReference, fixedRelatedArtifact, fixedSampledData, fixedSignature, fixedString, fixedTime, fixedTiming, fixedTriggerDefinition, fixedUnsignedInt, fixedUri, fixedUrl, fixedUsageContext, fixedUuid may be present for fixed[x]",
					path: [fixed_x_Present[0]],
				});
			}
			const maxValue_x_Present = [
				"maxValueDate",
				"maxValueDateTime",
				"maxValueDecimal",
				"maxValueInstant",
				"maxValueInteger",
				"maxValueInteger64",
				"maxValuePositiveInt",
				"maxValueQuantity",
				"maxValueTime",
				"maxValueUnsignedInt",
			].filter((field) => record[field] !== undefined);
			if (maxValue_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of maxValueDate, maxValueDateTime, maxValueDecimal, maxValueInstant, maxValueInteger, maxValueInteger64, maxValuePositiveInt, maxValueQuantity, maxValueTime, maxValueUnsignedInt may be present for maxValue[x]",
					path: [maxValue_x_Present[0]],
				});
			}
			const minValue_x_Present = [
				"minValueDate",
				"minValueDateTime",
				"minValueDecimal",
				"minValueInstant",
				"minValueInteger",
				"minValueInteger64",
				"minValuePositiveInt",
				"minValueQuantity",
				"minValueTime",
				"minValueUnsignedInt",
			].filter((field) => record[field] !== undefined);
			if (minValue_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of minValueDate, minValueDateTime, minValueDecimal, minValueInstant, minValueInteger, minValueInteger64, minValuePositiveInt, minValueQuantity, minValueTime, minValueUnsignedInt may be present for minValue[x]",
					path: [minValue_x_Present[0]],
				});
			}
			const pattern_x_Present = [
				"patternAddress",
				"patternAge",
				"patternAnnotation",
				"patternAttachment",
				"patternAvailability",
				"patternBase64Binary",
				"patternBoolean",
				"patternCanonical",
				"patternCode",
				"patternCodeableConcept",
				"patternCodeableReference",
				"patternCoding",
				"patternContactDetail",
				"patternContactPoint",
				"patternCount",
				"patternDataRequirement",
				"patternDate",
				"patternDateTime",
				"patternDecimal",
				"patternDistance",
				"patternDosage",
				"patternDuration",
				"patternExpression",
				"patternExtendedContactDetail",
				"patternHumanName",
				"patternId",
				"patternIdentifier",
				"patternInstant",
				"patternInteger",
				"patternInteger64",
				"patternMarkdown",
				"patternMeta",
				"patternMoney",
				"patternOid",
				"patternParameterDefinition",
				"patternPeriod",
				"patternPositiveInt",
				"patternQuantity",
				"patternRange",
				"patternRatio",
				"patternRatioRange",
				"patternReference",
				"patternRelatedArtifact",
				"patternSampledData",
				"patternSignature",
				"patternString",
				"patternTime",
				"patternTiming",
				"patternTriggerDefinition",
				"patternUnsignedInt",
				"patternUri",
				"patternUrl",
				"patternUsageContext",
				"patternUuid",
			].filter((field) => record[field] !== undefined);
			if (pattern_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of patternAddress, patternAge, patternAnnotation, patternAttachment, patternAvailability, patternBase64Binary, patternBoolean, patternCanonical, patternCode, patternCodeableConcept, patternCodeableReference, patternCoding, patternContactDetail, patternContactPoint, patternCount, patternDataRequirement, patternDate, patternDateTime, patternDecimal, patternDistance, patternDosage, patternDuration, patternExpression, patternExtendedContactDetail, patternHumanName, patternId, patternIdentifier, patternInstant, patternInteger, patternInteger64, patternMarkdown, patternMeta, patternMoney, patternOid, patternParameterDefinition, patternPeriod, patternPositiveInt, patternQuantity, patternRange, patternRatio, patternRatioRange, patternReference, patternRelatedArtifact, patternSampledData, patternSignature, patternString, patternTime, patternTiming, patternTriggerDefinition, patternUnsignedInt, patternUri, patternUrl, patternUsageContext, patternUuid may be present for pattern[x]",
					path: [pattern_x_Present[0]],
				});
			}
			validatePrimitiveArrayPair(
				record.alias,
				record._alias,
				"alias",
				"_alias",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.condition,
				record._condition,
				"condition",
				"_condition",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.representation,
				record._representation,
				"representation",
				"_representation",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.valueAlternatives,
				record._valueAlternatives,
				"valueAlternatives",
				"_valueAlternatives",
				ctx,
			);
		});

export const ElementDefinitionSchema =
	ElementDefinitionSchemaInternal as z.ZodType<ElementDefinition>;
