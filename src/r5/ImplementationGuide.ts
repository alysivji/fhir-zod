// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import {
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { ImplementationGuide_Definition } from "./ImplementationGuide_Definition";
import { ImplementationGuide_DefinitionSchemaInternal } from "./ImplementationGuide_Definition";
import type { ImplementationGuide_DependsOn } from "./ImplementationGuide_DependsOn";
import { ImplementationGuide_DependsOnSchemaInternal } from "./ImplementationGuide_DependsOn";
import type { ImplementationGuide_Global } from "./ImplementationGuide_Global";
import { ImplementationGuide_GlobalSchemaInternal } from "./ImplementationGuide_Global";
import type { ImplementationGuide_Manifest } from "./ImplementationGuide_Manifest";
import { ImplementationGuide_ManifestSchemaInternal } from "./ImplementationGuide_Manifest";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface ImplementationGuide extends DomainResource {
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
  copyrightLabel?: string;
  /** Extensions for copyrightLabel */
  _copyrightLabel?: Element;
  /** The date  (and optionally time) when the implementation guide was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** The information needed by an IG publisher tool to publish the whole implementation guide. */
  definition?: ImplementationGuide_Definition;
  /** Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides. */
  dependsOn?: Array<ImplementationGuide_DependsOn>;
  /** A free text natural language description of the implementation guide from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A Boolean value to indicate that this implementation guide is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** The version(s) of the FHIR specification that this ImplementationGuide targets - e.g. describes how to use. The value of this element is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.6.0. for this version. */
  fhirVersion: Array<
    | "0.0"
    | "0.0.80"
    | "0.0.81"
    | "0.0.82"
    | "0.01"
    | "0.05"
    | "0.06"
    | "0.11"
    | "0.4"
    | "0.4.0"
    | "0.5"
    | "0.5.0"
    | "1.0"
    | "1.0.0"
    | "1.0.1"
    | "1.0.2"
    | "1.1"
    | "1.1.0"
    | "1.4"
    | "1.4.0"
    | "1.6"
    | "1.6.0"
    | "1.8"
    | "1.8.0"
    | "3.0"
    | "3.0.0"
    | "3.0.1"
    | "3.0.2"
    | "3.3"
    | "3.3.0"
    | "3.5"
    | "3.5.0"
    | "4.0"
    | "4.0.0"
    | "4.0.1"
    | "4.1"
    | "4.1.0"
    | "4.2"
    | "4.2.0"
    | "4.3"
    | "4.3.0"
    | "4.3.0-cibuild"
    | "4.3.0-snapshot1"
    | "4.4"
    | "4.4.0"
    | "4.5"
    | "4.5.0"
    | "4.6"
    | "4.6.0"
    | "5.0"
    | "5.0.0"
    | "5.0.0-ballot"
    | "5.0.0-cibuild"
    | "5.0.0-draft-final"
    | "5.0.0-snapshot1"
    | "5.0.0-snapshot2"
    | "5.0.0-snapshot3"
    | null
  >;
  /** Extensions for fhirVersion */
  _fhirVersion?: Array<Element | null>;
  /** A set of profiles that all resources covered by this implementation guide must conform to. */
  global?: Array<ImplementationGuide_Global>;
  /** A formal identifier that is used to identify this implementation guide when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** A legal or geographic region in which the implementation guide is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'. */
  license?:
    | "0BSD"
    | "AAL"
    | "Abstyles"
    | "Adobe-2006"
    | "Adobe-Glyph"
    | "ADSL"
    | "AFL-1.1"
    | "AFL-1.2"
    | "AFL-2.0"
    | "AFL-2.1"
    | "AFL-3.0"
    | "Afmparse"
    | "AGPL-1.0-only"
    | "AGPL-1.0-or-later"
    | "AGPL-3.0-only"
    | "AGPL-3.0-or-later"
    | "Aladdin"
    | "AMDPLPA"
    | "AML"
    | "AMPAS"
    | "ANTLR-PD"
    | "Apache-1.0"
    | "Apache-1.1"
    | "Apache-2.0"
    | "APAFML"
    | "APL-1.0"
    | "APSL-1.0"
    | "APSL-1.1"
    | "APSL-1.2"
    | "APSL-2.0"
    | "Artistic-1.0"
    | "Artistic-1.0-cl8"
    | "Artistic-1.0-Perl"
    | "Artistic-2.0"
    | "Bahyph"
    | "Barr"
    | "Beerware"
    | "BitTorrent-1.0"
    | "BitTorrent-1.1"
    | "Borceux"
    | "BSD-1-Clause"
    | "BSD-2-Clause"
    | "BSD-2-Clause-FreeBSD"
    | "BSD-2-Clause-NetBSD"
    | "BSD-2-Clause-Patent"
    | "BSD-3-Clause"
    | "BSD-3-Clause-Attribution"
    | "BSD-3-Clause-Clear"
    | "BSD-3-Clause-LBNL"
    | "BSD-3-Clause-No-Nuclear-License"
    | "BSD-3-Clause-No-Nuclear-License-2014"
    | "BSD-3-Clause-No-Nuclear-Warranty"
    | "BSD-4-Clause"
    | "BSD-4-Clause-UC"
    | "BSD-Protection"
    | "BSD-Source-Code"
    | "BSL-1.0"
    | "bzip2-1.0.5"
    | "bzip2-1.0.6"
    | "Caldera"
    | "CATOSL-1.1"
    | "CC-BY-1.0"
    | "CC-BY-2.0"
    | "CC-BY-2.5"
    | "CC-BY-3.0"
    | "CC-BY-4.0"
    | "CC-BY-NC-1.0"
    | "CC-BY-NC-2.0"
    | "CC-BY-NC-2.5"
    | "CC-BY-NC-3.0"
    | "CC-BY-NC-4.0"
    | "CC-BY-NC-ND-1.0"
    | "CC-BY-NC-ND-2.0"
    | "CC-BY-NC-ND-2.5"
    | "CC-BY-NC-ND-3.0"
    | "CC-BY-NC-ND-4.0"
    | "CC-BY-NC-SA-1.0"
    | "CC-BY-NC-SA-2.0"
    | "CC-BY-NC-SA-2.5"
    | "CC-BY-NC-SA-3.0"
    | "CC-BY-NC-SA-4.0"
    | "CC-BY-ND-1.0"
    | "CC-BY-ND-2.0"
    | "CC-BY-ND-2.5"
    | "CC-BY-ND-3.0"
    | "CC-BY-ND-4.0"
    | "CC-BY-SA-1.0"
    | "CC-BY-SA-2.0"
    | "CC-BY-SA-2.5"
    | "CC-BY-SA-3.0"
    | "CC-BY-SA-4.0"
    | "CC0-1.0"
    | "CDDL-1.0"
    | "CDDL-1.1"
    | "CDLA-Permissive-1.0"
    | "CDLA-Sharing-1.0"
    | "CECILL-1.0"
    | "CECILL-1.1"
    | "CECILL-2.0"
    | "CECILL-2.1"
    | "CECILL-B"
    | "CECILL-C"
    | "ClArtistic"
    | "CNRI-Jython"
    | "CNRI-Python"
    | "CNRI-Python-GPL-Compatible"
    | "Condor-1.1"
    | "CPAL-1.0"
    | "CPL-1.0"
    | "CPOL-1.02"
    | "Crossword"
    | "CrystalStacker"
    | "CUA-OPL-1.0"
    | "Cube"
    | "curl"
    | "D-FSL-1.0"
    | "diffmark"
    | "DOC"
    | "Dotseqn"
    | "DSDP"
    | "dvipdfm"
    | "ECL-1.0"
    | "ECL-2.0"
    | "EFL-1.0"
    | "EFL-2.0"
    | "eGenix"
    | "Entessa"
    | "EPL-1.0"
    | "EPL-2.0"
    | "ErlPL-1.1"
    | "EUDatagrid"
    | "EUPL-1.0"
    | "EUPL-1.1"
    | "EUPL-1.2"
    | "Eurosym"
    | "Fair"
    | "Frameworx-1.0"
    | "FreeImage"
    | "FSFAP"
    | "FSFUL"
    | "FSFULLR"
    | "FTL"
    | "GFDL-1.1-only"
    | "GFDL-1.1-or-later"
    | "GFDL-1.2-only"
    | "GFDL-1.2-or-later"
    | "GFDL-1.3-only"
    | "GFDL-1.3-or-later"
    | "Giftware"
    | "GL2PS"
    | "Glide"
    | "Glulxe"
    | "gnuplot"
    | "GPL-1.0-only"
    | "GPL-1.0-or-later"
    | "GPL-2.0-only"
    | "GPL-2.0-or-later"
    | "GPL-3.0-only"
    | "GPL-3.0-or-later"
    | "gSOAP-1.3b"
    | "HaskellReport"
    | "HPND"
    | "IBM-pibs"
    | "ICU"
    | "IJG"
    | "ImageMagick"
    | "iMatix"
    | "Imlib2"
    | "Info-ZIP"
    | "Intel"
    | "Intel-ACPI"
    | "Interbase-1.0"
    | "IPA"
    | "IPL-1.0"
    | "ISC"
    | "JasPer-2.0"
    | "JSON"
    | "LAL-1.2"
    | "LAL-1.3"
    | "Latex2e"
    | "Leptonica"
    | "LGPL-2.0-only"
    | "LGPL-2.0-or-later"
    | "LGPL-2.1-only"
    | "LGPL-2.1-or-later"
    | "LGPL-3.0-only"
    | "LGPL-3.0-or-later"
    | "LGPLLR"
    | "Libpng"
    | "libtiff"
    | "LiLiQ-P-1.1"
    | "LiLiQ-R-1.1"
    | "LiLiQ-Rplus-1.1"
    | "Linux-OpenIB"
    | "LPL-1.0"
    | "LPL-1.02"
    | "LPPL-1.0"
    | "LPPL-1.1"
    | "LPPL-1.2"
    | "LPPL-1.3a"
    | "LPPL-1.3c"
    | "MakeIndex"
    | "MirOS"
    | "MIT"
    | "MIT-0"
    | "MIT-advertising"
    | "MIT-CMU"
    | "MIT-enna"
    | "MIT-feh"
    | "MITNFA"
    | "Motosoto"
    | "mpich2"
    | "MPL-1.0"
    | "MPL-1.1"
    | "MPL-2.0"
    | "MPL-2.0-no-copyleft-exception"
    | "MS-PL"
    | "MS-RL"
    | "MTLL"
    | "Multics"
    | "Mup"
    | "NASA-1.3"
    | "Naumen"
    | "NBPL-1.0"
    | "NCSA"
    | "Net-SNMP"
    | "NetCDF"
    | "Newsletr"
    | "NGPL"
    | "NLOD-1.0"
    | "NLPL"
    | "Nokia"
    | "NOSL"
    | "not-open-source"
    | "Noweb"
    | "NPL-1.0"
    | "NPL-1.1"
    | "NPOSL-3.0"
    | "NRL"
    | "NTP"
    | "OCCT-PL"
    | "OCLC-2.0"
    | "ODbL-1.0"
    | "OFL-1.0"
    | "OFL-1.1"
    | "OGTSL"
    | "OLDAP-1.1"
    | "OLDAP-1.2"
    | "OLDAP-1.3"
    | "OLDAP-1.4"
    | "OLDAP-2.0"
    | "OLDAP-2.0.1"
    | "OLDAP-2.1"
    | "OLDAP-2.2"
    | "OLDAP-2.2.1"
    | "OLDAP-2.2.2"
    | "OLDAP-2.3"
    | "OLDAP-2.4"
    | "OLDAP-2.5"
    | "OLDAP-2.6"
    | "OLDAP-2.7"
    | "OLDAP-2.8"
    | "OML"
    | "OpenSSL"
    | "OPL-1.0"
    | "OSET-PL-2.1"
    | "OSL-1.0"
    | "OSL-1.1"
    | "OSL-2.0"
    | "OSL-2.1"
    | "OSL-3.0"
    | "PDDL-1.0"
    | "PHP-3.0"
    | "PHP-3.01"
    | "Plexus"
    | "PostgreSQL"
    | "psfrag"
    | "psutils"
    | "Python-2.0"
    | "Qhull"
    | "QPL-1.0"
    | "Rdisc"
    | "RHeCos-1.1"
    | "RPL-1.1"
    | "RPL-1.5"
    | "RPSL-1.0"
    | "RSA-MD"
    | "RSCPL"
    | "Ruby"
    | "SAX-PD"
    | "Saxpath"
    | "SCEA"
    | "Sendmail"
    | "SGI-B-1.0"
    | "SGI-B-1.1"
    | "SGI-B-2.0"
    | "SimPL-2.0"
    | "SISSL"
    | "SISSL-1.2"
    | "Sleepycat"
    | "SMLNJ"
    | "SMPPL"
    | "SNIA"
    | "Spencer-86"
    | "Spencer-94"
    | "Spencer-99"
    | "SPL-1.0"
    | "SugarCRM-1.1.3"
    | "SWL"
    | "TCL"
    | "TCP-wrappers"
    | "TMate"
    | "TORQUE-1.1"
    | "TOSL"
    | "Unicode-DFS-2015"
    | "Unicode-DFS-2016"
    | "Unicode-TOU"
    | "Unlicense"
    | "UPL-1.0"
    | "Vim"
    | "VOSTROM"
    | "VSL-1.0"
    | "W3C"
    | "W3C-19980720"
    | "W3C-20150513"
    | "Watcom-1.0"
    | "Wsuipa"
    | "WTFPL"
    | "X11"
    | "Xerox"
    | "XFree86-1.1"
    | "xinetd"
    | "Xnet"
    | "xpp"
    | "XSkat"
    | "YPL-1.0"
    | "YPL-1.1"
    | "Zed"
    | "Zend-2.0"
    | "Zimbra-1.3"
    | "Zimbra-1.4"
    | "Zlib"
    | "zlib-acknowledgement"
    | "ZPL-1.1"
    | "ZPL-2.0"
    | "ZPL-2.1";
  /** Extensions for license */
  _license?: Element;
  /** Information about an assembled implementation guide, created by the publication tooling. */
  manifest?: ImplementationGuide_Manifest;
  /** A natural language name identifying the implementation guide. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** The NPM package name for this Implementation Guide, used in the NPM package distribution, which is the primary mechanism by which FHIR based tooling manages IG dependencies. This value must be globally unique, and should be assigned with care. */
  packageId: string;
  /** Extensions for packageId */
  _packageId?: Element;
  /** The name of the organization or individual responsible for the release and ongoing maintenance of the implementation guide. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explanation of why this implementation guide is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** This is a ImplementationGuide resource. */
  resourceType: "ImplementationGuide";
  /** The status of this implementation guide. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** A short, descriptive, user-friendly title for the implementation guide. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** An absolute URI that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this implementation guide is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the implementation guide is stored on different servers. */
  url: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate implementation guide instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the implementation guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the implementation guide author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
  /** Indicates the mechanism used to compare versions to determine which is more current. */
  versionAlgorithmCoding?: Coding;
  /** Indicates the mechanism used to compare versions to determine which is more current. */
  versionAlgorithmString?: string;
  /** Extensions for versionAlgorithmString */
  _versionAlgorithmString?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getImplementationGuide_DefinitionSchema =
  (): z.ZodType<ImplementationGuide_Definition> =>
    ImplementationGuide_DefinitionSchemaInternal as z.ZodType<ImplementationGuide_Definition>;
const getImplementationGuide_DependsOnSchema =
  (): z.ZodType<ImplementationGuide_DependsOn> =>
    ImplementationGuide_DependsOnSchemaInternal as z.ZodType<ImplementationGuide_DependsOn>;
const getImplementationGuide_GlobalSchema =
  (): z.ZodType<ImplementationGuide_Global> =>
    ImplementationGuide_GlobalSchemaInternal as z.ZodType<ImplementationGuide_Global>;
const getImplementationGuide_ManifestSchema =
  (): z.ZodType<ImplementationGuide_Manifest> =>
    ImplementationGuide_ManifestSchemaInternal as z.ZodType<ImplementationGuide_Manifest>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const ImplementationGuideSchemaInternal =
  DomainResourceSchemaInternal.extend({
    contact: z.lazy(getContactDetailSchema).array().optional(),
    copyright: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    copyrightLabel: fhirString().optional(),
    _copyrightLabel: z.lazy(getElementSchema).optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    definition: z.lazy(getImplementationGuide_DefinitionSchema).optional(),
    dependsOn: z
      .lazy(getImplementationGuide_DependsOnSchema)
      .array()
      .optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    fhirVersion: z
      .enum([
        "0.0",
        "0.0.80",
        "0.0.81",
        "0.0.82",
        "0.01",
        "0.05",
        "0.06",
        "0.11",
        "0.4",
        "0.4.0",
        "0.5",
        "0.5.0",
        "1.0",
        "1.0.0",
        "1.0.1",
        "1.0.2",
        "1.1",
        "1.1.0",
        "1.4",
        "1.4.0",
        "1.6",
        "1.6.0",
        "1.8",
        "1.8.0",
        "3.0",
        "3.0.0",
        "3.0.1",
        "3.0.2",
        "3.3",
        "3.3.0",
        "3.5",
        "3.5.0",
        "4.0",
        "4.0.0",
        "4.0.1",
        "4.1",
        "4.1.0",
        "4.2",
        "4.2.0",
        "4.3",
        "4.3.0",
        "4.3.0-cibuild",
        "4.3.0-snapshot1",
        "4.4",
        "4.4.0",
        "4.5",
        "4.5.0",
        "4.6",
        "4.6.0",
        "5.0",
        "5.0.0",
        "5.0.0-ballot",
        "5.0.0-cibuild",
        "5.0.0-draft-final",
        "5.0.0-snapshot1",
        "5.0.0-snapshot2",
        "5.0.0-snapshot3",
      ])
      .nullable()
      .array(),
    _fhirVersion: z.lazy(getElementSchema).nullable().array().optional(),
    global: z.lazy(getImplementationGuide_GlobalSchema).array().optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    license: z
      .enum([
        "0BSD",
        "AAL",
        "Abstyles",
        "Adobe-2006",
        "Adobe-Glyph",
        "ADSL",
        "AFL-1.1",
        "AFL-1.2",
        "AFL-2.0",
        "AFL-2.1",
        "AFL-3.0",
        "Afmparse",
        "AGPL-1.0-only",
        "AGPL-1.0-or-later",
        "AGPL-3.0-only",
        "AGPL-3.0-or-later",
        "Aladdin",
        "AMDPLPA",
        "AML",
        "AMPAS",
        "ANTLR-PD",
        "Apache-1.0",
        "Apache-1.1",
        "Apache-2.0",
        "APAFML",
        "APL-1.0",
        "APSL-1.0",
        "APSL-1.1",
        "APSL-1.2",
        "APSL-2.0",
        "Artistic-1.0",
        "Artistic-1.0-cl8",
        "Artistic-1.0-Perl",
        "Artistic-2.0",
        "Bahyph",
        "Barr",
        "Beerware",
        "BitTorrent-1.0",
        "BitTorrent-1.1",
        "Borceux",
        "BSD-1-Clause",
        "BSD-2-Clause",
        "BSD-2-Clause-FreeBSD",
        "BSD-2-Clause-NetBSD",
        "BSD-2-Clause-Patent",
        "BSD-3-Clause",
        "BSD-3-Clause-Attribution",
        "BSD-3-Clause-Clear",
        "BSD-3-Clause-LBNL",
        "BSD-3-Clause-No-Nuclear-License",
        "BSD-3-Clause-No-Nuclear-License-2014",
        "BSD-3-Clause-No-Nuclear-Warranty",
        "BSD-4-Clause",
        "BSD-4-Clause-UC",
        "BSD-Protection",
        "BSD-Source-Code",
        "BSL-1.0",
        "bzip2-1.0.5",
        "bzip2-1.0.6",
        "Caldera",
        "CATOSL-1.1",
        "CC-BY-1.0",
        "CC-BY-2.0",
        "CC-BY-2.5",
        "CC-BY-3.0",
        "CC-BY-4.0",
        "CC-BY-NC-1.0",
        "CC-BY-NC-2.0",
        "CC-BY-NC-2.5",
        "CC-BY-NC-3.0",
        "CC-BY-NC-4.0",
        "CC-BY-NC-ND-1.0",
        "CC-BY-NC-ND-2.0",
        "CC-BY-NC-ND-2.5",
        "CC-BY-NC-ND-3.0",
        "CC-BY-NC-ND-4.0",
        "CC-BY-NC-SA-1.0",
        "CC-BY-NC-SA-2.0",
        "CC-BY-NC-SA-2.5",
        "CC-BY-NC-SA-3.0",
        "CC-BY-NC-SA-4.0",
        "CC-BY-ND-1.0",
        "CC-BY-ND-2.0",
        "CC-BY-ND-2.5",
        "CC-BY-ND-3.0",
        "CC-BY-ND-4.0",
        "CC-BY-SA-1.0",
        "CC-BY-SA-2.0",
        "CC-BY-SA-2.5",
        "CC-BY-SA-3.0",
        "CC-BY-SA-4.0",
        "CC0-1.0",
        "CDDL-1.0",
        "CDDL-1.1",
        "CDLA-Permissive-1.0",
        "CDLA-Sharing-1.0",
        "CECILL-1.0",
        "CECILL-1.1",
        "CECILL-2.0",
        "CECILL-2.1",
        "CECILL-B",
        "CECILL-C",
        "ClArtistic",
        "CNRI-Jython",
        "CNRI-Python",
        "CNRI-Python-GPL-Compatible",
        "Condor-1.1",
        "CPAL-1.0",
        "CPL-1.0",
        "CPOL-1.02",
        "Crossword",
        "CrystalStacker",
        "CUA-OPL-1.0",
        "Cube",
        "curl",
        "D-FSL-1.0",
        "diffmark",
        "DOC",
        "Dotseqn",
        "DSDP",
        "dvipdfm",
        "ECL-1.0",
        "ECL-2.0",
        "EFL-1.0",
        "EFL-2.0",
        "eGenix",
        "Entessa",
        "EPL-1.0",
        "EPL-2.0",
        "ErlPL-1.1",
        "EUDatagrid",
        "EUPL-1.0",
        "EUPL-1.1",
        "EUPL-1.2",
        "Eurosym",
        "Fair",
        "Frameworx-1.0",
        "FreeImage",
        "FSFAP",
        "FSFUL",
        "FSFULLR",
        "FTL",
        "GFDL-1.1-only",
        "GFDL-1.1-or-later",
        "GFDL-1.2-only",
        "GFDL-1.2-or-later",
        "GFDL-1.3-only",
        "GFDL-1.3-or-later",
        "Giftware",
        "GL2PS",
        "Glide",
        "Glulxe",
        "gnuplot",
        "GPL-1.0-only",
        "GPL-1.0-or-later",
        "GPL-2.0-only",
        "GPL-2.0-or-later",
        "GPL-3.0-only",
        "GPL-3.0-or-later",
        "gSOAP-1.3b",
        "HaskellReport",
        "HPND",
        "IBM-pibs",
        "ICU",
        "IJG",
        "ImageMagick",
        "iMatix",
        "Imlib2",
        "Info-ZIP",
        "Intel",
        "Intel-ACPI",
        "Interbase-1.0",
        "IPA",
        "IPL-1.0",
        "ISC",
        "JasPer-2.0",
        "JSON",
        "LAL-1.2",
        "LAL-1.3",
        "Latex2e",
        "Leptonica",
        "LGPL-2.0-only",
        "LGPL-2.0-or-later",
        "LGPL-2.1-only",
        "LGPL-2.1-or-later",
        "LGPL-3.0-only",
        "LGPL-3.0-or-later",
        "LGPLLR",
        "Libpng",
        "libtiff",
        "LiLiQ-P-1.1",
        "LiLiQ-R-1.1",
        "LiLiQ-Rplus-1.1",
        "Linux-OpenIB",
        "LPL-1.0",
        "LPL-1.02",
        "LPPL-1.0",
        "LPPL-1.1",
        "LPPL-1.2",
        "LPPL-1.3a",
        "LPPL-1.3c",
        "MakeIndex",
        "MirOS",
        "MIT",
        "MIT-0",
        "MIT-advertising",
        "MIT-CMU",
        "MIT-enna",
        "MIT-feh",
        "MITNFA",
        "Motosoto",
        "mpich2",
        "MPL-1.0",
        "MPL-1.1",
        "MPL-2.0",
        "MPL-2.0-no-copyleft-exception",
        "MS-PL",
        "MS-RL",
        "MTLL",
        "Multics",
        "Mup",
        "NASA-1.3",
        "Naumen",
        "NBPL-1.0",
        "NCSA",
        "Net-SNMP",
        "NetCDF",
        "Newsletr",
        "NGPL",
        "NLOD-1.0",
        "NLPL",
        "Nokia",
        "NOSL",
        "not-open-source",
        "Noweb",
        "NPL-1.0",
        "NPL-1.1",
        "NPOSL-3.0",
        "NRL",
        "NTP",
        "OCCT-PL",
        "OCLC-2.0",
        "ODbL-1.0",
        "OFL-1.0",
        "OFL-1.1",
        "OGTSL",
        "OLDAP-1.1",
        "OLDAP-1.2",
        "OLDAP-1.3",
        "OLDAP-1.4",
        "OLDAP-2.0",
        "OLDAP-2.0.1",
        "OLDAP-2.1",
        "OLDAP-2.2",
        "OLDAP-2.2.1",
        "OLDAP-2.2.2",
        "OLDAP-2.3",
        "OLDAP-2.4",
        "OLDAP-2.5",
        "OLDAP-2.6",
        "OLDAP-2.7",
        "OLDAP-2.8",
        "OML",
        "OpenSSL",
        "OPL-1.0",
        "OSET-PL-2.1",
        "OSL-1.0",
        "OSL-1.1",
        "OSL-2.0",
        "OSL-2.1",
        "OSL-3.0",
        "PDDL-1.0",
        "PHP-3.0",
        "PHP-3.01",
        "Plexus",
        "PostgreSQL",
        "psfrag",
        "psutils",
        "Python-2.0",
        "Qhull",
        "QPL-1.0",
        "Rdisc",
        "RHeCos-1.1",
        "RPL-1.1",
        "RPL-1.5",
        "RPSL-1.0",
        "RSA-MD",
        "RSCPL",
        "Ruby",
        "SAX-PD",
        "Saxpath",
        "SCEA",
        "Sendmail",
        "SGI-B-1.0",
        "SGI-B-1.1",
        "SGI-B-2.0",
        "SimPL-2.0",
        "SISSL",
        "SISSL-1.2",
        "Sleepycat",
        "SMLNJ",
        "SMPPL",
        "SNIA",
        "Spencer-86",
        "Spencer-94",
        "Spencer-99",
        "SPL-1.0",
        "SugarCRM-1.1.3",
        "SWL",
        "TCL",
        "TCP-wrappers",
        "TMate",
        "TORQUE-1.1",
        "TOSL",
        "Unicode-DFS-2015",
        "Unicode-DFS-2016",
        "Unicode-TOU",
        "Unlicense",
        "UPL-1.0",
        "Vim",
        "VOSTROM",
        "VSL-1.0",
        "W3C",
        "W3C-19980720",
        "W3C-20150513",
        "Watcom-1.0",
        "Wsuipa",
        "WTFPL",
        "X11",
        "Xerox",
        "XFree86-1.1",
        "xinetd",
        "Xnet",
        "xpp",
        "XSkat",
        "YPL-1.0",
        "YPL-1.1",
        "Zed",
        "Zend-2.0",
        "Zimbra-1.3",
        "Zimbra-1.4",
        "Zlib",
        "zlib-acknowledgement",
        "ZPL-1.1",
        "ZPL-2.0",
        "ZPL-2.1",
      ])
      .optional(),
    _license: z.lazy(getElementSchema).optional(),
    manifest: z.lazy(getImplementationGuide_ManifestSchema).optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    packageId: fhirId(),
    _packageId: z.lazy(getElementSchema).optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("ImplementationGuide"),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    url: fhirUri(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
    versionAlgorithmCoding: z.lazy(getCodingSchema).optional(),
    versionAlgorithmString: fhirString().optional(),
    _versionAlgorithmString: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const versionAlgorithm_x_Present = [
        "versionAlgorithmCoding",
        "versionAlgorithmString",
      ].filter((field) => record[field] !== undefined);
      if (versionAlgorithm_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of versionAlgorithmCoding, versionAlgorithmString may be present for versionAlgorithm[x]",
          path: [versionAlgorithm_x_Present[0]],
        });
      }
      validatePrimitiveArrayPair(
        record.fhirVersion,
        record._fhirVersion,
        "fhirVersion",
        "_fhirVersion",
        ctx,
      );
    });

export const ImplementationGuideSchema =
  ImplementationGuideSchemaInternal as z.ZodType<ImplementationGuide>;
